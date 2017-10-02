# arrayUnique
Ensure array values are unique, key agnostic. Currently uses iterative key rather than for each.

## Requires

* isArray

## Usage

```
    var a = [1,2,3,4,5,1,1,1];
    console.log(arrayUnique(a)) = [1,2,3,4,5];
```

## Issues

* Uses iterative key rather than foreach, revise?
* Expand to add key-concern?
