import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Input, Text, theme } from 'galio-framework';
import { Select } from '../components/';
import Icon from './Icon';
import ModalDropdown from 'react-native-modal-dropdown';
import materialTheme from '../constants/Theme';
import Tabs from './Tabs';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const ChatButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Chat')}>
    <Icon
      family="GalioExtra"
      size={16}
      name="chat-33"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('البحث')}>
    <Icon
      family="entypo"
      size={16}
      name="magnifying-glass"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />

  </TouchableOpacity>
);


class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return (back ? navigation.goBack() : navigation.openDrawer());
  }

  renderRight = () => {
    const { white, title, navigation, scene } = this.props;
     const { options } = scene.descriptor;
     const routeName = options.headerTitle; // wip

    if (title ===  'Title') {
      return ([
        <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
        <SearchButton key='basket-search' navigation={navigation} isWhite={white} />
      ]);
    }

    switch (title) {
      case 'About':
      case 'Agreement':
      case 'Cart':
      case 'Categories':
      case 'Category':
      case 'Deals':
      case 'الطلبات':
      case 'العروض':  
      case 'Woman':
      case 'Man':
      case 'Kids':
      case 'NewCollection':
      case 'Notifications':
      case 'Privacy':
      case 'Profile':
      case 'البحث':
      case 'الاعدادات':
        return ([
          <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />
        ]);
      case 'Product':
        return ([
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />,
        ]);
      default:
        break;
    }
  }

  renderSearch = () => {
    const { navigation } = this.props;
  }

  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;

    return (
<Block row >
      <ModalDropdown
      options={['عقار','سيارات', 'اجهزة']}
      defaultIndex={1}
      style={[styles.qty]}
      onSelect={this.handleOnSelect}
      dropdownStyle={styles.dropdownStyle}
      dropdownTextStyle={{ paddingLeft: theme.SIZES.BASE, fontSize: 12 }}
      >
<Block style={{borderRadius:55}} row middle space="between">
<Text style={{paddingLeft: theme.SIZES.BASE*1.5}} color={'black'}size={15}>اختر القسم</Text>
<Icon name="angle-down" family="font-awesome" size={11} />
</Block>
    </ModalDropdown>

<ModalDropdown
options={['الرياض','جده', 'الدمام']}
style={[styles.qty]}
onSelect={this.handleOnSelect}
dropdownStyle={styles.dropdownStyle}
dropdownTextStyle={{ paddingLeft: theme.SIZES.BASE, fontSize: 12 }}
>
<Block style={{borderRadius:55}} row middle space="between">
<Text style={{paddingLeft: theme.SIZES.BASE*1.5}} color={'black'}size={15}>اختر المدينة</Text>
<Icon name="angle-down" family="font-awesome" size={11} />
</Block>
</ModalDropdown>
</Block>



    )
  }

  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }

  renderHeader = () => {
    const { search, tabs, options } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      )
    }
    return null;
  }

  render() {
    const { back, title, white, transparent, navigation, scene } = this.props;
    // const { routeName } = navigation.state;
    // const { options } = scene.descriptor;
    // const routeName = scene.descriptor?.options.headerTitle ?? '';
    const noShadow = ["البحث", "Profile"].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={styles.navbar}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          leftStyle={{ paddingTop: 3, flex: 0.3 }}
          leftIconName={back ? null : "navicon"}
          leftIconFamily="font-awesome"
          leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
          titleStyle={[
            styles.title,
            { color: theme.COLORS[white ? 'WHITE' : 'ICON'] },
          ]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    backgroundColor: '#00acc1',
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: '#00acc1',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 9,
    shadowOpacity: 0.4,
    elevation: 3,
  },
  qty: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: theme.SIZES.BASE * 10,
    backgroundColor: '#00acc1',
    paddingHorizontal: theme.SIZES.BASE,
   // paddingVertical: 10,
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  notify: {
    backgroundColor: materialTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  options: {
    padding: theme.SIZES.BASE / 2,
  },

  optionsButtonText: {
    fontSize: theme.SIZES.BASE * 0.75,
    height: 34,
    color: '#4a4a4a',
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.29,
  },
  optionsButton: {
    width: 'auto',
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
    borderRadius: 99,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
});