/** Chunk was on 56826 **/
/** chunk id: 875252, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  H: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk832239 = require("./832239.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let n = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
    e = (0, r.e7)([a.ZP], () => a.ZP.getChannelSafetyWarnings(t.id));
  return (null == n ? true : n.isStaff()) !== true || null == e || 0 === e.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.sNh, {
      id: "delete-safety-warnings",
      label: o.intl.string(o.t.g7o9bm),
      action: () => (0, d.Vp)(t.id)
    }), (0, i.jsx)(l.sNh, {
      id: "clear-safety-warnings",
      label: o.intl.string(o.t.VuSvGh),
      action: () => (0, s.wS)(t.id)
    })]
  })
}