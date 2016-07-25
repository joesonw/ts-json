import ReflectType from '../ReflectType';
import 'reflect-metadata';
import append from './append';

export function Insensitive() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Insensitive can only be applied on string fields`);
        }
        append(prototype, key, type, 'insensitive');
    }
}

export function Min(limit: number, encoding?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Min can only be applied on string fields`);
        }
        append(prototype, key, type, 'min', [limit, encoding]);
    }
}

export function Max(limit: number, encoding?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Max can only be applied on string fields`);
        }
        append(prototype, key, type, 'max', [limit, encoding]);
    }
}

export function CreditCard() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@CreditCard can only be applied on string fields`);
        }
        append(prototype, key, type, 'creditCard');
    }
}

export function Length(limit: number, encoding?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Length can only be applied on string fields`);
        }
        append(prototype, key, type, 'length', [limit, encoding]);
    }
}

export function Regex(pattern: RegExp, name?: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Regex can only be applied on string fields`);
        }
        append(prototype, key, type, 'regex', [pattern, name]);
    }
}

export function Replace(pattern: RegExp, replacement: string) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Replace can only be applied on string fields`);
        }
        append(prototype, key, type, 'replace', [pattern, replacement]);
    }
}

export function Alphanum() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Alphanum can only be applied on string fields`);
        }
        append(prototype, key, type, 'alphanum');
    }
}

export function Token() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Token can only be applied on string fields`);
        }
        append(prototype, key, type, 'token');
    }
}

export function Email(options?: {
    errorLevel?: number,
    tldWhitelist?: string[],
    minDomainAtoms?: Number,
}) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Email can only be applied on string fields`);
        }
        append(prototype, key, type, 'email', options);
    }
}

export function Ip(options?: {
    version?: 'ipv4' | 'ipv6' | 'ipvfuture',
    cidr?: 'optional' | 'required' | 'forbidden',
}) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Ip can only be applied on string fields`);
        }
        append(prototype, key, type, 'ip', [options]);
    }
}

export function Uri(options?: {
    scheme?: string | string[],
    allowRelative?: boolean,
}) {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Uri can only be applied on string fields`);
        }
        append(prototype, key, type, 'uri', [options]);
    }
}

export function Guid() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Guid can only be applied on string fields`);
        }
        append(prototype, key, type, 'guid');
    }
}

export function Hex() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Hex can only be applied on string fields`);
        }
        append(prototype, key, type, 'hex');
    }
}

export function Hostname() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Hostname can only be applied on string fields`);
        }
        append(prototype, key, type, 'hostname');
    }
}

export function Lowercase() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Lowercase can only be applied on string fields`);
        }
        append(prototype, key, type, 'lowercase');
    }
}

export function Uppercase() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Uppercase can only be applied on string fields`);
        }
        append(prototype, key, type, 'uppercase');
    }
}

export function Trim() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@Trim can only be applied on string fields`);
        }
        append(prototype, key, type, 'trim');
    }
}

export function IsoDate() {
    return (prototype: any, key: string) => {
        const type = Reflect.getMetadata(ReflectType.TYPE, prototype, key);
        if (type !== String) {
            throw new Error(`@IsoDate can only be applied on string fields`);
        }
        append(prototype, key, type, 'iosDate');
    }
}
