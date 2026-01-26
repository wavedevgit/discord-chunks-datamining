/** Chunk was on 88974 **/
/** chunk id: 200273, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let n = (0, a.NI)(t),
    i = (0, a.Id)(t),
    o = (0, a.s5)(t);
  return !n || !i || o || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, e.jsx)(r.Drp, {
    id: "edit-thread",
    label: t.isForumPost() ? d.intl.string(d.t.NP1yHG) : d.intl.string(d.t["2Mk1TP"]),
    action: () => {
      (0, r.s7G)(), l.Ay.open(t.id)
    }
  })
}