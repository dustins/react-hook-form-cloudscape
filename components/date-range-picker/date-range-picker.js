import { __rest } from "tslib";
import { DateRangePicker } from '@cloudscape-design/components';
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
const CDateRangePicker = (_a) => {
    var { name, control, onBlur, onChange } = _a, props = __rest(_a, ["name", "control", "onBlur", "onChange"]);
    const handleOnBlur = useCallback((event) => {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, [onBlur]);
    const handleOnChange = useCallback((event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (React.createElement(DateRangePicker, Object.assign({ ref: ref, value: value, onBlur: (e) => {
                formOnBlur();
                handleOnBlur(e);
            }, onChange: (e) => {
                formOnChange(e.detail.value);
                handleOnChange(e);
            } }, props))) }));
};
export default CDateRangePicker;
//# sourceMappingURL=date-range-picker.js.map