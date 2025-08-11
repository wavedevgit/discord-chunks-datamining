/** Chunk was on 68214 **/
/** chunk id: 884835, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk311596 = require("./311596.js");

function n() {}

function i() {}
i.resetWarningCache = n, module.exports = function() {
  function t(t, e, r, n, i, a) {
    if (a !== o) {
      var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u
    }
  }

  function e() {
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
    checkPropTypes: i,
    resetWarningCache: n
  };
  return require.PropTypes = require, require
}