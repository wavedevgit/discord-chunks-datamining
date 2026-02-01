/** Chunk was on 9207 **/
/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => u,
  a: () => d
}), require("./747238.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk964486 = require("./964486.js"),
  Chunk839214 = require("./839214.js"),
  Chunk535762 = require("./535762.js"),
  Chunk152056 = require("./152056.js"),
  Chunk360619 = require("./360619.js"),
  Chunk531525 = require("./531525.js");
let d = (0, Chunk839214.D)(() => ({
  searchResults: c.R,
  hasSearchResults: false
}));

function u() {
  let e = a.A.useField("query"),
    t = (0, o.PH)(),
    n = r.useRef(new s.A((0, o.NI)(t))),
    l = r.useCallback(async e => {
      let t = await n.current.search(e.trim());
      d.setState({
        searchResults: t,
        hasSearchResults: true
      })
    }, []);
  r.useEffect(() => {
    "" === e || e.length < 2 ? d.resetState() : l(e)
  }, [e, l]), (0, i.Ay)(() => () => {
    d.resetState(), a.A.setState({
      query: ""
    })
  });
  let c = d.useField("searchResults");
  return {
    hasSearchResults: d.useField("hasSearchResults"),
    searchResults: c
  }
}