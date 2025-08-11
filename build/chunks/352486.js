/** Chunk was on 36878 **/
/** chunk id: 352486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk930441 = require("./930441.js");
let s = e => {
    let {
      categories: t
    } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
    return !!t[e]
  },
  c = Chunk930441.Od.map(e => (0, o.qs)(e.category, {
    useTitle: e.label,
    useSubtitle: e.subLabel,
    useValue: () => s(e.category),
    setValue: t => (0, l.pR)(e.category, t)
  }))