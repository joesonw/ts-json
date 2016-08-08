"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const append_1 = require('./append');
function Min(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'min', limit);
    };
}
exports.Min = Min;
function Max(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'max', limit);
    };
}
exports.Max = Max;
function Greater(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'greater', limit);
    };
}
exports.Greater = Greater;
function Less(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'less', limit);
    };
}
exports.Less = Less;
function Integer() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'integer');
    };
}
exports.Integer = Integer;
function Precision(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'precision', limit);
    };
}
exports.Precision = Precision;
function Multiple(base) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'base', base);
    };
}
exports.Multiple = Multiple;
function Positive() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'positive');
    };
}
exports.Positive = Positive;
function Negative() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Number, 'negative');
    };
}
exports.Negative = Negative;
