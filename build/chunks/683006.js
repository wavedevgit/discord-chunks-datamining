/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(896859);

function i() {}

function o() {}
o.resetWarningCache = i, e.exports = function() {
  function e(e, t, n, i, o, a) {
    if (a !== r) {
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
    checkPropTypes: o,
    resetWarningCache: i
  };
  return n.PropTypes = n, n
}