"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const joi = require('joi');
const Symbols_1 = require('../Symbols');
function Ref(key) {
    return joi.ref(key);
}
exports.Ref = Ref;
function Boolean() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        prototype[Symbols_1.Validators] = prototype[Symbols_1.Validators] || {};
        prototype[Symbols_1.Validators][key] = joi.boolean();
    };
}
exports.Boolean = Boolean;
