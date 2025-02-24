/** Chunk was on 2026 **/
n.d(t, {
  B: () => d
});
var i = n(200651),
  r = n(192379),
  a = n(481060),
  l = n(626135),
  s = n(572004),
  o = n(981631),
  c = n(388032),
  u = n(191221);

function d(e) {
  let {
    skuId: t
  } = e, n = r.useCallback(() => {
    l.default.track(o.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    }), (0, s.JG)("".concat(location.protocol, "//").concat(location.host).concat(o.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t)), (0, a.showToast)((0, a.createToast)(c.NW.string(c.t["L/PwZW"]), a.ToastType.SUCCESS))
  }, [t]);
  return (0, i.jsx)(a.zxk, {
    "aria-label": c.NW.string(c.t.WqhZsr),
    look: a.zxk.Looks.BLANK,
    size: a.zxk.Sizes.NONE,
    onClick: n,
    innerClassName: u.buttonContent,
    className: u.button,
    children: (0, i.jsx)(a.xPt, {
      size: "md",
      color: "currentColor",
      className: u.shareIcon
    })
  })
}