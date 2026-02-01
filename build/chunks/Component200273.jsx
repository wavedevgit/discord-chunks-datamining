/** Chunk was on 78441 **/
/** chunk id: 200273, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let e = (0, a.NI)(t),
    n = (0, a.Id)(t),
    s = (0, a.s5)(t);
  return !e || !n || s || t.isModeratorReportChannel() || __OVERLAY__ ? null : (0, i.jsx)(r.Drp, {
    id: "edit-thread",
    label: t.isForumPost() ? o.intl.string(o.t.NP1yHG) : o.intl.string(o.t["2Mk1TP"]),
    action: () => {
      (0, r.s7G)(), l.Ay.open(t.id)
    }
  })
}