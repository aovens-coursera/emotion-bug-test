"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = require("@emotion/react");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const styles = {
  moo: process.env.NODE_ENV === "production" ? {
    name: "mmvz9h",
    styles: "font-weight:400"
  } : {
    name: "ywwabk-moo",
    styles: "font-weight:400;label:moo;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Nb28uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdPIiwiZmlsZSI6Ii4uL3NyYy9Nb28uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbW9vOiBjc3Moe1xuICAgIGZvbnRXZWlnaHQ6IDQwMFxuICB9KVxufTtcblxuY29uc3QgTW9vID0gKHsgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXYgY3NzPXtzdHlsZXMubW9vfSB7Li4ucmVzdH0+XG4gICAgTW9vXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9vOyJdfQ== */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  }
};

const Moo = _ref => {
  let rest = Object.assign({}, _ref);
  return (0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    css: styles.moo
  }, rest), {}, {
    children: "Moo"
  }));
};

var _default = Moo;
exports.default = _default;