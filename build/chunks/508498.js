/** Chunk was on 45620 **/
/** chunk id: 508498, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Db: () => a
}), require("./35282.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk37234 = require("./37234.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

function a() {
  let {
    search: e
  } = (0, Chunk843611.TH)(), t = (0, Chunk843611.UO)(), n = Chunk647438.useMemo(() => new URLSearchParams(module), [module]).get("source"), a = null != require ? parseInt(require, 10) : null;
  return function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    onClose: Chunk647438.useCallback(() => {
      if (0 === a) {
        (0, Chunk703656.op)(), (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS);
        return
      }
      if ((0, Chunk703656.uv)()) return void(0, Chunk703656.op)();
      (0, Chunk703656.uL)(Chunk981631.Z5c.APP)
    }, [a]),
    source: a
  }, exports)
}