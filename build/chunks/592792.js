/** Chunk was on web.js **/
/** chunk id: 592792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => l,
  c: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk260722 = require("./260722.js"),
  Chunk473007 = require("./473007.js");

function o(e, t, n, o) {
  let l = r => {
      var i, o;
      return n(null == (o = a.Z.getSettings(r)) || null == (i = o[e]) ? true : i[t])
    },
    c = e => (0, r.e7)([a.Z], () => l(e));
  return {
    getControlledSetting: l,
    updateControlledSetting: s(l, (n, r) => null == n ? Promise.resolve() : i.ZP.updateTeenSettings(n, e, e => {
      e[t] = o(r, e[t])
    })),
    useControlledSetting: c
  }
}

function s(e, t) {
  return function(n, r) {
    return "function" == typeof r ? t(n, r(e(n))) : t(n, r)
  }
}

function l(e) {
  let {
    baseSetting: t,
    isEligible: n,
    useIsEligible: r,
    eligibleDefault: i,
    ineligibleDefault: a,
    onUseDefault: o
  } = e;
  return {
    getControlledSetting: e => {
      let r = t.getControlledSetting(e);
      return null != r ? r : (null == o || o(), n() ? i() : a)
    },
    useControlledSetting: e => {
      let n = t.useControlledSetting(e),
        s = r();
      return null != n ? n : (null == o || o(), s ? i() : a)
    },
    updateControlledSetting: (e, n) => t.updateControlledSetting(e, n)
  }
}