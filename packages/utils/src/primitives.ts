export const isBigInt = (x: unknown): x is bigint => typeof x === "bigint";

export const isBoolean = (x: unknown): x is boolean => typeof x === "boolean";

export const isFunction = (x: unknown): x is typeof Function => typeof x === "function";

export const isNumber = (x: unknown): x is number => typeof x === "number";

export const isObject = (x: unknown): x is Record<string | number | symbol, unknown> =>
	typeof x === "object";

export const isString = (x: unknown): x is string => typeof x === "string";

export const isSymbol = (x: unknown): x is symbol => typeof x === "symbol";

export const isUndefined = (x: unknown): x is undefined => typeof x === "undefined";
