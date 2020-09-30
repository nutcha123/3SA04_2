import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const Page2 = ({ route }) => {
    const [data, setData] = useState(route.params.allData)

    function check() {
        if (data != null) {
            return (
                <View>
                    {
                        data.map((value) => {
                            return (
                                <Text>
                                    {value.title}
                                </Text>
                            )
                        })
                    }
                </View>
            )
        } else {
            return (
                <View>
                    Please press again..
                </View>
            )
        }
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <View>
            <h2>All Song Title</h2>
            {check()}
        </View>
    )
}

export default Page2