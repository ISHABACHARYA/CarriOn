import React  from 'react';
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import AppIntro from '../container/introScreen';
import SignIn from '../container/signIn';
import Home from '../container/workspace/home';
import Icon from 'react-native-vector-icons/Ionicons';
import SideMenu from './sideMenu';
import Profile from '../container/workspace/profile/';
import History from "../container/workspace/transaction/";
import Offers from "../container/workspace/offers/";
import ContactUs from "../container/workspace/contactUs/";
import DeliveryForm from '../container/workspace/home/deliveryForm';



const HomeRef = DrawerNavigator({
  homeref: {
    screen: Home,
  },
  profile:{
      screen:Profile
  },
  history:{
      screen:History
  },
  offers:{
      screen: Offers
  },
  contactUs:{
      screen: ContactUs
  }
},
{
    contentComponent: SideMenu
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
    },
    //screen: 'Login',
    deliveryForm:{
        screen: DeliveryForm
    }
},
{
    headerMode: 'none'
})
export default DefaultRouter;