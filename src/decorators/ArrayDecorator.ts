import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import {
    Validators,
    EmbedType,
} from '../Symbols';
import * as joi from 'joi';

export function Allow(...values: any[]) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        prototype[EmbedType] = prototype[EmbedType] || {};
        for (const value of values) {
            if (value.constructor !== prototype[EmbedType][key]) {
                throw new Error(`@Allow on takes paramters that matches its type`);
            }
        }
        append(prototype, key, type, 'allow', values);
    }
}

export function Items(value?) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        prototype[EmbedType] = prototype[EmbedType] || {};
        if (value !== undefined) {
            if (value.prototype[Validators]) {
                prototype[EmbedType][key] = value;
                append(prototype, key, type, 'items', joi.object(value.prototype[Validators]));
            } else {
                prototype[EmbedType][key] = value.constructor;
                append(prototype, key, type, 'items', value);
            }
        } else {
            const schema = prototype[Validators][key];
            delete prototype[Validators][key];
            append(prototype, key, type, 'items', schema);
        }
    }
}

export function Sparse(enabled?: boolean) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'sparse', enabled);
    }
}

export function Single(enabled?: boolean) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'single', enabled);
    }
}

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'min', limit);
    }
}

export function Max(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'max', limit);
    }
}

export function Length(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'length', limit);
    }
}

export function Unique() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'unique');
    }
}
