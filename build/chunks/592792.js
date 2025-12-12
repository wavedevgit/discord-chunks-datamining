/** Chunk was on web.js **/
/** chunk id: 592792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk260722 = require("./260722.js"),
  Chunk473007 = require("./473007.js");

function a(e, t, n, a) {
  let {
    comparator: l = (e, t) => e === t
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {}, c = r => {
    var i, a;
    return n(null == (a = o.Z.getSettings(r)) || null == (i = a[e]) ? true : i[t])
  }, u = e => (0, r.e7)([o.Z], () => c(e), [e], l);
  return {
    getControlledSetting: c,
    updateControlledSetting: s(c, (n, r) => null == n ? Promise.resolve() : i.ZP.updateTeenSettings(n, e, e => {
      e[t] = a(r, e[t])
    })),
    useControlledSetting: u
  }
}

function s(e, t) {
  return function(n, r) {
    return "function" == typeof r ? t(n, r(e(n))) : t(n, r)
  }
}