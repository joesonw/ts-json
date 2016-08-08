import 'reflect-metadata';
export declare function Insensitive(): (prototype: any, key: string) => void;
export declare function Min(limit: number, encoding?: string): (prototype: any, key: string) => void;
export declare function Max(limit: number, encoding?: string): (prototype: any, key: string) => void;
export declare function CreditCard(): (prototype: any, key: string) => void;
export declare function Length(limit: number, encoding?: string): (prototype: any, key: string) => void;
export declare function Regex(pattern: RegExp, name?: string): (prototype: any, key: string) => void;
export declare function Replace(pattern: RegExp, replacement: string): (prototype: any, key: string) => void;
export declare function Alphanum(): (prototype: any, key: string) => void;
export declare function Token(): (prototype: any, key: string) => void;
export declare function Email(options?: {
    errorLevel?: number;
    tldWhitelist?: string[];
    minDomainAtoms?: Number;
}): (prototype: any, key: string) => void;
export declare function Ip(options?: {
    version?: 'ipv4' | 'ipv6' | 'ipvfuture';
    cidr?: 'optional' | 'required' | 'forbidden';
}): (prototype: any, key: string) => void;
export declare function Uri(options?: {
    scheme?: string | string[];
    allowRelative?: boolean;
}): (prototype: any, key: string) => void;
export declare function Guid(): (prototype: any, key: string) => void;
export declare function Hex(): (prototype: any, key: string) => void;
export declare function Hostname(): (prototype: any, key: string) => void;
export declare function Lowercase(): (prototype: any, key: string) => void;
export declare function Uppercase(): (prototype: any, key: string) => void;
export declare function Trim(): (prototype: any, key: string) => void;
export declare function IsoDate(): (prototype: any, key: string) => void;
