module.exports = {
  extends: ['next/babel', 'next/core-web-vitals', 'prettier'],
  settings: {
    next: {
      // REF: (nus3) https://nextjs.org/docs/basic-features/eslint#rootdir
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {},
};
