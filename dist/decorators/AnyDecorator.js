"use strict";
const ReflectType_1 = require('../ReflectType');
require('reflect-metadata');
const append_1 = require('./append');
function Allow(...values) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        for (const value of values) {
            if (value.constructor !== type) {
                throw new Error(`@Allow only takes value matches filed type`);
            }
        }
        append_1.default(prototype, key, type, 'allow', values);
    };
}
exports.Allow = Allow;
function Valid(...values) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        for (const value of values) {
            if (value.constructor !== type) {
                throw new Error(`@Valid only takes value matches filed type`);
            }
        }
        append_1.default(prototype, key, type, 'valid', values);
    };
}
exports.Valid = Valid;
function Invalid(...values) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        for (const value of values) {
            if (value.constructor !== type) {
                throw new Error(`@Invalid only takes value matches filed type`);
            }
        }
        append_1.default(prototype, key, type, 'invalid', values);
    };
}
exports.Invalid = Invalid;
function Required() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'required');
    };
}
exports.Required = Required;
function Optional() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'optional');
    };
}
exports.Optional = Optional;
function Forbidden() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'forbidden');
    };
}
exports.Forbidden = Forbidden;
function Strip() {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'strip');
    };
}
exports.Strip = Strip;
function Description(desc) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'description', desc);
    };
}
exports.Description = Description;
function Notes(notes) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'notes', [notes]);
    };
}
exports.Notes = Notes;
function Tags(tags) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'tags', [tags]);
    };
}
exports.Tags = Tags;
function Meta(meta) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'meta', meta);
    };
}
exports.Meta = Meta;
function Example(value) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        if (value.constructor !== type) {
            throw new Error(`@Example only takes value matches filed type`);
        }
        append_1.default(prototype, key, type, 'example', value);
    };
}
exports.Example = Example;
function Unit(name) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'unit', name);
    };
}
exports.Unit = Unit;
function Options(options) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'options', options);
    };
}
exports.Options = Options;
function Strict(isStrict) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'strict', isStrict);
    };
}
exports.Strict = Strict;
function Default(value, description) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        if (value.constructor !== type) {
            throw new Error(`@Default only takes value matches filed type`);
        }
        append_1.default(prototype, key, type, 'default', [value, description]);
    };
}
exports.Default = Default;
function Label(name) {
    return (prototype, key) => {
        const type = Reflect.getMetadata(ReflectType_1.default.TYPE, prototype, key);
        append_1.default(prototype, key, type, 'label', name);
    };
}
exports.Label = Label;
