/**
 * Created by minhhung on 6/24/18.
 */
import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './';
import {Button} from './';

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {cardSectionStyle, textStyle, containerStyle} = styles;

    return(
        <Modal
            //visible = true or false
            visible={visible}
            transparent
            animationType="slide"
            //Android require this attribute so wee pass an empty function here to bypass Android requirement
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection style={cardSectionStyle}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: "center"
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export {Confirm};
