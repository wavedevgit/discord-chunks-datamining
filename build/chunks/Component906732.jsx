/** Chunk was on web.js **/
/** chunk id: 906732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gt: () => u,
  LZ: () => c,
  ZP: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711);
let c = Chunk73800.createContext([]);

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
  let [r, o] = Chunk73800.useState(exports), s = Chunk73800.useContext(c), l = Chunk73800.useMemo(() => d(Chunk392711, Chunk255367), [Chunk255367, Chunk392711]), u = Chunk73800.useMemo(() => d(Chunk392711, Chunk255367.slice(0, Chunk255367.length - 1)), [Chunk255367, Chunk392711]);
  return Chunk73800.useEffect(() => {
    a()(exports, Chunk255367) || Chunk348327(exports)
  }, [exports, Chunk255367]), {
    analyticsLocations: l,
    sourceAnalyticsLocations: u,
    parentAnalyticsLocation: u[u.length - 1],
    newestAnalyticsLocation: l[l.length - 1]
  }
}