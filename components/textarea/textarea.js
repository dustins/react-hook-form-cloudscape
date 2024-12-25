import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Textarea } from '@cloudscape-design/components';
import { Controller } from 'react-hook-form';
const CTextarea = (_a) => {
    var { name, control, defaultValue, rules, shouldUnregister = false, onBlur, onChange } = _a, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onBlur", "onChange"]);
    const handleOnBlur = useCallback((formOnBlur, e) => {
        formOnBlur();
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    }, [onBlur]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, defaultValue: defaultValue, rules: rules, shouldUnregister: shouldUnregister, render: ({ field: { onChange, onBlur, value, ref } }) => (React.createElement(Textarea, Object.assign({ ref: ref, name: name, value: value, onBlur: handleOnBlur.bind(null, onBlur), onChange: handleOnChange.bind(null, onChange) }, props))) }));
};
export default CTextarea;
//# sourceMappingURL=textarea.js.map