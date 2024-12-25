import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Toggle } from '@cloudscape-design/components';
const CToggle = (_a) => {
    var { name, control, onChange } = _a, props = __rest(_a, ["name", "control", "onChange"]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.checked);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { ref, onChange, value = false } }) => (React.createElement(Toggle, Object.assign({ ref: ref, name: name, checked: value, onChange: handleOnChange.bind(null, onChange) }, props))) }));
};
export default CToggle;
//# sourceMappingURL=toggle.js.map