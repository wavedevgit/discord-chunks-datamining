/** Chunk was on 28979 **/
/** chunk id: 766761, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk754333 = require("./754333.js"),
  Chunk419954 = require("./419954.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk119762 = require("./119762.jsx"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.E2)(Chunk780964.X.SESSIONS_OTHER_SESSIONS_SETTING, {
  Component: Chunk119762.Af,
  useSearchTerms: () => [o.intl.string(o.t["+1h0k/"])],
  usePredicate: () => {
    let {
      otherSessions: t
    } = (0, l.r)(), e = (0, n.bG)([r.default], () => r.default.getCurrentUser());
    return t.length > 0 || !(null == e ? true : e.mfaEnabled)
  }
})