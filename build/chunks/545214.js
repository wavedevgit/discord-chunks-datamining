/** Chunk was on 4670 **/
/** chunk id: 545214, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => d,
  k: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk100817 = require("./100817.jsx"),
  Chunk32096 = require("./32096.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let e = (0, u.b)(),
    t = (0, n.bG)([s.default], () => {
      let e = s.default.getCurrentUser();
      return null != e && !e.verified
    });
  return !e && t
}
let T = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
  useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
  usePredicate: d,
  Component: Chunk100817.A
})