/** Chunk was on 78376 **/
/** chunk id: 426190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => u,
  z: () => _
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk966107 = require("./966107.js"),
  Chunk773669 = require("./773669.js"),
  Chunk695515 = require("./695515.js"),
  Chunk438732 = require("./438732.js");
let c = new Set(["US"]),
  d = new Set(["en-US", "es-ES"]),
  u = () => {
    let e = (0, o.A)(),
      t = (0, i.bG)([a.A], () => a.A.getUserCountry()),
      n = (0, i.bG)([s.default], () => s.default.locale);
    return r.useEffect(() => {
      null == t && (0, l.xf)()
    }, [t]), !e && null != t && c.has(t.alpha2) && d.has(n)
  },
  _ = () => {
    let e = (0, o.A)(),
      t = u();
    return !e && !t
  }