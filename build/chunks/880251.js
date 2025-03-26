/** Chunk was on 52272 **/
n.d(t, {
  E: () => c
});
var r = n(192379),
  i = n(361213),
  o = n(778569),
  a = n(783097),
  l = n(768581),
  s = n(758199);

function c(e) {
  let {
    bot: t
  } = e, n = (0, a.ye)(e), {
    url: c
  } = (0, o.Z)({
    applicationId: n ? e.id : void 0,
    size: 600,
    names: ["embedded_cover"]
  });
  return r.useMemo(() => {
    let r, o;
    let u = s.u.BOT;
    if (null != t) {
      let {
        banner: e
      } = t;
      r = (0, l.aN)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: !1
      }), (0, l.xR)(e) && null == c && (o = (0, l.aN)({
        id: t.id,
        banner: e,
        size: 512,
        canAnimate: !0
      }))
    }
    if (n) {
      let t = (0, a.yJ)(e);
      null != c && (r = c, u = s.u.ACTIVITY);
      let n = null == t ? void 0 : t.activity_preview_video_asset_id;
      null != n && (o = (0, i.Z)(e.id, n), u = s.u.ACTIVITY)
    }
    return {
      staticBannerSrc: r,
      videoBannerSrc: o,
      bannerAspectRatio: u
    }
  }, [c, t, n, e])
}