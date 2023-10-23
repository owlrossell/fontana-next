export const stringToUrl = (argument: string) => {
    return argument
        .toLowerCase()
        .replace(/ /g, '-');
}