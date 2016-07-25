import {
    Validators,
    EmbedType,
} from './Symbols';

import * as joi from 'joi';

function parse(schema, data) {
    let ret = new schema();
    const j = schema.prototype[Validators];
    const {error, value}: any = joi.validate(data,joi.object(j));
    if (error) throw error;
    const embed = schema.prototype[EmbedType] || {};
    for (const key in value) {
        if (embed[key]) {
            if (Array.isArray(data[key])) {
                ret[key] = [];
                for (const item of value[key]) {
                    ret[key].push(parse(embed[key], item));
                }
            } else {
                ret[key] = parse(embed[key], value[key]);
            }
        } else {
            ret[key] = value[key];
        }
    }
    return ret;
}

export default function validate<T>(schema: new() => T, data): T {
    const embed = schema.prototype[EmbedType] || {};
    let ret:T = parse(schema, data) as T;
    return ret;
}
