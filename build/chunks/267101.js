/** Chunk was on 66866 **/
/** chunk id: 267101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SO: () => g,
  eD: () => p,
  hO: () => m,
  r: () => _,
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
      [a, o] = r.useState(true);
    return r.useEffect(() => {
      a && (t === u.M.NOT_FETCHED || t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e)) && n && c.EB(e), o(!n)
    }, [e, n, t, a]), {
      listingsLoaded: t === u.M.FETCHED && !a
    }
  },
  m = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: true
    }, a = (0, i.e7)([l.Z], () => l.Z.isConnected()), o = (0, i.e7)([s.Z], () => s.Z.getGuildId());
    return r.useEffect(() => {
      let r = u.Z.getGuildProductFetchState(t);
      if ((!n || o === e) && a && r === u.M.NOT_FETCHED) try {
        c.cf(e, t)
      } catch (e) {}
    }, [e, t, a, o, n]), (0, i.e7)([u.Z], () => u.Z.getGuildProduct(t))
  },
  f = function(e) {
    let {
      publishedOnly: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.e7)([u.Z, a.Z], () => u.Z.getGuildProductsForGuild(e, {
      publishedOnly: null != t ? t : !a.Z.isViewingServerShop(e)
    }))
  },
  _ = e => (0, i.e7)([u.Z], () => null == e ? true : u.Z.getGuildProduct(e)),
  g = e => (0, i.e7)([o.Z], () => null != e && o.Z.can(d.Plq.ADMINISTRATOR, e))