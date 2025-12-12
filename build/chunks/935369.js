/** Chunk was on web.js **/
/** chunk id: 935369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let [t, n] = r.useState(false), [a, s] = r.useState(null);
  return [r.useCallback(async function() {
    for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
    try {
      return s(null), n(true), await e(...r)
    } catch (e) {
      e.message !== o.intl.string(o.t.N2yb9a) && s(e instanceof i.Z ? e : new i.Z(e))
    } finally {
      n(false)
    }
  }, [e]), {
    loading: t,
    error: a
  }]
}