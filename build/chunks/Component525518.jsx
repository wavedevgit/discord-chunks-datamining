/** Chunk was on 32160 **/
/** chunk id: 525518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    skuId: t,
    tab: n
  } = e, u = a.useCallback(() => {
    o.default.track(l.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    });
    let e = "".concat(location.protocol, "//").concat(location.host).concat(l.Z5c.COLLECTIBLES_SHOP).concat((0, s.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
    (0, c.JG)(e, () => (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["L/PwZW"]), i.ToastType.SUCCESS)))
  }, [t, n]);
  return (0, r.jsx)(i.hU, {
    "aria-label": d.intl.string(d.t.WqhZsr),
    onClick: u,
    icon: i.xPt,
    variant: "overlay-secondary",
    size: "sm"
  })
}