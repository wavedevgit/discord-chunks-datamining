/** Chunk was on 99014 **/
/** chunk id: 119331, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  t: () => i
}), require("./415506.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk267642 = require("./267642.js"),
  Chunk829317 = require("./829317.js");

function i(e, t) {
  if (t) return {
    Icon: a.dz2,
    className: s.unlocked
  };
  switch (e) {
    case c.Ro.EMOJI:
      return {
        Icon: a.EO4, className: r()(s.icon, s.emoji)
      };
    case c.Ro.AUDIO:
      return {
        Icon: a.VWR, className: r()(s.icon, s.audio)
      };
    case c.Ro.ANIMATED:
      return {
        Icon: a.OUq, className: r()(s.icon, s.animated)
      };
    case c.Ro.CUSTOMIZATION:
      return {
        Icon: a.Ka2, className: r()(s.icon, s.customization)
      };
    case c.Ro.UPLOAD:
      return {
        Icon: a.rG2, className: r()(s.icon, s.upload)
      };
    case c.Ro.VANITY:
      return {
        Icon: a.r7p, className: r()(s.icon, s.vanity)
      };
    case c.Ro.STREAM:
      return {
        Icon: a.hGI, className: r()(s.icon, s.stream)
      };
    case c.Ro.STICKER:
      return {
        Icon: a.SlE, className: r()(s.icon, s.sticker)
      };
    case c.Ro.CUSTOM_ROLE_ICON:
      return {
        Icon: a.lZ8, className: r()(s.icon, s.customRoleIcon)
      };
    case c.Ro.STAGE_VIDEO:
      return {
        Icon: a.ewx, className: r()(s.icon, s.stage)
      };
    case c.Ro.SOUNDBOARD:
      return {
        Icon: a.KY1, className: r()(s.icon, s.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}