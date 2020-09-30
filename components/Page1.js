import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ImagePropTypes, Button } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

export default function page1() {
    const navigate = useNavigation()
    const [allData, setAllData] = useState(null)
    const [singer, setSinger] = useState("")
    const [errortext, setErrortext] = useState(false)

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
                console.log(response.data.data);
                setAllData(response.data.data)

                let i = 0
                for (i = 0; i < allData.length; i++) {
                    console.log(allData[i].album.title);
                }
            })
            .catch(err => {
                console.log(err);
            });
        if (singer) {
            navigate.navigate('PAGE2', { allData: allData })
            setErrortext(false)
        } else {
            setErrortext(true)
        }


    }

    return (
        <View>
            <TextInput onChangeText={e => setSinger(e)} />
            <Button
                title="click"
                onPress={click}
            />
            <Text>
                {
                    errortext ? "error" : ""

                }
            </Text>
        </View>
    )
}

