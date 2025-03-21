/** Chunk was on 31942 **/
n.d(t, {
  f: () => s,
  l: () => d
}), n(411104);
var r = n(200651),
  i = n(192379),
  l = n(399606),
  o = n(38618),
  a = n(423117),
  u = n(289393);
let c = i.createContext(void 0);

function s(e) {
  let t = i.useContext(c);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: r
  } = t;
  return r(), n
}

function d(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: s,
    includeSoftDeleted: d,
    countryCode: f,
    dontFetchWhileTrue: p
  } = e, E = (0, l.e7)([o.Z], () => o.Z.isConnected()), _ = (0, l.e7)([u.Z], () => null != t ? u.Z.getSubscriptionGroupListingsForGuildFetchState(t) : u.M.FETCHED), O = i.useRef(s), g = i.useCallback(() => {
    if (null == t || !E || !0 === p) return;
    let e = u.Z.getSubscriptionGroupListingsForGuildFetchState(t);
    (O.current || e === u.M.NOT_FETCHED) && (O.current = !1, a.FP(t, {
      includeSoftDeleted: d,
      countryCode: f
    }))
  }, [E, t, d, f, p]), T = i.useMemo(() => _ === u.M.FETCHED && !0 !== O.current, [_, O]);
  return (0, r.jsx)(c.Provider, {
    value: {
      listingsLoaded: T,
      fetchGroupListingsForGuild: g
    },
    children: n
  })
}