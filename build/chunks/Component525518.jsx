/** Chunk was on 70119 **/
/** chunk id: 525518, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    l.default.track(c.rMx.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
      sku_id: t
    });
    let e = "".concat(location.protocol, "//").concat(location.host).concat(c.Z5c.COLLECTIBLES_SHOP).concat((0, s.aK)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
    (0, o.JG)(e, () => (0, a.showToast)((0, a.createToast)(u.intl.string(u.t["L/PwZW"]), a.ToastType.SUCCESS)))
  }, [t, n]);
  return (0, r.jsx)(a.hU, {
    "aria-label": u.intl.string(u.t.WqhZsr),
    onClick: d,
    icon: a.xPt,
    variant: "overlay-secondary",
    size: "sm"
  })
}