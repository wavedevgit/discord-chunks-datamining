/** Chunk was on 99799 **/
/** chunk id: 771362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk621853 = require("./621853.js");
let c = [];

function s(e) {
  let t = (0, l.Xj)({
      forUserProfile: true
    }),
    n = (0, o.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, r.useMemo)(() => (null == n ? true : n.connectedAccounts) == null ? c : n.connectedAccounts.filter(e => {
    let {
      type: n
    } = e, r = i.Z.get(n);
    return null != r && i.Z.isSupported(n) && t(r)
  }), [null == n ? true : n.connectedAccounts, t])
}