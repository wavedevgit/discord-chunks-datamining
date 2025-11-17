/** Chunk was on web.js **/
/** chunk id: 730647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => d,
  l: () => f
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk38618 = require("./38618.js"),
  Chunk423117 = require("./423117.js"),
  Chunk289393 = require("./289393.js");
let c = Chunk473749.createContext(true);

function u(e, t) {
  return i.useMemo(() => e === l.M.FETCHED && true !== t.current, [e, t])
}

function d(e) {
  let t = i.useContext(c);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: r
  } = t;
  return r(), n
}

function f(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: d,
    includeSoftDeleted: f,
    countryCode: _,
    dontFetchWhileTrue: p
  } = e, h = (0, a.e7)([o.Z], () => o.Z.isConnected()), m = (0, a.e7)([l.Z], () => null != t ? l.Z.getSubscriptionGroupListingsForGuildFetchState(t) : l.M.FETCHED), g = i.useRef(d), E = i.useCallback(() => {
    if (null == t || !h || true === p) return;
    let e = l.Z.getSubscriptionGroupListingsForGuildFetchState(t);
    (g.current || e === l.M.NOT_FETCHED) && (g.current = false, s.FP(t, {
      includeSoftDeleted: f,
      countryCode: _
    }))
  }, [h, t, f, _, p]), b = u(m, g);
  return (0, r.jsx)(c.Provider, {
    value: {
      listingsLoaded: b,
      fetchGroupListingsForGuild: E
    },
    children: n
  })
}