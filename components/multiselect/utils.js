const transformMultiselectOptionsToArray = (selectedOptions = []) => {
    if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
        return selectedOptions
            .map((option) => {
            if ('options' in option) {
                return transformMultiselectOptionsToArray(option.options);
            }
            return option.value;
        })
            .flat();
    }
    return [];
};
const mapSelectedOptionsWithOptions = (options = [], selectedOptions = []) => {
    if ((options === null || options === void 0 ? void 0 : options.length) && (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length)) {
        return options
            .reduce((accOptions, currentOption) => {
            if (options === null || options === void 0 ? void 0 : options.length) {
                if ('options' in currentOption) {
                    const matchedOptions = mapSelectedOptionsWithOptions(currentOption.options, selectedOptions);
                    if (matchedOptions === null || matchedOptions === void 0 ? void 0 : matchedOptions.length) {
                        accOptions.push(...matchedOptions);
                    }
                }
                if ('value' in currentOption) {
                    if (selectedOptions.find((record) => record === currentOption.value)) {
                        accOptions.push(currentOption);
                    }
                }
            }
            return accOptions;
        }, [])
            .flat();
    }
    return [];
};
const MultiSelectUtils = {
    transformMultiselectOptionsToArray,
    mapSelectedOptionsWithOptions,
};
export default MultiSelectUtils;
//# sourceMappingURL=utils.js.map