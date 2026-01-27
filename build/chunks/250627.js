/** Chunk was on 92917 **/
/** chunk id: 250627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BB: () => h,
  Qi: () => m,
  az: () => g,
  bb: () => p,
  fZ: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js");
require("./608461.js");
var Chunk142120 = require("./142120.js"),
  Chunk164956 = require("./164956.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk912702 = require("./912702.js"),
  Chunk871109 = require("./871109.js"),
  Chunk652215 = require("./652215.js");
let p = e => {
    let t = (0, i.bG)([u.A], () => null != e ? u.A.getGuildProductsForGuildFetchState(e) : u.e.FETCHED, [e]),
      n = (0, i.bG)([l.A], () => l.A.isConnected()),
      [a, s] = r.useState(true);
    return r.useEffect(() => {
      a && (t === u.e.NOT_FETCHED || t === u.e.FETCHED && u.A.isGuildProductsCacheExpired(e)) && n && c.GI(e), s(!n)
    }, [e, n, t, a]), {
      listingsLoaded: t === u.e.FETCHED && !a
    }
  },
  m = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: true
    }, a = (0, i.bG)([l.A], () => l.A.isConnected()), s = (0, i.bG)([o.A], () => o.A.getGuildId());
    return r.useEffect(() => {
      let r = u.A.getGuildProductFetchState(t);
      if ((!n || s === e) && a && r === u.e.NOT_FETCHED) try {
        c.py(e, t)
      } catch (e) {}
    }, [e, t, a, s, n]), (0, i.bG)([u.A], () => u.A.getGuildProduct(t))
  },
  f = function(e) {
    let {
      publishedOnly: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([u.A, a.A], () => u.A.getGuildProductsForGuild(e, {
      publishedOnly: null != t ? t : !a.A.isViewingServerShop(e)
    }))
  },
  g = e => (0, i.bG)([u.A], () => null == e ? true : u.A.getGuildProduct(e)),
  h = e => (0, i.bG)([s.A], () => null != e && s.A.can(d.xBc.ADMINISTRATOR, e))