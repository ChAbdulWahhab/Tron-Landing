import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start'
      ],
    },
    {
      type: 'category',
      label: 'User guide',
      items: [
        'user-guide/running-a-scan',
        'user-guide/results-and-scores',
        'user-guide/archives-and-export',
        'user-guide/menus-and-shortcuts',
        'user-guide/site-vs-tool',
        'user-guide/security-and-ssl',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/environment-variables',
        'reference/results-json',
        'reference/test-catalog',
        'reference/tests/performance',
        'reference/tests/security',
        'reference/tests/seo',
        'reference/tests/accessibility',
        'reference/tests/links',
        'reference/tests/content',
        'reference/tests/mobile',
        'reference/tests/infrastructure',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/privacy-and-data',
        'operations/updates',
        'operations/troubleshooting',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'Developer',
      items: [
        'developer/build-from-source',
        'developer/pytest-cli',
        'developer/deployment',
      ],
    },
  ],
};

export default sidebars;
