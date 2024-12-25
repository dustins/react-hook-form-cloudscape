import { __rest } from "tslib";
import React, { useMemo } from 'react';
import { AttributeEditor } from '@cloudscape-design/components';
import { useFieldArray, useFormState, get, } from 'react-hook-form';
const CAttributeEditor = (_a) => {
    var { name, control, onRemoveButtonClick, onAddButtonClick, definition, defaultValue, handleState = true } = _a, props = __rest(_a, ["name", "control", "onRemoveButtonClick", "onAddButtonClick", "definition", "defaultValue", "handleState"]);
    const { errors } = useFormState({ control });
    const { fields, append, remove } = useFieldArray({
        name,
        control,
    });
    const definitionWithError = useMemo(() => definition.map((def) => (Object.assign({ errorText: (_item, index) => def.label &&
            get(errors, `${name}.${index}.${def.label.toString().toLowerCase()}.message`) }, def))), [definition, errors, name]);
    return (React.createElement(AttributeEditor, Object.assign({ definition: definitionWithError, items: fields || [], onRemoveButtonClick: (e) => {
            if (handleState) {
                remove(e.detail.itemIndex);
            }
            onRemoveButtonClick === null || onRemoveButtonClick === void 0 ? void 0 : onRemoveButtonClick(e, remove);
        }, onAddButtonClick: (e) => {
            if (handleState) {
                append(defaultValue);
            }
            onAddButtonClick === null || onAddButtonClick === void 0 ? void 0 : onAddButtonClick(e, append);
        } }, props)));
};
export default CAttributeEditor;
//# sourceMappingURL=attribute-editor.js.map