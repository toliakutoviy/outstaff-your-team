export function makeUnique(data: { [key: string]: any }[], uniqueKey: string, unificatorKey: string): { [key: string]: any }[] {
    const uniqueValues: { [key: string]: boolean } = {};

    for (const obj of data) {
        const value = obj[uniqueKey];
        const unificator = obj[unificatorKey];

        if (uniqueValues[value]) {
            const newValue = `${value}-${unificator}`;
            obj[uniqueKey] = newValue;
            uniqueValues[newValue] = true;
        } else {
            uniqueValues[value] = true;
        }
    }

    return data;
}

const data = [
    { id: "1", name: "Qwerty", unificator: "A" },
    { id: "2", name: "Asdfg", unificator: "B" },
    { id: "3", name: "Qwerty", unificator: "C" },
    { id: "4", name: "Asdfg", unificator: "D" }
];

const uniqueKey = "name";
const unificatorKey = "unificator";

const modifiedData = makeUnique(data, uniqueKey, unificatorKey);
console.log(modifiedData);