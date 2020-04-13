# SimpleServerDrivenUI-graphQL-React-Native

Simple Server Drive UI concept Using React Native RecycleView and AWS App Sync

![Alt Text](https://github.com/tirtavium/SimpleServerDrivenUI-graphQL-React-Native/blob/master/server_driven_ui_sample.gif)


## Getting Started

These instructions will get you know the detail of implementation

### Prerequisites

You must have node JS and IDE for ReactNative



### Installing

Create React Native Project

```
react-native init covidUpdate
```

Create Amplify project

```
amplify init
```

<img src="https://github.com/tirtavium/SimpleServerDrivenUI-graphQL-React-Native/blob/master/amplify%20init%20pic.png" alt="addapi" width="300" height="300"/>

Add API Graphql
```
amplify add api
```
<img src="https://github.com/tirtavium/SimpleServerDrivenUI-graphQL-React-Native/blob/master/add%20api%20pic.png" alt="addapi" width="300" height="300"/>

Create GraphQL Schema
```
amplify mock api
```
<img src="https://github.com/tirtavium/SimpleServerDrivenUI-graphQL-React-Native/blob/master/mock%20api.png" alt="mockapi" width="300" height="300"/>

Push To cloud
```
amplify push
```

Adding React Native Module
```
yarn add aws-amplify aws-amplify-react-native
yarn add recyclerlistview
yarn add @react-native-community/netinfo
react-native link @react-native-community/netinfo
cd ios && pod install && cd ..
```

## Running the tests

Run the on ios device
```
react-native run-ios
```
## Authors

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* etc