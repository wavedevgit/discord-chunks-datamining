/** Chunk was on 54469 **/
/** chunk id: 21605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk865116 = require("./865116.js"),
  Chunk928658 = require("./928658.js"),
  Chunk287809 = require("./287809.js");

function c(e) {
  let t = (0, r.bG)([l.Ay], () => l.Ay.get("iar_testing")),
    n = (0, r.bG)([o.default], () => o.default.getCurrentUser());
  return null != n && n.isStaff() && t ? (0, i.jsx)(s.Drp, {
    id: "staff-test-guild-report",
    label: "[STAFF] Test Guild Report",
    action: () => (0, a.RV)(e, "web_guild_context_menu"),
    icon: s.iFK,
    color: "danger"
  }) : null
}