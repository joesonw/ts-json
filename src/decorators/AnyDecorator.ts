import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';

export function Allow(...values: any[]) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        for (const value of values) {
            if (value.constructor !== type) {
                throw new Error(`@Allow only takes value matches filed type`)
            }
        }
        append(prototype, key, type, 'allow', values);
    }
}

export function Valid(...values: any[]) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        for (const value of values) {
            if (value.constructor !== type) {
                throw new Error(`@Valid only takes value matches filed type`)
            }
        }
        append(prototype, key, type, 'valid', values);
    }
}

export function Invalid(...values: any[]) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        for (const value of values) {
            if (value.constructor !== type) {
                throw new Error(`@Invalid only takes value matches filed type`)
            }
        }
        append(prototype, key, type, 'invalid', values);
    }
}

export function Required() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'required');
    }
}

export function Optional() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'optional');
    }
}

export function Forbidden() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'forbidden');
    }
}

export function Strip() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'strip');
    }
}

export function Description(desc: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'description', desc);
    }
}

export function Notes(notes: string | string[]) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'notes', [notes]);
    }
}

export function Tags(tags: string | string[]) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'tags', [tags]);
    }
}

export function Meta(meta) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'meta', meta);
    }
}

export function Example(value) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (value.constructor !== type) {
            throw new Error(`@Example only takes value matches filed type`)
        }
        append(prototype, key, type, 'example', value);
    }
}

export function Unit(name: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'unit', name);
    }
}

export function Options(options) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'options', options);
    }
}

export function Strict(isStrict: boolean) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'strict', isStrict);
    }
}

export function Default(value, description?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (value.constructor !== type) {
            throw new Error(`@Default only takes value matches filed type`)
        }
        append(prototype, key, type, 'default', [value, description]);
    }
}

export function Label(name: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, type, 'label', name);
    }
}
