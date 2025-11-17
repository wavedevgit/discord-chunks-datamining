/** Chunk was on 26494 **/
/** chunk id: 788956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk457330 = require("./457330.js"),
  Chunk553795 = require("./553795.js");

function a(e) {
  let t = (0, i.e7)([o.Z], () => null != e ? o.Z.getAccount(null, e) : null),
    n = (0, i.e7)([o.Z], () => o.Z.isFetching()),
    a = null != t && !t.revoked;
  return {
    loading: n,
    hasConnection: a,
    canConnect: null != e,
    startConnection: l.useCallback(async t => {
      if (null == e) return {
        success: false
      };
      try {
        var n;
        let l = await r.Z.authorize(e, {
          location: null != t ? t : "Account Linking"
        });
        if (l.ok && (null == (n = l.body) ? true : n.url) != null) return {
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
    account: t
  }
}