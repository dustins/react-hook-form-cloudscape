import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox } from '@cloudscape-design/components';
const CCheckbox = (_a) => {
    var { name, control, onChange } = _a, props = __rest(_a, ["name", "control", "onChange"]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.checked);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { ref, onChange, value = false } }) => (React.createElement(Checkbox, Object.assign({ ref: ref, onChange: handleOnChange.bind(null, onChange), checked: value }, props))) }));
};
export default CCheckbox;
//# sourceMappingURL=checkbox.js.map