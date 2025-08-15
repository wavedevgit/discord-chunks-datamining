/** Chunk was on 56826 **/
/** chunk id: 750850, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  e: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378712 = require("./378712.js"),
  Chunk605984 = require("./605984.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
    e = (0, a.k)(t.id);
  return (null == n ? true : n.isStaff()) === true && t.isDM() && null == e ? (0, i.jsx)(l.sNh, {
    id: "mark-as-likely-ato",
    label: u.intl.string(u.t.AWKKgY),
    action: () => (0, s.J)(t.id)
  }) : null
}