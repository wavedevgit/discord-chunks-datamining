/** Chunk was on web.js **/
/** chunk id: 592792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk260722 = require("./260722.js"),
  Chunk473007 = require("./473007.js");

function o(e, t, n, o) {
  let {
    comparator: l = (e, t) => e === t
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {}, c = r => {
    var i, o;
    return n(null == (o = a.Z.getSettings(r)) || null == (i = o[e]) ? true : i[t])
  }, u = e => (0, r.e7)([a.Z], () => c(e), [e], l);
  return {
    getControlledSetting: c,
    updateControlledSetting: s(c, (n, r) => null == n ? Promise.resolve() : i.ZP.updateTeenSettings(n, e, e => {
      e[t] = o(r, e[t])
    })),
    useControlledSetting: u
  }
}

function s(e, t) {
  return function(n, r) {
    return "function" == typeof r ? t(n, r(e(n))) : t(n, r)
  }
}