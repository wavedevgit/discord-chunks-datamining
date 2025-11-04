/** Chunk was on 26494 **/
/** chunk id: 788956, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  d: () => r
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk457330 = require("./457330.js"),
  Chunk553795 = require("./553795.js");

function r(e) {
  let n = (0, i.e7)([o.Z], () => null != e ? o.Z.getAccount(null, e) : null),
    t = (0, i.e7)([o.Z], () => o.Z.isFetching()),
    r = null != n && !n.revoked;
  return {
    loading: t,
    hasConnection: r,
    canConnect: null != e,
    startConnection: l.useCallback(async n => {
      if (null == e) return {
        success: false
      };
      try {
        var t;
        let l = await a.Z.authorize(e, {
          location: null != n ? n : "Account Linking"
        });
        if (l.ok && (null == (t = l.body) ? true : t.url) != null) return {
          success: true,
          url: l.body.url
        };
        return {
          success: false
        }
      } catch (e) {
        return {
          success: false
        }
      }
    }, [e]),
    account: n
  }
}