# SimpleServerDrivenUI-graphQL-React-Native

Simple Server Drive UI concept Using React Native RecycleView and AWS App Sync

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

Add API Graphql
```
amplify add api
```

Create GraphQL Schema
```
amplify mock api

//Push To cloud
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