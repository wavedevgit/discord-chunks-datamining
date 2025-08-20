/** Chunk was on 26434 **/
/** chunk id: 267101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SO: () => _,
  eD: () => p,
  hO: () => m,
  r: () => g,
  ue: () => f
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js");
require("./935369.js");
var Chunk38618 = require("./38618.js"),
  Chunk160404 = require("./160404.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk495437 = require("./495437.js"),
  Chunk240864 = require("./240864.js"),
  Chunk981631 = require("./981631.js");
let p = e => {
    let t = (0, i.e7)([u.Z], () => null != e ? u.Z.getGuildProductsForGuildFetchState(e) : u.M.FETCHED, [e]),
      n = (0, i.e7)([l.Z], () => l.Z.isConnected()),
      [o, a] = r.useState(true);
    return r.useEffect(() => {
      o && (t === u.M.NOT_FETCHED || t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e)) && n && c.EB(e), a(!n)
    }, [e, n, t, o]), {
      listingsLoaded: t === u.M.FETCHED && !o
    }
  },
  m = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: true
    }, o = (0, i.e7)([l.Z], () => l.Z.isConnected()), a = (0, i.e7)([s.Z], () => s.Z.getGuildId());
    return r.useEffect(() => {
      let r = u.Z.getGuildProductFetchState(t);
      if ((!n || a === e) && o && r === u.M.NOT_FETCHED) try {
        c.cf(e, t)
      } catch (e) {}
    }, [e, t, o, a, n]), (0, i.e7)([u.Z], () => u.Z.getGuildProduct(t))
  },
  f = function(e) {
    let {
      publishedOnly: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.e7)([u.Z, o.Z], () => u.Z.getGuildProductsForGuild(e, {
      publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e)
    }))
  },
  g = e => (0, i.e7)([u.Z], () => null == e ? true : u.Z.getGuildProduct(e)),
  _ = e => (0, i.e7)([a.Z], () => null != e && a.Z.can(d.Plq.ADMINISTRATOR, e))