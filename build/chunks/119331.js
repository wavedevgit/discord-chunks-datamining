/** Chunk was on 99014 **/
/** chunk id: 119331, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  t: () => i
}), require("./415506.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk267642 = require("./267642.js"),
  Chunk191083 = require("./191083.js");

function i(e, t) {
  if (t) return {
    Icon: a.dz2,
    className: c.unlocked
  };
  switch (e) {
    case s.Ro.EMOJI:
      return {
        Icon: a.EO4, className: r()(c.icon, c.emoji)
      };
    case s.Ro.AUDIO:
      return {
        Icon: a.VWR, className: r()(c.icon, c.audio)
      };
    case s.Ro.ANIMATED:
      return {
        Icon: a.OUq, className: r()(c.icon, c.animated)
      };
    case s.Ro.CUSTOMIZATION:
      return {
        Icon: a.Ka2, className: r()(c.icon, c.customization)
      };
    case s.Ro.UPLOAD:
      return {
        Icon: a.rG2, className: r()(c.icon, c.upload)
      };
    case s.Ro.VANITY:
      return {
        Icon: a.r7p, className: r()(c.icon, c.vanity)
      };
    case s.Ro.STREAM:
      return {
        Icon: a.hGI, className: r()(c.icon, c.stream)
      };
    case s.Ro.STICKER:
      return {
        Icon: a.SlE, className: r()(c.icon, c.sticker)
      };
    case s.Ro.CUSTOM_ROLE_ICON:
      return {
        Icon: a.lZ8, className: r()(c.icon, c.customRoleIcon)
      };
    case s.Ro.STAGE_VIDEO:
      return {
        Icon: a.ewx, className: r()(c.icon, c.stage)
      };
    case s.Ro.SOUNDBOARD:
      return {
        Icon: a.KY1, className: r()(c.icon, c.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}