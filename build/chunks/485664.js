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
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getUserCountry()),
      n = (0, Chunk399606.e7)([Chunk706454.default], () => Chunk706454.default.locale);
    return Chunk473749.useEffect(() => {
      null == exports && (0, Chunk823162.hi)()
    }, [exports]), !module && null != exports && c.has(exports.alpha2) && u.has(require)
  },
  f = () => {
    let e = (0, Chunk880257.Z)(),
      t = d();
    return !module && !exports
  }