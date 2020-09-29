import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,TextInput, View, ImagePropTypes, Button } from 'react-native';
import axios from 'axios'
const apiKey = 'OnSv0FQWGGe8C2QdEpKIFcVjSdvAb2fmSnu4TGV2'

export default function page1() {
    const [state, setState] = useState({
        date: [],
        explanation: [],
        title: [],
    });
    const [singer,setSinger] = useState("")

    const click = async () => {
        await axios({
            url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${singer}`,
            method: "get",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "7063ba7379msh22b4f12e3535c2ep1d97adjsnaa037e5e4e6b"
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <View>
            <TextInput onChangeText={e=>setSinger(e)} />
            <Button
                title="click"
                onPress={click}
            />
        </View>
    )
}

