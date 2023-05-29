// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

/**
 * Test isPhoneNumber(phoneNumber)
 */
/* true test: true positive */
test('Testing isPhoneNumber(phoneNumber) given TRUE case', () => {
    const phoneNumber = '555-748-1938';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

/* false test: true negative */
test('Testing isPhoneNumber(phoneNumber) given FALSE case', () => {
    const phoneNumber = 'notevenanumber';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

/* false test: false negative */
test('Breaking isPhoneNumber(phoneNumber) given TRUE case', () => {
    const phoneNumber = '5307481938';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

/* true test: false positive */
test('Breaking isPhoneNumber(phoneNumber) given FALSE case', () => {
    const phoneNumber = '555-74321obviouslywrong289-1938';
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});


/**
 * Test isEmail(email)
 */
/* true test: true positive */
test('Testing isEmail(email) given TRUE case', () => {
    const email = 'bkreponte@ucsd.edu';
    expect(functions.isEmail(email)).toBe(true);
});

/* false test: true negative */
test('Testing isEmail(email) given FALSE case', () => {
    const email = 'this@is@invalid.com';
    expect(functions.isEmail(email)).toBe(false);
});

/* false test: false negative */
test('Breaking isEmail(email) given TRUE case', () => {
    const email = 'bkreponte@eng.ucsd.edu';
    expect(functions.isEmail(email)).toBe(false);
});

/* true test: true positive (couldn't get false positive) */
test('Breaking isEmail(email) given TRUE case again', () => {
    const email = 'bkr__onte@abc.co';
    expect(functions.isEmail(email)).toBe(true);
});


/**
 * Test isStrongPassword(password)
 */
/* true test: true positive */
test('Testing isStrongPassword(password) given TRUE case', () => {
    const password = 'abcd';
    expect(functions.isStrongPassword(password)).toBe(true);
});

/* false test: true negative */
test('Testing isStrongPassword(password) given FALSE case', () => {
    const password = 'a#@!#';
    expect(functions.isStrongPassword(password)).toBe(false);
});

/* false test: true negative */
test('Breaking isStrongPassword(password) given TRUE case', () => {
    const password = '1212';
    expect(functions.isStrongPassword(password)).toBe(false);
});

/* true test: true positive */
test('Breaking isStrongPassword(password) given FALSE case', () => {
    const password = 'a_123213_b';
    expect(functions.isStrongPassword(password)).toBe(true);
});


/**
 * Test isDate(date)
 */
/* true test */
test('Testing isDate(date)', () => {
    const date = '01/01/2023';
    expect(functions.isDate(date)).toBe(true);
});

/* true test */
test('Testing isDate(date)', () => {
    const date = '99/99/2003';
    expect(functions.isDate(date)).toBe(true);
});

/* false test */
test('Breaking isDate(date)', () => {
    const date = 'January/23/2003';
    expect(functions.isDate(date)).toBe(false);
});

/* false test */
test('Breaking isDate(date)', () => {
    const date = '//';
    expect(functions.isDate(date)).toBe(false);
});


/**
 * Test isHexColor(color)
 */
/* true test */
test('Testing isHexColor(color)', () => {
    const color = '#FFFFFF';
    expect(functions.isHexColor(color)).toBe(true);
});

/* true test */
test('Testing isHexColor(color)', () => {
    const color = '#F03';
    expect(functions.isHexColor(color)).toBe(true);
});

/* false test */
test('Breaking isHexColor(color)', () => {
    const color = 'F';
    expect(functions.isHexColor(color)).toBe(false);
});

/* false test */
test('Breaking isHexColor(color)', () => {
    const color = '#12345678';
    expect(functions.isHexColor(color)).toBe(false);
});