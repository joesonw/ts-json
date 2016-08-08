import 'reflect-metadata';
export declare function Min(limit: string): (prototype: any, key: string) => void;
export declare function Max(limit: string): (prototype: any, key: string) => void;
export declare function Format(format: string): (prototype: any, key: string) => void;
export declare function Iso(): (prototype: any, key: string) => void;
export declare function Timestamp(type?: 'javascript' | 'unix'): (prototype: any, key: string) => void;
