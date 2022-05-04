import clsx from 'clsx';
import * as React from 'react';
import { GiRadarSweep } from 'react-icons/gi';
import { IoLogoVercel, IoSkullOutline } from 'react-icons/io5';
import {
  SiBulma,
  SiFlask,
  SiHtml5,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiRoamresearch,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <>
        <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently my
        go-to framework because of the static generation, dynamic paths, and
        built-in api.
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        <CustomLink href='https://reactjs.org/'>Create React App</CustomLink>,
        first frontend framework that I learned, great if you are making an
        authenticated website.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>
          TypeScript
        </CustomLink>
        , finally jumping on this one, I love the experience!
      </>
    ),
  },
  {
    id: 'python',
    icon: SiPython,
    tooltip: (
      <>
        <CustomLink href='https://www.python.org'>Python</CustomLink> is
        awesome, solid general-purpose programming language. Make sure to get
        virtualenv and pyenv before downloading{' '}
        <CustomLink href='https://www.python.org/downloads'>binary</CustomLink>.
      </>
    ),
  },
  {
    id: 'flask',
    icon: SiFlask,
    tooltip: (
      <>
        <CustomLink href='https://flask.palletsprojects.com'>Flask</CustomLink>{' '}
        is a micro web framework written in Python. It is classified as a
        microframework because it does not require particular tools or libraries
        - grab it{' '}
        <CustomLink href='https://flask.palletsprojects.com/en/2.1.x/installation'>
          here
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'html',
    icon: SiHtml5,
    tooltip: (
      <>
        <CustomLink href='https://whatwg.org'>HTML</CustomLink> is the standard
        markup language for documents designed to be displayed in a web browser
        - grab it{' '}
        <CustomLink href='sorry you cannot'>oh no you cannot!</CustomLink>.
      </>
    ),
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: (
      <>
        <CustomLink href='https://tailwindcss.com/'>Tailwind CSS</CustomLink> is
        awesome, I have never achieved this much reusability. Make sure you get
        the{' '}
        <CustomLink href='https://extensions.panic.com/extensions/jasonplatts/jasonplatts.tailwindcss/'>
          extension
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'bulma',
    icon: SiBulma,
    tooltip: (
      <>
        <CustomLink href='https://bulma.io'>Bulma</CustomLink> is a free, open
        source framework that provides ready-to-use frontend components that you
        can easily combine to build responsive web interfaces - grab it{' '}
        <CustomLink href='https://bulma.io/documentation/overview/start'>
          here
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'vercel',
    icon: IoLogoVercel,
    tooltip: (
      <>
        <CustomLink href='https://swr.vercel.app/'>SWR by Vercel</CustomLink>,
        great react hooks for data fetching and caching, the{' '}
        <CustomLink href='https://swr.vercel.app/docs/revalidation#revalidate-on-focus'>
          revalidate on focus
        </CustomLink>{' '}
        is unreal. react-query is also a great alternative to this.
      </>
    ),
  },
  {
    id: 'nessus',
    icon: GiRadarSweep,
    tooltip: (
      <>
        <CustomLink href='https://www.tenable.com'>Nessus</CustomLink> is a
        proprietary vulnerability scanner developed by Tenable, Inc. always
        competes with Rapid7 - grab it{' '}
        <CustomLink href='https://www.tenable.com/products/nessus/nessus-professional'>
          here
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'research',
    icon: SiRoamresearch,
    tooltip: (
      <>
        <CustomLink href=''>Research</CustomLink> sorry you need to develop this
        on your own! - grab it{' '}
        <CustomLink href=''>oh no you cannot!</CustomLink>.
      </>
    ),
  },
  {
    id: 'risk',
    icon: IoSkullOutline,
    tooltip: (
      <>
        <CustomLink href=''>Risk Management</CustomLink> sorry you need to
        develop this on your own! - grab it{' '}
        <CustomLink href=''>oh no you cannot!</CustomLink>.
      </>
    ),
  },
];
