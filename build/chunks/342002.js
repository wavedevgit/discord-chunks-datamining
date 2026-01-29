/** Chunk was on 4670 **/
/** chunk id: 342002, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  P: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk100406 = require("./100406.js"),
  Chunk878460 = require("./878460.js"),
  Chunk780964 = require("./780964.js");
let u = require("./431144.js").px.map(e => (0, l.zD)("".concat(a.X.EMAIL_LIST_ITEM_PREFIX).concat(e.category), {
  useTitle: e.label,
  useSubtitle: e.subLabel,
  useValue: () => (e => {
    let {
      categories: t
    } = (0, n.cf)([r.A], () => r.A.getEmailSettings());
    return !!t[e]
  })(e.category),
  setValue: t => (0, s.CA)(e.category, t)
}))