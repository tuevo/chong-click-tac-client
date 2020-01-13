(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-visitor-tools-visitor-tools-module"],{

/***/ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/conversion.js ***!
  \************************************************************/
/*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return rgbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return rgbaToArgbHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return convertHexToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return parseIntFromHex; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");

function rgbToRgb(r, g, b) {
    return {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
        g: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
        b: Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255,
    };
}
function rgbToHsl(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + ((q - p) * (6 * t));
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + ((q - p) * ((2 / 3) - t) * 6);
    }
    return p;
}
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    l = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);
    if (s === 0) {
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? (l * (1 + s)) : (l + s - (l * s));
        var p = (2 * l) - q;
        r = hue2rgb(p, q, h + (1 / 3));
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
    r = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
    g = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
    b = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = ((g - b) / d) + (g < b ? 6 : 0);
                break;
            case g:
                h = ((b - r) / d) + 2;
                break;
            case b:
                h = ((r - g) / d) + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
function hsvToRgb(h, s, v) {
    h = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
    s = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
    v = Object(_util__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - (f * s));
    var t = v * (1 - ((1 - f) * s));
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
    ];
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)),
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
    return parseInt(val, 16);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js ***!
  \*****************************************************************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/format-input.js ***!
  \**************************************************************/
/*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return inputToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return isValidCSSUnit; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");



function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            v = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
            l = Object(_util__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
            rgb = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = Object(_util__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
var CSS_INTEGER = '[-\\+]?\\d+%?';
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            a: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
            g: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
            b: Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js ***!
  \************************************************************/
/*! exports provided: fromRatio, legacyRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return fromRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return legacyRandom; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");


function fromRatio(ratio, opts) {
    var newColor = {
        r: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
        g: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
        b: Object(_util__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b),
    };
    if (ratio.a !== undefined) {
        newColor.a = Number(ratio.a);
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
}
function legacyRandom() {
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    });
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/index.js ***!
  \*******************************************************/
/*! exports provided: TinyColor, tinycolor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return TinyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return tinycolor; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/es/util.js");




var TinyColor = (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        if (color instanceof TinyColor) {
            return color;
        }
        this.originalInput = color;
        var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format, (_a !== null && _a !== void 0 ? _a : rgb.format));
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    TinyColor.prototype.getBrightness = function () {
        var rgb = this.toRgb();
        return ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
    };
    TinyColor.prototype.getLuminance = function () {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    };
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = Object(_util__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    TinyColor.prototype.toHsv = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor.prototype.toHsvString = function () {
        var hsv = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHsl = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor.prototype.toHslString = function () {
        var hsl = Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
    };
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(Object(_util__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100); };
        return this.a === 1 ?
            "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)" :
            "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.keys(_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (_css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"][key] === hex) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = (format !== null && format !== void 0 ? format : this.format);
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = Object(_util__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
        return new TinyColor(hsl);
    };
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
            g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
            b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
            a: ((rgb2.a - rgb1.a) * p) + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + (i * increment)) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/public_api.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/public_api.js ***!
  \************************************************************/
/*! exports provided: default, TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; });

/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/es/css-color-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "names", function() { return _css_color_names__WEBPACK_IMPORTED_MODULE_1__["names"]; });

/* harmony import */ var _readability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readability */ "./node_modules/@ctrl/tinycolor/dist/es/readability.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["readability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["isReadable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return _readability__WEBPACK_IMPORTED_MODULE_2__["mostReadable"]; });

/* harmony import */ var _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-ms-filter */ "./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return _to_ms_filter__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"]; });

/* harmony import */ var _from_ratio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-ratio */ "./node_modules/@ctrl/tinycolor/dist/es/from-ratio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["fromRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return _from_ratio__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"]; });

/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/es/format-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return _format_input__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random */ "./node_modules/@ctrl/tinycolor/dist/es/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return _random__WEBPACK_IMPORTED_MODULE_6__["bounds"]; });









/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]);


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/random.js":
/*!********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/random.js ***!
  \********************************************************/
/*! exports provided: random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return bounds; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");

function random(options) {
    if (options === void 0) { options = {}; }
    if (options.count !== undefined && options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    var h = pickHue(options.hue, options.seed);
    var s = pickSaturation(h, options);
    var v = pickBrightness(h, s, options);
    var res = { h: h, s: s, v: v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    return new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
}
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
        default:
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
        default:
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - (m * s1);
            return (m * S) + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        var namedColor = bounds.find(function (n) { return n.name === colorInput; });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        var parsed = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + (Math.random() * (range[1] + 1 - range[0])));
    }
    var max = range[1] || 1;
    var min = range[0] || 0;
    seed = ((seed * 9301) + 49297) % 233280;
    var rnd = seed / 233280.0;
    return Math.floor(min + (rnd * (max - min)));
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
var bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [[0, 0], [100, 0]],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]],
    },
];


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/readability.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/readability.js ***!
  \*************************************************************/
/*! exports provided: readability, isReadable, mostReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return readability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return isReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return mostReadable; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");

function readability(color1, color2) {
    var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
    var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
function isReadable(color1, color2, wcag2) {
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var _a, _b;
    var readabilityLevel = readability(color1, color2);
    switch ((_a = wcag2.level, (_a !== null && _a !== void 0 ? _a : 'AA')) + (_b = wcag2.size, (_b !== null && _b !== void 0 ? _b : 'small'))) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    args.includeFallbackColors = false;
    return mostReadable(baseColor, ['#fff', '#000'], args);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/to-ms-filter.js ***!
  \**************************************************************/
/*! exports provided: toMsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return toMsFilter; });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/es/conversion.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/es/index.js");


function toMsFilter(firstColor, secondColor) {
    var color = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
    var hex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
    if (secondColor) {
        var s = new _index__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
        secondHex8String = '#' + Object(_conversion__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/es/util.js":
/*!******************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/es/util.js ***!
  \******************************************************/
/*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound01", function() { return bound01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp01", function() { return clamp01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnePointZero", function() { return isOnePointZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercentage", function() { return isPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAlpha", function() { return boundAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPercentage", function() { return convertToPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var processPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (processPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    if (max === 360) {
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
    return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
}
function isPercentage(n) {
    return typeof n === 'string' && n.includes('%');
}
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "./node_modules/material-colors/dist/colors.es2015.js":
/*!************************************************************!*\
  !*** ./node_modules/material-colors/dist/colors.es2015.js ***!
  \************************************************************/
/*! exports provided: red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, darkText, lightText, darkIcons, lightIcons, white, black, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),

/***/ "./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js ***!
  \********************************************************************/
/*! exports provided: CircleComponent, ColorCircleModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCircleModule", function() { return ColorCircleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CircleSwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-colors */ "./node_modules/material-colors/dist/colors.es2015.js");
/* harmony import */ var ngx_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color */ "./node_modules/ngx-color/fesm2015/ngx-color.js");






let CircleSwatchComponent = class CircleSwatchComponent {
    constructor() {
        this.circleSize = 28;
        this.circleSpacing = 14;
        this.focus = false;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focusStyle = {};
        this.swatchStyle = {
            borderRadius: '50%',
            background: 'transparent',
            transition: '100ms box-shadow ease 0s',
        };
    }
    ngOnChanges() {
        this.swatchStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}`;
        this.focusStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}, 0 0 5px ${this.color}`;
        if (this.focus) {
            this.focusStyle.boxShadow = `inset 0 0 0 3px ${this.color}, 0 0 5px ${this.color}`;
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleSwatchComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "circleSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "circleSpacing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "focus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleSwatchComponent.prototype, "onSwatchHover", void 0);
CircleSwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-circle-swatch',
        template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
  .circle-swatch {
    transform: scale(1);
    transition: transform 100ms ease;
  }
  .circle-swatch:hover {
    transform: scale(1.2);
  }
  `]
    })
], CircleSwatchComponent);

let CircleComponent = class CircleComponent extends ngx_color__WEBPACK_IMPORTED_MODULE_4__["ColorWrap"] {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 252;
        /** Color squares to display */
        this.colors = [
            material_colors__WEBPACK_IMPORTED_MODULE_3__["red"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["pink"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["purple"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["deepPurple"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["indigo"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["blue"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lightBlue"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["teal"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["green"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lightGreen"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["lime"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["yellow"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["amber"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["orange"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["deepOrange"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["brown"]['500'],
            material_colors__WEBPACK_IMPORTED_MODULE_3__["blueGrey"]['500'],
        ];
        /** Value for circle size */
        this.circleSize = 28;
        /** Value for spacing between circles */
        this.circleSpacing = 14;
    }
    isActive(color) {
        return this.hex === color;
    }
    handleBlockChange({ hex, $event }) {
        if (Object(ngx_color__WEBPACK_IMPORTED_MODULE_4__["isValidHex"])(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], CircleComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleComponent.prototype, "circleSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleComponent.prototype, "circleSpacing", void 0);
CircleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-circle',
        template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
      .circle-picker {
        display: flex;
        flex-wrap: wrap;
      }
    `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CircleComponent);
let ColorCircleModule = class ColorCircleModule {
};
ColorCircleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [CircleComponent, CircleSwatchComponent],
        exports: [CircleComponent, CircleSwatchComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_color__WEBPACK_IMPORTED_MODULE_4__["SwatchModule"]],
    })
], ColorCircleModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color-circle.js.map


/***/ }),

/***/ "./node_modules/ngx-color/fesm2015/ngx-color.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-color/fesm2015/ngx-color.js ***!
  \******************************************************/
/*! exports provided: AlphaComponent, AlphaModule, CheckboardComponent, CheckboardModule, ColorWrap, ColorWrapModule, CoordinatesDirective, CoordinatesModule, EditableInputComponent, EditableInputModule, HueComponent, HueModule, RaisedComponent, RaisedModule, SaturationComponent, SaturationModule, ShadeComponent, ShadeModule, SwatchComponent, SwatchModule, getCheckerboard, getContrastingColor, isValidHex, render, simpleCheckForValidColor, toState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponent", function() { return AlphaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaModule", function() { return AlphaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardComponent", function() { return CheckboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboardModule", function() { return CheckboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrap", function() { return ColorWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorWrapModule", function() { return ColorWrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesDirective", function() { return CoordinatesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatesModule", function() { return CoordinatesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputComponent", function() { return EditableInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableInputModule", function() { return EditableInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueComponent", function() { return HueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueModule", function() { return HueModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedComponent", function() { return RaisedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedModule", function() { return RaisedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationComponent", function() { return SaturationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationModule", function() { return SaturationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeComponent", function() { return ShadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeModule", function() { return ShadeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchComponent", function() { return SwatchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchModule", function() { return SwatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckerboard", function() { return getCheckerboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrastingColor", function() { return getContrastingColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHex", function() { return isValidHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleCheckForValidColor", function() { return simpleCheckForValidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toState", function() { return toState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/es/public_api.js");







const checkboardCache = {};
function render(c1, c2, size) {
    if (typeof document === 'undefined') {
        return null;
    }
    const canvas = document.createElement('canvas');
    canvas.width = size * 2;
    canvas.height = size * 2;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return null;
    } // If no context can be found, return early.
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = c2;
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size, size);
    ctx.fillRect(0, 0, size, size);
    return canvas.toDataURL();
}
function getCheckerboard(c1, c2, size) {
    const key = `${c1}-${c2}-${size}`;
    if (checkboardCache[key]) {
        return checkboardCache[key];
    }
    const checkboard = render(c1, c2, size);
    if (!checkboard) {
        return null;
    }
    checkboardCache[key] = checkboard;
    return checkboard;
}

let CheckboardComponent = class CheckboardComponent {
    constructor() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "white", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CheckboardComponent.prototype, "grey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CheckboardComponent.prototype, "boxShadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CheckboardComponent.prototype, "borderRadius", void 0);
CheckboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-checkboard',
        template: `<div class="grid" [ngStyle]="gridStyles"></div>`,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
  .grid {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;
  }
  `]
    })
], CheckboardComponent);
let CheckboardModule = class CheckboardModule {
};
CheckboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [CheckboardComponent],
        exports: [CheckboardComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], CheckboardModule);

let CoordinatesDirective = class CoordinatesDirective {
    constructor(el) {
        this.el = el;
        this.coordinatesChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mousechange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.mouseListening = false;
    }
    mousemove($event, x, y, isTouch = false) {
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event, x, y, isTouch });
        }
    }
    mouseup() {
        this.mouseListening = false;
    }
    mousedown($event, x, y, isTouch = false) {
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event, x, y, isTouch });
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        let top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x,
            y,
            top,
            left,
            containerWidth,
            containerHeight,
            $event,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoordinatesDirective.prototype, "coordinatesChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mousemove', ['$event', '$event.pageX', '$event.pageY']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchmove', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousemove", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:mouseup'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:touchend'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mouseup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('mousedown', ['$event', '$event.pageX', '$event.pageY']),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('touchstart', [
        '$event',
        '$event.touches[0].clientX',
        '$event.touches[0].clientY',
        'true',
    ]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event, Number, Number, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], CoordinatesDirective.prototype, "mousedown", null);
CoordinatesDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({ selector: '[ngx-color-coordinates]' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], CoordinatesDirective);
let CoordinatesModule = class CoordinatesModule {
};
CoordinatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [CoordinatesDirective],
        exports: [CoordinatesDirective],
    })
], CoordinatesModule);

let AlphaComponent = class AlphaComponent {
    constructor() {
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
        else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        else {
            let a;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlphaComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlphaComponent.prototype, "onChange", void 0);
AlphaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-alpha',
        template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .alpha {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-checkboard {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .alpha-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .alpha-pointer {
      position: absolute;
    }
    .alpha-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
    })
], AlphaComponent);
let AlphaModule = class AlphaModule {
};
AlphaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [AlphaComponent],
        exports: [AlphaComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule, CoordinatesModule],
    })
], AlphaModule);

function simpleCheckForValidColor(data) {
    const keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    let checked = 0;
    let passed = 0;
    keysToCheck.forEach(letter => {
        if (!data[letter]) {
            return;
        }
        checked += 1;
        if (!isNaN(data[letter])) {
            passed += 1;
        }
        if (letter === 's' || letter === 'l') {
            const percentPatt = /^\d+%$/;
            if (percentPatt.test(data[letter])) {
                passed += 1;
            }
        }
    });
    return checked === passed ? data : false;
}
function toState(data, oldHue) {
    const color = data.hex ? new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data.hex) : new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](data);
    const hsl = color.toHsl();
    const hsv = color.toHsv();
    const rgb = color.toRgb();
    const hex = color.toHex();
    if (hsl.s === 0) {
        hsl.h = oldHue || 0;
        hsv.h = oldHue || 0;
    }
    const transparent = hex === '000000' && rgb.a === 0;
    return {
        hsl,
        hex: transparent ? 'transparent' : `#${hex}`,
        rgb,
        hsv,
        oldHue: data.h || oldHue || hsl.h,
        source: data.source,
    };
}
function isValidHex(hex) {
    return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](hex).isValid;
}
function getContrastingColor(data) {
    if (!data) {
        return '#fff';
    }
    const col = toState(data);
    if (col.hex === 'transparent') {
        return 'rgba(0,0,0,0.4)';
    }
    const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
}

let ColorWrap = class ColorWrap {
    constructor() {
        this.className = '';
        this.color = {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1,
        };
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onChangeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onSwatchHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.changes = this.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100))
            .subscribe(x => this.onChangeComplete.emit(x));
        this.setState(toState(this.color, 0));
        this.currentColor = this.hex;
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    ngOnDestroy() {
        this.changes.unsubscribe();
    }
    setState(data) {
        this.oldHue = data.oldHue;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.source = data.source;
        this.afterValidChange();
    }
    handleChange(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onChange.emit({ color, $event });
            this.afterValidChange();
        }
    }
    /** hook for components after a complete change */
    afterValidChange() { }
    handleSwatchHover(data, $event) {
        const isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
            const color = toState(data, data.h || this.oldHue);
            this.setState(color);
            this.onSwatchHover.emit({ color, $event });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "className", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onChangeComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ColorWrap.prototype, "onSwatchHover", void 0);
ColorWrap = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        // create seletor base for test override property
        selector: 'color-wrap',
        template: ``
    })
], ColorWrap);
let ColorWrapModule = class ColorWrapModule {
};
ColorWrapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [ColorWrap],
        exports: [ColorWrap],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], ColorWrapModule);

let EditableInputComponent = class EditableInputComponent {
    constructor() {
        this.placeholder = '';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.focus = false;
    }
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (!isNaN(num)) {
            const amount = this.arrowOffset || 1;
            // Up
            if ($event.keyCode === 38) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num + amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num + amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num + amount}%`;
                }
                else {
                    this.currentValue = num + amount;
                }
            }
            // Down
            if ($event.keyCode === 40) {
                if (this.label) {
                    this.onChange.emit({
                        data: { [this.label]: num - amount },
                        $event,
                    });
                }
                else {
                    this.onChange.emit({ data: num - amount, $event });
                }
                if (isPercentage) {
                    this.currentValue = `${num - amount}%`;
                }
                else {
                    this.currentValue = num - amount;
                }
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], EditableInputComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditableInputComponent.prototype, "arrowOffset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], EditableInputComponent.prototype, "dragLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], EditableInputComponent.prototype, "dragMax", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditableInputComponent.prototype, "onChange", void 0);
EditableInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-editable-input',
        template: `
  <div class="wrap" [ngStyle]="wrapStyle">
    <input [ngStyle]="inputStyle" spellCheck="false"
      [value]="currentValue" [placeholder]="placeholder"
      (keydown)="handleKeydown($event)" (keyup)="handleKeyup($event)"
      (focus)="handleFocus($event)" (focusout)="handleFocusOut($event)" />
    <span *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
      {{ label }}
    </span>
  </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    :host {
      display: flex;
    }
    .wrap {
      position: relative;
    }
  `]
    })
], EditableInputComponent);
let EditableInputModule = class EditableInputModule {
};
EditableInputModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [EditableInputComponent],
        exports: [EditableInputComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], EditableInputModule);

let HueComponent = class HueComponent {
    constructor() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.left = '0px';
        this.top = '';
    }
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], HueComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HueComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "hidePointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HueComponent.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HueComponent.prototype, "onChange", void 0);
HueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-hue',
        template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .color-hue {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-hue-container {
      margin: 0 2px;
      position: relative;
      height: 100%;
    }
    .color-hue-pointer {
      position: absolute;
    }
    .color-hue-slider {
      margin-top: 1px;
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      transform: translateX(-2px);
    }
    .color-hue-horizontal {
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
    .color-hue-vertical {
      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
  `]
    })
], HueComponent);
let HueModule = class HueModule {
};
HueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [HueComponent],
        exports: [HueComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
    })
], HueModule);

let RaisedComponent = class RaisedComponent {
    constructor() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], RaisedComponent.prototype, "zDepth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RaisedComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RaisedComponent.prototype, "background", void 0);
RaisedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-raised',
        template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .raised-wrap {
      position: relative;
      display: inline-block;
    }
    .raised-bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    .raised-content {
      position: relative;
    }
    .zDepth-0 {
      box-shadow: none;
    }
    .zDepth-1 {
      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
    }
    .zDepth-2 {
      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);
    }
    .zDepth-3 {
      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);
    }
    .zDepth-4 {
      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);
    }
    .zDepth-5 {
      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);
    }
  `]
    })
], RaisedComponent);
let RaisedModule = class RaisedModule {
};
RaisedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [RaisedComponent],
        exports: [RaisedComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], RaisedModule);

let SaturationComponent = class SaturationComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "hsv", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], SaturationComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "circle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SaturationComponent.prototype, "onChange", void 0);
SaturationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-saturation',
        template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `,
        preserveWhitespaces: false,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [`
    .saturation-white {
      background: linear-gradient(to right, #fff, rgba(255,255,255,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-black {
      background: linear-gradient(to top, #000, rgba(0,0,0,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-saturation {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-pointer {
      position: absolute;
      cursor: default;
    }
    .saturation-circle {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
      border-radius: 50%;
      cursor: hand;
      transform: translate(-2px, -4px);
    }
  `]
    })
], SaturationComponent);
let SaturationModule = class SaturationModule {
};
SaturationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [SaturationComponent],
        exports: [SaturationComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
    })
], SaturationModule);

let SwatchComponent = class SwatchComponent {
    constructor() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    ngOnInit() {
        this.divStyles = Object.assign({ background: this.color, height: '100%', width: '100%', cursor: 'pointer', position: 'relative', outline: 'none' }, this.style);
    }
    currentStyles() {
        this.focusStyles = Object.assign({}, this.divStyles, this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "focusStyle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SwatchComponent.prototype, "focus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SwatchComponent.prototype, "onHover", void 0);
SwatchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-swatch',
        template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
    })
], SwatchComponent);
let SwatchModule = class SwatchModule {
};
SwatchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [SwatchComponent],
        exports: [SwatchComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CheckboardModule],
    })
], SwatchModule);

let ShadeComponent = class ShadeComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__["TinyColor"](this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "hsl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "rgb", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "pointer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShadeComponent.prototype, "shadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShadeComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ShadeComponent.prototype, "onChange", void 0);
ShadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'color-shade',
        template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        preserveWhitespaces: false,
        styles: [`
    .shade {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .shade-pointer {
      position: absolute;
    }
    .shade-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
    })
], ShadeComponent);
let ShadeModule = class ShadeModule {
};
ShadeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [ShadeComponent],
        exports: [ShadeComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], CoordinatesModule],
    })
], ShadeModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-color.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/visitor-tools/send-info/send-info.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/visitor-tools/send-info/send-info.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-title\" fxLayout=\"row\" fxLayout.xs=\"column\">\n    <div class=\"parent-title\">CÔNG CỤ KHÁCH HÀNG\n      <mat-icon>arrow_forward_ios</mat-icon>\n    </div>\n    <div class=\"subtitle\">CẤU HÌNH GỬI THÔNG TIN TƯ VẤN - WEBSITE\n      <span class=\"selected-website\">\n        {{(websiteCtrl.value.name || '') | uppercase}}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"inner\" *ngIf=\"isProcessing === false\">\n\n    <div class=\"no-website-notify\" *ngIf=\"hasWebsite === false\">\n      Không tìm thấy website nào.\n    </div>\n\n    <div *ngIf=\"hasWebsite === true\">\n      <mat-form-field class=\"website-selection\">\n        <mat-label>Lựa chọn website</mat-label>\n        <mat-select [formControl]=\"websiteCtrl\" #singleSelect (selectionChange)=\"selectWebsite()\"\n          [disabled]=\"isProcessing === true\">\n          <mat-option>\n            <ngx-mat-select-search [formControl]=\"websiteFilterCtrl\" [placeholderLabel]=\"'Tìm kiếm'\"\n              [noEntriesFoundLabel]=\"'Không tìm thấy website nào'\"></ngx-mat-select-search>\n          </mat-option>\n          <mat-option *ngFor=\"let website of filteredWebsites | async\" [value]=\"website\">\n            {{website.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div class=\"popup-config\">\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0\">\n          <div class=\"tabs\" fxFlex=\"50\">\n            <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n              <mat-tab label=\"1. Nội dung popup\">\n                <div class=\"tab-content popup-style\">\n                  <form [formGroup]=\"popupStyleForm\" (ngSubmit)=\"submitPopupStyleForm()\">\n                    <div class=\"theme-color-selection\">\n                      <mat-label style=\"color: gray\">\n                        <mat-icon>palette</mat-icon>\n                        Màu sắc chủ đề\n                      </mat-label>\n                      <div class=\"form-control select-color-panel\">\n                        <color-circle [color]=\"popupStyleForm.controls['themeColor'].value\"\n                          (onChangeComplete)=\"selectColorCircle($event)\" circleSize=\"15\" width=\"100%\">\n                        </color-circle>\n                      </div>\n                    </div>\n                    <div class=\"background-image-selection\">\n                      <p class=\"background-image-selection-title\">\n                        <mat-icon>headset_mic</mat-icon>\n                        Thông tin người tư vấn\n                      </p>\n                      <div class=\"supporter-details\">\n                        <mat-form-field class=\"example-full-width\" class=\"popup-style-form-field\">\n                          <input matInput placeholder=\"Họ và tên\" formControlName=\"supporterName\" maxlength=\"30\">\n                        </mat-form-field>\n                        <div *ngIf=\"supporterName.invalid && (supporterName.dirty || supporterName.touch)\"\n                          class=\"errors\">\n                          <div *ngIf=\"supporterName.errors.required\">\n                            Bắt buộc\n                          </div>\n                        </div>\n                        <div fxLayout=\"row\" fxLayoutGap=\"15px\" class=\"popup-style-form-field\">\n                          <mat-form-field class=\"example-full-width\" fxFlex=\"65\">\n                            <input matInput placeholder=\"Chuyên môn\" formControlName=\"supporterMajor\" maxlength=\"30\">\n                          </mat-form-field>\n                          <div fxFlex=\"35\">\n                            <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"Số điện thoại\" formControlName=\"supporterPhone\"\n                                maxlength=\"10\">\n                            </mat-form-field>\n                            <div *ngIf=\"supporterPhone.invalid && (supporterPhone.dirty || supporterPhone.touch)\"\n                              class=\"errors\">\n                              <div *ngIf=\"supporterPhone.errors.required\">\n                                Bắt buộc\n                              </div>\n                              <div *ngIf=\"supporterPhone.errors.invalidPhoneNumber\">\n                                Số điện thoại không hợp lệ\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                      <div class=\"background-image-selection-storage\">\n                        <mat-label style=\"color: gray; font-size: 12px\">Ảnh đại diện</mat-label>\n                        <div class=\"form-control\">\n                          <mat-grid-list cols=\"4\" rowHeight=\"100px\" gutterSize=\"10px\">\n                            <mat-grid-tile *ngFor=\"let img of images\" [colspan]=\"img.cols\" [rowspan]=\"img.rows\">\n                              <img src=\"{{img.url}}\" alt=\"\" (click)=\"selectSupporterAvatar(img.url)\">\n                            </mat-grid-tile>\n                          </mat-grid-list>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                  <div class=\"submit-area\">\n                    <button mat-raised-button color=\"accent\" (click)=\"submitPopupStyleForm(false)\">\n                      Lưu cấu hình\n                    </button>\n                  </div>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"2. Cài đặt hiển thị\">\n                <div class=\"tab-content popup-display\">\n                  <div class=\"enable-display\">\n                    <mat-slide-toggle [color]=\"popupDisplayEnableSlideToggle.color\"\n                      [checked]=\"popupDisplayEnableSlideToggle.checked\"\n                      [disabled]=\"popupDisplayEnableSlideToggle.disabled\"\n                      (change)=\"onCheckPopupDisplayEnableSlideToggle($event)\">\n                      {{popupDisplayEnableSlideToggle.label}}\n                    </mat-slide-toggle>\n                  </div>\n\n                  <div class=\"customize-open-popup-button-position\" *ngIf=\"popupDisplayEnableSlideToggle.checked\">\n                    <mat-label style=\"color: gray; font-size: 12px\">Vị trí nút mở popup</mat-label>\n                    <div class=\"selection\">\n                      <mat-radio-group fxLayout=\"row wrap\" fxLayoutGap=\"10px grid\"\n                        (change)=\"changeOpenPopupButtonPosition($event)\">\n                        <mat-radio-button *ngFor=\"let item of openPopupButtonPositions\" [value]=\"item.value\"\n                          [checked]=\"item.checked\">\n                          {{item.name}}\n                        </mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                  </div>\n\n                  <div class=\"auto-display-popup\">\n                    <div class=\"enable-toggle\">\n                      <mat-slide-toggle [color]=\"autoDisplayPopupSlideToggle.color\"\n                        [checked]=\"autoDisplayPopupSlideToggle.checked\"\n                        [disabled]=\"autoDisplayPopupSlideToggle.disabled\"\n                        (change)=\"onCheckAutoDisplayPopupSlideToggle($event)\">\n                        {{autoDisplayPopupSlideToggle.label}}\n                      </mat-slide-toggle>\n                    </div>\n                    <div class=\"time-selection\" *ngIf=\"autoDisplayPopupSlideToggle.checked\">\n                      <mat-radio-group fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\"\n                        (change)=\"changeAutoDisplayPopupTime($event)\">\n                        <mat-radio-button *ngFor=\"let item of autoDisplayPopupTimeOptions\" [value]=\"item.value\"\n                          [checked]=\"item.checked\">\n                          {{item.name}}\n                        </mat-radio-button>\n                      </mat-radio-group>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"display-popup-before-exit-page\">\n                    <mat-slide-toggle [color]=\"displayPopupBeforeExitPageToggle.color\"\n                      [checked]=\"displayPopupBeforeExitPageToggle.checked\"\n                      [disabled]=\"displayPopupBeforeExitPageToggle.disabled\"\n                      (change)=\"onCheckDisplayPopupBeforeExitPageToggle($event)\">\n                      {{displayPopupBeforeExitPageToggle.label}}\n                    </mat-slide-toggle>\n                  </div> -->\n\n                </div>\n              </mat-tab>\n              <!-- <mat-tab label=\"3. Nội dung thành công\" [disabled]=\"true\">\n                <div class=\"tab-content popup-done\">\n                  Chúng tôi đang xây dựng chức năng này.\n                </div>\n              </mat-tab> -->\n            </mat-tab-group>\n          </div>\n\n          <div class=\"popup-example\" fxFlex=\"50\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n            <div class=\"browser-container\">\n              <div class=\"browser\" fxLayout=\"column\">\n                <div class=\"website-domain\">\n                  <a href=\"{{websiteCtrl.value.name}}\" target=\"_blank\"\n                    matTooltip=\"Nhấn để truy cập website của bạn\">{{websiteCtrl.value.name}}</a>\n                </div>\n                <div class=\"popup\">\n                  <div class=\"header\">\n                    <span>x</span>\n                  </div>\n                  <div class=\"content\">\n                    <div fxLayout=\"row\">\n                      <div class=\"info\" fxFlex=\"60\">\n                        <div class=\"title\" [style.color]=\"popupStyleForm.controls['themeColor'].value\">Trợ giúp qua điện\n                          thoại\n                        </div>\n                        <div class=\"notice\">\n                          Vui lòng nhập họ tên, số điện thoại và email của bạn, chúng tôi sẽ gọi lại bạn ngay. Hoặc bạn\n                          có\n                          thể <span [style.color]=\"popupStyleForm.controls['themeColor'].value\">nhấn vào đây</span> để\n                          gọi\n                          trực tiếp cho chúng tôi.\n                        </div>\n                        <div class=\"input\">Họ và tên</div>\n                        <div class=\"input\">Số điện thoại</div>\n                        <div class=\"input\">Địa chỉ email</div>\n                        <p class=\"button\" [style.background]=\"popupStyleForm.controls['themeColor'].value\">Gửi yêu cầu\n                        </p>\n                      </div>\n                      <div class=\"background-img\" fxFlex=\"40\">\n                        <img src=\"{{popupStyleForm.controls['supporterAvatar'].value}}\" alt=\"\">\n                        <div class=\"supporter-name\">{{popupStyleForm.controls['supporterName'].value || ''}}</div>\n                        <div class=\"supporter-major\">{{popupStyleForm.controls['supporterMajor'].value || ''}}</div>\n                        <div class=\"supporter-phone\">\n                          <img src=\"https://ducanhduhoc.vn/wp-content/themes/zen/asset/img/phone-flat.png\" alt=\"\"\n                            class=\"phone-icon\">\n                          <span class=\"phone-number\">{{popupStyleForm.controls['supporterPhone'].value || ''}}</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"footer\">\n                      <img src=\"https://image.flaticon.com/icons/png/128/222/222506.png\" alt=\"\">\n                      <span>x2.com.vn</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"open-popup-button-wrapper\">\n                  <div class=\"open-popup-button\" *ngIf=\"popupDisplayEnableSlideToggle.checked\"\n                    [class.bottom-left]=\"openPopupButtonPositionStyle === 1\"\n                    [class.bottom-right]=\"openPopupButtonPositionStyle === 2\"\n                    [class.center-right]=\"openPopupButtonPositionStyle === 3\"\n                    [class.center-left]=\"openPopupButtonPositionStyle === 4\"\n                    [class.top-left]=\"openPopupButtonPositionStyle === 5\"\n                    [class.top-right]=\"openPopupButtonPositionStyle === 6\"\n                    [ngStyle]=\"{'background-image': 'url(' + popupStyleForm.controls['supporterAvatar'].value + ')'}\">\n                    <div class=\"say-hello-label\">Hi</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/visitor-tools/send-info/send-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/visitor-tools/send-info/send-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 110vh;\n  background: url('simple2.png');\n  background-size: 100% 100%;\n  background-attachment: fixed;\n}\n.container ::ng-deep .mat-tab-group .mat-tab-body .mat-tab-body-content {\n  overflow: hidden !important;\n}\n.container ::ng-deep .mat-tab-group .mat-tab-body {\n  overflow-y: hidden !important;\n}\n.container .main-title {\n  text-shadow: 1px 1px 2px black;\n  color: white;\n  font-size: 16px;\n  padding: 45px 30px 0 60px;\n  height: 25vh;\n  font-weight: bold;\n}\n.container .main-title mat-icon {\n  font-size: 14px;\n  margin: 4px 0 0 10px;\n}\n.container .main-title .selected-website {\n  color: yellow;\n  margin-left: 5px;\n}\n.container .inner {\n  min-height: 200px;\n  width: 94%;\n  background: white;\n  margin: 40px;\n  margin-bottom: 0;\n  padding: 50px 20px 0 50px;\n  border-radius: 7px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  z-index: 10;\n  top: -16vh;\n  -webkit-animation: formAni 0.4s ease-out;\n}\n@-webkit-keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n@keyframes formAni {\n  from {\n    -webkit-transform: translateY(100vh);\n            transform: translateY(100vh);\n  }\n  to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n.container .inner .errors {\n  color: crimson;\n  font-size: 10px;\n  margin-top: -10px;\n  padding-bottom: 10px;\n}\n.container .inner .website-selection {\n  width: 250px;\n  margin-top: -10px;\n}\n.container .inner .title2 {\n  color: gray;\n}\n.container .inner .title2.popup-config-title {\n  padding: 15px 0 15px 0;\n}\n.container .inner .popup-config .tabs {\n  height: 585px;\n}\n.container .inner .popup-config .tabs .example-stretched-tabs {\n  width: 100%;\n  box-shadow: none;\n}\n.container .inner .popup-config .tabs .tab-content {\n  padding: 20px;\n  padding-top: 30px;\n}\n.container .inner .popup-config .tabs .tab-content .auto-display-popup {\n  padding-top: 30px;\n}\n.container .inner .popup-config .tabs .tab-content .auto-display-popup .time-selection {\n  padding-top: 20px;\n  padding-left: 15px;\n}\n.container .inner .popup-config .tabs .tab-content .auto-display-popup .time-selection .mat-radio-button {\n  font-size: 13px;\n  width: 150px;\n  margin-top: -5px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style mat-icon {\n  font-size: 16px;\n  color: gray;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .theme-color-selection .select-color-panel {\n  -webkit-animation: fade 1.2s ease-in-out;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .theme-color-selection .select-color-panel:hover {\n  opacity: 0.8;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .popup-style-form-field {\n  width: 100%;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection {\n  padding-top: 20px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-title {\n  color: gray;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .supporter-details {\n  width: 100%;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-storage img {\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  border-radius: 7px;\n  -webkit-animation: fade 1.2s ease-in-out;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-storage img:hover {\n  opacity: 0.8;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .submit-area {\n  padding-top: 40px;\n  padding-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\n.container .inner .popup-config .tabs .tab-content.popup-style .submit-area button {\n  padding-top: 0;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .customize-open-popup-button-position {\n  padding-top: 10px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .customize-open-popup-button-position .mat-radio-button {\n  font-size: 13px;\n  width: 120px;\n  margin-top: -5px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .customize-open-popup-button-position .selection {\n  padding-top: 20px;\n  padding-left: 15px;\n}\n.container .inner .popup-config .tabs .tab-content.popup-display .display-popup-before-exit-page {\n  padding-top: 28px;\n}\n.container .inner .popup-config .tabs .tab-content .form-control {\n  padding-top: 15px;\n}\n.container .inner .popup-config .popup-example {\n  margin-top: 45px;\n}\n.container .inner .popup-config .popup-example .browser-container {\n  border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.container .inner .popup-config .popup-example .browser-container .browser {\n  background: url('157853860662229211.png');\n  background-size: 100% 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100.4%;\n  height: 430px;\n  position: relative;\n  top: -0.2%;\n  left: -0.2%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper {\n  height: 30px;\n  width: 100%;\n  position: relative;\n  top: 5%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  position: relative;\n  background-size: 100% 100%;\n  background-position: center;\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button .say-hello-label {\n  background: crimson;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  font-weight: bold;\n  border-radius: 50%;\n  width: 14px;\n  height: 14px;\n  font-size: 8px;\n  float: right;\n  margin: -5px -5px 0 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-animation: 0.5s alertAnimation infinite;\n}\n@-webkit-keyframes alertAnimation {\n  from {\n    -webkit-transform: scale(1.07, 1.07);\n            transform: scale(1.07, 1.07);\n  }\n  to {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes alertAnimation {\n  from {\n    -webkit-transform: scale(1.07, 1.07);\n            transform: scale(1.07, 1.07);\n  }\n  to {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.bottom-left {\n  left: 2%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.bottom-right {\n  left: 93%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.center-right {\n  left: 93%;\n  top: -495%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.center-left {\n  left: 2%;\n  top: -495%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.top-left {\n  left: 2%;\n  top: -940%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .open-popup-button-wrapper .open-popup-button.top-right {\n  left: 93%;\n  top: -940%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .website-domain {\n  font-size: 11px;\n  position: relative;\n  top: 6.7%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .website-domain a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup {\n  border-radius: 5px;\n  margin-top: 100px;\n  width: 59%;\n  height: 51%;\n  background: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .header {\n  width: 100%;\n  height: 5%;\n  padding: 2px 4px 2px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 7px;\n  color: silver;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info {\n  padding: 14px;\n  padding-top: 5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .title {\n  font-weight: bold;\n  font-size: 11px;\n  text-align: center;\n  padding: 8px 0 8px 0;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .notice {\n  font-size: 7px;\n  color: gray;\n  text-align: justify;\n  line-height: 9px;\n  padding-bottom: 5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .input {\n  background: whitesmoke;\n  padding: 5px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 9px;\n  margin-top: 5px;\n  color: rgba(0, 0, 0, 0.5);\n  border-radius: 3.5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .info .button {\n  text-align: center;\n  font-size: 9px;\n  padding: 5px;\n  background: silver;\n  color: white;\n  font-weight: bold;\n  border-radius: 3.5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img {\n  height: 170px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: 14px;\n  background: white;\n  margin-top: 15px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-name {\n  padding-top: 5px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n  font-size: 10px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-major {\n  color: gray;\n  font-size: 9px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-phone {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px;\n  padding-left: 0;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-phone .phone-icon {\n  width: 12px;\n  height: 12px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .background-img .supporter-phone .phone-number {\n  font-size: 9px;\n  margin-left: 5px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .footer {\n  color: gray;\n  font-size: 7px;\n  width: 98%;\n  text-align: right;\n  position: relative;\n  top: -10px;\n}\n.container .inner .popup-config .popup-example .browser-container .browser .popup .content .footer img {\n  width: 10px;\n  height: 7px;\n}\n@media screen and (max-width: 600px) {\n  .container .main-title {\n    height: 35vh;\n    padding: 45px 20px 20px 20px;\n    font-size: 14px;\n    text-align: center;\n  }\n  .container .inner {\n    margin: 15px;\n    padding: 45px 15px 15px 20px;\n  }\n  .container .inner .popup-config .tabs .tab-content {\n    padding: 0;\n    padding-top: 30px;\n  }\n  .container .inner .popup-config .tabs .tab-content.popup-style .background-image-selection .background-image-selection-storage img {\n    width: 60px;\n    height: 60px;\n    margin-top: -30px;\n    margin-left: -15px;\n  }\n  .container .inner .popup-config .tabs .tab-content.popup-style .submit-area {\n    padding-top: 0;\n  }\n  .container .inner .popup-config .popup-example {\n    margin-top: 0;\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser {\n    background: rgba(3, 155, 229, 0.04);\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser .website-domain {\n    display: none;\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser .popup {\n    margin: 0;\n    width: 85%;\n  }\n  .container .inner .popup-config .popup-example .browser-container .browser .popup .content .footer {\n    top: -15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpZXR0cmFuL0Rlc2t0b3AvY2xpY2svZnJvbnRlbmQvc3JjL2FwcC9tYWluL3Zpc2l0b3ItdG9vbHMvc2VuZC1pbmZvL3NlbmQtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi92aXNpdG9yLXRvb2xzL3NlbmQtaW5mby9zZW5kLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSwyQkFBQTtBQ0NKO0FERUU7RUFDRSw2QkFBQTtBQ0FKO0FER0U7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNESjtBREdJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDRE47QURJSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FETUU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSx3Q0FBQTtBQ0xKO0FETUk7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUNKTjtFRE1JO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ0pOO0FBQ0Y7QURGSTtFQUNFO0lBQ0Usb0NBQUE7WUFBQSw0QkFBQTtFQ0pOO0VETUk7SUFDRSxnQ0FBQTtZQUFBLHdCQUFBO0VDSk47QUFDRjtBRE9JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDTE47QURXSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ1ROO0FEWUk7RUFDRSxXQUFBO0FDVk47QURZTTtFQUNFLHNCQUFBO0FDVlI7QURlTTtFQUNFLGFBQUE7QUNiUjtBRGVRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDYlY7QURnQlE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNkVjtBRGdCVTtFQUNFLGlCQUFBO0FDZFo7QURnQlk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDZGQ7QURlYztFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNiaEI7QURtQlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ2pCZDtBRG9CYztFQUNFLHdDQUFBO0FDbEJoQjtBRG1CZ0I7RUFDRTtJQUNFLFVBQUE7RUNqQmxCO0VEbUJnQjtJQUNFLFVBQUE7RUNqQmxCO0FBQ0Y7QURXZ0I7RUFDRTtJQUNFLFVBQUE7RUNqQmxCO0VEbUJnQjtJQUNFLFVBQUE7RUNqQmxCO0FBQ0Y7QURvQmdCO0VBQ0UsWUFBQTtBQ2xCbEI7QUR1Qlk7RUFDRSxXQUFBO0FDckJkO0FEd0JZO0VBQ0UsaUJBQUE7QUN0QmQ7QUR3QmM7RUFDRSxXQUFBO0FDdEJoQjtBRHlCYztFQUNFLFdBQUE7QUN2QmhCO0FEMkJnQjtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsd0NBQUE7QUMxQmxCO0FEMkJrQjtFQUNFO0lBQ0UsVUFBQTtFQ3pCcEI7RUQyQmtCO0lBQ0UsVUFBQTtFQ3pCcEI7QUFDRjtBRDRCa0I7RUFDRSxZQUFBO0FDMUJwQjtBRGdDWTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM5QmQ7QURnQ2M7RUFDRSxjQUFBO0FDOUJoQjtBRG9DWTtFQUNFLGlCQUFBO0FDbENkO0FEb0NjO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2xDaEI7QURxQ2M7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDbkNoQjtBRHVDWTtFQUNFLGlCQUFBO0FDckNkO0FEeUNVO0VBQ0UsaUJBQUE7QUN2Q1o7QUQ0Q007RUFDRSxnQkFBQTtBQzFDUjtBRDRDUTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7QUMxQ1Y7QUQyQ1U7RUFDRSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUN6Q1o7QUQyQ1k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ3pDZDtBRDBDYztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUN4Q2hCO0FEMENnQjtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3RUFBQTtFQUNBLCtDQUFBO0FDeENsQjtBRDBDa0I7RUFDRTtJQUNFLG9DQUFBO1lBQUEsNEJBQUE7RUN4Q3BCO0VEMENrQjtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUN4Q3BCO0FBQ0Y7QURrQ2tCO0VBQ0U7SUFDRSxvQ0FBQTtZQUFBLDRCQUFBO0VDeENwQjtFRDBDa0I7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VDeENwQjtBQUNGO0FENENnQjtFQUNFLFFBQUE7QUMxQ2xCO0FENkNnQjtFQUNFLFNBQUE7QUMzQ2xCO0FEOENnQjtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDNUNsQjtBRCtDZ0I7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQzdDbEI7QURnRGdCO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUM5Q2xCO0FEaURnQjtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDL0NsQjtBRG9EWTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNsRGQ7QURvRGM7RUFDRSx5QkFBQTtBQ2xEaEI7QURzRFk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDBFQUFBO0FDcERkO0FEc0RjO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNwRGhCO0FEd0RnQjtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ3REbEI7QUR3RGtCO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ3REcEI7QUR5RGtCO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN2RHBCO0FEMERrQjtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUN4RHBCO0FEMkRrQjtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDekRwQjtBRDZEZ0I7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUMzRGxCO0FENERrQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMxRHBCO0FENkRrQjtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUMzRHBCO0FEOERrQjtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDNURwQjtBRCtEa0I7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDN0RwQjtBRCtEb0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzdEdEI7QURnRW9CO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDOUR0QjtBRG1FZ0I7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ2pFbEI7QURtRWtCO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNqRXBCO0FENkVBO0VBRUk7SUFDRSxZQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUMzRUo7RUQ4RUU7SUFDRSxZQUFBO0lBQ0EsNEJBQUE7RUM1RUo7RURnRlE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUM5RVY7RURtRmdCO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDakZsQjtFRHNGWTtJQUNFLGNBQUE7RUNwRmQ7RUQwRk07SUFDRSxhQUFBO0VDeEZSO0VEMkZVO0lBQ0UsbUNBQUE7RUN6Rlo7RUQwRlk7SUFDRSxhQUFBO0VDeEZkO0VEMEZZO0lBQ0UsU0FBQTtJQUNBLFVBQUE7RUN4RmQ7RUQyRmdCO0lBQ0UsVUFBQTtFQ3pGbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vdmlzaXRvci10b29scy9zZW5kLWluZm8vc2VuZC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3NpbXBsZTIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblxuICA6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAgLm1hdC10YWItYm9keSAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluLXRpdGxlIHtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA0NXB4IDMwcHggMCA2MHB4O1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbjogNHB4IDAgMCAxMHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZC13ZWJzaXRlIHtcbiAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5pbm5lciB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMCA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0b3A6IC0xNnZoO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvcm1BbmkgMC40cyBlYXNlLW91dDtcbiAgICBAa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXJyb3JzIHtcbiAgICAgIGNvbG9yOiBjcmltc29uO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAubm8td2Vic2l0ZS1ub3RpZnkge1xuICAgIH1cblxuICAgIC53ZWJzaXRlLXNlbGVjdGlvbiB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB9XG5cbiAgICAudGl0bGUyIHtcbiAgICAgIGNvbG9yOiBncmF5O1xuXG4gICAgICAmLnBvcHVwLWNvbmZpZy10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBvcHVwLWNvbmZpZyB7XG4gICAgICAudGFicyB7XG4gICAgICAgIGhlaWdodDogNTg1cHg7XG5cbiAgICAgICAgLmV4YW1wbGUtc3RyZXRjaGVkLXRhYnMge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFiLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICAgICAuYXV0by1kaXNwbGF5LXBvcHVwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICAgICAgICAgICAudGltZS1zZWxlY3Rpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5wb3B1cC1zdHlsZSB7XG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGhlbWUtY29sb3Itc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgLnNlbGVjdC1jb2xvci1wYW5lbCB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgMS4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3B1cC1zdHlsZS1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWltYWdlLXNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWltYWdlLXNlbGVjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc3VwcG9ydGVyLWRldGFpbHMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXN0b3JhZ2Uge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcblxuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgMS4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Ym1pdC1hcmVhIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnBvcHVwLWRpc3BsYXkge1xuICAgICAgICAgICAgLmN1c3RvbWl6ZS1vcGVuLXBvcHVwLWJ1dHRvbi1wb3NpdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpc3BsYXktcG9wdXAtYmVmb3JlLWV4aXQtcGFnZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wb3B1cC1leGFtcGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcblxuICAgICAgICAuYnJvd3Nlci1jb250YWluZXIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgLmJyb3dzZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy8xNTc4NTM4NjA2NjIyMjkyMTEucG5nXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMC40JTtcbiAgICAgICAgICAgIGhlaWdodDogNDMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0wLjIlO1xuICAgICAgICAgICAgbGVmdDogLTAuMiU7XG5cbiAgICAgICAgICAgIC5vcGVuLXBvcHVwLWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgICAub3Blbi1wb3B1cC1idXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xuXG4gICAgICAgICAgICAgICAgLnNheS1oZWxsby1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTVweCAtNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwLjVzIGFsZXJ0QW5pbWF0aW9uIGluZmluaXRlO1xuXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFsZXJ0QW5pbWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3LCAxLjA3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYm90dG9tLWxlZnQge1xuICAgICAgICAgICAgICAgICAgbGVmdDogMiU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5ib3R0b20tcmlnaHQge1xuICAgICAgICAgICAgICAgICAgbGVmdDogOTMlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuY2VudGVyLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDkzJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTQ5NSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5jZW50ZXItbGVmdCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTQ5NSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi50b3AtbGVmdCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyJTtcbiAgICAgICAgICAgICAgICAgIHRvcDogLTk0MCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi50b3AtcmlnaHQge1xuICAgICAgICAgICAgICAgICAgbGVmdDogOTMlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAtOTQwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLndlYnNpdGUtZG9tYWluIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogNi43JTtcblxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1OSU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTElO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cbiAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4IDJweCAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBzaWx2ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgOHB4IDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5ub3RpY2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy41cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNpbHZlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy41cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJhY2tncm91bmQtaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3VwcG9ydGVyLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3VwcG9ydGVyLW1ham9yIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuc3VwcG9ydGVyLXBob25lIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIC5waG9uZS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucGhvbmUtbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcblxuICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAubWFpbi10aXRsZSB7XG4gICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICBwYWRkaW5nOiA0NXB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5pbm5lciB7XG4gICAgICBtYXJnaW46IDE1cHg7XG4gICAgICBwYWRkaW5nOiA0NXB4IDE1cHggMTVweCAyMHB4O1xuXG4gICAgICAucG9wdXAtY29uZmlnIHtcbiAgICAgICAgLnRhYnMge1xuICAgICAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgICYucG9wdXAtc3R5bGUge1xuICAgICAgICAgICAgICAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24ge1xuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWltYWdlLXNlbGVjdGlvbi1zdG9yYWdlIHtcbiAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnN1Ym1pdC1hcmVhIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3B1cC1leGFtcGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgICAgICAgLmJyb3dzZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5icm93c2VyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNCk7XG4gICAgICAgICAgICAgIC53ZWJzaXRlLWRvbWFpbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucG9wdXAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvc2ltcGxlMi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLmNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAgLm1hdC10YWItYm9keSAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cCAubWF0LXRhYi1ib2R5IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVyIC5tYWluLXRpdGxlIHtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNDVweCAzMHB4IDAgNjBweDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLm1haW4tdGl0bGUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogNHB4IDAgMCAxMHB4O1xufVxuLmNvbnRhaW5lciAubWFpbi10aXRsZSAuc2VsZWN0ZWQtd2Vic2l0ZSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogOTQlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiA1MHB4IDIwcHggMCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogLTE2dmg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmb3JtQW5pIDAuNHMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZvcm1Bbmkge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5jb250YWluZXIgLmlubmVyIC5lcnJvcnMge1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAud2Vic2l0ZS1zZWxlY3Rpb24ge1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMiB7XG4gIGNvbG9yOiBncmF5O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnRpdGxlMi5wb3B1cC1jb25maWctdGl0bGUge1xuICBwYWRkaW5nOiAxNXB4IDAgMTVweCAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyB7XG4gIGhlaWdodDogNTg1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC5leGFtcGxlLXN0cmV0Y2hlZC10YWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmF1dG8tZGlzcGxheS1wb3B1cCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmF1dG8tZGlzcGxheS1wb3B1cCAudGltZS1zZWxlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmF1dG8tZGlzcGxheS1wb3B1cCAudGltZS1zZWxlY3Rpb24gLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLXN0eWxlIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLXN0eWxlIC50aGVtZS1jb2xvci1zZWxlY3Rpb24gLnNlbGVjdC1jb2xvci1wYW5lbCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDEuMnMgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAudGhlbWUtY29sb3Itc2VsZWN0aW9uIC5zZWxlY3QtY29sb3ItcGFuZWw6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAucG9wdXAtc3R5bGUtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtc3R5bGUgLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6IGdyYXk7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLnN1cHBvcnRlci1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXN0b3JhZ2UgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlIDEuMnMgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXN0b3JhZ2UgaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtc3R5bGUgLnN1Ym1pdC1hcmVhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtc3R5bGUgLnN1Ym1pdC1hcmVhIGJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQucG9wdXAtZGlzcGxheSAuY3VzdG9taXplLW9wZW4tcG9wdXAtYnV0dG9uLXBvc2l0aW9uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1kaXNwbGF5IC5jdXN0b21pemUtb3Blbi1wb3B1cC1idXR0b24tcG9zaXRpb24gLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLWRpc3BsYXkgLmN1c3RvbWl6ZS1vcGVuLXBvcHVwLWJ1dHRvbi1wb3NpdGlvbiAuc2VsZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLWRpc3BsYXkgLmRpc3BsYXktcG9wdXAtYmVmb3JlLWV4aXQtcGFnZSB7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAudGFicyAudGFiLWNvbnRlbnQgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzLzE1Nzg1Mzg2MDY2MjIyOTIxMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMC40JTtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjIlO1xuICBsZWZ0OiAtMC4yJTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5vcGVuLXBvcHVwLWJ1dHRvbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIgLm9wZW4tcG9wdXAtYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIgLm9wZW4tcG9wdXAtYnV0dG9uIC5zYXktaGVsbG8tbGFiZWwge1xuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IC01cHggLTVweCAwIDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDAuNXMgYWxlcnRBbmltYXRpb24gaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGFsZXJ0QW5pbWF0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA3LCAxLjA3KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgfVxufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIgLm9wZW4tcG9wdXAtYnV0dG9uLmJvdHRvbS1sZWZ0IHtcbiAgbGVmdDogMiU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24uYm90dG9tLXJpZ2h0IHtcbiAgbGVmdDogOTMlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIgLm9wZW4tcG9wdXAtYnV0dG9uLmNlbnRlci1yaWdodCB7XG4gIGxlZnQ6IDkzJTtcbiAgdG9wOiAtNDk1JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5vcGVuLXBvcHVwLWJ1dHRvbi13cmFwcGVyIC5vcGVuLXBvcHVwLWJ1dHRvbi5jZW50ZXItbGVmdCB7XG4gIGxlZnQ6IDIlO1xuICB0b3A6IC00OTUlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLm9wZW4tcG9wdXAtYnV0dG9uLXdyYXBwZXIgLm9wZW4tcG9wdXAtYnV0dG9uLnRvcC1sZWZ0IHtcbiAgbGVmdDogMiU7XG4gIHRvcDogLTk0MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAub3Blbi1wb3B1cC1idXR0b24td3JhcHBlciAub3Blbi1wb3B1cC1idXR0b24udG9wLXJpZ2h0IHtcbiAgbGVmdDogOTMlO1xuICB0b3A6IC05NDAlO1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLndlYnNpdGUtZG9tYWluIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNi43JTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC53ZWJzaXRlLWRvbWFpbiBhIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHdpZHRoOiA1OSU7XG4gIGhlaWdodDogNTElO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUlO1xuICBwYWRkaW5nOiAycHggNHB4IDJweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDdweDtcbiAgY29sb3I6IHNpbHZlcjtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuaW5mbyB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmluZm8gLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuaW5mbyAubm90aWNlIHtcbiAgZm9udC1zaXplOiA3cHg7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5pbmZvIC5pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMy41cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmluZm8gLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogc2lsdmVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzLjVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuYmFja2dyb3VuZC1pbWcge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmJhY2tncm91bmQtaW1nIC5zdXBwb3J0ZXItbmFtZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmJhY2tncm91bmQtaW1nIC5zdXBwb3J0ZXItbWFqb3Ige1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmJhY2tncm91bmQtaW1nIC5zdXBwb3J0ZXItcGhvbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciAucG9wdXAgLmNvbnRlbnQgLmJhY2tncm91bmQtaW1nIC5zdXBwb3J0ZXItcGhvbmUgLnBob25lLWljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5iYWNrZ3JvdW5kLWltZyAuc3VwcG9ydGVyLXBob25lIC5waG9uZS1udW1iZXIge1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCAuY29udGVudCAuZm9vdGVyIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICB3aWR0aDogOTglO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMHB4O1xufVxuLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5mb290ZXIgaW1nIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogN3B4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5tYWluLXRpdGxlIHtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgcGFkZGluZzogNDVweCAyMHB4IDIwcHggMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgcGFkZGluZzogNDVweCAxNXB4IDE1cHggMjBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC50YWJzIC50YWItY29udGVudC5wb3B1cC1zdHlsZSAuYmFja2dyb3VuZC1pbWFnZS1zZWxlY3Rpb24gLmJhY2tncm91bmQtaW1hZ2Utc2VsZWN0aW9uLXN0b3JhZ2UgaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnRhYnMgLnRhYi1jb250ZW50LnBvcHVwLXN0eWxlIC5zdWJtaXQtYXJlYSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAuY29udGFpbmVyIC5pbm5lciAucG9wdXAtY29uZmlnIC5wb3B1cC1leGFtcGxlIC5icm93c2VyLWNvbnRhaW5lciAuYnJvd3NlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzLCAxNTUsIDIyOSwgMC4wNCk7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLndlYnNpdGUtZG9tYWluIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb250YWluZXIgLmlubmVyIC5wb3B1cC1jb25maWcgLnBvcHVwLWV4YW1wbGUgLmJyb3dzZXItY29udGFpbmVyIC5icm93c2VyIC5wb3B1cCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbiAgLmNvbnRhaW5lciAuaW5uZXIgLnBvcHVwLWNvbmZpZyAucG9wdXAtZXhhbXBsZSAuYnJvd3Nlci1jb250YWluZXIgLmJyb3dzZXIgLnBvcHVwIC5jb250ZW50IC5mb290ZXIge1xuICAgIHRvcDogLTE1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/visitor-tools/send-info/send-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/visitor-tools/send-info/send-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: SendInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendInfoComponent", function() { return SendInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/progress-bar/progress-bar.service */ "./src/@fuse/components/progress-bar/progress-bar.service.ts");
/* harmony import */ var _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/splash-screen.service */ "./src/@fuse/services/splash-screen.service.ts");
/* harmony import */ var app_main_website_management_website_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/website-management/website-management.service */ "./src/app/main/website-management/website-management.service.ts");
/* harmony import */ var app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/components/base/page-base.component */ "./src/app/shared/components/base/page-base.component.ts");
/* harmony import */ var app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _visitor_tools_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../visitor-tools.service */ "./src/app/main/visitor-tools/visitor-tools.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_shared_validators_phone_number_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/validators/phone-number.validator */ "./src/app/shared/validators/phone-number.validator.ts");















let SendInfoComponent = class SendInfoComponent extends app_shared_components_base_page_base_component__WEBPACK_IMPORTED_MODULE_10__["PageBaseComponent"] {
    constructor(_fuseProgressBarService, _fuseSplashScreenService, _websiteManagementService, _dialogService, _sessionService, _visitorToolsService) {
        super();
        this._fuseProgressBarService = _fuseProgressBarService;
        this._fuseSplashScreenService = _fuseSplashScreenService;
        this._websiteManagementService = _websiteManagementService;
        this._dialogService = _dialogService;
        this._sessionService = _sessionService;
        this._visitorToolsService = _visitorToolsService;
        this.websites = [];
        this.images = [
            {
                url: 'http://vaytienkhongthechap.net.vn/wp-content/uploads/2016/04/telephone_skills.jpg',
                cols: 1,
                rows: 1
            },
            {
                url: 'https://tekshanghai.com/wp-content/uploads/2018/12/tek-contact-us-support-man.png.png',
                cols: 1,
                rows: 1
            },
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxpmxve4G01hSCfB-D1bmdznjBweo6vgAD_ZM06cxUeBAHmtf1',
                cols: 1,
                rows: 1
            },
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFcmk67STyYb6HciXbcTguIXPJ69M9iLT5PjM2sFBU_xatnOi-',
                cols: 1,
                rows: 1
            }
        ];
        this.popupDisplayEnableSlideToggle = {
            label: 'Hiển thị nút mở popup',
            color: 'accent',
            checked: false,
            disabled: false
        };
        this.openPopupButtonPositions = [
            {
                name: 'Dưới - Trái',
                value: 1,
                checked: false,
                style: 'bottom-left'
            },
            {
                name: 'Dưới - Phải',
                value: 2,
                checked: false,
                style: 'bottom-right'
            },
            {
                name: 'Giữa - Phải',
                value: 3,
                checked: false,
                style: 'center-right'
            },
            {
                name: 'Giữa - Trái',
                value: 4,
                checked: false,
                style: 'center-left'
            },
            {
                name: 'Trên - Trái',
                value: 5,
                checked: false,
                style: 'top-left'
            },
            {
                name: 'Trên - Phải',
                value: 6,
                checked: false,
                style: 'top-right'
            }
        ];
        this.autoDisplayPopupSlideToggle = {
            label: 'Tự động hiển thị popup khi vào trang',
            color: 'accent',
            checked: false,
            disabled: false
        };
        this.displayPopupBeforeExitPageToggle = {
            label: 'Tự động hiển thị popup trước khi thoát trang',
            color: 'accent',
            checked: false,
            disabled: false
        };
        this.autoDisplayPopupTimeOptions = [
            {
                name: 'Sau mỗi 5 phút',
                value: 5,
                checked: false
            },
            {
                name: 'Sau mỗi 10 phút',
                value: 10,
                checked: false
            },
            {
                name: 'Sau mỗi 15 phút',
                value: 15,
                checked: false
            },
        ];
        /** control for selected website */
        this.websiteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** control for the MatSelect filter keyword */
        this.websiteFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** list of websites filterd by search keyword */
        this.filteredWebsites = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.isProcessing = true;
        this._fuseProgressBarService.show();
        this.initForms();
        this.websiteCtrl.setValue({
            id: '',
            name: ''
        });
        const sub = this._sessionService.getAccountId()
            .subscribe((accountId) => {
            if (accountId) {
                this.getWebsites(accountId);
            }
        });
        this.subscriptions.push(sub);
    }
    onCheckPopupDisplayEnableSlideToggle(e) {
        this.websiteCtrl.value.isPopupOpening = e.checked;
        this.setPopupDisplay({ popupStatus: e.checked });
    }
    onCheckAutoDisplayPopupSlideToggle(e) {
        this.setPopupDisplay({ autoShowPopup: e.checked });
    }
    changeOpenPopupButtonPosition(e) {
        this.setPopupDisplay({ popupPosition: e.value });
        // for (const item of this.openPopupButtonPositions) {
        //   if (item.value === e.value) {
        //     item.checked = true;
        //     this.openPopupButtonPositionStyle = item.value;
        //   } else {
        //     item.checked = false;
        //   }
        // }
    }
    changeAutoDisplayPopupTime(e) {
        this.setPopupDisplay({ autoShowPopupRepeatTime: e.value });
    }
    onCheckDisplayPopupBeforeExitPageToggle(e) {
        console.log(e.checked);
    }
    setPopupDisplay(property) {
        const sub = this._visitorToolsService.setPopupDislay(property, this.websiteCtrl.value.id)
            .subscribe(res => {
            this.setPopupConfig(res.data.popupConfig || null);
        }, (error) => {
            this._dialogService._openErrorDialog(error.error);
        });
        this.subscriptions.push(sub);
    }
    selectColorCircle(e) {
        this.popupStyleForm.controls['themeColor'].setValue(e.color.hex);
    }
    selectSupporterAvatar(url) {
        this.popupStyleForm.controls['supporterAvatar'].setValue(url);
    }
    selectWebsite() {
        this.setPopupConfig();
    }
    updateWebsiteInCurrentList(websiteId, data) {
        const website = lodash__WEBPACK_IMPORTED_MODULE_13__["find"](this.websites, w => w.id === websiteId);
        website[data.name] = data.value;
    }
    setPopupConfig(optionalConfig) {
        if (optionalConfig)
            this.websiteCtrl.value.popupConfig = optionalConfig;
        this.popupDisplayEnableSlideToggle.checked = this.websiteCtrl.value.isPopupOpening;
        const config = this.websiteCtrl.value.popupConfig;
        let popupStyleConfig = {}, popupDisplayConfig = {};
        if (config) {
            popupStyleConfig = {
                themeColor: config.themeColor,
                supporterAvatar: config.supporter.avatar,
                supporterName: config.supporter.name,
                supporterMajor: config.supporter.major,
                supporterPhone: config.supporter.phone,
            };
            popupDisplayConfig = {
                popupPosition: config.popupPosition,
                autoShowPopupRepeatTime: config.autoShowPopupRepeatTime,
                autoShowPopup: config.autoShowPopup
            };
        }
        else {
            popupStyleConfig = {
                themeColor: '#2196f3',
                supporterAvatar: this.images[0].url,
                supporterName: 'Nguyễn Thị A',
                supporterMajor: 'Hỗ trợ viên',
                supporterPhone: '0999999999',
            };
            this.submitPopupStyleForm(true);
        }
        //set popup style config
        for (const key in popupStyleConfig) {
            this.popupStyleForm.controls[key].setValue(popupStyleConfig[key]);
        }
        this.setPopupDisplayConfig(popupDisplayConfig);
    }
    setPopupDisplayConfig(popupDisplayConfig) {
        //Automatically initialize popup display config values if they have not been initialized yet
        if (!popupDisplayConfig.popupPosition) {
            this.setPopupDisplay({ popupPosition: this.openPopupButtonPositions[1].value });
            this.websiteCtrl.value.popupConfig['popupPosition'] = this.openPopupButtonPositions[1].value;
        }
        if (!popupDisplayConfig.autoShowPopupRepeatTime) {
            this.setPopupDisplay({ autoShowPopupRepeatTime: this.autoDisplayPopupTimeOptions[0].value });
            this.websiteCtrl.value.popupConfig['autoShowPopupRepeatTime'] = this.autoDisplayPopupTimeOptions[0].value;
        }
        if (popupDisplayConfig.autoShowPopup === undefined) {
            this.setPopupDisplay({ autoShowPopup: false });
            this.websiteCtrl.value.popupConfig['autoShowPopup'] = false;
        }
        this.autoDisplayPopupSlideToggle.checked = this.websiteCtrl.value.popupConfig['autoShowPopup'];
        for (const item of this.openPopupButtonPositions) {
            if (item.value === this.websiteCtrl.value.popupConfig['popupPosition']) {
                item.checked = true;
                this.openPopupButtonPositionStyle = item.value;
            }
            else {
                item.checked = false;
            }
        }
        for (const item of this.autoDisplayPopupTimeOptions) {
            if (item.value === this.websiteCtrl.value.popupConfig['autoShowPopupRepeatTime']) {
                item.checked = true;
            }
            else {
                item.checked = false;
            }
        }
    }
    changePopupStyleFormControlValue(value, controlName) {
        this.popupStyleForm.controls[controlName].setValue(value);
    }
    initForms() {
        this.popupStyleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            themeColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('#2196f3'),
            supporterAvatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.images[0].url),
            supporterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Nguyễn Thị A', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            supporterMajor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Hỗ trợ viên'),
            supporterPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0999999999', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                app_shared_validators_phone_number_validator__WEBPACK_IMPORTED_MODULE_14__["invalidPhoneNumberValidator"]
            ])
        });
    }
    get supporterName() {
        return this.popupStyleForm.get('supporterName');
    }
    get supporterPhone() {
        return this.popupStyleForm.get('supporterPhone');
    }
    generatePopupStyleParams() {
        const params = Object.assign({}, this.popupStyleForm.value);
        for (const key in params)
            if (!params[key])
                return null;
        return params;
    }
    submitPopupStyleForm(isInit) {
        const popupStyleParams = this.generatePopupStyleParams();
        if (!popupStyleParams) {
            this._dialogService._openErrorDialog({ messages: ['Vui lòng điền đầy đủ thông tin'] });
            return;
        }
        this._fuseProgressBarService.show();
        const sub = this._visitorToolsService.updatePopupConfig(popupStyleParams, this.websiteCtrl.value.id)
            .subscribe((res) => {
            this.setPopupConfig(res.data.popupConfig || null);
            this._fuseProgressBarService.hide();
            if (!isInit) {
                this._dialogService._openSuccessDialog({
                    messages: [`
              <center>
                Thiết lập thành công!
                <br>Kiểm tra website của bạn <a href="${this.websiteCtrl.value.name}" target="_blank">tại đây</a>
              </center>
            `]
                });
            }
        }, (error) => {
            this._fuseProgressBarService.hide();
            if (!isInit) {
                this._dialogService._openErrorDialog(error.error);
            }
        });
        this.subscriptions.push(sub);
    }
    numberWithSpaces(value, pattern) {
        let i = 0, phone = value.toString();
        return pattern.replace(/#/g, (_) => phone[i++]);
    }
    getWebsites(accountId) {
        const sub = this._websiteManagementService.getWebsites(accountId)
            .subscribe(res => {
            this.websites = (res.data.website || []).map(website => {
                return {
                    id: website._id,
                    name: website.domain,
                    isPopupOpening: website.isPopupOpening || false,
                    popupConfig: website.popupConfig || null
                };
            });
            if (this.websites.length > 0) {
                this.hasWebsite = true;
                // load the initial account list
                this.filteredWebsites.next(this.websites.slice());
                // listen for search field value changes
                this.websiteFilterCtrl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
                    .subscribe(() => {
                    this.filterWebsites();
                });
                // set default option is the first item of list websites
                this.websiteCtrl.setValue(this.websites[0]);
                this.setPopupConfig();
                this._fuseProgressBarService.hide();
                this._fuseSplashScreenService.hide();
                this.isProcessing = false;
            }
            else {
                this.hasWebsite = false;
                this.isProcessing = false;
                this._fuseProgressBarService.hide();
                this._fuseSplashScreenService.hide();
                this._dialogService._openInfoDialog('Tài khoản chưa có website nào. Vui lòng thêm', 'tại đây', `/quan-ly-website/${this._sessionService.activeAccountId}`);
            }
        });
        this.subscriptions.push(sub);
    }
    filterWebsites() {
        if (!this.websites) {
            return;
        }
        // get the search keyword
        let search = this.websiteFilterCtrl.value;
        if (!search) {
            this.filteredWebsites.next(this.websites.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the websites
        this.filteredWebsites.next(this.websites.filter(website => website.name.toLowerCase().indexOf(search) > -1));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelect"])
], SendInfoComponent.prototype, "singleSelect", void 0);
SendInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-info',
        template: __webpack_require__(/*! raw-loader!./send-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/visitor-tools/send-info/send-info.component.html"),
        styles: [__webpack_require__(/*! ./send-info.component.scss */ "./src/app/main/visitor-tools/send-info/send-info.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fuse_components_progress_bar_progress_bar_service__WEBPACK_IMPORTED_MODULE_6__["FuseProgressBarService"],
        _fuse_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["FuseSplashScreenService"],
        app_main_website_management_website_management_service__WEBPACK_IMPORTED_MODULE_8__["WebsiteManagementService"],
        app_shared_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"],
        app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"],
        _visitor_tools_service__WEBPACK_IMPORTED_MODULE_12__["VisitorToolsService"]])
], SendInfoComponent);



/***/ }),

/***/ "./src/app/main/visitor-tools/visitor-tools-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/visitor-tools/visitor-tools-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: VisitorToolsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorToolsRoutingModule", function() { return VisitorToolsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-info/send-info.component */ "./src/app/main/visitor-tools/send-info/send-info.component.ts");




let VisitorToolsRoutingModule = class VisitorToolsRoutingModule {
};
VisitorToolsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'gui-thong-tin-tu-van',
                    pathMatch: 'full',
                    component: _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__["SendInfoComponent"]
                }
            ])
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VisitorToolsRoutingModule);



/***/ }),

/***/ "./src/app/main/visitor-tools/visitor-tools.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/visitor-tools/visitor-tools.module.ts ***!
  \************************************************************/
/*! exports provided: VisitorToolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorToolsModule", function() { return VisitorToolsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _visitor_tools_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor-tools-routing.module */ "./src/app/main/visitor-tools/visitor-tools-routing.module.ts");
/* harmony import */ var _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send-info/send-info.component */ "./src/app/main/visitor-tools/send-info/send-info.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color/circle */ "./node_modules/ngx-color/circle/fesm2015/ngx-color-circle.js");









let VisitorToolsModule = class VisitorToolsModule {
};
VisitorToolsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _send_info_send_info_component__WEBPACK_IMPORTED_MODULE_3__["SendInfoComponent"]
        ],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            ngx_color_circle__WEBPACK_IMPORTED_MODULE_8__["ColorCircleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__["NgxMatSelectSearchModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
            _visitor_tools_routing_module__WEBPACK_IMPORTED_MODULE_2__["VisitorToolsRoutingModule"]
        ]
    })
], VisitorToolsModule);



/***/ }),

/***/ "./src/app/main/visitor-tools/visitor-tools.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/visitor-tools/visitor-tools.service.ts ***!
  \*************************************************************/
/*! exports provided: VisitorToolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorToolsService", function() { return VisitorToolsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/constants/api.constant */ "./src/app/shared/constants/api.constant.ts");




let VisitorToolsService = class VisitorToolsService {
    constructor(_http) {
        this._http = _http;
    }
    updatePopupConfig(params, websiteId) {
        const url = app_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_3__["API"].Website.updateWebsiteSendInfoPopupConfig.replace('{website_id}', websiteId);
        return this._http.put(url, params);
    }
    setPopupDislay(params, websiteId) {
        const url = app_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_3__["API"].Website.enablePopupDisplay.replace('{website_id}', websiteId);
        return this._http.put(url, params);
    }
};
VisitorToolsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VisitorToolsService);



/***/ }),

/***/ "./src/app/shared/validators/phone-number.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/validators/phone-number.validator.ts ***!
  \*************************************************************/
/*! exports provided: invalidPhoneNumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidPhoneNumberValidator", function() { return invalidPhoneNumberValidator; });
const invalidPhoneNumberValidator = (control) => {
    const phoneNumberPattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const isValid = phoneNumberPattern.test(control.value);
    return !isValid ? { 'invalidPhoneNumber': { value: control.value } } : null;
};


/***/ })

}]);
//# sourceMappingURL=main-visitor-tools-visitor-tools-module-es2015.js.map