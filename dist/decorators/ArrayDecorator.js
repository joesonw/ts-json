"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const append_1 = require('./append');
const Symbols_1 = require('../Symbols');
const joi = require('joi');
function Allow(...values) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        prototype[Symbols_1.EmbedType] = prototype[Symbols_1.EmbedType] || {};
        for (const value of values) {
            if (value.constructor !== prototype[Symbols_1.EmbedType][key]) {
                throw new Error(`@Allow on takes paramters that matches its type`);
            }
        }
        append_1.default(prototype, key, type, 'allow', values);
    };
}
exports.Allow = Allow;
function Items(value) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        prototype[Symbols_1.EmbedType] = prototype[Symbols_1.EmbedType] || {};
        if (value !== undefined) {
            if (value.prototype[Symbols_1.Validators]) {
                prototype[Symbols_1.EmbedType][key] = value;
                append_1.default(prototype, key, type, 'items', joi.object(value.prototype[Symbols_1.Validators]));
            }
            else {
                prototype[Symbols_1.EmbedType][key] = value.constructor;
                if (value === String) {
                    append_1.default(prototype, key, type, 'items', joi.string());
                }
                else if (value === Number) {
                    append_1.default(prototype, key, type, 'items', joi.number());
                }
                else if (value === Date) {
                    append_1.default(prototype, key, type, 'items', joi.date());
                }
                else if (value === Boolean) {
                    append_1.default(prototype, key, type, 'items', joi.boolean());
                }
            }
        }
        else {
            const schema = prototype[Symbols_1.Validators][key];
            delete prototype[Symbols_1.Validators][key];
            append_1.default(prototype, key, type, 'items', schema);
        }
    };
}
exports.Items = Items;
function Sparse(enabled) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'sparse', enabled);
    };
}
exports.Sparse = Sparse;
function Single(enabled) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'single', enabled);
    };
}
exports.Single = Single;
function Min(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'min', limit);
    };
}
exports.Min = Min;
function Max(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'max', limit);
    };
}
exports.Max = Max;
function Length(limit) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'length', limit);
    };
}
exports.Length = Length;
function Unique() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'unique');
    };
}
exports.Unique = Unique;
