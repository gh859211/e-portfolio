import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Gürkan is a security & risk professional who works in the Cybersecurity
        field and is passionate about | Crypto | Blockchain | Cybersecurity | Risk
        Management | Privacy'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Gürkan</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-36 rounded-full md:w-72'
                publicId='e-portfolio/gh-black-digitised-cropped_oyayoj'
                width='1502'
                height='1502'
                alt='Photo of me'
                preview={false}
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Gürkan. I started working at IBM in February 2009 -
                  I worked as a technical and customer services representative
                  for around one year before stepping into the InfoSec field.
                  Stepping into the InfoSec field dramatically changed the way I
                  work and helped me develop different traits and habits :-) -
                  Right now, I am working as a Senior Manager covering
                  Information Security, Cybersecurity and Risk Management
                  domains. You can find more details about my career progression
                  in the{' '}
                  <CustomLink href='/blog/career-timeline'>
                    career timeline
                  </CustomLink>{' '}
                </p>
                <p data-fade='4'>
                  There are a lot of things and technologies to learn in the
                  Cybersecurity and I am motivated to learn as much as possible.
                  I enjoy learning something new and getting feedback to make
                  myself better and improve.
                </p>
                <p data-fade='5'>
                  In this website I will be writing some blogs and showcase my
                  projects and MSc studies. I believe that writing what I have
                  learned is the best way to remember things, and I can share my
                  knowledge along the way.
                </p>
              </article>
              <h3 className='mt-12'>
                Favorite Tech Stack | Skills | Knowledge
              </h3>
              <figure className='mt-2'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout py-6'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Do contact me if you need my opinion concerning InfoSec matters,
                especially standards/frameworks. I’ll do my best! (find my email
                in the footer)
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
