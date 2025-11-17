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
  for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
  let [r, a] = Chunk473749.useState(exports), s = Chunk473749.useContext(c), l = Chunk473749.useMemo(() => d(Chunk392711, Chunk54381), [Chunk54381, Chunk392711]), u = Chunk473749.useMemo(() => d(Chunk392711, Chunk54381.slice(0, Chunk54381.length - 1)), [Chunk54381, Chunk392711]);
  return Chunk473749.useEffect(() => {
    o()(exports, Chunk54381) || Chunk348327(exports)
  }, [exports, Chunk54381]), {
    analyticsLocations: l,
    sourceAnalyticsLocations: u,
    parentAnalyticsLocation: u[u.length - 1],
    newestAnalyticsLocation: l[l.length - 1]
  }
}