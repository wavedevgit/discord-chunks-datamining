/** Chunk was on 4670 **/
/** chunk id: 766761, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk754333 = require("./754333.js"),
  Chunk419954 = require("./419954.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk119762 = require("./119762.jsx"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.E2)(Chunk780964.X.SESSIONS_OTHER_SESSIONS_SETTING, {
  Component: Chunk119762.Af,
  useSearchTerms: () => [o.intl.string(o.t["+1h0k/"])],
  usePredicate: () => {
    let {
      otherSessions: e
    } = (0, l.r)(), t = (0, n.bG)([r.default], () => r.default.getCurrentUser());
    return e.length > 0 || !(null == t ? true : t.mfaEnabled)
  }
})