import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';
import * as joi from 'joi';

export function Ref(key: string) {
    return joi.ref(key);
}
