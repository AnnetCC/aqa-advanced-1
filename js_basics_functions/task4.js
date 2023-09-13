const isNotNumeric = number => isNaN(parseFloat(number)) || !isFinite(number) || typeof number !== "number";

const validate = (condition, message) => {
    if (condition) throw new Error(message);
}

function divide(numerator, denominator) {
    try {
        validate(denominator === 0, "Denominator is 0");
        validate(isNotNumeric(numerator), `Numerator <${numerator}> is not a number`);
        validate(isNotNumeric(denominator), `Denominator <${denominator}> is not a number`);

        console.log(numerator / denominator);

    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Done.")
    }
}

divide(24, 8);
divide(2.34, 3.45);
divide(0, 0);
divide(0.0, 10);
divide(23, 0);
divide(-90, 10);
divide(-9.23, 8);
divide(8, 7);
divide(Infinity, 8);
divide(24, Infinity);
divide(-Infinity, 8);
divide(24, -Infinity);
divide("34", 78);
divide(56, "23.4");
divide([1,2,[34,5,6]], 34);
divide(24, [1,2,[34,5,6]]);
divide(NaN, NaN);
divide(24, NaN);
divide(90, {num: 45});
divide(null, 23);
divide(90, null);
divide("", 12);
divide(19, "");
divide(undefined, 67);
divide(-91, undefined);



