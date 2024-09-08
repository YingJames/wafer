import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '~/components/ui/text';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { router } from 'expo-router';

export default function SetupProfile() {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title} className='mb-10'>Setup Your Profile</Text>
                <View style={styles.form}>
                    <Input
                        placeholder="Name"
                        style={styles.input}
                    />
                    <Input
                        placeholder="Date of Birth"
                        style={styles.input}
                    />
                    <Input
                        placeholder="Based In"
                        style={styles.input}
                    />
                    <Input
                        placeholder="Languages"
                        className='mb-10'
                    />
                    <Button
                        onPress={() => { router.replace('/home') }}
                        style={styles.button}
                    >
                        <Text style={{fontFamily:"Cabin_700Bold"}}>Continue</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        // flexGrow: 1,
        maxWidth: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    content: {
        width: '100%',
        // maxWidth: 320,
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        // marginBottom: 24,
        lineHeight: 42,
    },

    subtitle: {
        fontSize: 17
    },

    form: {
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
        // backgroundColor: '#F3F4F6',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#8D7B68',
    },
    dividerContainer: {
        // display: 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // flex: 1,
        justifyContent: 'center',
        marginBottom: 24,
    },
    dividerText: {
        marginHorizontal: 16,
        // flexGrow: 1,
        color: '#6B7280',
        // fontSize: 12,
        textTransform: 'uppercase',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
    },
    socialButton: {
        marginHorizontal: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
    },
    signupText: {
        textAlign: 'center',
        fontSize: 14,
    },
    signupLink: {
        color: '#8D7B68',
    },
});