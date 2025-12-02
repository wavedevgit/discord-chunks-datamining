/** Chunk was on 44097 **/
/** chunk id: 788956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk457330 = require("./457330.js"),
  Chunk553795 = require("./553795.js");

function o(e) {
  let t = (0, i.e7)([l.Z], () => null != e ? l.Z.getAccount(null, e) : null),
    n = (0, i.e7)([l.Z], () => l.Z.isFetching()),
    o = null != t && !t.revoked;
  return {
    loading: n,
    hasConnection: o,
    canConnect: null != e,
    startConnection: r.useCallback(async t => {
      if (null == e) return {
        success: false
      };
      try {
        var n;
        let r = await a.Z.authorize(e, {
          location: null != t ? t : "Account Linking"
        });
        if (r.ok && (null == (n = r.body) ? true : n.url) != null) return {
          success: true,
          url: r.body.url
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