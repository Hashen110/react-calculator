# React Calculator

A simple lightweight react calculator component.

[![npm version](https://img.shields.io/badge/npm-1.0.1-blue.svg)](https://www.npmjs.com/package/react-calculator)
[![licence type](https://img.shields.io/badge/licence-MIT-yellow.svg)](https://www.npmjs.com/package/react-calculator)

## Options

### Props
|Prop|Type|Return|Default|Usage|
|------------------|----------|------------------|-----|-------------------------------------------------------------|
|numberButtonColor |`string`  |                  |     |Change the color of number buttons                           |
|symbolButtonColor |`string`  |                  |grey |Change the color of symbol buttons                           |
|equalButtonColor  |`string`  |                  |blue |Change the color of equal buttons                            |
|disableContextMenu|`boolean` |                  |false|Disable context menu (right click)                           |
|gap               |`number`  |                  |5    |Change gap between buttons. value use as pixel               |
|onInputChange     |`function`|`string`, `string`|     |Trigger when input is entered. Return new value and old value|
|onResult          |`function`|`string`, `string`|     |Trigger when equal button clicked.Return expression and value|
|onClear           |`function`|`string`          |     |Trigger when clear button clicked. Returns cleared value     |


### Note

Please set the **width and height** of the parent element of our the `<Calculator />` Component. You can add border by adding **border** to the parent element.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)