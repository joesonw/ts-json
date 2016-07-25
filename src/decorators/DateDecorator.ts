import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import {
    Validators,
} from '../Symbols';
import * as joi from 'joi';

export function Min(limit: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Min can only be applied on date fields`);
        }
        append(prototype, key, type, 'min', limit);
    }
}

export function Max(limit: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Max can only be applied on date fields`);
        }
        append(prototype, key, type, 'max', limit);
    }
}

export function Format(format: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Format can only be applied on date fields`);
        }
        append(prototype, key, type, 'format', format);
    }
}

export function Iso() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Iso can only be applied on date fields`);
        }
        append(prototype, key, type, 'iso');
    }
}

export function Timestamp(type?: 'javascript' | 'unix') {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Timestamp can only be applied on date fields`);
        }
        append(prototype, key, type, 'timestamp', type);
    }
}
