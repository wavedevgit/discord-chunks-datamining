/** Chunk was on 56826 **/
/** chunk id: 583332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk88101 = require("./88101.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, o.P)(e.id);
  return (null == t ? true : t.isStaff()) === true && e.isDM() && null == n ? (0, r.jsx)(l.sNh, {
    id: "mark-as-stranger-danger",
    label: c.intl.string(c.t.CgWmmZ),
    action: () => (0, a.Dl)(e.id)
  }) : null
}