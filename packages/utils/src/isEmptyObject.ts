import { isObject } from "./primitives";
import { isArray } from "./isArray";

/**
 * isEmptyObject is confusing and will behave unexpectedly unless you know the inner workings.
 * Arguably a object with a million keys but all values are undefined is "empty" but this function will return true.
 *
 * This function only checks if the object has no keys.
 *
 * @deprecated - Deprecated because I will argue checking that a object has no keys is a bad practice!
 */

export const isEmptyObject = (x: unknown): boolean =>
	isObject(x) && !isArray(x) && Object.keys(x).length === 0;
