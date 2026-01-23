/** Chunk was on 59275 **/
/** chunk id: 278576, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  tR: () => o
}), require("./747238.js"), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk398590 = require("./398590.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js");

function o() {
  let {
    search: e
  } = (0, l.zy)(), t = (0, l.g)(), n = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), o = null != n ? parseInt(n, 10) : null;
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
    onClose: r.useCallback(() => {
      if (0 === o) {
        (0, a.aX)(), (0, s.id)(i.zgK.USER_SETTINGS);
        return
      }(0, a.EL)() ? (0, a.aX)() : (0, a.pX)(i.BVt.APP)
    }, [o]),
    source: o
  }, t)
}