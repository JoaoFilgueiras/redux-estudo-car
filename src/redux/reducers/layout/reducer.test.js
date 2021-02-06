import { layout, INITIAL_STATE, showMessage, hidenMessage } from './index';

describe('Layout Reducer', () => {
    test('Deve retornar o state inicial', () => {
        expect(layout(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('Deve retornar o state com { showMessage: true, message_desc: "UMA MENSAGEM", message_type: "UM TIPO DE MENSAGEM" } ', () => {
        expect(layout(undefined, {type: showMessage.type, payload: { message: {message_type: 'success', message_desc: 'Salvo com sucesso!!!'}}})).toEqual({showMessage: true, message_type: 'success', message_desc: 'Salvo com sucesso!!!'});
    });

    test('Deve retornar o state com { showMessage: false, message_desc: "", message_type: "" } ', () => {
        expect(layout(undefined, {type: hidenMessage.type})).toEqual({showMessage: false, message_type: '', message_desc: ''});
    });
});