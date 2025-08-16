/** Chunk was on 36499 **/
/** chunk id: 967974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./49124.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607802 = require("./607802.js"),
  Chunk817190 = require("./817190.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    searchContext: t
  } = e, [n, s] = r.useState(o.QIO.NEWEST), c = (0, i.e7)([a.Z], () => {
    let e = (0, l.Tm)(t);
    return a.Z.getSearchResultsQuery(e)
  }), u = r.useRef(null);
  return r.useEffect(() => {
    JSON.stringify(u.current) !== JSON.stringify(c) && (s((0, l.Vj)({
      sort_by: null == c ? true : c.sort_by,
      sort_order: null == c ? true : c.sort_order
    })), u.current = c)
  }, [c]), {
    searchMode: n,
    setSearchMode: s
  }
}