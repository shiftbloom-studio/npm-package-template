# @npm-package-template

Template repository for an npm package (TypeScript + tsup + Jest + ESLint + Changesets + GitHub Actions).

## Quick start

```bash
npm ci
npm test
npm run build
```

## First evening

This repository is a template. Click **Use this template** (or fork it) to create your package repository; do not clone this repository to publish the template itself.

Before the first publish, rename the package and repository placeholders in `package.json`, update `.changeset/config.json`, and replace the placeholder `LICENSE` attribution. Then verify the setup:

```bash
npm ci && npm test && npm run build
```

## Customize

Work top to bottom; the whole list is one sitting. Every item below contains a
placeholder that ships with the template, so nothing here is optional guesswork -
if you skip one, the string `your-org`, `your-scope`, `YEAR` or `TODO` is
still somewhere in your package.

**Identity**

- [ ] `package.json` - `name` (`@your-scope/your-package`), `description`
      (`TODO: describe your package`), `keywords`, `author`
- [ ] `package.json` - `homepage`, `bugs.url`, `repository.url`: all three point
      at `your-org/your-repo`
- [ ] `.changeset/config.json` - `changelog[1].repo`, also `your-org/your-repo`
- [ ] `LICENSE` - `Copyright (c) YEAR YOUR_NAME`. Keep it consistent with
      `license` in `package.json` if you switch away from MIT
- [ ] `.github/ISSUE_TEMPLATE/bug_report.md` - the `@your-scope/your-package`
      line in the environment block

**Your code**

- [ ] `src/index.ts` - the main entrypoint. It exports a placeholder constant
      `TEMPLATE_PACKAGE_NAME`; replace the file with your implementation
- [ ] `tests/index.test.ts` - asserts on that placeholder constant, so it fails
      the moment you delete it. Replace it alongside `src/index.ts`
- [ ] `src/server.ts` - an optional second entrypoint, published as
      `<pkg>/server`. **If you do not need it, removing the file is not
      enough** - also drop the `./server` block from `exports` in
      `package.json` and the second config object in `tsup.config.ts`, or the
      build fails on a missing entry
- [ ] `package.json` - `exports`, `main`, `module`, `types` only need editing if
      you change entrypoint names or add a third

**Publishing**

- [ ] Publish the very first version by hand (`npm publish --access public`
      after `npm login`), because npm only lets you add a trusted publisher
      to a package that already exists
- [ ] On npmjs.com, open the package → **Settings** → **Trusted publishing**,
      choose **GitHub Actions** and enter your organization, repository and
      the workflow file name `release.yml` (leave the environment empty).
      After that, the Release workflow publishes through OIDC with
      provenance, and no npm token is needed in the repository
- [ ] `package.json` - `publishConfig.access` is `public`; set it to
      `restricted` for a private scoped package
- [ ] Check `engines.node` (`>=24`) still matches what you intend to support

Then run `npm run lint`, `npm run typecheck`, `npm test` and `npm run build`
once before your first release.


## Release (Changesets)

- Add a changeset: `npm run changeset`
- On push to `main`, the Release workflow creates or updates a "version packages" PR. Merging it publishes to npm through trusted publishing, with provenance.

