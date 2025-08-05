/** Chunk was on 54433 **/
n.d(t, {
  c: () => x
});
var i = n(255367),
  l = n(442837),
  r = n(780384),
  s = n(481060),
  a = n(410030),
  o = n(607070),
  C = n(987209),
  d = n(717401),
  c = n(286961),
  u = n(897942),
  p = n(42154);

function x() {
  var e;
  let t = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
    n = (0, a.ZP)(),
    x = (0, r.wj)(n),
    f = (0, c.Z)(),
    h = null == f ? void 0 : f.planSelectionBanner,
    {
      claimableRewards: j
    } = (0, C.wD)();
  if (null == h || null == j) return null;
  let m = null == (e = h.gradientConfig) ? void 0 : e.call(h, {
      isDarkMode: x,
      isAndroid: !1
    }),
    _ = (0, d.Tl)(m);
  return (0, i.jsxs)("div", {
    className: p.promotionalFooterBanner,
    style: _,
    children: [(0, i.jsx)(u.Z, {
      claimableRewards: j,
      maxRewardImageSrc: h.getImageUrl(x, t),
      size: s.EFr.SIZE_40
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      className: p.bannerText,
      children: h.desktopBannerText(j.length)
    })]
  })
}