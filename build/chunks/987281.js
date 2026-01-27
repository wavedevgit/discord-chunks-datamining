/** Chunk was on 77870 **/
/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
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
  let e = a.A.useField("query"),
    t = (0, o.PH)(),
    n = r.useRef(new s.A((0, o.NI)(t))),
    i = r.useCallback(async e => {
      let t = await n.current.search(e.trim());
      u.setState({
        searchResults: t,
        hasSearchResults: true
      })
    }, []);
  r.useEffect(() => {
    "" === e || e.length < 2 ? u.resetState() : i(e)
  }, [e, i]), (0, l.Ay)(() => () => {
    u.resetState(), a.A.setState({
      query: ""
    })
  });
  let c = u.useField("searchResults");
  return {
    hasSearchResults: u.useField("hasSearchResults"),
    searchResults: c
  }
}