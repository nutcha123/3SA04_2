import React, { useState } from 'react'
import { Text, View } from 'react-native'

const Page2 = ({ route }) => {
    const [data,setData] =useState(route.params.data)
    console.log(data);
    return (
        <View>
            {
                data? data.map((value)=>{
                    <Text>
                        {value.title}
                    </Text>
                }):""
            }
        </View>
    )
}

export default Page2