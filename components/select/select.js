import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Select } from '@cloudscape-design/components';
import SelectUtils from './utils';
const CSelect = (_a) => {
    var { name, control, defaultValue, rules, shouldUnregister = false, onBlur, onChange } = _a, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onBlur", "onChange"]);
    const handleOnBlur = useCallback((formOnBlur, e) => {
        formOnBlur();
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    }, [onBlur]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.selectedOption.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, defaultValue: defaultValue, rules: rules, shouldUnregister: shouldUnregister, render: ({ field: { ref, onChange, onBlur, value } }) => (React.createElement(Select, Object.assign({ ref: ref, selectedOption: SelectUtils.mapSelectedOptionWithOptions(props.options, value), onBlur: handleOnBlur.bind(null, onBlur), onChange: handleOnChange.bind(null, onChange) }, props))) }));
};
export default CSelect;
//# sourceMappingURL=select.js.map