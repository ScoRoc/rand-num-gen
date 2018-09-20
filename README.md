# rand-num-gen

A simple module for generating random numbers.

```
rng(30, 14, { float: true, decimal: 2, skip: [16, 17, 25, 29] });
```

**Installing**

```
$ npm i rand-num-gen
```

**Exports**

The export is `{ rng }`. Here's how to use it:

```
import { rng } from 'rand-num-gen';

console.log( rng(10, 1, { skip: [7, 8, 9] }) );      // Logs an integer to the console.
```

**Syntax and Options**

```
rng(max[, min[, options]])
```

| Parameter  | Syntax                                                      | Description/parameters |
| ---------- | ----------------------------------------------------------- | ----------- |
| max        | `rng(max)`                                                  | Required. An integer. The highest positive number returned from `rng(max)`. |
| min        | `rng(max, min)`                                             | An integer. The lowest positive or negative number returned from `rng(max, min)`. |
| float      | `rng(max, min, { float: bool })`                            | A boolean. Determines whether the returned value will be a float or an integer. |
| decimal    | `rng(max, min, { decimal: n })`                             | An integer between 0 and 14. Determines how many places which will be displayed by the float. |
| skip       | `rng(max, min, { skip: value1[, value2[,...[, valueN]]] })` | An array of integers. Integers which will not be returned. |

**Return value**

A random integer or float.

Skipped integers which will never be returned.

Integers passed with `{ skip: value1[, value2[, ....[, valueN]]] }` when `{ float: true }` will cause floats starting with the skipped integers to never be returned as well.

An integer will be returned when `decimal: 0`.

**Examples**

```
Defaults:
rng(max, min = 0, { float: false, decimal: 14, skip: false })

rng(7);                                                 // Returns an integer between 0 and 7, both inclusive.
rng(7, 2);                                              // Returns an integer between 2 and 7, both inclusive.
rng(7, 2, { float: true });                             // Returns a float between 2, inclusive, and 7, exclusive.
rng(7, 2, { float: true, decimal: 2 });                 // Returns a float with two decimal places between 2, inclusive, and 7, exclusive.
rng(7, 2, { float: true, decimal: 2, skip: [3, 4] })    // Returns a float with two decimal places between 2, inclusive, and 7, exclusive. Will never return a float between 3.0 and 4.99999999999999 .
rng(7, 2, { skip: [3, 4] })                             // Returns an integer between 2 and 7. Will never return 3 or 4.


________________________________________________________________________
