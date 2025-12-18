/** Chunk was on 77069 **/
/** chunk id: 442639, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk905935 = require("./905935.jsx"),
  Chunk968021 = require("./968021.js"),
  Chunk921356 = require("./921356.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_ENABLE_MFA_SETTING, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.m0FidJ)],
  usePredicate: function() {
    let t = (0, Chunk968021.Y)(),
      e = (0, Chunk921356.O)();
    return (0, Chunk442837.e7)([Chunk594174.default], () => {
      let n = Chunk594174.default.getCurrentUser();
      return null != require && !require.mfaEnabled && !module && !exports
    })
  },
  Component: Chunk905935.Z
})