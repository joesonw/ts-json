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
        append(prototype, key, Date, 'min', limit);
    }
}

export function Max(limit: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Date, 'max', limit);
    }
}

export function Format(format: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Date, 'format', format);
    }
}

export function Iso() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Date, 'iso');
    }
}

export function Timestamp(type?: 'javascript' | 'unix') {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Date, 'timestamp', type);
    }
}
