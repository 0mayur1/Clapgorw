import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { normalizeFont, scaleHeight, scaleWidth } from '../utils/responsive';
import { FontFamily } from '../assets/fonts';
import { COLORS } from '../utils/colors';
import { SvgIcon } from '../assets/images/svg';
import { PngImages } from '../assets/images/png';

const MenuItem = ({ icon: Icon, text, onPress, isLogout = false }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon />
    <Text style={[styles.menuText, isLogout && { color: COLORS.flamingo_red }]}>{text}</Text>
    {!isLogout && <SvgIcon.right_go />}
  </TouchableOpacity>
);

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
       <View style={styles. profilePic}>
        <Image source={PngImages.profile_pic} style={styles.profileImg}/>
       </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@gmail.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <MenuItem icon={SvgIcon.edit_profile} text="Edit Profile" onPress={() => {}} />
        <MenuItem icon={SvgIcon.term_condition} text="Terms & Conditions" onPress={() => {}} />
        <MenuItem icon={SvgIcon.help} text="Help Center" onPress={() => {}} />
        <MenuItem icon={SvgIcon.invite} text="Invite" onPress={() => {}} />
        <MenuItem icon={SvgIcon.logout} text="Logout" onPress={() => {}} isLogout />
      </View>

      <View style={styles.footerView}>
        <Text style={styles.footer}>© 2025 Clapgrow</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: scaleWidth(43),
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scaleHeight(30),
  },
  profilePic:{
    height:scaleWidth(100),
    width:scaleWidth(100),
    borderRadius:scaleWidth(60),
    borderWidth:scaleWidth(2),
    borderColor:COLORS.primary
  },
  profileImg:{
    flex:1,
    height:'100%',
    width:"100%",
  },
  profileName: {
    fontSize: normalizeFont(18),
    fontWeight: '500',
    fontFamily: FontFamily.Medium,
    color: COLORS.mid_blue,
  },
  profileEmail: {
    fontSize: normalizeFont(12),
    fontWeight: '500',
    fontFamily: FontFamily.Medium,
    color: COLORS.slat_gray,
  },
  menuContainer: {
    width: '100%',
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(12),
  },
  menuText: {
    flex: 1,
    fontSize: normalizeFont(15),
    fontWeight: '500',
    fontFamily: FontFamily.Medium,
    color: COLORS.mid_blue,
    marginLeft: scaleWidth(10),
  },
  footerView: {
    flex: 1,
    paddingBottom: scaleHeight(50),
    justifyContent: 'flex-end',
  },
  footer: {
    fontSize: normalizeFont(10),
    fontWeight: '400',
    fontFamily: FontFamily.Regular,
    color: COLORS.gray,
  },
});

export default ProfileScreen;