/** Chunk was on 77069 **/
/** chunk id: 996231, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  s: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk313789 = require("./313789.js");
let a = require("./930441.js").Od.map(t => (0, l.qs)("".concat(u.n.EMAIL_LIST_ITEM_PREFIX).concat(t.category), {
  useTitle: t.label,
  useSubtitle: t.subLabel,
  useValue: () => (t => {
    let {
      categories: e
    } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
    return !!e[t]
  })(t.category),
  setValue: e => (0, s.pR)(t.category, e)
}))