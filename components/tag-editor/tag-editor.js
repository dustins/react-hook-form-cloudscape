import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { TagEditor } from '@cloudscape-design/components';
const CTagEditor = (_a) => {
    var { name, control, onChange } = _a, props = __rest(_a, ["name", "control", "onChange"]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange([...e.detail.tags]);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { ref, onChange, value } }) => (React.createElement(TagEditor, Object.assign({ ref: ref, tags: value || [], onChange: handleOnChange.bind(null, onChange) }, props))) }));
};
export default CTagEditor;
//# sourceMappingURL=tag-editor.js.map