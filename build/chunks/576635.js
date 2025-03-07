/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(866442),
  i = n(442837),
  o = n(410030),
  a = n(607070),
  s = n(220082),
  l = n(44315),
  c = n(168631),
  u = n(981631);

function d(e) {
  var t, n, d;
  let {
    user: f,
    displayProfile: _,
    pendingThemeColors: p,
    pendingAvatarSrc: h,
    isPreview: m
  } = e, g = (0, o.ZP)(), E = (0, i.e7)([a.Z], () => a.Z.syncProfileThemeWithUserTheme), v = null != h ? h : null == f ? void 0 : f.getAvatarURL(null == _ ? void 0 : _.guildId, 80), b = (0, l.Sl)(u.Ilk.PRIMARY_530).hex, [y, O] = (0, s.Cf)(v, b, !1);
  if (!(null == _ ? void 0 : _.canEditThemes) && !m) return {
    theme: g,
    primaryColor: null,
    secondaryColor: null
  };
  let I = null == _ ? void 0 : _.getPreviewThemeColors(p),
    S = null !== (t = null == I ? void 0 : I[0]) && void 0 !== t ? t : (0, r._i)(y),
    T = null !== (n = null == I ? void 0 : I[1]) && void 0 !== n ? n : (0, r._i)(O);
  return {
    theme: E ? g : null !== (d = (0, c.V3)(S)) && void 0 !== d ? d : g,
    primaryColor: S,
    secondaryColor: T
  }
}