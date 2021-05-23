/**
 * @jest-environment jsdom
 */
import {pushToHistory} from '../scripts/router.js'
describe('pushToHistory Functionality', () => {
  test('settings length', () => {
    expect(pushToHistory('settings').length).toBe(2);
  });
  test('settings state', () => {
    expect(pushToHistory('settings').state).toEqual({ page: 'settings' });
  });
  test('settings length', () => {
    expect(pushToHistory('entry', 2).length).toBe(4);
  });
  test('settings state', () => {
    expect(pushToHistory('entry', 2).state).toEqual({ page: 'entry2' });
  });
  test('settings length', () => {
    expect(pushToHistory().length).toBe(6);
  });
  test('settings state', () => {
    expect(pushToHistory().state).toEqual({});
  });
});
