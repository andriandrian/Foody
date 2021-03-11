import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconArrow } from '../../assets'

const Akun = () => {
    return (
        <View style={styles.page}>
            <View style={styles.row}>
                <Text style={styles.text}>Edit Profil</Text>
                <IconArrow />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Alamat Rumah</Text>
                <IconArrow />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Keamanan</Text>
                <IconArrow />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Pembayaran</Text>
                <IconArrow />
            </View>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    page: {
        marginTop: 20,
        marginHorizontal: 23,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#000000',
    }
})
