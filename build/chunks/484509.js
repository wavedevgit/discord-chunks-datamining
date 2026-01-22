/** Chunk was on 64228 **/
/** chunk id: 484509, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk573648 = require("./573648.js"),
  Chunk681819 = require("./681819.js"),
  Chunk622543 = require("./622543.js");
let o = [];

function d(e) {
  let l = (0, s.dq)({
      forUserProfile: true
    }),
    t = (0, i.bG)([a.A], () => a.A.getUserProfile(e));
  return (0, n.useMemo)(() => (null == t ? true : t.connectedAccounts) == null ? o : t.connectedAccounts.filter(e => {
    let {
      type: t
    } = e, n = r.A.get(t);
    return null != n && r.A.isSupported(t) && l(n)
  }), [null == t ? true : t.connectedAccounts, l])
}