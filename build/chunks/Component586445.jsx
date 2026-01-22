/** Chunk was on 1784 **/
/** chunk id: 586445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    skuId: t,
    tab: n
  } = e, u = l.useCallback(() => {
    i.default.track(o.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    });
    let e = "".concat(location.protocol, "//").concat(location.host).concat(o.BVt.COLLECTIBLES_SHOP).concat((0, c.cw)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
    (0, s.C)(e, () => (0, a.showToast)((0, a.createToast)(d.intl.string(d.t["L/PwZf"]), a.ToastType.SUCCESS)))
  }, [t, n]);
  return (0, r.jsx)(a.K0, {
    "aria-label": d.intl.string(d.t.WqhZss),
    onClick: u,
    icon: a.qYV,
    variant: "overlay-secondary",
    size: "sm"
  })
}