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

Update:

- `package.json`: `name`, `description`, `repository`, `homepage`, `bugs`, `license`, `exports`
- `.changeset/config.json`: `repo`

## Release (Changesets)

- Add a changeset: `npm run changeset`
- On push to `main`, the Release workflow will create a version PR or publish after merge (requires repo secret `NPM_TOKEN` or `NODE_AUTH_TOKEN`).

