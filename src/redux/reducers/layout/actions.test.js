import { showMessage, hidenMessage } from './index';

describe('Layout Actions', () =>{
    describe('Actions Types', () => {
        test('Deve retornar a action type SHOW_MESSAGE', () => {
            expect(showMessage.type).toEqual('SHOW_MESSAGE');
        });

        test('Deve retornar a action type HIDDEN_MESSAGE', () => {
            expect(hidenMessage.type).toEqual('HIDEN_MESSAGE');
        });
    });

    describe('Actions Creators', () => {
        test('Deve retornar a action creator showMessage {type: SHOW_MESSAGE, message: {message_type: "type", message_desc: "desc"}', () => {
            expect(showMessage({message_type: 'success', message_desc: 'Salvo com sucesso!!!'})).toEqual({type: showMessage.type, payload: {message: {message_type: 'success', message_desc: 'Salvo com sucesso!!!'}}});
        });

        test('Deve retornar a action creator hiddenMessage {type: HIDDEN_MESSAGE}', () => {
            expect(hidenMessage()).toEqual({type: hidenMessage.type});
        });
    });
});