/** Chunk was on web.js **/
/** chunk id: 839469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d,
  R: () => u
}), require("./35282.js"), require("./781311.js");
var Chunk647438 = require("./647438.js"),
  Chunk493773 = require("./493773.js"),
  Chunk972959 = require("./972959.js"),
  Chunk170401 = require("./170401.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js"),
  Chunk726985 = require("./726985.js");
let u = (0, Chunk972959.H)(() => ({
  searchResults: Chunk726985.QF,
  hasSearchResults: false
}));

function d() {
  let e = (0, Chunk996733.Z7)(),
    t = (0, Chunk991346.Pt)(),
    n = Chunk647438.useRef(new Chunk170401.Z((0, Chunk991346.ji)(exports))),
    a = Chunk647438.useCallback(async e => {
      let t = await n.current.search(e.trim());
      u.setState({
        searchResults: t,
        hasSearchResults: true
      })
    }, []);
  Chunk647438.useEffect(() => {
    "" === module || module.length < 2 ? u.resetState() : Chunk972959(module)
  }, [module, Chunk972959]), (0, Chunk493773.ZP)(() => () => {
    u.resetState(), (0, Chunk996733.yN)("")
  });
  let c = u.useField("searchResults");
  return {
    hasSearchResults: u.useField("hasSearchResults"),
    searchResults: Chunk726985
  }
}