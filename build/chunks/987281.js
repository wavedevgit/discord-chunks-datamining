/** Chunk was on web.js **/
/** chunk id: 987281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => d,
  a: () => u
}), require("./747238.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk964486 = require("./964486.js"),
  Chunk839214 = require("./839214.js"),
  Chunk535762 = require("./535762.js"),
  Chunk152056 = require("./152056.js"),
  Chunk360619 = require("./360619.js"),
  Chunk531525 = require("./531525.js");
let u = (0, Chunk839214.D)(() => ({
  searchResults: c.R,
  hasSearchResults: false
}));

function d() {
  let e = o.A.useField("query"),
    t = (0, l.PH)(),
    n = r.useRef(new s.A((0, l.NI)(t))),
    a = r.useCallback(async e => {
      let t = await n.current.search(e.trim());
      u.setState({
        searchResults: t,
        hasSearchResults: true
      })
    }, []);
  r.useEffect(() => {
    "" === e || e.length < 2 ? u.resetState() : a(e)
  }, [e, a]), (0, i.Ay)(() => () => {
    u.resetState(), o.A.setState({
      query: ""
    })
  });
  let c = u.useField("searchResults");
  return {
    hasSearchResults: u.useField("hasSearchResults"),
    searchResults: c
  }
}