/** Chunk was on 56826 **/
/** chunk id: 583332, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  g: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk88101 = require("./88101.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let n = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    t = (0, s.P)(e.id);
  return (null == n ? true : n.isStaff()) === true && e.isDM() && null == t ? (0, i.jsx)(l.sNh, {
    id: "mark-as-stranger-danger",
    label: d.intl.string(d.t.CgWmmT),
    action: () => (0, a.Dl)(e.id)
  }) : null
}