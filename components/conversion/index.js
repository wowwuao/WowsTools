import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const bin2oct =(bin)=>{
    let dec = parseInt(bin + "", 2)
    return  (Number(dec).toString(8));}
const bin2dec=(bin)=>{
    return (parseInt(bin + "", 2))}
const bin2hex =(bin)=>{
    let dec = parseInt(bin + "", 2)
    return  (Number(dec).toString(16));}
const oct2bin=(oct)=>{
    let dec = parseInt(oct + "", 8)
    return (Number(dec).toString(2))}
const oct2dec=(oct)=>{
    return (parseInt(oct + "", 8))}
const oct2hex=(oct)=>{
    let dec = parseInt(oct + "", 8)
    return (Number(dec).toString(16))}
const dec2bin=(dec)=>{
    return  (Number(dec).toString(2));}
const dec2oct=(dec)=>{
    return  (Number(dec).toString(8));}
const dec2hex=(dec)=>{
    return  (Number(dec).toString(16));}
const hex2bin=(hex)=>{
    let dec = parseInt(hex + "", 16)
    return (Number(dec).toString(2))}
const hex2oct=(hex)=>{
    let dec = parseInt(hex + "", 16)
    return (Number(dec).toString(8))}
const hex2dec=(hex)=>{
    let dec = parseInt(hex + "", 16)
    return (Number(dec).toString(10))
}
//输入合理化
function tryConvert(num, convert) {
    const input = parseFloat(num);
    if (Number.isNaN(input)) {return '';}
    const output = convert(input);
    if(typeof output ==='string'){return output;}
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
const scaleNames = {
    b:"二进制", d:"十进制",
    o:"八进制", h:"十六进制"
};
class ConversionInput extends React.Component {
    handleChange=(text)=>{this.props.onConversionInputChange(text)}
    render() {
        const num = this.props.num;
        const scale = this.props.scale;
        return (
            <View>
                <Text>{scaleNames[scale]}</Text>
                <TextInput style={styles.textInput} value={num} onChangeText={this.handleChange} />
            </View>
        );
    }
}

class Conversion extends React.Component {
    constructor(props) {super(props);this.state = {num: '', scale: ''};}
    handleBinChange=(num)=>{this.setState({scale: 'b', num});}
    handleDecChange=(num)=>{this.setState({scale: 'd', num});}
    handleOctChange=(num)=>{this.setState({scale: 'o', num});}
    handleHexChange=(num)=>{this.setState({scale: 'h', num});}
    render() {
        const scale = this.state.scale;
        const num = this.state.num;
        var dec,bin,oct,hex = num;
        if(scale==='b'){
            dec = tryConvert(num,bin2dec)
            oct = tryConvert(num,bin2oct)
            hex = tryConvert(num,bin2hex)
        }else if(scale==='d'){
            bin = tryConvert(num,dec2bin)
            oct = tryConvert(num,dec2oct)
            hex = tryConvert(num,dec2hex)
        }else if(scale==='o'){
            bin = tryConvert(num,oct2bin)
            dec = tryConvert(num,oct2dec)
            hex = tryConvert(num,oct2hex)
        }else if(scale==='h'){
            bin = hex2bin(num)
            oct = hex2oct(num)
            dec = hex2dec(num)
        }return (
            <View>
                <ConversionInput scale="d" num={dec}
                    onConversionInputChange={this.handleDecChange} />
                <ConversionInput scale="b" num={bin}
                    onConversionInputChange={this.handleBinChange} />
                <ConversionInput scale="o" num={oct}
                    onConversionInputChange={this.handleOctChange} />
                <ConversionInput scale="h" num={hex}
                    onConversionInputChange={this.handleHexChange} />
            </View>);}}
const styles = StyleSheet.create({
    textInput:{
        marginBottom:10,
        borderWidth:1,
        borderColor:"#57c1f1"}})
export default Conversion
