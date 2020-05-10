// import React, { Component } from 'react';
// import { View } from 'react-native';

// import styles from './styles';
// import ProgressBar from './ProgressBar';

// export default class MeasuringProgress extends Component {
//   // Initially at 0% progress. Changing this state
//   // updates the progress bar.
//   state = {
//     progress: 0
//   };

//   componentDidMount() {
//     // Continuously increments the "progress" state
//     // every 300MS, until we're at 100%.
//     const updateProgress = () => {
//       this.setState({
//         progress: this.state.progress + 0.01
//       });

//       if (this.state.progress < 1) {
//         setTimeout(updateProgress, 300);
//       }
//     };

//     updateProgress();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* This is awesome. A simple generic
//              "<ProgressBar>" component that works
//              on Android and on iOS. */}
//         <ProgressBar progress={this.state.progress} />
//       </View>
//     );
//   }
// }
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import First from './First';
import Second from './Second';
import Third from './Third';

export default createStackNavigator(
  {
    First: {
      screen: props => (
        <First
          promise={new Promise(resolve => setTimeout(resolve, 1000))}
          {...props}
        />
      )
    },
    Second: {
      screen: props => (
        <Second
          promise={new Promise(resolve => setTimeout(resolve, 1000))}
          {...props}
        />
      )
    },
    Third: {
      screen: props => (
        <First
          promise={new Promise(resolve => setTimeout(resolve, 1000))}
          {...props}
        />
      )
    }
  },
  { initialRouteName: 'First' }
);
