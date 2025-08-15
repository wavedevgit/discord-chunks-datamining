/** Chunk was on 45620 **/
/** chunk id: 508498, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Db: () => s
}), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk37234 = require("./37234.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

function s() {
  let {
    search: e
  } = (0, Chunk843611.TH)(), t = (0, Chunk843611.UO)(), r = Chunk647438.useMemo(() => new URLSearchParams(module), [module]).get("source"), s = null != require ? parseInt(require, 10) : null;
  return function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    onClose: Chunk647438.useCallback(() => {
      if (0 === s) {
        (0, Chunk703656.op)(), (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS);
        return
      }
      if ((0, Chunk703656.uv)()) return void(0, Chunk703656.op)();
      (0, Chunk703656.uL)(Chunk981631.Z5c.APP)
    }, [s]),
    source: s
  }, exports)
}