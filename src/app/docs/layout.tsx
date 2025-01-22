import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import 'fumadocs-ui/style.css';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='mt-[-30px]'>

      <DocsLayout tree={source.pageTree} {...baseOptions} githubUrl='https://github.com/Kinf123'>
        {children}
      </DocsLayout>
    </div>
  );
}