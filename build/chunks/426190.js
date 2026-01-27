/** Chunk was on 76850 **/
/** chunk id: 426190, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  N: () => p,
  z: () => _
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk966107 = require("./966107.js"),
  Chunk773669 = require("./773669.js"),
  Chunk695515 = require("./695515.js"),
  Chunk438732 = require("./438732.js");
let c = new Set(["US"]),
  u = new Set(["en-US", "es-ES"]),
  p = () => {
    let e = (0, a.A)(),
      t = (0, i.bG)([l.A], () => l.A.getUserCountry()),
      r = (0, i.bG)([s.default], () => s.default.locale);
    return n.useEffect(() => {
      null == t && (0, o.xf)()
    }, [t]), !e && null != t && c.has(t.alpha2) && u.has(r)
  },
  _ = () => {
    let e = (0, a.A)(),
      t = p();
    return !e && !t
  }