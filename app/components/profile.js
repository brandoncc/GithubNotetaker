var React = require('react-native');
var Badge = require('./badge');
var Separator = require('./helpers/separator');

var {
  View,
  Text,
  StyleSheet,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttontext: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends React.Component {
  cleanRowTitle(item) {
    item = item.replace('_', ' ');
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    var userInfo = this.props.userInfo,
        topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'],
        list = topicArr.map((item, index) => {
          if (!userInfo[item]) {
            return <View key={index} />
          } else {
            return (
              <View key={index}>
                <View style={styles.rowContainer}>
                  <Text style={styles.rowTitle}> { this.cleanRowTitle(item) } </Text>
                  <Text style={styles.rowContent}> {userInfo[item]} </Text>
                </View>
                <Separator />
              </View>
            )
          }
        });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
        {list}
      </ScrollView>
    )
  }
};

module.exports = Profile;
