/** Chunk was on 80717 **/
/** chunk id: 382287, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LJ: () => u,
  WQ: () => s,
  fJ: () => c
}), require("./321073.js");
var Chunk565150 = require("./565150.js"),
  Chunk453771 = require("./453771.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let n = i.Hb(i.o2(t));
  return l.Ay.isPremium(e, o.PremiumTypes.TIER_2) ? a.intl.formatToPlainString(a.t.fxEKdS, {
    maxSize: n
  }) : l.Ay.isPremium(e, o.PremiumTypes.TIER_1) ? a.intl.formatToPlainString(a.t["Nr+LsZ"], {
    maxSize: n
  }) : a.intl.formatToPlainString(a.t.fxEKdS, {
    maxSize: n
  })
}

function c(e, t) {
  return i.SH(e, t) || i.Aw(e)
}

function u(e) {
  return e.reduce((e, t) => (t.item.platform === r.xz.WEB && e.push(t.item.file), e), [])
}