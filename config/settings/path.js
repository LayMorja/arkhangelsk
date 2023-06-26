import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = './src';
const buildFolder = './dist';

export const path = {
  src: {
    styles: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif}`,
    svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/svgIcons/**/*`],
    js: `${srcFolder}/js`,
    fonts: `${srcFolder}/fonts`,
    resources: `${srcFolder}/resources/**/*`,
    sprite: `${srcFolder}/img/svgIcons/**.svg`,
    temp: `${srcFolder}/temp/**/*.{jpg,jpeg,png,webp,gif}`,
    tempSvg: `${srcFolder}/temp/**/*.svg`,
  },
  build: {
    styles: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    js: `${buildFolder}/js/`,
    fonts: `${buildFolder}/fonts/`,
    temp: `${buildFolder}/temp/`,
  },
  watch: {
    styles: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    js: `${srcFolder}/js/**/*.js`,
    jsVendors: `${srcFolder}/js/vendors/**/*.js`,
    resources: `${srcFolder}/resources/**/`,
    sprite: `${srcFolder}/img/svgIcons/**.svg`,
    temp: `${srcFolder}/temp/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
  },
  reset: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `www/laymorja.ru`,
};

export const ftpSetting = {
  host: '31.31.196.183',
  user: 'u2014622',
  password: 'ZgX7YC35Efb0aF6a',
  parallel: 10,
};
