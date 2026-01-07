/** Chunk was on web.js **/
/** chunk id: 839469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => d,
  R: () => u
}), require("./35282.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk493773 = require("./493773.js"),
  Chunk972959 = require("./972959.js"),
  Chunk170401 = require("./170401.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js"),
  Chunk726985 = require("./726985.js");
let u = (0, Chunk972959.H)(() => ({
  searchResults: c.QF,
  hasSearchResults: false
}));

function d() {
  let e = s.Z.useField("query"),
    t = (0, l.Pt)(),
    n = r.useRef(new o.Z((0, l.ji)(t))),
    a = r.useCallback(async e => {
      let t = await n.current.search(e.trim());
      u.setState({
        searchResults: t,
        hasSearchResults: true
      })
    }, []);
  r.useEffect(() => {
    "" === e || e.length < 2 ? u.resetState() : a(e)
  }, [e, a]), (0, i.ZP)(() => () => {
    u.resetState(), s.Z.setState({
      query: ""
    })
  });
  let c = u.useField("searchResults");
  return {
    hasSearchResults: u.useField("hasSearchResults"),
    searchResults: c
  }
}