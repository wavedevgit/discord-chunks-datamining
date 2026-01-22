/** Chunk was on 28979 **/
/** chunk id: 21117, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  b: () => A
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk955572 = require("./955572.js"),
  Chunk406360 = require("./406360.js"),
  Chunk419954 = require("./419954.js"),
  Chunk964404 = require("./964404.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.Qx)(Chunk780964.X.HIGH_DYNAMIC_RANGE, {
  useTitle: () => T.intl.string(T.t.nemtgW),
  useSubtitle: () => T.intl.string(T.t["O/Gjvn"]),
  useBadge: () => "beta",
  useOptions: function() {
    return n.useMemo(() => [{
      name: T.intl.string(T.t.D5Fma9),
      desc: T.intl.string(T.t.Qj75ck),
      value: "no-limit"
    }, {
      name: T.intl.string(T.t.ldcGIH),
      desc: T.intl.string(T.t["+V/bDk"]),
      value: "standard"
    }], [])
  },
  usePredicate: function() {
    return (0, r.i)("HDRDynamicRangeSetting")
  },
  setValue: function(t) {
    (0, s.FU)(t)
  },
  useValue: function() {
    return (0, l.bG)([a.Ay], () => a.Ay.hdrDynamicRange)
  },
  useSearchTerms: () => ["HDR", T.intl.string(T.t["O/Gjvn"])]
})