/** Chunk was on 98335 **/
/** chunk id: 499502, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function o(t, e) {
  let n = e.primarySkuId,
    o = l.Sb.useSetting();
  return !__OVERLAY__ && o && a.wS ? (0, r.jsxs)(i.sNh, {
    id: "application-dev",
    label: c.intl.string(c.t.OpuAlK),
    action: () => (0, a.JG)(e.id),
    children: [(0, r.jsx)(i.sNh, {
      id: "app-id",
      label: c.intl.string(c.t.qSHshq),
      action: () => (0, a.JG)(e.id)
    }), null != t ? (0, r.jsx)(i.sNh, {
      id: "branch-id",
      label: c.intl.string(c.t.g7oyyo),
      action: () => (0, a.JG)(t.branchId)
    }) : null, null != n ? (0, r.jsx)(i.sNh, {
      id: "sku-id",
      label: c.intl.string(c.t.hReUdL),
      action: () => (0, a.JG)(n)
    }) : null]
  }) : null
}