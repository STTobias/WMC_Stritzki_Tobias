const a = [23, false, -7n, true, "Vladimir", { age: 11 }];

const typeOrder = ["boolean", "number", "bigint", "string", "object"];

const sorted = [...a].sort((x, y) => {
    const tx = typeof x;
    const ty = typeof y;

    if (tx !== ty) {
        return typeOrder.indexOf(tx) - typeOrder.indexOf(ty);
    }

    if (tx === "boolean") return x - y;
    if (tx === "number") return x - y;
    if (tx === "bigint") return x < y ? -1 : x > y ? 1 : 0;
    if (tx === "string") return x.localeCompare(y);

    return 0;
});

console.log(sorted);
