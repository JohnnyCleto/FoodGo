import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState (false)

  function entrar() {
    if (!email.trim() ||  !senha.trim()) {
      Alert.alert('Atenção', 'Preencha seu e-mail e sua senha.')
      return;
    }
    Alert.alert('FoodGo', 'Login preenchido com sucesso!');
  }

  return(

      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />

      <View style={styles.content}>

        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🍔</Text>
          <Text style={styles.logo}>FoodGo</Text>
          <Text style={styles.subtitle}>
            Seu sabor favorito, onde você estiver!
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>
          <Text style={styles.description}>
            Entre na sua conta para continuar.
          </Text>

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

          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Digite sua senha"
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

          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={entrar}
          >
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Não tem uma conta?
            </Text>
                  <TouchableOpacity onPress={() => router.push('/cadastro')}>
                    <Text style={styles.registerLink}>Cadastre-se</Text>
                  </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>FOODGO © 2026</Text>

      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 45,
  },
  logoIcon: {
    fontSize: 55,
  },
  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#F47B20',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 6,
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
    marginTop: 8,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 9,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E7E0DA',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    marginBottom: 22,
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
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 15,
    color: '#333',
  },
  showPassword: {
    color: '#F47B20',
    fontWeight: '600',
  },
  forgotButton: {
    alignItems: 'flex-end',
    marginBottom: 28,
  },
  forgotText: {
    color: '#F47B20',
    fontWeight: '600',
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: '#F47B20',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 28,
  },
  registerText: {
    color: '#777',
    fontSize: 14,
  },
  registerLink: {
    color: '#F47B20',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    textAlign: 'center',
    color: '#AAA',
    fontSize: 11,
    marginTop: 45,
  },
});