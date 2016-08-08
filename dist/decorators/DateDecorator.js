"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const append_1 = require('./append');
function Min(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Date, 'min', limit);
    };
}
exports.Min = Min;
function Max(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Date, 'max', limit);
    };
}
exports.Max = Max;
function Format(format) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Date, 'format', format);
    };
}
exports.Format = Format;
function Iso() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Date, 'iso');
    };
}
exports.Iso = Iso;
function Timestamp(type) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, Date, 'timestamp', type);
    };
}
exports.Timestamp = Timestamp;
