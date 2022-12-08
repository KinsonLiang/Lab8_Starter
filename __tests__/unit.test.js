// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('validPhoneNumberA', () => {
    phoneNumber = '408-602-8728'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('validPhoneNumberB', () => {
    phoneNumber = '458-757-4803'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('notvalidPhoneNumberA', () => {
    phoneNumber = 'ABC-DEF-XYTZ'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('notvalidPhoneNumberB', () => {
    phoneNumber = 'XXX-XXX-XXXX'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('validEmailA', () => {
    emailString = 'zbc@outlook.com'
    expect(functions.isEmail(emailString)).toBe(true);
});

test('validEmailB', () => {
    emailString = 'vcxv@gmail.com'
    expect(functions.isEmail(emailString)).toBe(true);
});

test('notvalidEmailA', () => {
    emailString = 'abcd@com.com';
    expect(functions.isEmail(emailString)).toBe(false);
});

test('notvalidEmailB', () => {
    emailString = 'abcdfe.dsad.com'
    expect(functions.isEmail(emailString)).toBe(false);
});

test('strongPasswordA', () => {
    passString = 'strong_password!!!'
    expect(functions.isStrongPassword(passString)).toBe(true);
});

test('strongPasswordB', () => {
    passString = 'abc_cdf.'
    expect(functions.isStrongPassword(passString)).toBe(true);
});

test('weakPasswordA', () => {
    passString = '123';
    expect(functions.isStrongPassword(passString)).toBe(false);
});

test('weakPasswordB', () => {
    passString = '1234567889qwertyuiopkg'
    expect(functions.isStrongPassword(passString)).toBe(false);
});

test('validDateA', () => {
    date = '20/11/2020'
    expect(functions.isDate(date)).toBe(true);
});

test('validDateB', () => {
    date = '09/19/1999'
    expect(functions.isDate(date)).toBe(true);
});

test('notvalidDateA', () => {
    date = '1010/1010';
    expect(functions.isDate(date)).toBe(false);
});

test('notvalidDateB', () => {
    date = '12072022'
    expect(functions.isDate(date)).toBe(false);
});

test('validHexA', () => {
    hexString = '#12F'
    expect(functions.isHexColor(hexString)).toBe(true);
});

test('validHexB', () => {
    hexString = '#FFFFFFC'
    expect(functions.isHexColor(hexString)).toBe(true);
});

test('notvalidHexA', () => {
    hexString = 'ABC';
    expect(functions.isHexColor(hexString)).toBe(false);
});

test('notvalidHexB', () => {
    hexString = '#F'
    expect(functions.isHexColor(hexString)).toBe(false);
});