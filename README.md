# Unexpected Behavior with Loose Equality and Null/NaN in JavaScript

This repository demonstrates a common JavaScript bug related to loose equality (`==`) and the handling of `null` and `NaN` values.  The bug arises from the fact that JavaScript's loose equality does not always behave as expected when comparing values of different types, often leading to unexpected results or silent failures.  The provided solution showcases how to use strict equality (`===`) to avoid such issues and improve code reliability.

## Bug Description:
The original code uses loose equality to check for `null` values before performing addition. This approach has flaws when either `a` or `b` is `NaN`, as `NaN == null` evaluates to `false`.  This means that the addition will still occur, even though the result will be `NaN`, possibly leading to unexpected downstream errors.

## Solution:
The solution uses strict equality (`===`) which checks for both value and type, therefore accurately detecting null values.  It also includes a check for `NaN` explicitly, ensuring that the function handles `NaN` values correctly and returns a meaningful value instead of propagating the unexpected `NaN` result.  This results in more robust and predictable behavior, helping prevent silent failures.