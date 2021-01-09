/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Header, Title, Button, Left, Right, Body} from 'native-base';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomIcon from '../../components/CustomIcon';
import PropTypes from 'prop-types';
export default function MainLayout({
  title,
  children,
  rightChildHeader,
  header = true,
  back = false,
  contentStyle,
}) {
  const navigation = useNavigation();
  return (
    <Container style={{flex: 1}}>
      {!header && <StatusBar barStyle="dark-content" backgroundColor="white" />}
      {header && (
        <Header style={styles.header}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <Left style={{flex: 1}}>
            {back && (
              <Button transparent onPress={() => navigation.goBack()}>
                <CustomIcon name="chevron-left" size={30} />
              </Button>
            )}
          </Left>
          <Body style={styles.header_body}>
            <Title style={styles.header_title}>{title}</Title>
          </Body>
          <Right style={{flex: 1}}>
            {rightChildHeader && rightChildHeader()}
          </Right>
        </Header>
      )}
      <View style={[styles.content, contentStyle]}>{children}</View>
    </Container>
  );
}

MainLayout.prototype = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  rightChildHeader: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  header: PropTypes.bool,
  back: PropTypes.bool,
  contentStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 75,
    elevation: 0,
    paddingBottom: 6,
  },
  header_body: {
    flex: 1,
    alignItems: 'center',
  },
  header_title: {
    color: '#2e3034',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
});
