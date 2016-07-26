import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import {
    Validators,
} from '../Symbols';

export function Min(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'min', limit);
    }
}

export function Max(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'max', limit);
    }
}

export function Greater(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'greater', limit);
    }
}

export function Less(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'less', limit);
    }
}

export function Integer() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'integer');
    }
}

export function Precision(limit: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'precision', limit);
    }
}

export function Multiple(base: number) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'base', base);
    }
}

export function Positive() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'positive');
    }
}

export function Negative() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, Number, 'negative');
    }
}
