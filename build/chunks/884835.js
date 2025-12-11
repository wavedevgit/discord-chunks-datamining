/** Chunk was on 69773 **/
/** chunk id: 884835, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk311596 = require("./311596.js");

function r() {}

function i() {}
i.resetWarningCache = r, module.exports = function() {
  function e(e, t, n, r, i, o) {
    if (o !== a) {
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
    bigint: module,
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
    checkPropTypes: i,
    resetWarningCache: r
  };
  return require.PropTypes = require, require
}