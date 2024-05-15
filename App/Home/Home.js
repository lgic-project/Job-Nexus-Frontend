import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../Home/Images/1.jpeg')} // Replace 'background.jpg' with your actual background image
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Jobs"
                            placeholderTextColor="#ffffff"
                            onChangeText={(text) => console.log('Searching for:', text)}
                        />
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={() => console.log('Search button pressed')}
                        >
                            <Text style={styles.searchButtonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>Welcome back, Employee!</Text>
                        <Text style={styles.subtitle}>Explore job opportunities and apply for your dream job.</Text>
                        <TouchableOpacity
                            style={styles.exploreButton}
                            onPress={() => console.log('Explore Jobs button pressed')}
                        >
                            <Text style={styles.buttonText}>Explore Jobs</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: '#ffffff',
    },
    searchButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 10,
        borderRadius: 5,
    },
    searchButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },
    exploreButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
