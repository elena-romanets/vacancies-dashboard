export const getId = (value: string) => {

    const idSufix = Math.random().toString(36)+'00000000000000000'.slice(2, 7);


    return value.concat(idSufix);
}