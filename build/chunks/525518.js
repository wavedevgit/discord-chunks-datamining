/** Chunk was on 2026 **/
n.d(t, {
  B: () => d
});
var r = n(200651),
  i = n(192379),
  a = n(481060),
  s = n(626135),
  o = n(572004),
  l = n(981631),
  c = n(388032),
  u = n(260548);

function d(e) {
  let {
    skuId: t
  } = e, n = i.useCallback(() => {
    s.default.track(l.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    }), (0, o.JG)("".concat(location.protocol, "//").concat(location.host).concat(l.Z5c.COLLECTIBLES_SHOP, "#itemSkuId=").concat(t)), (0, a.showToast)((0, a.createToast)(c.NW.string(c.t["L/PwZW"]), a.ToastType.SUCCESS))
  }, [t]);
  return (0, r.jsx)(a.zxk, {
    "aria-label": c.NW.string(c.t.WqhZsr),
    look: a.zxk.Looks.BLANK,
    size: a.zxk.Sizes.NONE,
    onClick: n,
    innerClassName: u.buttonContent,
    className: u.button,
    children: (0, r.jsx)(a.xPt, {
      size: "md",
      color: "currentColor",
      className: u.shareIcon
    })
  })
}