
# react-native-reddit-labs

## Getting started

`$ npm install react-native-reddit-labs --save`

### Mostly automatic installation

`$ react-native link react-native-reddit-labs`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-reddit-labs` and add `RNRedditLabs.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRedditLabs.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRedditLabsPackage;` to the imports at the top of the file
  - Add `new RNRedditLabsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-reddit-labs'
  	project(':react-native-reddit-labs').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-reddit-labs/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-reddit-labs')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRedditLabs.sln` in `node_modules/react-native-reddit-labs/windows/RNRedditLabs.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNRedditLabs;` to the usings at the top of the file
  - Add `new RNRedditLabsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRedditLabs from 'react-native-reddit-labs';

// TODO: What to do with the module?
RNRedditLabs;
```
  