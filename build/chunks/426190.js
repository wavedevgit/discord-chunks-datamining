/** Chunk was on 76850 **/
/** chunk id: 426190, original params: e,t,r (module,exports,require) **/
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
  p = new Set(["en-US", "es-ES"]),
  u = () => {
    let e = (0, a.A)(),
      t = (0, i.bG)([l.A], () => l.A.getUserCountry()),
      r = (0, i.bG)([o.default], () => o.default.locale);
    return n.useEffect(() => {
      null == t && (0, s.xf)()
    }, [t]), !e && null != t && c.has(t.alpha2) && p.has(r)
  },
  _ = () => {
    let e = (0, a.A)(),
      t = u();
    return !e && !t
  }