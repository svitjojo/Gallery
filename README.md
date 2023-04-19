# Photo Gallery App
This is a mobile app built with React Native that allows users to view a collection of photos sourced from the Unsplash API. The app features a gallery view of the photos and the ability to view individual photos in full-screen mode.

## Getting Started
To get started with this app, you will need to have Node.js and npm installed on your machine. You will also need to have the React Native CLI set up on your machine.

### Installation
Clone the repository to your local machine:
```
git clone https://github.com/svitjojo/photo-gallery-app.git
```
Navigate to the project directory:
```
cd photo-gallery-app
```
Install the dependencies:
```
npm install
```
### Running the app
To run the app on an iOS or Android simulator or device, run the following command:
```
npm run start
```
This will start the Metro bundler and open the Expo Developer Tools in your browser. From here, you can choose to run the app on a simulator or device using the options in the left-hand menu.

### Building the app
To build the app for release, run the following command:
```
npm run build
```
This will create a release build of the app in the ./android/app/build/outputs/apk/release directory for Android or the ./ios/build directory for iOS.

### Usage
Upon opening the app, users will be presented with a grid view of photos sourced from the Unsplash API. Tapping on a photo will open it in full-screen mode, where users can swipe left or right to navigate between photos.

## Dependencies
The app is built with the following dependencies:

- React Native
- React Navigation
- Redux
- Redux Thunk
- React Native Elements
