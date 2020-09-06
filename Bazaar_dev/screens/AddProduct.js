import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, TextInput, Alert } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { AddProducts } from '../api/ProductsApi';



export default class AddProduct extends React.Component {
    state ={
        Title: " ",
        Price: " ",
        Image: " ",
        createdAt: " "
    }


    render(){

    onChangeTitle= (e) => {
        this.setState({
            Title: e
        })
    }
    onChangeImage= (e) => {
        this.setState({
            Image: e
        })
    }
    onChangePrice= (e) => {
        this.setState({
            Price: e
        })
    }
    return (
        <ScrollView>

        <Block>
            <Text>Title</Text>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeTitle(text)}
                value={this.state.Title}
                />
        </Block>

        <Block>
            <Text>Price</Text>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangePrice(text)}
                value={this.state.Price}
                />
        </Block>

        <Block>
            <Text>Image</Text>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeImage(text)}
                value={this.state.Image}
                />
        </Block>
        <Block>
            <Button
            title="Press me"
            onPress={() => AddProducts(this.state)}
        >Add Product</Button>
        </Block>

        </ScrollView>

      );
}
}