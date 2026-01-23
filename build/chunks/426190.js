/** Chunk was on web.js **/
/** chunk id: 426190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d,
  z: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk966107 = require("./966107.js"),
  Chunk773669 = require("./773669.js"),
  Chunk695515 = require("./695515.js"),
  Chunk438732 = require("./438732.js");
let c = new Set(["US"]),
  u = new Set(["en-US", "es-ES"]),
  d = () => {
    let e = (0, l.A)(),
      t = (0, i.bG)([o.A], () => o.A.getUserCountry()),
      n = (0, i.bG)([s.default], () => s.default.locale);
    return r.useEffect(() => {
      null == t && (0, a.xf)()
    }, [t]), !e && null != t && c.has(t.alpha2) && u.has(n)
  },
  f = () => {
    let e = (0, l.A)(),
      t = d();
    return !e && !t
  }