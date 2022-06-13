import clsx from 'clsx';
import * as React from 'react';
import {
  GiRadarSweep,
} from 'react-icons/gi';
import {
  IoLogoVercel,
  IoSkullOutline,
} from 'react-icons/io5';
import {
  SiDigitalocean,
  SiEclipsemosquitto,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiPython,
  SiReact,
  SiRedux,
  SiRoamresearch,
  SiSass,
  SiSmartthings,
  SiTailwindcss,
  SiTypescript,
  SiZapier,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} content={<p>{current.name}</p>}>
            <li className='text-xl text-gray-700 dark:text-gray-200'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  python: {
    icon: SiPython,
    name: 'Python',
  },
  nessus: {
    icon: GiRadarSweep,
    name: 'Nessus',
  },
  zap: {
    icon: SiZapier,
    name: 'Zap Proxy',
  },
  research: {
    icon: SiRoamresearch,
    name: 'Research',
  },
  risk: {
    icon: IoSkullOutline,
    name: 'Risk Management'
  },
  flask: {
    icon: SiFlask,
    name: 'Flask'
  },
  mysql: {
    icon: SiMysql,
    name: 'MySql'
  },
  nginx: {
    icon: SiNginx,
    name: 'Nginx'
  },
  digitalocean: {
    icon: SiDigitalocean,
    name: 'Digital Ocean'
  },
  html: {
    icon: SiHtml5,
    name: 'HTML'
  },
  mqtt: {
    icon: SiSmartthings,
    name: 'MQTT Protocol'
  },
  mosquitto: {
    icon: SiEclipsemosquitto,
    name: 'Mosquitto Broker'
  },
};
