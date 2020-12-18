function shortestString(input) {
    const shortest = input.reduce(function (a, b) {
        if (a.length < b.length) {
            return a;
        } else {
            return b;
        }
    });
    return shortest;
}

console.log(shortestString(["Hello", "hey", "hi"]));


