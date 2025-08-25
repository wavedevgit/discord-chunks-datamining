/** Chunk was on web.js **/
/** chunk id: 683006, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk896859 = require("./896859.js");

function i() {}

function o() {}
o.resetWarningCache = i, module.exports = function() {
  function e(e, t, n, i, o, a) {
    if (a !== r) {
      var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw s.name = "Invariant Violation", s
    }
  }

  function t() {
    return module
  }
  module.isRequired = module;
  var n = {
    array: module,
    bool: module,
    func: module,
    number: module,
    object: module,
    string: module,
    symbol: module,
    any: module,
    arrayOf: exports,
    element: module,
    elementType: module,
    instanceOf: exports,
    node: module,
    objectOf: exports,
    oneOf: exports,
    oneOfType: exports,
    shape: exports,
    exact: exports,
    checkPropTypes: o,
    resetWarningCache: i
  };
  return require.PropTypes = require, require
}