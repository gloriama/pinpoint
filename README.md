# Pinpoint

  Displays and predicts where people like you tend to hang out. Use it to find the local hotspots in real-time.

## Set-Up

### Front-End
  
  1. If you don't already have it, download and install [XCode 7.2](https://itunes.apple.com/us/app/xcode/id497799835). This is a large (4GB+) program available free from the App Store, used to run the simulator for React Native.
    * Make sure you have Mac OSX 10.10.5 or later.
    * Different XCode versions may also work, but download at your own discretion.
  2. Install global dependencies for React Native: `sudo npm install -g react-native react-native-cli`
  3. Clone this repo: `git clone https://github.com/triangulating-rhombus/pinpoint.git`
  4. Move into the repo directory: `cd pinpoint`
  5. Move into the client directory (which is also named pinpoint): `cd pinpoint`
  6. Install dependencies: `npm install`
  7. Open the file located at pinpoint/pinpoint/ios/pinpoint.xcodeproj with XCode. (The easiest way is to just locate the file in Finder and double-click it.)
    * This will automatically try to build the project, which may take a minute or two.
    * Assuming all went well, "Build Succeeded" should appear.
  8. When complete, click the Play button at the top left of the XCode window.
    * XCode will automatically start a server, which will appear in a terminal window.
    * When the server is ready, another "Build Succeeded" notification should appear in the main window.
    * XCode will then automatically open a simulator window. The simulator may take a minute or two to render fully.
    * Assuming all went well, the simulator should show a page that says "Welcome to React Native!" and some other instructions.

### Back-End
  
  1. If you don't already have Postgres, install it: `brew install postgres`
  2. In the terminal, run:
```
> initdb pinpoint db 
> pg_ctl -D pinpointdb -l logfile start
> createdb pinpointdb
```
  3. Run the psql command line tool to create a role:
```
> psql pinpoint db
$ CREATE ROLE postgres WITH superuser;
$ ALTER ROLE postgres WITH login;
$ \q
```
  4. Make sure you are in the root directory of the repo and then start the server: `nodemon server.js`