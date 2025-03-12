/** Chunk was on 30806 **/
n.d(t, {
  SO: () => v,
  eD: () => h,
  hO: () => p,
  r: () => g,
  ue: () => f
}), n(47120);
var i = n(192379),
  r = n(442837);
n(935369);
var l = n(38618),
  s = n(160404),
  o = n(496675),
  a = n(914010),
  u = n(495437),
  d = n(240864),
  c = n(981631);
let h = e => {
    let t = (0, r.e7)([d.Z], () => null != e ? d.Z.getGuildProductsForGuildFetchState(e) : d.M.FETCHED, [e]),
      n = (0, r.e7)([l.Z], () => l.Z.isConnected()),
      [s, o] = i.useState(!0);
    return i.useEffect(() => {
      s && (t === d.M.NOT_FETCHED || t === d.M.FETCHED && d.Z.isGuildProductsCacheExpired(e)) && n && u.EB(e), o(!n)
    }, [e, n, t, s]), {
      listingsLoaded: t === d.M.FETCHED && !s
    }
  },
  p = function(e, t) {
    let {
      requireCurrentGuild: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, s = (0, r.e7)([l.Z], () => l.Z.isConnected()), o = (0, r.e7)([a.Z], () => a.Z.getGuildId());
    return i.useEffect(() => {
      let i = d.Z.getGuildProductFetchState(t);
      if ((!n || o === e) && s && i === d.M.NOT_FETCHED) try {
        u.cf(e, t)
      } catch (e) {}
    }, [e, t, s, o, n]), (0, r.e7)([d.Z], () => d.Z.getGuildProduct(t))
  },
  f = function(e) {
    let {
      publishedOnly: t
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.e7)([d.Z, s.Z], () => d.Z.getGuildProductsForGuild(e, {
      publishedOnly: null != t ? t : !s.Z.isViewingServerShop(e)
    }))
  },
  g = e => (0, r.e7)([d.Z], () => null == e ? void 0 : d.Z.getGuildProduct(e)),
  v = e => (0, r.e7)([o.Z], () => null != e && o.Z.can(c.Plq.ADMINISTRATOR, e))