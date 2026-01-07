/** Chunk was on web.js **/
/** chunk id: 485664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => f,
  o: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk823162 = require("./823162.js"),
  Chunk706454 = require("./706454.js"),
  Chunk914788 = require("./914788.js"),
  Chunk880257 = require("./880257.js");
let c = new Set(["US"]),
  u = new Set(["en-US", "es-ES"]),
  d = () => {
    let e = (0, l.Z)(),
      t = (0, i.e7)([s.Z], () => s.Z.getUserCountry()),
      n = (0, i.e7)([o.default], () => o.default.locale);
    return r.useEffect(() => {
      null == t && (0, a.hi)()
    }, [t]), !e && null != t && c.has(t.alpha2) && u.has(n)
  },
  f = () => {
    let e = (0, l.Z)(),
      t = d();
    return !e && !t
  }