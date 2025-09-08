/** Chunk was on 47129 **/
/** chunk id: 996231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk313789 = require("./313789.js");
let s = require("./930441.js").Od.map(e => (0, i.qs)("".concat(a.n.EMAIL_LIST_ITEM_PREFIX).concat(e.category), {
  useTitle: e.label,
  useSubtitle: e.subLabel,
  useValue: () => (e => {
    let {
      categories: t
    } = (0, r.cj)([o.Z], () => o.Z.getEmailSettings());
    return !!t[e]
  })(e.category),
  setValue: t => (0, l.pR)(e.category, t)
}))