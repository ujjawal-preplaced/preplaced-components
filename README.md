# Getting started with Components Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

!!!This is a Components Library

## Creating a new component

Create a new folder under src/components/`[new_component]/` with `[new_component].tsx` file

Create a story file with `[new_component].stories.tsx`

## Available Scripts

In the project directory, you can run:

`yarn storybook`

To test the component in Storybook

## Publishing to NPM

Before publishing, make sure to update the name, version, and description fields in your package.json file.

Once you have updated the package.json, run the following command to build your library:

`npm run build`

Finally, publish your library to NPM:

`npm login`

`npm publish`
