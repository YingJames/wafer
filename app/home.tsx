import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { Input, Checkbox, Button } from '~/components/ui/input';
import { Text } from '~/components/ui/text';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Link, useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.form}>
                    <Input
                        placeholder="Email"
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        style={styles.input}
                    />
                    <Button
                        onPress={() => { router.replace('/setup_profile' );}}
                        style={styles.button}
                    ><Text style={{fontFamily:"Cabin_700Bold"}}>Continue</Text></Button>
                </View>
                <Text style={styles.signupText}>
                    Already have an account? <Link href="/" replace={true}><Text style={styles.signupLink}>Login</Text></Link>
                </Text>
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        lineHeight: 32,
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