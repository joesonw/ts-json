/// <reference path="../../node_modules/reflect-metadata/typings.d.ts"/>
import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import {
    Validators,
} from '../Symbols';
import * as joi from 'joi';

export function Keys() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (!type.prototype[Validators]) {
            throw new Error(`@Keys can only be applied on class with validations`);
        }
        append(prototype, key, type, 'keys', joi.object(type.prototype[Validators]));
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
