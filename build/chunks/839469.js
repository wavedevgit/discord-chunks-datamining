/** Chunk was on 75708 **/
/** chunk id: 839469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => o
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk73800 = require("./73800.js"),
  Chunk170401 = require("./170401.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js"),
  Chunk726985 = require("./726985.js");

function o() {
  let e = (0, Chunk996733.Z7)(),
    t = (0, Chunk991346.Pt)(),
    n = Chunk73800.useRef(new Chunk170401.Z((0, Chunk991346.ji)(exports))),
    [o, c] = Chunk73800.useState(false),
    [d, u] = Chunk73800.useState(Chunk726985.QF),
    m = Chunk73800.useCallback(async e => {
      u(await n.current.search(e.trim())), c(true)
    }, []);
  return Chunk73800.useEffect(() => {
    "" === module || module.length < 2 ? (u(Chunk726985.QF), c(false)) : m(module)
  }, [module, m]), {
    hasSearchResults: o,
    searchResults: d
  }
}