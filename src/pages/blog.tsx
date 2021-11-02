import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import { sortByDate, sortDateFn } from '@/lib/mdx-client';

import Accent from '@/components/Accent';
import BlogCard from '@/components/blog/BlogCard';
import Button from '@/components/buttons/Button';
import StyledInput from '@/components/form/StyledInput';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SortListbox from '@/components/SortListbox';

import { FrontMatterType } from '@/types/content';

export type SortOption = {
  id: string;
  name: string;
};

const sortOptions: Array<SortOption> = [
  {
    id: 'date',
    name: 'Sort by date',
  },
  { id: 'views', name: 'Sort by views' },
];

export default function IndexPage({
  posts,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sortOrder, setSortOrder] = React.useState<SortOption>(sortOptions[0]);
  const [isEnglish, setIsEnglish] = React.useState<boolean>(true);

  //#region  //*=========== Search ===========
  const [search, setSearch] = React.useState<string>('');
  const [filteredPosts, setFilteredPosts] = React.useState<
    Array<FrontMatterType>
  >(() => [...posts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const results = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase()) ||
          post.tags.includes(search.toLowerCase())
      );

      if (sortOrder.id === 'date') {
        results.sort(sortDateFn);
      }
      // } else if (sortOrder.id === 'views') {
      //   results.sort((a, b) => a?.views < b?.views);
      // }

      setFilteredPosts(results);
    }, 200);

    return () => clearTimeout(timer);
  }, [search, posts, sortOrder.id]);
  //#endregion  //*======== Search ===========

  //#region  //*=========== Post Language Splitter ===========
  const englishPosts = filteredPosts.filter((p) => !p.slug.startsWith('id-'));
  const bahasaPosts = filteredPosts.filter((p) => p.slug.startsWith('id-'));
  const currentPosts = isEnglish ? englishPosts : bahasaPosts;
  //#endregion  //*======== Post Language Splitter ===========

  return (
    <Layout>
      <Seo templateTitle='Blog' />

      <main>
        <section>
          <div className='py-12 layout'>
            <h1>
              <Accent>Blog {!isEnglish && 'Bahasa Indonesia'}</Accent>
            </h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
              Thoughts and tutorials about Front-end Development
            </p>
            <StyledInput
              className='mt-4'
              placeholder='Search...'
              onChange={handleSearch}
              type='text'
            />
            <p className='mt-2 text-xs text-gray-600 dark:text-gray-300'>
              Try something like {tags.join(', ')}
            </p>
            <div className='flex flex-col gap-4 !mt-8 z-10 items-end relative md:items-center text-gray-600 dark:text-gray-300 md:flex-row md:justify-between'>
              <Button
                onClick={() => setIsEnglish((b) => !b)}
                className='text-sm !font-medium'
              >
                Read in {isEnglish ? 'Bahasa Indonesia' : 'English'}
              </Button>
              <SortListbox
                selected={sortOrder}
                setSelected={setSortOrder}
                options={sortOptions}
              />
            </div>
            <ul className='grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))
              ) : (
                <EmptyBlog />
              )}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function EmptyBlog() {
  return (
    <h2 className='mt-8 text-center sm:col-span-2 xl:col-span-3'>
      <Accent>Sorry, not found :(</Accent>
    </h2>
  );
}

export async function getStaticProps() {
  const files = await getAllFilesFrontMatter('blog');
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = posts.reduce(
    (accTags: string[], post) => [...accTags, ...post.tags.split(',')],
    []
  );
  const cleanTags = Array.from(new Set(tags));

  return { props: { posts, tags: cleanTags } };
}