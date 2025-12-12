/** Chunk was on 99014 **/
/** chunk id: 119331, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  t: () => i
}), require("./415506.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk267642 = require("./267642.js"),
  Chunk331417 = require("./331417.js");

function i(e, t) {
  if (t) return {
    Icon: r.dz2,
    className: s.unlocked
  };
  switch (e) {
    case c.Ro.EMOJI:
      return {
        Icon: r.EO4, className: a()(s.icon, s.emoji)
      };
    case c.Ro.AUDIO:
      return {
        Icon: r.VWR, className: a()(s.icon, s.audio)
      };
    case c.Ro.ANIMATED:
      return {
        Icon: r.OUq, className: a()(s.icon, s.animated)
      };
    case c.Ro.CUSTOMIZATION:
      return {
        Icon: r.Ka2, className: a()(s.icon, s.customization)
      };
    case c.Ro.UPLOAD:
      return {
        Icon: r.rG2, className: a()(s.icon, s.upload)
      };
    case c.Ro.VANITY:
      return {
        Icon: r.r7p, className: a()(s.icon, s.vanity)
      };
    case c.Ro.STREAM:
      return {
        Icon: r.hGI, className: a()(s.icon, s.stream)
      };
    case c.Ro.STICKER:
      return {
        Icon: r.SlE, className: a()(s.icon, s.sticker)
      };
    case c.Ro.CUSTOM_ROLE_ICON:
      return {
        Icon: r.lZ8, className: a()(s.icon, s.customRoleIcon)
      };
    case c.Ro.STAGE_VIDEO:
      return {
        Icon: r.ewx, className: a()(s.icon, s.stage)
      };
    case c.Ro.SOUNDBOARD:
      return {
        Icon: r.KY1, className: a()(s.icon, s.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}