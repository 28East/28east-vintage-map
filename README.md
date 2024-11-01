# 28east-vintage-map

Dynamic vintage styled Google Map application created for 30 Day Map Challenge 2024.

## Demo

View the interactive demo at https://28east-vintage-map.web.app/

## About

This is a simple demo map application which uses reactive properties to draw custom SVG background and textures for rendering wood and paper-like components.

Each time a user loads a page the parchment and background will change, providing a dynamic and unique user experience.

## Development

Clone the repository `git clone https://github.com/28East/28east-vintage-map.git`

Copy the `.env` templates for your environment (e.g. `.env.template` -> `.env`) and populate them with the appropriate values.

The stack it built with Vite+React+MUI and utilizes [Vite Env and Modes](https://vite.dev/guide/env-and-mode) for prioritizing the values used.

install dependencies with `npm install` and launch the development server with `npm run start`.

WHen you are ready to build your site, simply run `npm run build --mode=production` and the packaged website will be stored in the `dist` directory, which can be used with any web server.

## Setup

This map uses a [Google Maps custom style](https://mapstyle.withgoogle.com/), for which you will need to create a new Map ID and Style in the [Google Console](https://console.cloud.google.com/google/maps-apis/client-styles).

You will also need to create a restricted Google Maps API Key with relevant quotas and provide access to the Google Maps JS SDK.

## Deployment

Just build your site with the applicable keys and mode and the `dist` folder will be servable. You can deploy to firebase hosting easily as well.

Begin by creating a new site in the [Firebase Console](https://console.firebase.google.com/) (add one under build > hosting in your project).

Ensure that the firebase cli is installed and authorized and initialize your project with `firebase init`.

Apply your hosting target site name with `firebase target:apply hosting your-site-name your-site-name`.

Test the firebase setup locally with `firebase serve`.

Use `firebase deploy --only hosting` to serve the site with firebase.
