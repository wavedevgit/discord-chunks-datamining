/** Chunk was on 36878 **/
/** chunk id: 352486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js");
let s = require("./930441.js").Od.map(e => (0, l.qs)(e.category, {
  useTitle: e.label,
  useSubtitle: e.subLabel,
  useValue: () => (e => {
    let {
      categories: t
    } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
    return !!t[e]
  })(e.category),
  setValue: t => (0, r.pR)(e.category, t)
}))