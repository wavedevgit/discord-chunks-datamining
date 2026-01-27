/** Chunk was on web.js **/
/** chunk id: 300233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f,
  X: () => d
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk142120 = require("./142120.js"),
  Chunk579908 = require("./579908.js"),
  Chunk636194 = require("./636194.js");
let c = Chunk64700.createContext(true);

function u(e, t) {
  return i.useMemo(() => e === l.e.FETCHED && true !== t.current, [e, t])
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
    countryCode: p,
    dontFetchWhileTrue: _
  } = e, h = (0, a.bG)([o.A], () => o.A.isConnected()), m = (0, a.bG)([l.A], () => null != t ? l.A.getSubscriptionGroupListingsForGuildFetchState(t) : l.e.FETCHED), g = i.useRef(d), E = i.useCallback(() => {
    if (null == t || !h || true === _) return;
    let e = l.A.getSubscriptionGroupListingsForGuildFetchState(t);
    (g.current || e === l.e.NOT_FETCHED) && (g.current = false, s.WA(t, {
      includeSoftDeleted: f,
      countryCode: p
    }))
  }, [h, t, f, p, _]), y = u(m, g);
  return (0, r.jsx)(c.Provider, {
    value: {
      listingsLoaded: y,
      fetchGroupListingsForGuild: E
    },
    children: n
  })
}