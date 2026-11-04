
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const categorias = [
  { nome: 'Hambúrguer', emoji: '🍔' },
  { nome: 'Pizza', emoji: '🍕' },
  { nome: 'Sushi', emoji: '🍣' },
  { nome: 'Bebidas', emoji: '🥤' },
  { nome: 'Doces', emoji: '🍰' },
  { nome: 'Lanches', emoji: '🌭' },
];

const restaurantes = [
  {
    nome: 'Burger House',
    categoria: 'Hambúrguer • Fast Food',
    tempo: '25-35 min',
    avaliacao: '4.8',
    preco: 'R$ 5,00',
    emoji: '🍔',
  },
  {
    nome: 'Pizza Itália',
    categoria: 'Pizza • Italiana',
    tempo: '30-45 min',
    avaliacao: '4.9',
    preco: 'R$ 4,00',
    emoji: '🍕',
  },
  {
    nome: 'Sushi Express',
    categoria: 'Japonesa • Sushi',
    tempo: '35-50 min',
    avaliacao: '4.7',
    preco: 'R$ 6,00',
    emoji: '🍣',
  },
];

export default function HomeScreen() {
  const [pesquisa, setPesquisa] = useState('');

  const listaFiltrada = restaurantes.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <View>
            <Text style={styles.deliveryLabel}>
              ENTREGAR EM
            </Text>
            <Text style={styles.location}>
              📍 Minha localização ▼
            </Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>FoodGo 🍔</Text>
          <Text style={styles.subtitle}>
            Seu sabor favorito, onde você estiver!
          </Text>
        </View>

        {/* PESQUISA */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="O que você deseja comer?"
            placeholderTextColor="#999"
            value={pesquisa}
            onChangeText={setPesquisa}
          />
        </View>

        {/* CATEGORIAS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Categorias
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categorias.map((item) => (
              <TouchableOpacity
                key={item.nome}
                style={styles.categoryItem}
                onPress={() =>
                  setPesquisa(
                    item.nome === 'Hambúrguer' ? 'Burger' : item.nome
                  )
                }
              >
                <View style={styles.categoryIcon}>
                  <Text style={styles.categoryEmoji}>
                    {item.emoji}
                  </Text>
                </View>

                <Text style={styles.categoryName}>
                  {item.nome}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* PROMOÇÃO */}
        <View style={styles.promotion}>
          <View style={styles.promotionText}>
            <Text style={styles.promotionTag}>
              OFERTA ESPECIAL
            </Text>

            <Text style={styles.promotionTitle}>
              Seu primeiro pedido!
            </Text>

            <Text style={styles.promotionDescription}>
              Ganhe descontos especiais hoje.
            </Text>

            <Text style={styles.promotionDiscount}>
              ATÉ 30% OFF
            </Text>
          </View>

          <Text style={styles.promotionEmoji}>🍟</Text>
        </View>

        {/* RESTAURANTES */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Restaurantes populares
            </Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          {listaFiltrada.map((item) => (
            <TouchableOpacity
              key={item.nome}
              style={styles.restaurantCard}
            >
              <View style={styles.restaurantImage}>
                <Text style={styles.restaurantEmoji}>
                  {item.emoji}
                </Text>
              </View>

              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>
                  {item.nome}
                </Text>

                <Text style={styles.restaurantCategory}>
                  {item.categoria}
                </Text>

                <View style={styles.restaurantDetails}>
                  <Text style={styles.rating}>
                    ⭐ {item.avaliacao}
                  </Text>

                  <Text style={styles.detailText}>
                    • {item.tempo}
                  </Text>
                </View>

                <Text style={styles.deliveryPrice}>
                  Entrega: {item.preco}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {listaFiltrada.length === 0 && (
            <Text style={styles.emptyText}>
              Nenhum restaurante encontrado.
            </Text>
          )}
        </View>

      </ScrollView>

      {/* MENU INFERIOR */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🏠</Text>
          <Text style={styles.menuActive}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❤️</Text>
          <Text style={styles.menuText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>📦</Text>
          <Text style={styles.menuText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  deliveryLabel: {
    fontSize: 11,
    color: '#999',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
  profileButton: {
    backgroundColor: '#FFE5D0',
    padding: 12,
    borderRadius: 50,
  },
  profileIcon: {
    fontSize: 23,
  },
  logoContainer: {
    paddingHorizontal: 22,
    marginTop: 22,
    marginBottom: 20,
  },
  logo: {
    fontSize: 30,
    color: '#F47B20',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 22,
    paddingHorizontal: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F0E5DC',
  },
  searchIcon: {
    fontSize: 18,
  },
  searchInput: {
    flex: 1,
    padding: 15,
    fontSize: 14,
    color: '#333',
  },
  section: {
    marginTop: 28,
    paddingHorizontal: 22,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#292929',
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 19,
  },
  categoryIcon: {
    backgroundColor: '#FFE8D7',
    width: 62,
    height: 62,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryEmoji: {
    fontSize: 30,
  },
  categoryName: {
    fontSize: 11,
    color: '#555',
    marginTop: 8,
  },
  promotion: {
    backgroundColor: '#F47B20',
    marginHorizontal: 22,
    marginTop: 28,
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promotionText: {
    flex: 1,
  },
  promotionTag: {
    color: '#FFE5C9',
    fontSize: 10,
    fontWeight: 'bold',
  },
  promotionTitle: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 8,
  },
  promotionDescription: {
    color: '#FFF',
    fontSize: 11,
    marginTop: 6,
  },
  promotionDiscount: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 12,
  },
  promotionEmoji: {
    fontSize: 65,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    color: '#F47B20',
    fontWeight: 'bold',
    fontSize: 12,
  },
  restaurantCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 12,
    marginBottom: 14,
    flexDirection: 'row',
    elevation: 2,
  },
  restaurantImage: {
    width: 95,
    height: 100,
    backgroundColor: '#FFE8D7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantEmoji: {
    fontSize: 45,
  },
  restaurantInfo: {
    flex: 1,
    marginLeft: 13,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#292929',
  },
  restaurantCategory: {
    fontSize: 11,
    color: '#888',
    marginTop: 5,
  },
  restaurantDetails: {
    flexDirection: 'row',
    marginTop: 9,
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 11,
    color: '#777',
    marginLeft: 6,
  },
  deliveryPrice: {
    color: '#F47B20',
    fontSize: 11,
    marginTop: 7,
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    padding: 20,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 21,
  },
  menuActive: {
    color: '#F47B20',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 4,
  },
  menuText: {
    color: '#888',
    fontSize: 11,
    marginTop: 4,
  },
});
