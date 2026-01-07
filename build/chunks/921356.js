/** Chunk was on 77069 **/
/** chunk id: 921356, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  O: () => T,
  a: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk453706 = require("./453706.jsx"),
  Chunk968021 = require("./968021.js"),
  Chunk388032 = require("./388032.jsx");

function T() {
  let t = (0, a.Y)(),
    e = (0, i.e7)([s.default], () => {
      let t = s.default.getCurrentUser();
      return null != t && !t.verified
    });
  return !t && e
}
let S = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_UNVERIFIED_USER_NOTICE, {
  useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
  usePredicate: T,
  Component: Chunk453706.Z
})