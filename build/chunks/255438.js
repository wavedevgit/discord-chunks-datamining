/** Chunk was on web.js **/
/** chunk id: 255438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XF: () => i,
  Xq: () => l,
  up: () => c
});
var Chunk985018 = require("./985018.jsx");
let i = 1024,
  a = 1024,
  s = 1024,
  o = {
    useKibibytes: false,
    showDecimalForGB: true,
    useSpace: true
  };

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o,
    n = t.useKibibytes ? a : 1e3,
    i = t.useKibibytes ? s : 1e3,
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
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o,
    n = t.useKibibytes ? i : 1e3,
    s = t.useKibibytes ? a : 1e3,
    c = e / n;
  return c / s >= 1 ? l(c, t) : t.useSpace ? r.intl.formatToPlainString(r.t.bTzRR6, {
    size: Math.ceil(c)
  }) : r.intl.formatToPlainString(r.t.kEk9pr, {
    size: Math.ceil(c)
  })
}