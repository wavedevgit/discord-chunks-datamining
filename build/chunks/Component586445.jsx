/** Chunk was on 77313 **/
/** chunk id: 586445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    skuId: t,
    tab: n
  } = e, d = l.useCallback(() => {
    a.default.track(c.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    });
    let e = "".concat(location.protocol, "//").concat(location.host).concat(c.BVt.COLLECTIBLES_SHOP).concat((0, o.cw)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
    (0, s.C)(e, () => (0, i.showToast)((0, i.createToast)(u.intl.string(u.t["L/PwZf"]), i.ToastType.SUCCESS)))
  }, [t, n]);
  return (0, r.jsx)(i.K0, {
    "aria-label": u.intl.string(u.t.WqhZss),
    onClick: d,
    icon: i.qYV,
    variant: "overlay-secondary",
    size: "sm"
  })
}