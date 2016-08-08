"use strict";
const Symbols_1 = require('../Symbols');
require('reflect-metadata');
const joi = require('joi');
function append(prototype, key, type, method, value) {
    prototype[Symbols_1.Validators] = prototype[Symbols_1.Validators] || {};
    if (!prototype[Symbols_1.Validators][key]) {
        if (type === String) {
            prototype[Symbols_1.Validators][key] = joi.string();
        }
        else if (type === Number) {
            prototype[Symbols_1.Validators][key] = joi.number();
        }
        else if (type === Boolean) {
            prototype[Symbols_1.Validators][key] = joi.boolean();
        }
        else if (type === Date) {
            prototype[Symbols_1.Validators][key] = joi.date();
        }
        else if (type === Array) {
            prototype[Symbols_1.Validators][key] = joi.array();
        }
        else {
            prototype[Symbols_1.Validators][key] = joi.object();
        }
    }
    if (Array.isArray(value)) {
        prototype[Symbols_1.Validators][key] = prototype[Symbols_1.Validators][key][method](...value);
    }
    else {
        prototype[Symbols_1.Validators][key] = prototype[Symbols_1.Validators][key][method](value);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = append;
