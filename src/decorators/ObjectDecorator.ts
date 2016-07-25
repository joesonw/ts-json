import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import {
    Validators,
    EmbedType,
} from '../Symbols';
import * as joi from 'joi';

export function Keys() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (!type.prototype[Validators]) {
            throw new Error(`@Keys can only be applied on class with validations`);
        }
        prototype[EmbedType] = prototype[EmbedType] || {};
        prototype[EmbedType][key] = type;
        append(prototype, key, type, 'keys', type.prototype[Validators]);
    }
}
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
