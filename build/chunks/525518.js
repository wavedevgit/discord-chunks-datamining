/** Chunk was on 2026 **/
n.d(t, {
  B: () => m
});
var r = n(200651),
  a = n(192379),
  i = n(481060),
  l = n(626135),
  o = n(572004),
  s = n(215023),
  c = n(981631),
  u = n(388032),
  d = n(260548);

function m(e) {
  let {
    skuId: t,
    tab: n
  } = e, m = a.useCallback(() => {
    l.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    }), (0, o.JG)("".concat(location.protocol, "//").concat(location.host).concat(c.Z5c.COLLECTIBLES_SHOP).concat((0, s.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t)), (0, i.showToast)((0, i.createToast)(u.NW.string(u.t["L/PwZW"]), i.ToastType.SUCCESS))
  }, [t, n]);
  return (0, r.jsx)(i.zxk, {
    "aria-label": u.NW.string(u.t.WqhZsr),
    look: i.zxk.Looks.BLANK,
    size: i.zxk.Sizes.NONE,
    onClick: m,
    innerClassName: d.buttonContent,
    className: d.button,
    children: (0, r.jsx)(i.xPt, {
      size: "md",
      color: "currentColor",
      className: d.shareIcon
    })
  })
}