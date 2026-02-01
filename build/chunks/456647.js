/** Chunk was on 60118 **/
/** chunk id: 456647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk77468 = require("./77468.js"),
  Chunk962173 = require("./962173.js");

function o(e) {
  let t = (0, l.bG)([a.A], () => null != e ? a.A.getAccount(null, e) : null),
    n = (0, l.bG)([a.A], () => a.A.isFetching()),
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
        let r = await i.A.authorize(e, {
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