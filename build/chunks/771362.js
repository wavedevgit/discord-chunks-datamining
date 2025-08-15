/** Chunk was on 12756 **/
/** chunk id: 771362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk621853 = require("./621853.js");
let c = [];

function s(e) {
  let t = (0, o.Xj)({
      forUserProfile: true
    }),
    n = (0, i.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, r.useMemo)(() => (null == n ? true : n.connectedAccounts) == null ? c : n.connectedAccounts.filter(e => {
    let {
      type: n
    } = e, r = l.Z.get(n);
    return null != r && l.Z.isSupported(n) && t(r)
  }), [null == n ? true : n.connectedAccounts, t])
}