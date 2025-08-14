/** Chunk was on 99014 **/
/** chunk id: 119331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => c
}), require("./415506.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk267642 = require("./267642.js"),
  Chunk191083 = require("./191083.js");

function c(e, t) {
  if (t) return {
    Icon: i.dz2,
    className: s.unlocked
  };
  switch (e) {
    case a.Ro.EMOJI:
      return {
        Icon: i.EO4, className: o()(s.icon, s.emoji)
      };
    case a.Ro.AUDIO:
      return {
        Icon: i.VWR, className: o()(s.icon, s.audio)
      };
    case a.Ro.ANIMATED:
      return {
        Icon: i.OUq, className: o()(s.icon, s.animated)
      };
    case a.Ro.CUSTOMIZATION:
      return {
        Icon: i.Ka2, className: o()(s.icon, s.customization)
      };
    case a.Ro.UPLOAD:
      return {
        Icon: i.rG2, className: o()(s.icon, s.upload)
      };
    case a.Ro.VANITY:
      return {
        Icon: i.r7p, className: o()(s.icon, s.vanity)
      };
    case a.Ro.STREAM:
      return {
        Icon: i.hGI, className: o()(s.icon, s.stream)
      };
    case a.Ro.STICKER:
      return {
        Icon: i.SlE, className: o()(s.icon, s.sticker)
      };
    case a.Ro.CUSTOM_ROLE_ICON:
      return {
        Icon: i.lZ8, className: o()(s.icon, s.customRoleIcon)
      };
    case a.Ro.STAGE_VIDEO:
      return {
        Icon: i.ewx, className: o()(s.icon, s.stage)
      };
    case a.Ro.SOUNDBOARD:
      return {
        Icon: i.KY1, className: o()(s.icon, s.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}