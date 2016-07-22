/// <reference path="../../node_modules/reflect-metadata/typings.d.ts"/>
import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import {
    Validators,
} from '../Symbols';

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Min can only be applied on number fields`);
        }
        append(prototype, key, type, 'min', limit);
    }
}

export function Max(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Max can only be applied on number fields`);
        }
        append(prototype, key, type, 'max', limit);
    }
}

export function Greater(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Greater can only be applied on number fields`);
        }
        append(prototype, key, type, 'greater', limit);
    }
}

export function Less(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Less can only be applied on number fields`);
        }
        append(prototype, key, type, 'less', limit);
    }
}

export function Integer() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Integer can only be applied on number fields`);
        }
        append(prototype, key, type, 'integer');
    }
}

export function Precision(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Precision can only be applied on number fields`);
        }
        append(prototype, key, type, 'precision', limit);
    }
}

export function Multiple(base: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Multiple can only be applied on number fields`);
        }
        append(prototype, key, type, 'base', base);
    }
}

export function Positive() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Positive can only be applied on number fields`);
        }
        append(prototype, key, type, 'positive');
    }
}

export function Negative() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Negative can only be applied on number fields`);
        }
        append(prototype, key, type, 'negative');
    }
}
