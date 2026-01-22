/** Chunk was on 881 **/
/** chunk id: 81766, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx");

function o(t, e) {
  let n = e.primarySkuId,
    o = l.Q_.useSetting();
  return !__OVERLAY__ && o && a.p5 ? (0, r.jsxs)(i.Drp, {
    id: "application-dev",
    label: c.intl.string(c.t.OpuAlK),
    action: () => (0, a.C)(e.id),
    children: [(0, r.jsx)(i.Drp, {
      id: "app-id",
      label: c.intl.string(c.t.qSHshq),
      action: () => (0, a.C)(e.id)
    }), null != t ? (0, r.jsx)(i.Drp, {
      id: "branch-id",
      label: c.intl.string(c.t.g7oyyo),
      action: () => (0, a.C)(t.branchId)
    }) : null, null != n ? (0, r.jsx)(i.Drp, {
      id: "sku-id",
      label: c.intl.string(c.t.hReUdL),
      action: () => (0, a.C)(n)
    }) : null]
  }) : null
}