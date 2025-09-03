/** Chunk was on 56826 **/
/** chunk id: 750850, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378712 = require("./378712.js"),
  Chunk605984 = require("./605984.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, o.k)(e.id);
  return (null == t ? true : t.isStaff()) === true && e.isDM() && null == n ? (0, r.jsx)(l.sNh, {
    id: "mark-as-likely-ato",
    label: c.intl.string(c.t.AWKKgY),
    action: () => (0, a.J)(e.id)
  }) : null
}