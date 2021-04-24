import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {CustomHeader} from '../CustomHeader';
import {IMAGE} from '../constants/Images';
import styles from './StyleTab/styleHome';
import {recommended,otherFood} from '../constants/data/data';

export class home extends Component {
  // Recommneded and FoodItem
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommendedStyle]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={recommended}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({item}) => this.renderFoodItem(item)}
        />
      </View>
    );
  };

  renderFoodItem = (item) => {
    return (
      <ImageBackground
        style={styles.ImgProduct}
        imageStyle={{borderRadius: 50}}
        source={item.ImgBackground}
        resizeMode="stretch">
        <View style={{flex: 1}}>
          <View style={styles.titleFood}>
            <Text style={styles.contentFood}>{item.nameFood}</Text>
          </View>
          <View style={styles.evaluate}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image source={IMAGE.HEART} />
              </TouchableOpacity>
              <Text style={styles.rate}>{item.rate}</Text>
            </View>
            <TouchableOpacity>
              <Image source={IMAGE.MORE} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  };

  // OtherFood and FoodItem
  renderOtherFood = () => {
    return (
      <View style={[styles.flex, styles.otherFood]}>
        <FlatList
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={otherFood}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({item}) => this.renderOtherFoodItem(item)}
        />
      </View>
    );
  };

  renderOtherFoodItem = (item) => {
    return (
      <View style={styles.container_OtherFood}>
        <ImageBackground
          style={styles.ImgOtherFood}
          imageStyle={{borderRadius: 24}}
          source={item.ImgBackground}
          resizeMode="stretch"
        />
        <View style={styles.content_OtherFood}>
          <Text style={styles.numberFood}>{item.numberFood}</Text>
          <Text style={styles.contentOtherFood}>{item.contentFood}</Text>
        </View>
        <View style={styles.cost_OtherFood}>
          <Text style={styles.costFood}>{item.costFood}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader />
        <ScrollView>
          <View style={styles.containerInput}>
            <Icon name="search" size={20} style={styles.iconSearch} />
            <TextInput
              style={styles.searchInput}
              placeholder={'Search food'}
              placeholderTextColor={'#b8adb5'}
            />
            <TouchableOpacity style={styles.buttonIcon}>
              <Icon name="sliders" size={20} style={styles.iconSetting} />
            </TouchableOpacity>
          </View>

          {/* Main */}
          <View style={styles.containerMain}>
            <View style={styles.titleStyle}>
              <Text style={styles.recommended}>Recommended</Text>
              <View style={styles.lineRow} />
              {this.renderRecommended()}
            </View>

            <View style={styles.other_food_style}>
              <Text style={styles.recommended}>Other food</Text>
              <View style={styles.lineRow_otherFood} />
              {this.renderOtherFood()}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
