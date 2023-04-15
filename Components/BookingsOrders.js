import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

import BookingCard from './BookingCard';

const BGColor = "#74AB9D"

export default function Booked() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstText}>
            Upcoming Bookings
        </Text>
        <Text style={styles.secondText}>
           Photography
        </Text>
        <BookingCard></BookingCard>

        <Text style={styles.secondText}>
           Cosmetics
        </Text>

        <BookingCard></BookingCard>

      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        fontWeight: 'bold',
        marginTop: 85,
        margin: 10,
    },
    firstText: {
        color: "#FFFFFF",
        fontFamily: "Lehend",
        textAlign: 'left',
        fontWeight: 600,
        paddingLeft: 20,
        fontSize: 30,
        margin: 0,
        marginBottom: 10,
    },
    secondText: {
        color: "#52796F",
        fontFamily: "Lehend",
        fontWeight: 700,
        fontSize: 24,
        paddingLeft: 20,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
    },
    thirdText: {
        color: "black",
        fontFamily: "Lehend",
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 60,
    }
  });