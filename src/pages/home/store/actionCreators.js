import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    bannerList: result.bannerList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (result,nextPage) => ({
    type: constants.ADD_HOME_LIST,
    articleList: fromJS(result),
    nextPage
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page + 1));          
        })
    }
};
