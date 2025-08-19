import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [operator, setOperator] = useState('');
  const [phone, setPhone] = useState('');
  const [backup, setBackup] = useState('');
  const [backupPhone, setBackupPhone] = useState('');

  const addProject = () => {
    if (!name || !address) return;
    const newProject = {
      id: Date.now().toString(),
      name, address, operator, phone, backup, backupPhone
    };
    setProjects([...projects, newProject]);
    setName(''); setAddress(''); setOperator(''); setPhone(''); setBackup(''); setBackupPhone('');
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>📅 Harmonogram Operatora Żurawia</Text>
      <TextInput placeholder="Nazwa projektu" value={name} onChangeText={setName} style={{borderWidth:1, marginBottom:8, padding:8}}/>
      <TextInput placeholder="Adres budowy" value={address} onChangeText={setAddress} style={{borderWidth:1, marginBottom:8, padding:8}}/>
      <TextInput placeholder="Operator (Imię i nazwisko)" value={operator} onChangeText={setOperator} style={{borderWidth:1, marginBottom:8, padding:8}}/>
      <TextInput placeholder="Telefon operatora" value={phone} onChangeText={setPhone} style={{borderWidth:1, marginBottom:8, padding:8}}/>
      <TextInput placeholder="Zastępstwo (Imię i nazwisko)" value={backup} onChangeText={setBackup} style={{borderWidth:1, marginBottom:8, padding:8}}/>
      <TextInput placeholder="Telefon zastępstwa" value={backupPhone} onChangeText={setBackupPhone} style={{borderWidth:1, marginBottom:8, padding:8}}/>
      <Button title="Dodaj projekt" onPress={addProject}/>

      <FlatList style={{marginTop:20}} data={projects} keyExtractor={(item)=>item.id} renderItem={({item})=>(
        <View style={{padding:12, borderBottomWidth:1}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>{item.name}</Text>
          <Text>📍 {item.address}</Text>
          <Text>👷 Operator: {item.operator} ({item.phone})</Text>
          <Text>🔄 Zastępstwo: {item.backup} ({item.backupPhone})</Text>
        </View>
      )}/>
    </SafeAreaView>
  );
}