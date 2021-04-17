import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

//随机分组，参数为人数、组数
const randomGrouping=(count,num)=>
{
    var listall = [];
    for(var i=1;i<=count;i++){
        listall.push(i.toString().padStart(5));}
    function changelist(list, num) {
        var n = list.length - 1;
        var length=n/num;
        var list1=list,list2=[];
        for(var i=0;i<num;i++) {
            var newlist = [];
            for(var j = 0; j < length; j++) {
                var id = Math.ceil(Math.random(0, list1.length - 1) * list1.length - 1);
                newlist.push(list1[id]);
                list1.splice(id, 1);
            }list2.push(newlist);
        }return list2;
    }return changelist(listall, num);}
//随机数生成
const getRandomIntInclusive=(min, max)=> {
    min = Math.ceil(min);max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; }
class Randomize extends Component {
    state={min:"", max:"", value:"",
        count:"", num:"", result:[]}
    handleMinChange=(text)=>{
        this.setState({min:text})}
    handleMaxChange=(text)=>{this.setState({max:text})}
    getRondomValue=()=>{
        const max=this.state.max;
        const min=this.state.min;
        const r = getRandomIntInclusive(min,max);
        this.setState({value:r})}
    handlePeopleChange=(text)=>{
        this.setState({count:text})}
    handleGroupChange=(text)=>{
        this.setState({num:text})}
    getRandomGrouping=()=>{
        const count=this.state.count;
        const num=this.state.num;
        const morelist=randomGrouping(count,num)
        this.setState({result:morelist})
    }
    render() {
        const Rst=this.state.result
        return (
            <View>
                <View><Text style={{fontSize: 20,color:"blue"}}>选择困难者必备！</Text></View>
                <View>
                    <Text>最小值</Text>
                    <TextInput style={styles.textInput} onChangeText={this.handleMinChange} />
                    <Text>最大值</Text>
                    <TextInput style={styles.textInput} onChangeText={this.handleMaxChange} />
                    <Button onPress={this.getRondomValue} title={"随机整数生成"}/>
                    <View style={styles.textView}>
                        <Text style={{fontSize:30}}>{this.state.value}</Text>
                    </View>
                </View>
                <View>
                    <Text>人数</Text>
                    <TextInput style={styles.textInput} onChangeText={this.handlePeopleChange} />
                    <Text>队伍数</Text>
                    <TextInput style={styles.textInput} onChangeText={this.handleGroupChange} />
                    <Button onPress={this.getRandomGrouping} title={"随机组队生成"}/>
                    <View style={styles.textView}>
                        {Rst.map((item, index) => {
                            return (<Text style={styles.textS} key={index}>第{index+1}组: {item}</Text>)})}
                    </View>
                </View>
            </View>);}}
const styles = StyleSheet.create({
    textInput:{
        marginBottom:10,
        borderWidth:1,
        height:40,
        borderColor:"#57c1f1"},
    textView:{
        backgroundColor:"#c9c7c7",
        minHeight: 50,
        marginTop:2,
        marginBottom:10,},
    textS:{
        marginStart:10,
        fontSize:18,}})
export default Randomize;
