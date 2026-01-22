/** Chunk was on web.js **/
/** chunk id: 195667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk899847 = require("./899847.js"),
  Chunk842144 = require("./842144.js");

function s(e, t, n, s) {
  let {
    comparator: l = (e, t) => e === t
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {}, c = r => {
    var i, s;
    return n(null == (s = a.A.getSettings(r)) || null == (i = s[e]) ? true : i[t])
  }, u = e => (0, r.bG)([a.A], () => c(e), [e], l);
  return {
    getControlledSetting: c,
    updateControlledSetting: o(c, (n, r) => null == n ? Promise.resolve() : i.Ay.updateTeenSettings(n, e, e => {
      e[t] = s(r, e[t])
    })),
    useControlledSetting: u
  }
}

function o(e, t) {
  return function(n, r) {
    return "function" == typeof r ? t(n, r(e(n))) : t(n, r)
  }
}