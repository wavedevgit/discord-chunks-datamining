/** Chunk was on web.js **/
/** chunk id: 267101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SO: () => h,
  eD: () => f,
  hO: () => p,
  r: () => m,
  ue: () => _
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js");
require("./935369.js");
var Chunk38618 = require("./38618.js"),
  Chunk160404 = require("./160404.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk495437 = require("./495437.js"),
  Chunk240864 = require("./240864.js"),
  Chunk981631 = require("./981631.js");
let f = e => {
    let t = (0, i.e7)([u.Z], () => null != e ? u.Z.getGuildProductsForGuildFetchState(e) : u.M.FETCHED, [e]),
      n = (0, i.e7)([a.Z], () => a.Z.isConnected()),
      [o, s] = r.useState(true);
    return r.useEffect(() => {
      o && (t === u.M.NOT_FETCHED || t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e)) && n && c.EB(e), s(!n)
    }, [e, n, t, o]), {
      listingsLoaded: t === u.M.FETCHED && !o
    }
  },
  p = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: true
    }, o = (0, i.e7)([a.Z], () => a.Z.isConnected()), s = (0, i.e7)([l.Z], () => l.Z.getGuildId());
    return r.useEffect(() => {
      let r = u.Z.getGuildProductFetchState(t);
      if ((!n || s === e) && o && r === u.M.NOT_FETCHED) try {
        c.cf(e, t)
      } catch (e) {}
    }, [e, t, o, s, n]), (0, i.e7)([u.Z], () => u.Z.getGuildProduct(t))
  },
  _ = function(e) {
    let {
      publishedOnly: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.e7)([u.Z, o.Z], () => u.Z.getGuildProductsForGuild(e, {
      publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e)
    }))
  },
  m = e => (0, i.e7)([u.Z], () => null == e ? true : u.Z.getGuildProduct(e)),
  h = e => (0, i.e7)([s.Z], () => null != e && s.Z.can(d.Plq.ADMINISTRATOR, e))