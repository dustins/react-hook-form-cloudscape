import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { TimeInput } from '@cloudscape-design/components';
const CTimeInput = (_a) => {
    var { name, control, onBlur, onChange } = _a, props = __rest(_a, ["name", "control", "onBlur", "onChange"]);
    const handleOnBlur = useCallback((formOnBlur, e) => {
        formOnBlur();
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    }, [onBlur]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { ref, onChange, onBlur, value } }) => (React.createElement(TimeInput, Object.assign({ name: name, ref: ref, value: value, onBlur: handleOnBlur.bind(null, onBlur), onChange: handleOnChange.bind(null, onChange) }, props))) }));
};
export default CTimeInput;
//# sourceMappingURL=time-input.js.map