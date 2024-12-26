import { MultiselectProps } from '@cloudscape-design/components';
import MultiSelectUtils from './utils';

describe('MultiSelectUtils', () => {
  describe('transformMultiselectOptionsToArray', () => {
    it('should return an empty array if no options are provided', () => {
      expect(MultiSelectUtils.transformMultiselectOptionsToArray()).toEqual([]);
    });

    it('should return an array of strings for simple options', () => {
      const options: MultiselectProps.Options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ];
      expect(MultiSelectUtils.transformMultiselectOptionsToArray(options)).toEqual(['option1', 'option2']);
    });

    it('should return an array of strings for grouped options', () => {
      const options: MultiselectProps.Options = [
        {
          label: 'Group 1',
          options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ],
        },
        { value: 'option3', label: 'Option 3' },
      ];
      expect(MultiSelectUtils.transformMultiselectOptionsToArray(options)).toEqual(['option1', 'option2', 'option3']);
    });
  });

  describe('mapSelectedOptionsWithOptions', () => {
    it('should return an empty array if no options or selectedOptions are provided', () => {
      expect(MultiSelectUtils.mapSelectedOptionsWithOptions()).toEqual([]);
      expect(MultiSelectUtils.mapSelectedOptionsWithOptions([])).toEqual([]);
      expect(MultiSelectUtils.mapSelectedOptionsWithOptions([], ['option1'])).toEqual([]);
    });

    it('should return an array of selected options for simple options', () => {
      const options: MultiselectProps.Options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const selectedOptions = ['option1', 'option3'];
      const expectedOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option3', label: 'Option 3' },
      ];
      expect(MultiSelectUtils.mapSelectedOptionsWithOptions(options, selectedOptions)).toEqual(expectedOptions);
    });

    it('should return an array of selected options for grouped options', () => {
      const options: MultiselectProps.Options = [
        {
          label: 'Group 1',
          options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ],
        },
        { value: 'option3', label: 'Option 3' },
      ];
      const selectedOptions = ['option2', 'option3'];
      const expectedOptions = [
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      expect(MultiSelectUtils.mapSelectedOptionsWithOptions(options, selectedOptions)).toEqual(expectedOptions);
    });
  });
});
