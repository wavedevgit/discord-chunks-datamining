/** Chunk was on web.js **/
/** chunk id: 382287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LJ: () => u,
  WQ: () => l,
  fJ: () => c
}), require("./321073.js");
var Chunk565150 = require("./565150.js"),
  Chunk453771 = require("./453771.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t) {
  let n = i.Hb(i.o2(t));
  return a.Ay.isPremium(e, s.PremiumTypes.TIER_2) ? o.intl.formatToPlainString(o.t.fxEKdS, {
    maxSize: n
  }) : a.Ay.isPremium(e, s.PremiumTypes.TIER_1) ? o.intl.formatToPlainString(o.t["Nr+LsZ"], {
    maxSize: n
  }) : o.intl.formatToPlainString(o.t.fxEKdS, {
    maxSize: n
  })
}

function c(e, t) {
  return i.SH(e, t) || i.Aw(e)
}

function u(e) {
  return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), [])
}