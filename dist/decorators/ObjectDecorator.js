"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const append_1 = require('./append');
const Symbols_1 = require('../Symbols');
function Keys() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        if (!type.prototype[Symbols_1.Validators]) {
            throw new Error(`@Keys can only be applied on class with validations`);
        }
        prototype[Symbols_1.EmbedType] = prototype[Symbols_1.EmbedType] || {};
        prototype[Symbols_1.EmbedType][key] = type;
        append_1.default(prototype, key, type, 'keys', type.prototype[Symbols_1.Validators]);
    };
}
exports.Keys = Keys;
/*
export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}
*/
