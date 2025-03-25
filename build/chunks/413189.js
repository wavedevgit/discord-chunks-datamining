/** Chunk was on 52272 **/
n.d(t, {
  Z: () => E
});
var r = n(200651),
  i = n(948789),
  a = n(442837),
  o = n(481060),
  l = n(410030),
  s = n(739566),
  c = n(612659),
  u = n(594174),
  d = n(63063),
  p = n(436952),
  m = n(411149),
  f = n(115215),
  h = n(151480),
  g = n(373076),
  _ = n(66420),
  b = n(981631),
  v = n(474936),
  y = n(388032),
  x = n(84848);

function E(e) {
  var t, n, E, O, N;
  let j, C, I;
  let {
    message: S,
    channel: T,
    compact: P
  } = e, A = (0, p.sQ)({
    location: "ChatWallpaperSetSystemMessage"
  }), w = (0, p.sX)({
    location: "ChatWallpaperSetSystemMessage"
  }).enabled, Z = (0, s.ZP)(S), k = (0, o.apv)((0, l.ZP)()), R = (0, a.e7)([u.default], () => u.default.getCurrentUser()), D = (0, c.m)(v.p9.TIER_2), L = (null == R ? void 0 : R.id) === S.author.id, M = (0, g.P)(null === (t = T.wallpaper) || void 0 === t ? void 0 : t.setterId), W = f.t(T), U = f.Y(S), F = (null === (n = T.wallpaper) || void 0 === n ? void 0 : n.wallpaperId) === U && S.author.id === (null === (E = T.wallpaper) || void 0 === E ? void 0 : E.setterId), B = (0, a.e7)([m.Z], () => m.Z.getWallpaperById(U));
  return null == U ? null : (j = k ? y.NW.format(y.t.dBxFsL, {
    learnMoreLink: d.Z.getArticleURL(b.BhN.DM_WALLPAPERS)
  }) : L ? y.NW.format(y.t.z847Tk, {
    wallpaper_name: null !== (O = null == B ? void 0 : B.label) && void 0 !== O ? O : y.t["UQMV/P"]
  }) : y.NW.format(y.t["+lKndX"], {
    username: null == Z ? void 0 : Z.nick,
    wallpaper_name: null !== (N = null == B ? void 0 : B.label) && void 0 !== N ? N : y.t["UQMV/P"]
  }), A ? L || (W && F ? C = y.NW.string(y.t.q124kJ) : D || (C = y.NW.format(y.t.JwUhHh, {
    onClickNitro: () => {
      (0, i.uL)(b.Z5c.NITRO_HOME)
    }
  }))) : C = y.NW.string(y.t["6JSOu7"]), A && w && F && (W ? M && (I = (0, r.jsx)(o.zxk, {
    className: x.action,
    onClick: () => {
      h.X(T, {
        shouldClear: !1
      })
    },
    children: y.NW.string(y.t.o6850d)
  })) : I = (0, r.jsx)(o.zxk, {
    className: x.action,
    onClick: () => {
      h.X(T, {
        shouldClear: !0
      })
    },
    children: y.NW.string(y.t.VkKicX)
  })), (0, r.jsx)(_.Z, {
    channel: T,
    content: j,
    subtitle: C,
    action: I,
    compact: P
  }))
}