import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import {Icon, Button, Block, Text, theme } from 'galio-framework';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');
class ServiceProduct extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ServiceProduct', { product: product })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: product.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ServiceProduct', { product: product })}>
        <Block  flex space="between" style={styles.productDescription}>

            <Text  size={16} style={styles.productTitle} >{product.title}</Text>


            <Block style={{flex:1, flexDirection: 'column'}}>
            <Text color={theme.COLORS.MUTED} size={12}>
                    <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16}
                    onPress={() => navigation.navigate('Deals')}/> 
                    {`السعودية،`} الظهران
                </Text>

                <Text size={12} muted={!priceColor} color={priceColor}>شبيب</Text>
                </Block>


                <Block style={{flex: 1, flexDirection: 'row-reverse'}}>
            
                <Button round align="left" size="small" onlyIcon icon="chat" iconFamily="Entypo" iconSize={30}   iconColor="cadetblue" color="white" style={{ width: 30, height: 30 }} ></Button>
                <Block style={{flex: 1, flexDirection: 'row'}}>
                <Ionicons name="ios-add" size={30} color="crimson" onPress={() => navigation.navigate('Deals')}/>
            
            </Block>
                <Block style={{flex: 1, flexDirection: 'row'}}>
                <Ionicons name="ios-more" size={30} color="gray" onPress={() => navigation.navigate('Deals')}/>
                </Block>
            </Block>



            </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(ServiceProduct);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
