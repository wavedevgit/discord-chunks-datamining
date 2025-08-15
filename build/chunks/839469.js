/** Chunk was on 30202 **/
/** chunk id: 839469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => o
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk647438 = require("./647438.js"),
  Chunk170401 = require("./170401.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js"),
  Chunk726985 = require("./726985.js");

function o() {
  let e = (0, Chunk996733.Z7)(),
    t = (0, Chunk991346.Pt)(),
    n = Chunk647438.useRef(new Chunk170401.Z((0, Chunk991346.ji)(exports))),
    [o, c] = Chunk647438.useState(false),
    [d, u] = Chunk647438.useState(Chunk726985.QF),
    m = Chunk647438.useCallback(async e => {
      u(await n.current.search(e.trim())), c(true)
    }, []);
  return Chunk647438.useEffect(() => {
    "" === module || module.length < 2 ? (u(Chunk726985.QF), c(false)) : m(module)
  }, [module, m]), {
    hasSearchResults: o,
    searchResults: d
  }
}