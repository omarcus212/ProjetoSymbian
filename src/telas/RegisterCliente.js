import React from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";
import MaskInput from 'react-native-mask-input';
import COLORS from "../Colors/color";
import Input from "../componets/input";
import IButton from "../componets/IButton";



const RegisterCliente = () => {


    const [inputs, setInputs] = React.useState({

        name: '',
        phone: '',
        cellPhone: '',
        mail: ''
    });

    const handleOnChange = (text, input) => {
        setInputs((prevSate) => (
            console.log(prevSate+ "teste"),
            { ...prevSate, [input]: text }

        ));


    }

    const [errors, setErrors] = React.useState({});

    const handlerErros = (erroMesage, input) => {
        setErrors((prevSate) => ({ ...prevSate, [input]: erroMesage }))
    }

    const Validate = () => {
        let validate = true;

        if (!inputs.name) {
            validate = false;
            handlerErros('Nome Invalido');

        }
        if (!inputs.phone) {
            if (inputs.phone == String) {
                validate = false;
                handlerErros('Telefone Invalido ou Não informado');
                inputs.phone = "";
            }


        }
        if (!inputs.cellPhone) {
            validate = false;
            handlerErros('celular Invalido ou Não informado');

        }
        if (!inputs.mail) {
            validate = false;
            handlerErros('email Invalido')

        }

        console.log(errors);

    }


    return (


        <SafeAreaView>
            <ScrollView>
                <View style={StyleRegister.allConatiner}>


                    <View style={StyleRegister.viewText}>
                        <Text style={StyleRegister.textTtile}>PACIENTE</Text>
                    </View>

                    <View style={StyleRegister.viewInput}>


                        <Input label={'NAME'} errors={errors.name} onFocus={(texte) => {
                            handleOnChange(texte, 'name')
                        }} />
                        <Input label={'PHONE'}
                            errors={errors.phone}
                            onFocus={() => { handlerErros(null, 'phone') }
                            } MaskInput mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/][/[^0-9]/g, '']}
                            type={'numeric'}
                            onChangeText={() => handleOnChange(text, 'phone')}
                        />

                        <Input label={'CELLPHONE'}
                            errors={errors.cellPhone}
                            onFocus={() => {
                                MaskInput

                            }} mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/][/[^0-9]/g, '']}
                            type={'numeric'}
                            onChangeText={() => handleOnChange(texte, 'cellPhone')}

                        />

                        <Input label={'MAIL'}
                            errors={errors.mail}
                            onFocus={(texte) => {
                                handleOnChange(texte, 'mail')
                            }} />
                    </View>

                    <View style={StyleRegister.viewButton}>
                        <IButton title="Enviar" onPress={Validate} />
                    </View>




                </View>

            </ScrollView>
        </SafeAreaView>






    );


}


const StyleRegister = StyleSheet.create({

    allConatiner: {
        height: 700,
        backgroundColor: COLORS.darkBlue,
        justifyContent: "center",



    },


    viewText: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bluelight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: COLORS.white,
        borderColor: COLORS.white,
        borderWidth: 1,
    },

    viewInput: {
        height: 520,
        borderColor: COLORS.white,
        borderWidth: 1,
        backgroundColor: '#115796',
        paddingLeft: 10,
        paddingTop: 50,




    },

    textTtile: {

        color: COLORS.white,
        fontSize: 30,

    },
    viewButton: {
        width: "100%",
        alignItems: "center"
    }




});


export default RegisterCliente;