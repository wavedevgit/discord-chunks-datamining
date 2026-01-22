/** Chunk was on 28979 **/
/** chunk id: 342002, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  P: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk100406 = require("./100406.js"),
  Chunk878460 = require("./878460.js"),
  Chunk780964 = require("./780964.js");
let a = require("./431144.js").px.map(t => (0, l.zD)("".concat(u.X.EMAIL_LIST_ITEM_PREFIX).concat(t.category), {
  useTitle: t.label,
  useSubtitle: t.subLabel,
  useValue: () => (t => {
    let {
      categories: e
    } = (0, n.cf)([r.A], () => r.A.getEmailSettings());
    return !!e[t]
  })(t.category),
  setValue: e => (0, s.CA)(t.category, e)
}))