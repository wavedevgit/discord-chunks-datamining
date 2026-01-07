/** Chunk was on 69773 **/
/** chunk id: 884835, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk311596 = require("./311596.js");

function r() {}

function o() {}
o.resetWarningCache = r, module.exports = function() {
  function e(e, t, n, r, o, i) {
    if (i !== a) {
      var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw s.name = "Invariant Violation", s
    }
  }

  function t() {
    return e
  }
  e.isRequired = e;
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: o,
    resetWarningCache: r
  };
  return n.PropTypes = n, n
}