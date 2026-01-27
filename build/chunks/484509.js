/** Chunk was on 63974 **/
/** chunk id: 484509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk573648 = require("./573648.js"),
  Chunk681819 = require("./681819.js"),
  Chunk622543 = require("./622543.js");
let a = [];

function d(e) {
  let t = (0, s.dq)({
      forUserProfile: true
    }),
    n = (0, i.bG)([o.A], () => o.A.getUserProfile(e));
  return (0, l.useMemo)(() => (null == n ? true : n.connectedAccounts) == null ? a : n.connectedAccounts.filter(e => {
    let {
      type: n
    } = e, l = r.A.get(n);
    return null != l && r.A.isSupported(n) && t(l)
  }), [null == n ? true : n.connectedAccounts, t])
}