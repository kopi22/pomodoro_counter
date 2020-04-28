const arrayDeepCopy = (array) => {
    return array.map(el => Object.assign({}, el));
}

export { arrayDeepCopy };