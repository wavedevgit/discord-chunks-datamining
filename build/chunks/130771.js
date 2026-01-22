/** Chunk was on web.js **/
/** chunk id: 130771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk425587 = require("./425587.js");
let a = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = e,
    [n, a] = r.useState([]),
    [s, o] = r.useState(true),
    l = async () => {
      o(true);
      try {
        let e = await i.A.fetchTeams(true);
        a(e.body)
      } catch (e) {}
      o(false)
    }, c = r.useRef(true);
  return r.useEffect(() => {
    (c.current || t) && (c.current = false, l())
  }, [t]), {
    teams: n,
    loading: s,
    refresh: l
  }
}