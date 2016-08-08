import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import * as joi from 'joi';
import {
    Validators,
} from '../Symbols';

export function Ref(key: string) {
    return joi.ref(key);
}

export function Boolean() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        prototype[Validators] = prototype[Validators] || {};
        prototype[Validators][key] = joi.boolean();
    }
}
