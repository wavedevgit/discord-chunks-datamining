/** Chunk was on 17768 **/
/** chunk id: 525518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, d = a.useCallback(() => {
    o.default.track(s.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    });
    let e = "".concat(location.protocol, "//").concat(location.host).concat(s.Z5c.COLLECTIBLES_SHOP).concat((0, c.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
    (0, l.JG)(e, () => (0, i.showToast)((0, i.createToast)(u.intl.string(u.t["L/PwZW"]), i.ToastType.SUCCESS)))
  }, [t, n]);
  return (0, r.jsx)(i.hU, {
    "aria-label": u.intl.string(u.t.WqhZsr),
    onClick: d,
    icon: i.xPt,
    variant: "overlay-secondary",
    size: "sm"
  })
}