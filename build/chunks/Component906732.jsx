/** Chunk was on web.js **/
/** chunk id: 906732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gt: () => u,
  LZ: () => c,
  ZP: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk348327 = require("./348327.js"),
  o = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711);
let c = Chunk647438.createContext([]);

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
  let [r, a] = Chunk647438.useState(exports), s = Chunk647438.useContext(c), l = Chunk647438.useMemo(() => d(Chunk392711, Chunk951288), [Chunk951288, Chunk392711]), u = Chunk647438.useMemo(() => d(Chunk392711, Chunk951288.slice(0, Chunk951288.length - 1)), [Chunk951288, Chunk392711]);
  return Chunk647438.useEffect(() => {
    o()(exports, Chunk951288) || Chunk348327(exports)
  }, [exports, Chunk951288]), {
    analyticsLocations: l,
    sourceAnalyticsLocations: u,
    parentAnalyticsLocation: u[u.length - 1],
    newestAnalyticsLocation: l[l.length - 1]
  }
}