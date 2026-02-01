/** Chunk was on 93169 **/
/** chunk id: 695192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544231 = require("./544231.js"),
  Chunk349435 = require("./349435.js"),
  Chunk178186 = require("./178186.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let t = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
    n = (0, r.bG)([s.Ay], () => s.Ay.getChannelSafetyWarnings(e.id));
  return (null == t ? true : t.isStaff()) !== true || null == n || 0 === n.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Drp, {
      id: "delete-safety-warnings",
      label: u.intl.string(u.t.g7o9bs),
      action: () => (0, o.Ey)(e.id)
    }), (0, i.jsx)(l.Drp, {
      id: "clear-safety-warnings",
      label: u.intl.string(u.t.VuSvGu),
      action: () => (0, a.WJ)(e.id)
    })]
  })
}