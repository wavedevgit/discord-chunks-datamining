/** Chunk was on web.js **/
/** chunk id: 683006, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk896859 = require("./896859.js");

function i() {}

function a() {}
a.resetWarningCache = i, module.exports = function() {
  function e(e, t, n, i, a, o) {
    if (o !== r) {
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
    checkPropTypes: a,
    resetWarningCache: i
  };
  return n.PropTypes = n, n
}