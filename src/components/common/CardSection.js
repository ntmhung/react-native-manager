import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        /* Style attribute accepts value as array. The most right (or higher key order) array item will overwrite
         * any style on the left (the value lower key order) array item
         */
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export {CardSection};
