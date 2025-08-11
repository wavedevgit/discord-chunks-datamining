/** Chunk was on 56826 **/
/** chunk id: 583332, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  g: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk88101 = require("./88101.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
    e = (0, a.P)(t.id);
  return (null == n ? true : n.isStaff()) === true && t.isDM() && null == e ? (0, i.jsx)(l.sNh, {
    id: "mark-as-stranger-danger",
    label: u.intl.string(u.t.CgWmmZ),
    action: () => (0, s.Dl)(t.id)
  }) : null
}