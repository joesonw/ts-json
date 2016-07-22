import {
    Validators,
} from './Symbols';

import * as joi from 'joi';

export default function validate<T>(schema: new() => T, data): T {
    const j = schema.prototype[Validators];
    const result: any = joi.validate(j, data);
    return result as T;
}
