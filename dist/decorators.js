"use strict";
/// <reference path="../node_modules/reflect-metadata/typings.d.ts"/>
const ReflectType_1 = require('./ReflectType');
const Symbols_1 = require('./Symbols');
require('reflect-metadata');
function push(prototype, item) {
    prototype[Symbols_1.Validators] = prototype[Symbols_1.Validators] || [];
    prototype[Symbols_1.Validators].push(item);
}
function Item(value, message) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        if (type !== Array) {
            throw new Error(`@Item can only be applied on array field`);
        }
        push(prototype, {
            validator: 'item',
            value,
            message,
            key,
        });
    };
}
exports.Item = Item;
function Min(value, message) {
    return (prototype, key) => {
        prototype = push(prototype, {
            validator: 'min',
            value,
            message,
            key,
        });
    };
}
exports.Min = Min;
function Max(value, message) {
    return (prototype, key) => {
        push(prototype, {
            validator: 'max',
            value,
            message,
            key,
        });
    };
}
exports.Max = Max;
function Length(value, message) {
    return (prototype, key) => {
        push(prototype, {
            validator: 'length',
            value,
            message,
            key,
        });
    };
}
exports.Length = Length;
function Unique(message) {
    return (prototype, key) => {
        push(prototype, {
            validator: 'unique',
            message,
            key,
        });
    };
}
exports.Unique = Unique;
function Int(message) {
    return (prototype, key) => {
        push(prototype, {
            validator: 'int',
            message,
            key,
        });
    };
}
exports.Int = Int;
function Valid(value, message) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        if (type !== value.constructor) {
            throw new Error(`@Valid must have the same type as the field`);
        }
        push(prototype, {
            validator: 'valid',
            value,
            message,
            key,
        });
    };
}
exports.Valid = Valid;
function Regex(value, message) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        if (~[String, Number].indexOf(type)) {
            throw new Error(`@Regex can only be applied on string or number field`);
        }
        push(prototype, {
            validator: 'regex',
            value,
            message,
            key,
        });
    };
}
exports.Regex = Regex;
function Required(message) {
    return (prototype, key) => {
        push(prototype, {
            validator: 'required',
            message,
            key,
        });
    };
}
exports.Required = Required;
