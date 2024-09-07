import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { Input, Checkbox, Button } from '~/components/ui/input';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { Input } from '~/components/ui/input';
import { Checkbox } from '~/components/ui/checkbox';
import { Button } from '~/components/ui/button';
import { Svg, Path } from 'react-native-svg';

const FacebookIcon = (props: any) => (
    <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
        <Path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
    </Svg>
);

const GoogleIcon = (props: any) => (
    <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
        <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </Svg>
);

const AppleIcon = (props: any) => (
    <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
        <Path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.07-.48-2.05-.53-3.17 0-1.39.68-2.39.55-3.28-.32C3.34 16.6 3.84 10.13 7.97 9.65c1.23-.18 2.16.43 2.96.53.8.09 1.93-.53 3.08-.43 1.93.18 3.28 1.02 3.76 2.53-3.53 2.12-2.89 6.6.91 7.36-.71 1.58-1.65 3.12-2.63 4.64zM12.1 9.42c-.06-2.56 2.06-4.74 4.54-4.87.27 2.72-2.01 4.9-4.54 4.87z" fill="#000" />
    </Svg>
);

export default function LoginScreen() {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
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
                    <View style={styles.checkboxContainer}>
                        <Checkbox checked={checked} onCheckedChange={setChecked} />
                        <Text style={styles.checkboxLabel}>Remember me</Text>
                    </View>
                    <Button
                        onPress={() => { }}
                        style={styles.button}
                    ><Text>Continue</Text></Button>
                </View>
                <View style={styles.dividerContainer}>
                    <Separator style={styles.separator}/>
                    <Text style={styles.dividerText}>OR</Text>
                    <Separator style={styles.separator}/>
                </View>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FacebookIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <GoogleIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <AppleIcon />
                    </TouchableOpacity>
                </View>
                <Text style={styles.signupText}>
                    Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
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