/** Chunk was on 49152 **/
/** chunk id: 970850, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./49124.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk518944 = require("./518944.js"),
  Chunk607802 = require("./607802.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let {
    searchContext: t
  } = e, [n, o] = r.useState(s.QIO.NEWEST), c = (0, i.e7)([l.Z], () => {
    let e = (0, a.Tm)(t);
    return l.Z.getSearchResultsQuery(e)
  }), u = r.useRef(null);
  return r.useEffect(() => {
    JSON.stringify(u.current) !== JSON.stringify(c) && (o((0, a.Vj)({
      sort_by: null == c ? true : c.sort_by,
      sort_order: null == c ? true : c.sort_order
    })), u.current = c)
  }, [c]), {
    searchMode: n,
    setSearchMode: o
  }
}