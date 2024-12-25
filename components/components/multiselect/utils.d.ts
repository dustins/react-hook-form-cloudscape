import { MultiselectProps } from '@cloudscape-design/components';
declare const MultiSelectUtils: {
    transformMultiselectOptionsToArray: (selectedOptions?: MultiselectProps.Options) => string[];
    mapSelectedOptionsWithOptions: (options?: MultiselectProps.Options, selectedOptions?: string[]) => Array<MultiselectProps.Option | MultiselectProps.OptionGroup>;
};
export default MultiSelectUtils;
