/** Chunk was on web.js **/
/** chunk id: 688810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  di: () => c,
  f5: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk812729 = require("./812729.js"),
  o = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438);
let c = Chunk64700.createContext([]);

function u(e) {
  let {
    children: t,
    value: n
  } = e;
  return (0, r.jsx)(c.Provider, {
    value: n,
    children: t
  })
}

function d(e, t) {
  return 0 === t.length ? e : [...e, ...l().flatten(t)]
}

function f() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let [r, a] = i.useState(t), s = i.useContext(c), l = i.useMemo(() => d(s, r), [r, s]), u = i.useMemo(() => d(s, r.slice(0, r.length - 1)), [r, s]);
  return i.useEffect(() => {
    o()(t, r) || a(t)
  }, [t, r]), {
    analyticsLocations: l,
    sourceAnalyticsLocations: u,
    parentAnalyticsLocation: u[u.length - 1],
    newestAnalyticsLocation: l[l.length - 1]
  }
}