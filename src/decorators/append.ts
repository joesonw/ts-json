/// <reference path="../../node_modules/reflect-metadata/typings.d.ts"/>
import ReflectType from '../ReflectType';
import {
    Validators,
} from '../Symbols';
import 'reflect-metadata';
import * as joi from 'joi';

export default function append(prototype, key, type, method, value?) {
    prototype[Validators] = prototype[Validators] || {};
    if (!prototype[Validators][key]) {
        if (type === String) {
            prototype[Validators][key] = joi.string();
        } else if (type === Number) {
            prototype[Validators][key] = joi.number();
        } else if (type === Boolean) {
            prototype[Validators][key] = joi.boolean();
        } else if (type === Date) {
            prototype[Validators][key] = joi.date();
        } else {
            prototype[Validators][key] = joi.object();
        }
    }
    if (Array.isArray(value)) {
        prototype[Validators][key] = prototype[Validators][key][method](...value);
    } else {
        prototype[Validators][key] = prototype[Validators][key][method](value);
    }
}
