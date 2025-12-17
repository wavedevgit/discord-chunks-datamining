/** Chunk was on 77069 **/
/** chunk id: 211839, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  m: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk136097 = require("./136097.js"),
  Chunk509613 = require("./509613.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk36192 = require("./36192.jsx"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.ON)(Chunk313789.n.SESSIONS_OTHER_SESSIONS_SETTING, {
  Component: Chunk36192.Vy,
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t["+1h0k/"])],
  usePredicate: () => {
    let {
      otherSessions: t
    } = (0, Chunk136097.h)(), e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
    return module.length > 0 || !(null == exports ? true : exports.mfaEnabled)
  }
})