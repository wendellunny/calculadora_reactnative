import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView ,Image,StatusBar,TouchableOpacity} from 'react-native';



var values =['C','()','Apagar','÷','7','8','9','x','4','5','6','-','1','2','3','+','+/-','0','.','='];
var keyStyleClass;
var textStyleClass;
var keys = [];
var calc = '';

class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      result:"0"
    }
  }
  updateResult = (value)=>{
    if(value=='='){
      calc=eval(calc);
      calc = calc.toString();
    }else if(value=='C'){
      calc='';
    }else if(value=='Apagar'){
      calc = calc.slice(0,-1);
    }else if(value=='÷'){
      calc +='/';
    }else if(value=='x'){
      calc+='*';
    }else{
      calc+=value;
    }
    
    this.setState({result:calc});  
    
  }
  createLayout = ()=>{
    
  }
  
  
  render(){
    values.map(item=>{
      if (item == 'C' || item == '()' || item == '÷' || item=='x' || item =='-' || item == '+'){
        keyStyleClass = styles.key;
        textStyleClass = styles.keyTextRed;  
      }else if(item=='Apagar'){
        keyStyleClass=styles.key;
        textStyleClass = styles.keyTextRedSmall;
      }else if(item=='+/-'){
        keyStyleClass=styles.key;
        textStyleClass = styles.keyTextSmall;
      }else if(item=='='){
        keyStyleClass=styles.keyRed;
        textStyleClass = styles.keyTextWhite;  
      }else{
        keyStyleClass=styles.key;
        textStyleClass = styles.keyText; 
      }
      keys.push(<TouchableOpacity  style={keyStyleClass}  onPress={()=>this.updateResult(item)}><Text style={textStyleClass}>{item}</Text></TouchableOpacity>);  
    })
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
        <View style={styles.keys}>
          {keys}
        </View>
        
        


      </View>
      
      
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width:'100%',
    flexDirection:"row",
    flex: 0.3,
    justifyContent:"flex-end",
    alignItems:"flex-end"
    
  },
  keys:{
    flexWrap:'wrap',
    flexDirection:'row',
    flex:0.7
  },
  key:{
    width:'25%',
    height:'20%',
    backgroundColor:'#EFEFEF',
    alignItems:'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderColor:'#FFFFFF',
    borderWidth:1

  },
  keyRed:{
    width:'25%',
    height:'20%',
    backgroundColor:'#FF0000',
    alignItems:'center',
    justifyContent:'center',
    borderStyle:'solid',
    borderColor:'#FFFFFF',
    borderWidth:1
  },
  keyText:{
    color:'#707070',
    fontSize:35
  },
  keyTextSmall:{
    color:'#707070',
    fontSize:25  
  },
  keyTextRed:{
    color:'#FF0000',
    fontSize:35
  },
  keyTextRedSmall:{
    color:'#FF0000',
    fontSize:20
  },
  keyTextWhite:{
    color:'#FFFFFF',
    fontSize:35  
  },
  resultText:{
    fontSize:50,
    textAlign:"right"

    
  }

  
});

export default App;
