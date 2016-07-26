import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';

export function Insensitive() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'insensitive');
    }
}

export function Min(limit: number, encoding?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'min', [limit, encoding]);
    }
}

export function Max(limit: number, encoding?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'max', [limit, encoding]);
    }
}

export function CreditCard() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'creditCard');
    }
}

export function Length(limit: number, encoding?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'length', [limit, encoding]);
    }
}

export function Regex(pattern: RegExp, name?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'regex', [pattern, name]);
    }
}

export function Replace(pattern: RegExp, replacement: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'replace', [pattern, replacement]);
    }
}

export function Alphanum() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'alphanum');
    }
}

export function Token() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'token');
    }
}

export function Email(options?: {
    errorLevel?: number,
    tldWhitelist?: string[],
    minDomainAtoms?: Number,
}) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'email', options);
    }
}

export function Ip(options?: {
    version?: 'ipv4' | 'ipv6' | 'ipvfuture',
    cidr?: 'optional' | 'required' | 'forbidden',
}) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'ip', [options]);
    }
}

export function Uri(options?: {
    scheme?: string | string[],
    allowRelative?: boolean,
}) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'uri', [options]);
    }
}

export function Guid() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'guid');
    }
}

export function Hex() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'hex');
    }
}

export function Hostname() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'hostname');
    }
}

export function Lowercase() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'lowercase');
    }
}

export function Uppercase() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'uppercase');
    }
}

export function Trim() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'trim');
    }
}

export function IsoDate() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        append(prototype, key, String, 'iosDate');
    }
}
