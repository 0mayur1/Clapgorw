import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgIcon } from '../assets/images/svg';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@gmail.com</Text>
      </View>
      
      <View style={styles.menuContainer}>
        <MenuItem icon="user" label="Edit Profile" />
        <MenuItem icon="shield" label="Terms & Conditions" />
        <MenuItem icon="help-circle" label="Help Center" />
        <MenuItem icon="send" label="Invite" />
      </View>
      
      <TouchableOpacity style={styles.logoutButton}>
        {/* <Icon name="log-out" size={20} color="#D9534F" /> */}
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      
      <Text style={styles.footer}>© 2025 Clapgrow</Text>
    </View>
  );
};

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <SvgIcon.profile name={icon} size={20} color="#000" />
    <Text style={styles.menuText}>{label}</Text>
    {/* <Icon name="chevron-right" size={20} color="#999" /> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#D9534F',
    marginLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    color: '#777',
  },
});

export default Profile;
