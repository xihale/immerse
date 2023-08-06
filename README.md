![Build&Deploy](https://github.com/xihale/immerse/actions/workflows/build-deploy.yml/badge.svg)

# TODO
- [ ] Finish music play(light music)
- [ ] Finish the hint block(between the two btn on the main page)
- [ ] Translate to more languages

# Build & Deploy
## Modify the router you want
1. `src/index.tsx` > `basename`
2. `vite.config.ts` > `base`
If you deploy it in root, just turn the path to '/' or ''

# To be contributors
1. ALL source in `src` and assist base on you, just be comfortable(you can add `d.ts` then import what you want to use)
2. The components in the `src/components`, if you have better design idea, take a issue or pr!
3. `i18n` is in `src/i18n`, just add your lang and add some words refer ahead in the `translations.json`.

# reference project
[StudyWithMiku](https://github.com/WenqiOfficial/StudyWithMiku)

# Thanks
## Dependence (It's will keep the latest, please find these in package.json)
1. i18next
1. react-i18next
1. i18next-browser-languagedetector
1. react
1. react-dom
1. ...

## Devdependence (It's will keep the latest, please find these in package.json)
1. eslint
1. typescript
1. vite
1. sass
1. ...

