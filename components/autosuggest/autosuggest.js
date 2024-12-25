import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Autosuggest } from '@cloudscape-design/components';
export const CAutosuggest = (_a) => {
    var { name, control, defaultValue, rules, shouldUnregister = false, onBlur, onChange } = _a, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onBlur", "onChange"]);
    const handleOnBlur = useCallback((event) => {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const handleOnChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, defaultValue: defaultValue, rules: rules, shouldUnregister: shouldUnregister, render: ({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (React.createElement(Autosuggest, Object.assign({ ref: ref, name: name, value: value || '', onBlur: (e) => {
                formOnBlur();
                handleOnBlur(e);
            }, onChange: (e) => {
                formOnChange(e.detail.value);
                handleOnChange(e);
            } }, props))) }));
};
export default CAutosuggest;
//# sourceMappingURL=autosuggest.js.map