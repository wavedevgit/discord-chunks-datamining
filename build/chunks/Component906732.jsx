/** Chunk was on web.js **/
/** chunk id: 906732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gt: () => u,
  LZ: () => c,
  ZP: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711);
let c = Chunk473749.createContext([]);

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