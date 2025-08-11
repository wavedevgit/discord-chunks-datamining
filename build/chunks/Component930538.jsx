/** Chunk was on 33213 **/
/** chunk id: 930538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk432877 = require("./432877.js"),
  Chunk726521 = require("./726521.js"),
  Chunk594174 = require("./594174.js");

function c(e) {
  let t = (0, r.e7)([s.ZP], () => s.ZP.get("iar_testing")),
    n = (0, r.e7)([a.default], () => a.default.getCurrentUser());
  return null != n && n.isStaff() && t ? (0, i.jsx)(l.sNh, {
    id: "staff-test-guild-report",
    label: "[STAFF] Test Guild Report",
    action: () => (0, o.DG)(e, "web_guild_context_menu"),
    icon: l.U65,
    color: "danger"
  }) : null
}