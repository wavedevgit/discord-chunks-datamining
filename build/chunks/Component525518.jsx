/** Chunk was on 2026 **/
/** chunk id: 525518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    skuId: t,
    tab: n
  } = e, d = i.useCallback(() => {
    a.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    });
    let e = "".concat(location.protocol, "//").concat(location.host).concat(c.Z5c.COLLECTIBLES_SHOP).concat((0, s.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
    (0, o.JG)(e, () => (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["L/PwZf"]), l.ToastType.SUCCESS)))
  }, [t, n]);
  return (0, r.jsx)(l.hU, {
    "aria-label": u.intl.string(u.t.WqhZss),
    onClick: d,
    icon: l.xPt,
    variant: "overlay-secondary",
    size: "sm"
  })
}