/** Chunk was on web.js **/
/** chunk id: 608461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk181658 = require("./181658.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let [t, n] = r.useState(false), [o, s] = r.useState(null);
  return [r.useCallback(async function() {
    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
    try {
      return s(null), n(true), await e(...r)
    } catch (e) {
      e.message !== a.intl.string(a.t.N2yb9a) && s(e instanceof i.A ? e : new i.A(e))
    } finally {
      n(false)
    }
  }, [e]), {
    loading: t,
    error: o
  }]
}