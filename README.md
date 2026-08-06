# string-builder

Simple package for building strings.

## Methods

### toString({ joiner = '' } = {})

Returns a `string` representation of the strings in the `StringBuilder` instance, joined by `joiner`. Joiner is passed as an object attribute to the first parameter (empty string by default).

### add(...strings)

Add one or more strings to the `StringBuilder` instance.

### addIf(maybe, ...strings)

Add one or more strings to the `StringBuilder` instance if the condition is truthy. The condition is the first argument, followed by the strings.

### addTimes(string, times)

Add a string some amount of times to the `StringBuilder` instance. The string is the first argument, followed by the amount of times (should be an integer bigger than or equal to zero).

### format(...args)

Uses [string-format](https://github.com/davidchambers/string-format) to achieve Python-style string formatting. For example

```js
stringBuilder('Hello {planet}').format({ planet: 'world' }).toString();
// => 'Hello world'
```
