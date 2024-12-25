import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { RadioGroup } from '@cloudscape-design/components';
const CRadioGroup = (_a) => {
    var { name, control, onChange } = _a, props = __rest(_a, ["name", "control", "onChange"]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { onChange, value } }) => (React.createElement(RadioGroup, Object.assign({ onChange: handleOnChange.bind(null, onChange), value: value, items: props.items }, props))) }));
};
export default CRadioGroup;
//# sourceMappingURL=radio-group.js.map