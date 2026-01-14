/** Chunk was on 77069 **/
/** chunk id: 878427, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => S
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk857595 = require("./857595.js"),
  Chunk651123 = require("./651123.js"),
  Chunk509613 = require("./509613.js"),
  Chunk740492 = require("./740492.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.J9)(Chunk313789.n.HIGH_DYNAMIC_RANGE, {
  useTitle: () => T.intl.string(T.t.nemtgW),
  useSubtitle: () => T.intl.string(T.t["O/Gjvn"]),
  useBadge: () => "beta",
  useOptions: function() {
    return i.useMemo(() => [{
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
    return (0, u.z)("HDRDynamicRangeSetting")
  },
  setValue: function(t) {
    (0, s.zH)(t)
  },
  useValue: function() {
    return (0, l.e7)([a.ZP], () => a.ZP.hdrDynamicRange)
  },
  useSearchTerms: () => ["HDR", T.intl.string(T.t["O/Gjvn"])]
})