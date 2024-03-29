import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Button, ScrollView, StyleSheet, Modal } from "react-native";

function App() {
  const [showModal, setShowModal] = useState(false);
  const hello = () => {
    console.warn("hello Tester");
  }
  const [data, setData] = useState(undefined);
  const getAPIDATA = async () => {
    const url = "https://jwell-bliss-test-dev.cyclic.app/api/products/648c180a5d576870965c4d00";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(() => {
    getAPIDATA();
  }, [])

  const Navigator = () => {
    setShowModal(true);
  }
  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: 'row', backgroundColor: '#eec06b', borderRadius: 10, width: '90%', alignItems: 'center', marginLeft: 20, marginTop: 30 }}>
          <Image style={{ height: 130, width: 100, backgroundColor: 'black', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} source={require('./images/Logo.png')} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'black', marginLeft: 7 }}>{data ? <Text>{data.name}</Text> : null}</Text>
            <Text style={{ color: 'black', marginBottom: 27, marginLeft: 7 }}>{data ? <Text>{data.mrp}.00</Text> : null}</Text>
            <View style={{ flexDirection: 'row', width: 30, marginLeft: 5 }}>
              <View style={{ flexDirection: 'row', backgroundColor: 'black', padding: 10, borderRadius: 5 }}>
                <TouchableOpacity style={{ marginRight: 5 }}><Text style={{ color: 'white' }}>+</Text></TouchableOpacity>
                <Text style={{ color: 'white' }}>5</Text>
                <TouchableOpacity style={{ marginLeft: 5 }}><Text style={{ color: 'white' }}>-</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#eec06b', borderRadius: 10, width: '90%', alignItems: 'center', marginLeft: 20, marginTop: 15 }}>
          <Image style={{ height: 130, width: 100, backgroundColor: 'black', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} source={require('./images/Logo.png')} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'black', marginLeft: 7 }}>{data ? <Text>{data.name}</Text> : null}</Text>
            <Text style={{ color: 'black', marginBottom: 27, marginLeft: 7 }}>{data ? <Text>{data.mrp}.00</Text> : null}</Text>
            <View style={{ flexDirection: 'row', width: 30, marginLeft: 5 }}>
              <View style={{ flexDirection: 'row', backgroundColor: 'black', padding: 10, borderRadius: 5 }}>
                <TouchableOpacity style={{ marginRight: 5 }}><Text style={{ color: 'white' }}>+</Text></TouchableOpacity>
                <Text style={{ color: 'white' }}>5</Text>
                <TouchableOpacity style={{ marginLeft: 5 }}><Text style={{ color: 'white' }}>-</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column', margin: 50 }}>
          <View style={{ marginBottom: 10 }}>
            <Text>Item Total                                         29000.00</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text >CGST(1.5%) <Text>                                         435.00</Text></Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>CGST(1.5%) <Text>                                         435.00</Text></Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>Discount <Text>                                            1000.00</Text></Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', color: 'black', borderBottomWidth: 1, marginBottom: 10, padding: 5 }}>Grand Total <Text>                                  28870.00</Text></Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'center' }}>
            <TextInput placeholder="Enter Discount Coupon " style={{ backgroundColor: 'black', padding: 10, borderBottomLeftRadius: 7, borderTopLeftRadius: 7, width: "80%", color: 'white' }} placeholderTextColor={'#eec06b'} /><TouchableOpacity onPress={hello}><Text style={{ padding: 15, borderBottomRightRadius: 7, backgroundColor: '#eec06b', borderTopRightRadius: 7, fontWeight: '700', color: 'black' }}>Apply</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
            <TouchableOpacity onPress={Navigator}><Text style={{ backgroundColor: "#eec06b", padding: 10, borderRadius: 20, marginRight: 5, fontWeight: '700', color: 'black', width: '100%' }}>CONTINUE SHOPPING</Text></TouchableOpacity>
            <TouchableOpacity onPress={Navigator}><Text style={{ backgroundColor: "#eec06b", padding: 10, borderRadius: 20, marginLeft: 5, fontWeight: '700', color: 'black', width: '100%' }}>PROCEED TO PAY</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView >
      <Modal Modal visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)} >
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>
          <View style={{ backgroundColor: "#eec06b", padding: 50, borderRadius: 40, width: 350 }}>
            <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold', color: '#000', marginBottom: -10, borderBottomColor: 'black', borderBottomWidth: 1 }}>Advance Payment</Text>
            <View>
              <Text style={{ marginTop: 20 }}>Advance Payment                       28900.00</Text>
            </View>

            <TouchableOpacity style={{ alignItems: 'center', marginLeft: -60 }}>
              <View style={styles.MOdalloginbutton}>
                <Text style={styles.MOdallogintext}>ENTER ADVANCE AMOUNT</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 20 }}>
              <TextInput placeholder="ENTER ADVANCE PAYMENT AMOUNT" style={{ backgroundColor: 'black', padding: 10, borderBottomLeftRadius: 7, borderTopLeftRadius: 7, width: "100%", color: 'white' }} placeholderTextColor={'#eec06b'} />
            </View>
            <Text style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>Select Payment option</Text>
            <Image style={{ height: 250, width: 200, alignItems: 'center', justifyContent: 'center', marginLeft: 30 }} source={require('./images/logo_payment.png')} />
            <TouchableOpacity style={{ alignItems: 'center', marginLeft: -60 }}>
              <View style={styles.signupbutton}>
                <Text style={styles.signuptext}>PROCEED TO PAY</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View >
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
  },
  logo: {
    marginTop: 150,
    marginLeft: 135,
    marginBottom: 150,
  },
  loginbutton: {
    backgroundColor: "#eec06b",
    padding: 15,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 80,
    width: 240,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
  },
  signupbutton: {
    backgroundColor: "black",
    padding: 15,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 80,
    width: 240,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
  },
  logintext: {
    fontSize: 20,
    color: "black",
  },
  signuptext: {
    fontSize: 20,
    color: "#eec06b",
  },
  MOdalloginbutton: {
    backgroundColor: "black",
    padding: 15,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 10,
    width: 270,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
  },
  MOdallogintext: {
    fontSize: 15,
    color: "#eec06b",
  }
});

export default App;