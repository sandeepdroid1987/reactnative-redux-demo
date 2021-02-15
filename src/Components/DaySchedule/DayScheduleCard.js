import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const DayScheduleCard = (props, {status}) => {
  useEffect(() => {
    console.log(status);
  });
  const [btnColor, setColor] = useState('#841584');
  return (
    <View style={styles.card}>
      <View style={{marginLeft: 10}}>
        <Text style={styles.heading}>{props.data.type}</Text>
        <Text style={styles.subHeading}>{props.data.count} mins</Text>
      </View>
      <View style={styles.buttonCont}>
        <Button
          title={props.data.type + ' Done'}
          color={btnColor}
          onPress={() => setColor('green')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 14,
    marginTop: 20,
    height: 130,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    display: 'flex',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    marginTop: 2,
  },
  subHeading: {
    color: '#fff',
    fontSize: 20,
  },
  buttonCont: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    status: state.statusData.status,
  };
};

export default connect(mapStateToProps)(DayScheduleCard);
