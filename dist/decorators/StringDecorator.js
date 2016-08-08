"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const append_1 = require('./append');
function Insensitive() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'insensitive');
    };
}
exports.Insensitive = Insensitive;
function Min(limit, encoding) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'min', [limit, encoding]);
    };
}
exports.Min = Min;
function Max(limit, encoding) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'max', [limit, encoding]);
    };
}
exports.Max = Max;
function CreditCard() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'creditCard');
    };
}
exports.CreditCard = CreditCard;
function Length(limit, encoding) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'length', [limit, encoding]);
    };
}
exports.Length = Length;
function Regex(pattern, name) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'regex', [pattern, name]);
    };
}
exports.Regex = Regex;
function Replace(pattern, replacement) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'replace', [pattern, replacement]);
    };
}
exports.Replace = Replace;
function Alphanum() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'alphanum');
    };
}
exports.Alphanum = Alphanum;
function Token() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'token');
    };
}
exports.Token = Token;
function Email(options) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'email', options);
    };
}
exports.Email = Email;
function Ip(options) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'ip', [options]);
    };
}
exports.Ip = Ip;
function Uri(options) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'uri', [options]);
    };
}
exports.Uri = Uri;
function Guid() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'guid');
    };
}
exports.Guid = Guid;
function Hex() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'hex');
    };
}
exports.Hex = Hex;
function Hostname() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'hostname');
    };
}
exports.Hostname = Hostname;
function Lowercase() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'lowercase');
    };
}
exports.Lowercase = Lowercase;
function Uppercase() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'uppercase');
    };
}
exports.Uppercase = Uppercase;
function Trim() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'trim');
    };
}
exports.Trim = Trim;
function IsoDate() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, String, 'iosDate');
    };
}
exports.IsoDate = IsoDate;
