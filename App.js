import React , { Component, useEffect, useState } from 'react'
import Amplify from '@aws-amplify/core'
import { API, graphqlOperation } from 'aws-amplify'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { listRootComponents }  from './src/graphql/queries'

import awsconfig from './aws-exports'

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  }
})


const Home = () => {
   
      return (
          <RecycleTestComponent />     
      )
}

export default Home

const ViewTypes = {
  FULL: "FULL",
  HALF_LEFT: "HALF_LEFT",
  HALF_RIGHT: "HALF_RIGHT",
  LINE: "LINE",
};
let containerCount = 0;

class CellContainer extends React.Component {
  constructor(args) {
      super(args);
      this._containerId = containerCount++;
  }
  render() {
      return <View {...this.props}>{this.props.children}</View>;
  }
}
/***
* To test out just copy this component and render in you root component
*/
class RecycleTestComponent extends React.Component {
 
      
    componentDidMount() {

      let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
      });
      (async () => {
          const result = await API.graphql(graphqlOperation(listRootComponents));
          this.setState({viewData: result.data.listRootComponents.items, dataProvider: dataProvider.cloneWithRows(result.data.listRootComponents.items)});
          console.log(result.data.listRootComponents.items)
        })();
    }
    componentDidUpdate() {
      let dataProvider = new DataProvider((r1, r2) => {
          return r1 !== r2;
      });

      (async () => {
          const result = await API.graphql(graphqlOperation(listRootComponents));
          this.setState({viewData: result.data.listRootComponents.items, dataProvider: dataProvider.cloneWithRows(result.data.listRootComponents.items)});
    
          console.log(result.data.listRootComponents.items)
        })();
    }


  constructor(args) {
      super(args);

      let { width } = Dimensions.get("window");

      //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
      //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP

      let dataProvider = new DataProvider((r1, r2) => {
          return r1 !== r2;
      });
      //Create the layout provider
      //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
      //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
      //If you need data based check you can access your data provider here
      //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
      //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
      this._layoutProvider = new LayoutProvider(
          index => {
              const viewType = this.state.viewData[index].viewType
              if (viewType == ViewTypes.FULL) {
                  return ViewTypes.FULL;
              }else if  
              (viewType == ViewTypes.HALF_LEFT) {
                  return ViewTypes.HALF_LEFT;
              }else if
                  (viewType == ViewTypes.LINE) {
                      return ViewTypes.LINE;
              }else {
                  return ViewTypes.HALF_RIGHT;
              }
          },
          (type, dim) => {
              switch (type) {
                  case ViewTypes.HALF_LEFT:
                      dim.width = width / 2;
                      dim.height = 160;
                      break;
                  case ViewTypes.HALF_RIGHT:
                      dim.width = width / 2;
                      dim.height = 160;
                      break;
                  case ViewTypes.FULL:
                      dim.width = width;
                      dim.height = 100;
                      break;
                  case ViewTypes.LINE:
                      dim.width = width;
                      dim.height = 50;
                      break;
                  default:
                      dim.width = 0;
                      dim.height = 0;
              }
          }
      );

      this._rowRenderer = this._rowRenderer.bind(this);

      // //Since component should always render once data has changed, make data provider part of the state
      this.state = {
          viewData: [],
          dataProvider: dataProvider.cloneWithRows([])
      };
      
  }
  _onPressButton() {
      alert('You tapped the button!')
    }

  //Given type and data return the view component
  _rowRenderer(type, data) {
      //You can return any view here, CellContainer has no special significance

     
      const items = []
      const widthComponent = Dimensions.get("window").width / data.components.length

      for (let i in data.components) {
         const component = data.components[i]
         if (component.viewType == 'card'){
              items.push(
                  <TouchableOpacity
                  onPress={this._onPressButton}
                  >
              <View style={[styles.cardStyle, {backgroundColor:  component.color, width : widthComponent - 10}] }>
              <Text>{component.data}</Text></View>
              </TouchableOpacity>)
          }else if (component.viewType == 'image'){
              let uri = {uri : component.data}
              items.push(<Image source={uri} resizeMode={'cover'} style={styles.imageStyle} /> )
          }else{
              items.push(<Text style={{color: component.color}}>{component.title}</Text>)
          }
      }
     
      switch (type) {
          
          case ViewTypes.HALF_LEFT:
              
              return (
                  
                  <CellContainer style={[styles.containerGridLeft,{backgroundColor: data.color}]}>
                        {items}
                  </CellContainer>
              );
          case ViewTypes.HALF_RIGHT:
              return (
                  <CellContainer style={[styles.containerGridRight,{backgroundColor: data.color}]}>
                        {items}
                  </CellContainer>
              );
          case ViewTypes.FULL:
              return (
                  <CellContainer style={[styles.container,{backgroundColor: data.color}]}>
                         {items}
                  </CellContainer>
              );
          case ViewTypes.LINE:
              return (
                  <CellContainer style={[styles.container,{backgroundColor: data.color}]}>
                         {items}
                  </CellContainer>
              );    
          default:
              return null;
      }
  }

  render() {
      return <RecyclerListView layoutProvider={this._layoutProvider} dataProvider={this.state.dataProvider} rowRenderer={this._rowRenderer} />;
  }
}



const styles = {
  container: {
      justifyContent: "space-around",
      flex: 1,
      backgroundColor: "#00a1f1",
      flexDirection: 'row',
      alignItems: "center",
  },
  containerGridLeft: {
      justifyContent: "space-around",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#ffbb00"
  },
  containerGridRight: {
      justifyContent: "space-around",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#7cbb00"
  },
  imageStyle: {
      alignSelf: 'center',
      height:'100%', 
      width:'100%'
    },
  cardStyle: {
      borderRadius: 17,
      borderWidth: 0.5,
      borderColor: "#7cbb00",
      padding: 25,
      margin: 5,
      backgroundColor: "#7cbb00"
  },
  buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    } 
};


