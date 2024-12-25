import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Multiselect } from '@cloudscape-design/components';
import MultiSelectUtils from './utils';
const CMultiselect = (_a) => {
    var { name, control, options, defaultValue, rules, onBlur, onChange, shouldUnregister = false } = _a, props = __rest(_a, ["name", "control", "options", "defaultValue", "rules", "onBlur", "onChange", "shouldUnregister"]);
    const handleOnBlur = useCallback((event) => {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const handleOnChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, defaultValue: defaultValue, rules: rules, shouldUnregister: shouldUnregister, render: ({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (React.createElement(Multiselect, Object.assign({ ref: ref, options: options, onBlur: (e) => {
                formOnBlur();
                handleOnBlur(e);
            }, onChange: (e) => {
                formOnChange(MultiSelectUtils.transformMultiselectOptionsToArray(e.detail.selectedOptions)); // Transform selectedOptions
                handleOnChange(e);
            }, selectedOptions: value }, props))) }));
};
export default CMultiselect;
//# sourceMappingURL=multiselect.js.map