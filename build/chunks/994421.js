/** Chunk was on 4670 **/
/** chunk id: 994421, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk115980 = require("./115980.jsx"),
  Chunk985018 = require("./985018.jsx");
let a = (0, Chunk419954.E2)(Chunk780964.X.BILLING_TRANSACTION_HISTORY, {
    Component: Chunk115980.ac,
    useSearchTerms: () => [r.intl.string(r.t.obLrcK)]
  }),
  u = (0, Chunk419954.E2)(Chunk780964.X.BILLING_REDEMPTION_REDIRECT, {
    Component: Chunk115980.OH,
    useSearchTerms: () => [r.intl.string(r.t.obLrcK)]
  }),
  o = (0, Chunk419954.zZ)(Chunk780964.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
    useTitle: () => r.intl.string(r.t.obLrcK),
    buildLayout: () => [a, u]
  })