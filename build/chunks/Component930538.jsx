/** Chunk was on 33213 **/
/** chunk id: 930538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk432877 = require("./432877.js"),
  Chunk726521 = require("./726521.js"),
  Chunk594174 = require("./594174.js");

function o(e) {
  let t = (0, r.e7)([l.ZP], () => l.ZP.get("iar_testing")),
    n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  return null != n && n.isStaff() && t ? (0, i.jsx)(s.sNh, {
    id: "staff-test-guild-report",
    label: "[STAFF] Test Guild Report",
    action: () => (0, a.DG)(e, "web_guild_context_menu"),
    icon: s.U65,
    color: "danger"
  }) : null
}