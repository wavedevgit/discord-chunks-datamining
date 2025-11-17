/** Chunk was on 56826 **/
/** chunk id: 750850, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  e: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378712 = require("./378712.js"),
  Chunk605984 = require("./605984.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let n = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
    t = (0, s.k)(e.id);
  return (null == n ? true : n.isStaff()) === true && e.isDM() && null == t ? (0, i.jsx)(l.sNh, {
    id: "mark-as-likely-ato",
    label: d.intl.string(d.t.AWKKgc),
    action: () => (0, a.J)(e.id)
  }) : null
}