import {createAction, createReducer } from '@reduxjs/toolkit';
export const INITIAL_STATE = {
    showMessage: false,
    message_desc: '',
    message_type: ''
};

export const showMessage = createAction('SHOW_MESSAGE', (message) => {return { payload: {message}}});
export const hidenMessage = createAction('HIDEN_MESSAGE');

export const layout =  createReducer(INITIAL_STATE, {
    [showMessage.type] : (state, action) => ({...state, showMessage: true, message_desc: action.payload.message.message_desc, message_type: action.payload.message.message_type}),
    [hidenMessage.type] : (state, action) => ({...state, showMessage: false, message_desc: '', message_type: ''}),
})