/** Chunk was on 1272 **/
/** chunk id: 30643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk237997 = require("./237997.js"),
  Chunk998502 = require("./998502.js"),
  Chunk576027 = require("./576027.js"),
  Chunk13838 = require("./13838.js"),
  Chunk812967 = require("./812967.js"),
  Chunk350085 = require("./350085.js"),
  Chunk943687 = require("./943687.js"),
  Chunk910484 = require("./910484.js"),
  Chunk443952 = require("./443952.jsx"),
  Chunk266572 = require("./266572.jsx"),
  Chunk177698 = require("./177698.jsx"),
  Chunk121826 = require("./121826.js"),
  Chunk109815 = require("./109815.js"),
  Chunk753335 = require("./753335.js"),
  Chunk567481 = require("./567481.jsx"),
  Chunk498164 = require("./498164.jsx"),
  Chunk705444 = require("./705444.js"),
  Chunk885381 = require("./885381.js"),
  Chunk111097 = require("./111097.js"),
  Chunk908711 = require("./908711.js"),
  Chunk197941 = require("./197941.jsx"),
  Chunk462414 = require("./462414.js"),
  Chunk662194 = require("./662194.js"),
  Chunk188861 = require("./188861.js");

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let j = N({}, Chunk576027.A, Chunk443952.Z, Chunk266572.Z, Chunk121826.Z, Chunk753335.Z, Chunk109815.Z, Chunk567481.Z, Chunk498164.Z, Chunk705444.Z, Chunk885381.Z, Chunk111097.Z, Chunk197941.Z, Chunk662194.Z, Chunk462414.Z, Chunk177698.Z, Chunk908711.Z),
  x = N({}, Chunk13838.Z, Chunk350085.M, Chunk943687.f, Chunk910484.n),
  P = {
    server: Chunk812967.Z,
    commands: j,
    events: x,
    stores: [Chunk237997.default],
    transports: [Chunk188861.Z],
    registerTransportsForEmbeddedPlatform: function() {
      i.ZP.ensureModule("discord_rpc").then(() => {
        for (let e of [n(178318).Z, n(967351).Z]) o.Z.registerTransport(e)
      })
    }
  }