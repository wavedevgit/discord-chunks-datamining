/** Chunk was on 66866 **/
/** chunk id: 730647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => u,
  l: () => d
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk38618 = require("./38618.js"),
  Chunk423117 = require("./423117.js"),
  Chunk289393 = require("./289393.js");
let c = Chunk647438.createContext(true);

function u(e) {
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
    refetchOnMount: u,
    includeSoftDeleted: d,
    countryCode: p,
    dontFetchWhileTrue: m
  } = e, f = (0, l.e7)([a.Z], () => a.Z.isConnected()), _ = (0, l.e7)([s.Z], () => null != t ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t) : s.M.FETCHED), g = i.useRef(u), h = i.useCallback(() => {
    if (null == t || !f || true === m) return;
    let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
    (g.current || e === s.M.NOT_FETCHED) && (g.current = false, o.FP(t, {
      includeSoftDeleted: d,
      countryCode: p
    }))
  }, [f, t, d, p, m]), b = i.useMemo(() => _ === s.M.FETCHED && true !== g.current, [_, g]);
  return (0, r.jsx)(c.Provider, {
    value: {
      listingsLoaded: b,
      fetchGroupListingsForGuild: h
    },
    children: n
  })
}