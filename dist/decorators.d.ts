/// <reference path="../node_modules/reflect-metadata/typings.d.ts" />
import 'reflect-metadata';
export declare function Item(value: any, message?: string): (prototype: any, key: string) => void;
export declare function Min(value: number, message?: string): (prototype: any, key: string) => void;
export declare function Max(value: number, message?: string): (prototype: any, key: string) => void;
export declare function Length(value: number, message?: string): (prototype: any, key: string) => void;
export declare function Unique(message?: string): (prototype: any, key: string) => void;
export declare function Int(message?: string): (prototype: any, key: string) => void;
export declare function Valid(value: any, message?: string): (prototype: any, key: string) => void;
export declare function Regex(value: any, message?: string): (prototype: any, key: string) => void;
export declare function Required(message?: string): (prototype: any, key: string) => void;
