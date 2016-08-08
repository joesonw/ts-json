"use strict";
const Symbols_1 = require('./Symbols');
const joi = require('joi');
function parse(schema, data) {
    let ret = new schema();
    const j = schema.prototype[Symbols_1.Validators];
    const { error, value } = joi.validate(data, joi.object(j));
    if (error)
        throw error;
    const embed = schema.prototype[Symbols_1.EmbedType] || {};
    for (const key in value) {
        if (embed[key]) {
            if (Array.isArray(data[key])) {
                ret[key] = [];
                for (const item of value[key]) {
                    ret[key].push(parse(embed[key], item));
                }
            }
            else {
                ret[key] = parse(embed[key], value[key]);
            }
        }
        else {
            ret[key] = value[key];
        }
    }
    return ret;
}
function validate(schema, data) {
    const embed = schema.prototype[Symbols_1.EmbedType] || {};
    let ret = parse(schema, data);
    return ret;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validate;
