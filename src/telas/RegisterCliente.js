import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";
import COLORS from "../Colors/color";
import Input from "../componets/input";
import InputButton from "../componets/InputButton";



const RegisterCliente = () => {


    const [inputs, setInputs] = React.useState({

        name: '',
        phone: '',
        cellPhone: '',
        mail: ''
    });

    const handleOnChange = () => {
        setInputs((prevSate) => (
            console.log(prevSate),
            { ...prevSate, [input]: text }

        ));
    }


    return (


        <SafeAreaView>
            <ScrollView>
                <View style={StyleRegister.allConatiner}>



                    <View style={StyleRegister.viewImg}>

                        <Text style={StyleRegister.textTtile}></Text>

                    </View>

                    <View style={StyleRegister.viewText}>
                        <Text style={StyleRegister.textTtile}>PACIENTE</Text>
                    </View>

                    <View style={StyleRegister.viewInput}>


                        <Input label={'NOME'} onFocus={(texte) => {
                            handleOnChange(texte, 'name')
                        }} />
                        <Input label={'TELEFONE'}
                            onFocus={(texte) => {
                                handleOnChange(texte, 'phone')
                            }} />

                        <Input label={'CELULAR'}
                            onFocus={(texte) => {
                                handleOnChange(texte, 'cellPhone')
                            }} />

                        <Input label={'EMAIL'}
                            onFocus={(texte) => {
                                handleOnChange(texte, 'mail')
                            }} />
                    </View>
                     <InputButton/>


                </View>

            </ScrollView>
        </SafeAreaView>






    );


}


const StyleRegister = StyleSheet.create({

    allConatiner:{
        height:800,
        backgroundColor: COLORS.darkBlue,
    },

    viewImg: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 1,

    },

    viewText: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bluelight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: COLORS.white,
        borderColor:COLORS.white,
        borderWidth:1,
    },

    viewInput: {
        height: 350,
        borderColor:COLORS.white,
        borderWidth:1,
        

    },

    textTtile: {

        color: COLORS.white,
        fontSize: 20,

    }




});


export default RegisterCliente;