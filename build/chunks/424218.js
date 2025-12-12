/** Chunk was on web.js **/
/** chunk id: 424218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BU: () => l,
  IC: () => c,
  XD: () => i
});
var Chunk388032 = require("./388032.jsx");
let i = 1024,
  o = 1024,
  a = 1024,
  s = {
    useKibibytes: false,
    showDecimalForGB: true,
    useSpace: true
  };

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s,
    n = t.useKibibytes ? o : 1e3,
    i = t.useKibibytes ? a : 1e3,
    l = Math.ceil(e / n);
  if (l < i) return t.useSpace ? r.intl.formatToPlainString(r.t.cS889N, {
    size: l
  }) : r.intl.formatToPlainString(r.t.pIn7Af, {
    size: l
  });
  let c = l / i;
  return c = t.showDecimalForGB ? Math.round(10 * c) / 10 : Math.round(c), t.useSpace ? r.intl.formatToPlainString(r.t.yhEXX7, {
    size: c
  }) : r.intl.formatToPlainString(r.t.TbMX9D, {
    size: c
  })
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s,
    n = t.useKibibytes ? i : 1e3,
    a = t.useKibibytes ? o : 1e3,
    c = e / n;
  return c / a >= 1 ? l(c, t) : t.useSpace ? r.intl.formatToPlainString(r.t.bTzRR6, {
    size: Math.ceil(c)
  }) : r.intl.formatToPlainString(r.t.kEk9pr, {
    size: Math.ceil(c)
  })
}