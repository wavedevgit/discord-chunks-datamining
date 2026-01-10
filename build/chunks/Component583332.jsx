/** Chunk was on 56826 **/
/** chunk id: 583332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk88101 = require("./88101.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, o.P)(e.id);
  return (null == t ? true : t.isStaff()) === true && e.isDM() && null == n ? (0, i.jsx)(l.sNh, {
    id: "mark-as-stranger-danger",
    label: d.intl.string(d.t.CgWmmT),
    action: () => (0, a.Dl)(e.id)
  }) : null
}