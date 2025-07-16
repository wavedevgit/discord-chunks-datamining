/** Chunk was on 99014 **/
n.d(t, {
  t: () => l
}), n(415506);
var r = n(120356),
  o = n.n(r),
  a = n(481060),
  i = n(267642),
  s = n(462820);

function l(e, t) {
  if (t) return {
    Icon: a.dz2,
    className: s.unlocked
  };
  switch (e) {
    case i.Ro.EMOJI:
      return {
        Icon: a.EO4, className: o()(s.icon, s.emoji)
      };
    case i.Ro.AUDIO:
      return {
        Icon: a.VWR, className: o()(s.icon, s.audio)
      };
    case i.Ro.ANIMATED:
      return {
        Icon: a.OUq, className: o()(s.icon, s.animated)
      };
    case i.Ro.CUSTOMIZATION:
      return {
        Icon: a.Ka2, className: o()(s.icon, s.customization)
      };
    case i.Ro.UPLOAD:
      return {
        Icon: a.rG2, className: o()(s.icon, s.upload)
      };
    case i.Ro.VANITY:
      return {
        Icon: a.r7p, className: o()(s.icon, s.vanity)
      };
    case i.Ro.STREAM:
      return {
        Icon: a.hGI, className: o()(s.icon, s.stream)
      };
    case i.Ro.STICKER:
      return {
        Icon: a.SlE, className: o()(s.icon, s.sticker)
      };
    case i.Ro.CUSTOM_ROLE_ICON:
      return {
        Icon: a.lZ8, className: o()(s.icon, s.customRoleIcon)
      };
    case i.Ro.STAGE_VIDEO:
      return {
        Icon: a.ewx, className: o()(s.icon, s.stage)
      };
    case i.Ro.SOUNDBOARD:
      return {
        Icon: a.KY1, className: o()(s.icon, s.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}