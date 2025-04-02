/** Chunk was on 83379 **/
n.d(t, {
  Z: () => O
});
var r = n(200651),
  i = n(192379),
  a = n(442837),
  o = n(481060),
  l = n(410030),
  s = n(739566),
  c = n(612659),
  u = n(703656),
  d = n(594174),
  p = n(63063),
  m = n(436952),
  f = n(411149),
  h = n(115215),
  g = n(151480),
  _ = n(680783),
  b = n(66420),
  v = n(981631),
  x = n(474936),
  y = n(388032),
  E = n(918360);

function O(e) {
  var t, n, O;
  let N, j, C;
  let {
    message: I,
    channel: S,
    compact: T
  } = e, P = null === (t = I.chatWallpaperInfo) || void 0 === t ? void 0 : t.wallpaperId, A = (0, m.sQ)({
    location: "ChatWallpaperSetSystemMessage"
  }), w = (0, s.ZP)(I), Z = (0, o.wjy)((0, l.ZP)()), {
    chatWallpaper: k,
    isUpdatingChatWallpaperFlag: R,
    lastSetMessageId: D
  } = (0, a.cj)([f.Z], () => ({
    chatWallpaper: f.Z.getWallpaperById(P),
    isUpdatingChatWallpaperFlag: f.Z.isUpdatingChatWallpaperFlagForChannel(S.id),
    lastSetMessageId: f.Z.getLastSetWallpaperMessageIdForChannel(S.id)
  })), L = (0, _.Z)(S.id), M = D === I.id, W = (0, a.e7)([d.default], () => d.default.getCurrentUser()), U = (null == W ? void 0 : W.id) === I.author.id, F = (0, c.m)(x.p9.TIER_2), B = h.t(S);
  return (i.useEffect(() => {
    null == k && f.Z.shouldFetchWallpapers && g.k9()
  }, [k]), null == P) ? null : (N = Z ? U ? y.NW.format(y.t.z847Tk, {
    wallpaper_name: null !== (n = null == k ? void 0 : k.label) && void 0 !== n ? n : y.t["UQMV/P"]
  }) : y.NW.format(y.t["+lKndX"], {
    username: null == w ? void 0 : w.nick,
    wallpaper_name: null !== (O = null == k ? void 0 : k.label) && void 0 !== O ? O : y.t["UQMV/P"]
  }) : y.NW.format(y.t.dBxFsL, {
    learnMoreLink: p.Z.getArticleURL(v.BhN.DM_WALLPAPERS)
  }), A ? B && M ? j = y.NW.formatToPlainString(y.t.PzTpVV, {
    wallpaperName: null == k ? void 0 : k.label
  }) : U || F || !M || (j = y.NW.format(y.t.JwUhHh, {
    onClickNitro: () => {
      (0, u.uL)(v.Z5c.NITRO_HOME)
    }
  })) : j = y.NW.string(y.t["6JSOu7"]), (null == L ? void 0 : L.isViewable) && M && !U && (C = (0, r.jsx)(o.zxk, {
    className: E.action,
    onClick: () => {
      g.X(S, P, {
        shouldClear: !B
      })
    },
    submitting: R,
    children: y.NW.string(B ? y.t.o6850d : y.t["/ubFp6"])
  })), (0, r.jsx)(b.Z, {
    channel: S,
    content: N,
    subtitle: j,
    action: C,
    compact: T,
    message: I
  }))
}