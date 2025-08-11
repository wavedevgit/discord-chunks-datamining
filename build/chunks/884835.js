/** Chunk was on 67244 **/
/** chunk id: 884835, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk311596 = require("./311596.js");

function n() {}

function s() {}
s.resetWarningCache = n, module.exports = function() {
  function e(e, t, r, n, s, o) {
    if (o !== a) {
      var i = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw i.name = "Invariant Violation", i
    }
  }

  function t() {
    return module
  }
  module.isRequired = module;
  var r = {
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
    checkPropTypes: s,
    resetWarningCache: n
  };
  return require.PropTypes = require, require
}