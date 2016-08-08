import 'reflect-metadata';
export declare function Allow(...values: any[]): (prototype: any, key: string) => void;
export declare function Items(value?: any): (prototype: any, key: string) => void;
export declare function Sparse(enabled?: boolean): (prototype: any, key: string) => void;
export declare function Single(enabled?: boolean): (prototype: any, key: string) => void;
export declare function Min(limit: number): (prototype: any, key: string) => void;
export declare function Max(limit: number): (prototype: any, key: string) => void;
export declare function Length(limit: number): (prototype: any, key: string) => void;
export declare function Unique(): (prototype: any, key: string) => void;
