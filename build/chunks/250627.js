/** Chunk was on web.js **/
/** chunk id: 250627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BB: () => m,
  Qi: () => p,
  az: () => h,
  bb: () => f,
  fZ: () => _
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
let f = e => {
    let t = (0, i.bG)([u.A], () => null != e ? u.A.getGuildProductsForGuildFetchState(e) : u.e.FETCHED, [e]),
      n = (0, i.bG)([a.A], () => a.A.isConnected()),
      [s, o] = r.useState(true);
    return r.useEffect(() => {
      s && (t === u.e.NOT_FETCHED || t === u.e.FETCHED && u.A.isGuildProductsCacheExpired(e)) && n && c.GI(e), o(!n)
    }, [e, n, t, s]), {
      listingsLoaded: t === u.e.FETCHED && !s
    }
  },
  p = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: true
    }, s = (0, i.bG)([a.A], () => a.A.isConnected()), o = (0, i.bG)([l.A], () => l.A.getGuildId());
    return r.useEffect(() => {
      let r = u.A.getGuildProductFetchState(t);
      if ((!n || o === e) && s && r === u.e.NOT_FETCHED) try {
        c.py(e, t)
      } catch (e) {}
    }, [e, t, s, o, n]), (0, i.bG)([u.A], () => u.A.getGuildProduct(t))
  },
  _ = function(e) {
    let {
      publishedOnly: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([u.A, s.A], () => u.A.getGuildProductsForGuild(e, {
      publishedOnly: null != t ? t : !s.A.isViewingServerShop(e)
    }))
  },
  h = e => (0, i.bG)([u.A], () => null == e ? true : u.A.getGuildProduct(e)),
  m = e => (0, i.bG)([o.A], () => null != e && o.A.can(d.xBc.ADMINISTRATOR, e))