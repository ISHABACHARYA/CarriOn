import React  from 'react';
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import AppIntro from '../container/introScreen';
import SignIn from '../container/signIn';
import Home from '../container/workspace/home';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeRef = DrawerNavigator({
  homeref: {
    screen: Home,

  }
});
const DefaultRouter = StackNavigator({
    appintro:{
        screen: AppIntro,
    },
    signin:{
        screen:SignIn
    },
    home:{
        screen: HomeRef
    }
    //screen: 'Login',
},
{
    headerMode: 'none'
})
export default DefaultRouter;