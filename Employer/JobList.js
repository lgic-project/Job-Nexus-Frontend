import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const JobList = () => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Login </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Logout </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Hi</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
    },
    navItem: {
        padding: 10,
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default JobList;
