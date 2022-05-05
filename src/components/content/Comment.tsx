import { Giscus, Theme } from '@giscus/react';
import { useTheme } from 'next-themes';

import { commentFlag } from '@/constants/env';

export default function Comment() {
  const { theme } = useTheme();

  return commentFlag ? (
    <Giscus
      key={theme}
      repo='cryptopal85/e-portfolio'
      repoId='R_kgDOHQjojQ'
      category='General'
      categoryId='DIC_kwDOHQjojc4CO8HV'
      mapping='pathname'
      reactionsEnabled='0'
      emitMetadata='0'
      theme={theme as Theme}
    />
  ) : null;
}
