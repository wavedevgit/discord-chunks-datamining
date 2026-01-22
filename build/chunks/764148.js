/** Chunk was on 21738 **/
/** chunk id: 764148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk256415 = require("./256415.js"),
  Chunk837921 = require("./837921.js"),
  Chunk214961 = require("./214961.js"),
  Chunk88065 = require("./88065.js"),
  Chunk474951 = require("./474951.js"),
  Chunk770804 = require("./770804.js"),
  Chunk539754 = require("./539754.js"),
  Chunk6059 = require("./6059.js"),
  Chunk372919 = require("./372919.jsx"),
  Chunk624712 = require("./624712.jsx"),
  Chunk294446 = require("./294446.jsx"),
  Chunk175436 = require("./175436.js"),
  Chunk43203 = require("./43203.js"),
  Chunk1791 = require("./1791.js"),
  Chunk293890 = require("./293890.jsx"),
  Chunk985603 = require("./985603.jsx"),
  Chunk103949 = require("./103949.js"),
  Chunk873351 = require("./873351.js"),
  Chunk885969 = require("./885969.js"),
  Chunk944127 = require("./944127.js"),
  Chunk388331 = require("./388331.jsx"),
  Chunk466444 = require("./466444.js"),
  Chunk177235 = require("./177235.js"),
  Chunk266686 = require("./266686.js");

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
let T = N({}, Chunk214961.U, Chunk372919.A, Chunk624712.A, Chunk175436.A, Chunk1791.A, Chunk43203.A, Chunk293890.A, Chunk985603.A, Chunk103949.A, Chunk873351.A, Chunk885969.A, Chunk388331.A, Chunk177235.A, Chunk466444.A, Chunk294446.A, Chunk944127.A),
  j = N({}, Chunk88065.A, Chunk770804.c, Chunk539754.I, Chunk6059.p),
  x = {
    server: Chunk474951.A,
    commands: T,
    events: j,
    stores: [Chunk256415.default],
    transports: [Chunk266686.A],
    registerTransportsForEmbeddedPlatform: function() {
      i.Ay.ensureModule("discord_rpc").then(() => {
        for (let e of [n(33006).A, n(998921).A]) s.A.registerTransport(e)
      })
    }
  }