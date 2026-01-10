/** Chunk was on 56826 **/
/** chunk id: 875252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk832239 = require("./832239.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
    n = (0, r.e7)([o.ZP], () => o.ZP.getChannelSafetyWarnings(e.id));
  return (null == t ? true : t.isStaff()) !== true || null == n || 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.sNh, {
      id: "delete-safety-warnings",
      label: u.intl.string(u.t.g7o9bs),
      action: () => (0, s.Vp)(e.id)
    }), (0, i.jsx)(l.sNh, {
      id: "clear-safety-warnings",
      label: u.intl.string(u.t.VuSvGu),
      action: () => (0, a.wS)(e.id)
    })]
  })
}