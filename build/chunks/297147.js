/** Chunk was on 28979 **/
/** chunk id: 297147, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Q: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk100406 = require("./100406.js"),
  Chunk878460 = require("./878460.js"),
  Chunk780964 = require("./780964.js"),
  Chunk431144 = require("./431144.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.Tf)(Chunk780964.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
  useTitle: () => o.intl.string(o.t.Ra9Pwk),
  useSubtitle: () => o.intl.string(o.t.iYjQ8X),
  useLabel: () => o.intl.string(o.t.KT1pBA),
  useDisabled: () => {
    let {
      categories: t
    } = (0, n.cf)([r.A], () => r.A.getEmailSettings());
    return a.Zk.every(e => !t[e])
  },
  onClick: () => (0, s.NI)(),
  useVariant: () => "critical-secondary"
})