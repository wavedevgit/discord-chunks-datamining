/** Chunk was on web.js **/
/** chunk id: 925928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => _,
  Zk: () => f,
  d0: () => d
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");
let o = 60,
  s = 3600,
  l = 86400,
  c = 2592e3,
  u = 31104e3,
  d = () => ({
    minutes: Chunk388032.t["XIGt+W"],
    hours: Chunk388032.t.rhY1Rs,
    days: Chunk388032.t.GBLpQ8,
    months: Chunk388032.t.XzBNbS,
    years: Chunk388032.t.I1E8p6
  }),
  f = () => ({
    minutes: Chunk388032.t["GqQ/Y9"],
    hours: Chunk388032.t.c5zfWZ,
    days: Chunk388032.t.amjnaI,
    months: Chunk388032.t.SoON3V,
    years: Chunk388032.t["12B3Re"]
  });

function p(e) {
  let {
    seconds: t,
    getFormatter: n
  } = e, r = n(), i = "";
  return t < o ? a.intl.formatToPlainString(r.minutes, {
    minutes: 1
  }) : t < s ? a.intl.formatToPlainString(r.minutes, {
    minutes: Math.floor(t / o)
  }) : t < l ? a.intl.formatToPlainString(r.hours, {
    hours: Math.floor(t / s)
  }) : t < c ? a.intl.formatToPlainString(r.days, {
    days: Math.floor(t / l)
  }) : t < u ? a.intl.formatToPlainString(r.months, {
    months: Math.floor(t / c)
  }) : a.intl.formatToPlainString(r.years, {
    years: Math.floor(t / u)
  })
}

function _(e) {
  let {
    since: t,
    getFormatter: n
  } = e;
  return p({
    seconds: i()().diff(i()(t), "s"),
    getFormatter: n
  })
}