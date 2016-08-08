"use strict";
const Symbols_1 = require('./Symbols');
function Validator(schema, data) {
    return validate(schema.prototype[Symbols_1.Validators], data);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Validator;
function validate(schema, data) {
    let result = {};
    for (const validator of schema) {
        const key = validator.key;
        result[key] = singleItemValidator(validator, result[key] || data[key]);
        if (result[key] === undefined) {
            delete result[key];
        }
    }
    return result;
}
function singleItemValidator(validator, data) {
    const { value, key, message, } = validator;
    switch (validator.validator) {
        case 'min':
            if (!~[undefined, null, ''].indexOf(data)) {
                data = Number(data);
                if (Number.isNaN(data)) {
                    throw new Error(message || `${key}:${data} is not a number`);
                }
                if (data < value) {
                    throw new Error(message || `${key}:${data} is less than ${value}`);
                }
            }
            return data;
        case 'required':
            if (!data) {
                throw new Error(message || `${key} is required`);
            }
    }
}
