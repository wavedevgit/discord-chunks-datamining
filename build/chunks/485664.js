/** Chunk was on 49508 **/
/** chunk id: 485664, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Q: () => c,
  o: () => E
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk823162 = require("./823162.js"),
  Chunk706454 = require("./706454.js"),
  Chunk914788 = require("./914788.js"),
  Chunk880257 = require("./880257.js");
let s = new Set(["US"]),
  u = new Set(["en-US", "es-ES"]),
  E = () => {
    let t = (0, Chunk880257.Z)(),
      e = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getUserCountry()),
      n = (0, Chunk399606.e7)([Chunk706454.default], () => Chunk706454.default.locale);
    return Chunk647438.useEffect(() => {
      null == exports && (0, Chunk823162.hi)()
    }, [exports]), !module && null != exports && s.has(exports.alpha2) && u.has(require)
  },
  c = () => {
    let t = (0, Chunk880257.Z)(),
      e = E();
    return !module && !exports
  }