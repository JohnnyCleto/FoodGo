
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function cadastrar() {
    if (
      !nome.trim() ||
      !email.trim() ||
      !telefone.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Atenção', 'Digite um e-mail válido.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }

    Alert.alert(
      'FoodGo',
      'Cadastro preenchido com sucesso!'
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🍔</Text>
          <Text style={styles.logo}>FoodGo</Text>
          <Text style={styles.subtitle}>
            Faça parte do nosso sabor!
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.description}>
            Preencha seus dados para começar.
          </Text>

          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#999"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Crie uma senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Text style={styles.showPassword}>
                {mostrarSenha ? 'Ocultar' : 'Mostrar'}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite novamente sua senha"
            placeholderTextColor="#999"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!mostrarSenha}
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={cadastrar}
          >
            <Text style={styles.registerButtonText}>
              CRIAR MINHA CONTA
            </Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Já possui uma conta?
            </Text>
            <TouchableOpacity onPress={() => router.replace('/')}>
              <Text style={styles.loginLink}> Fazer login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>FOODGO © 2026</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 35,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoIcon: {
    fontSize: 48,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F47B20',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },
  form: {
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#292929',
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginTop: 7,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E7E0DA',
    borderRadius: 12,
    padding: 15,
    fontSize: 14,
    marginBottom: 17,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E7E0DA',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 17,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 14,
    color: '#333',
  },
  showPassword: {
    color: '#F47B20',
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#F47B20',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  loginText: {
    color: '#777',
    fontSize: 14,
  },
  loginLink: {
    color: '#F47B20',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    textAlign: 'center',
    color: '#AAA',
    fontSize: 11,
    marginTop: 30,
  },
});
