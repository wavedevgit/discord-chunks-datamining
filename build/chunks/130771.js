/** Chunk was on 3911 **/
/** chunk id: 130771, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => r
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk425587 = require("./425587.js");
let r = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = e,
    [n, r] = i.useState([]),
    [l, o] = i.useState(true),
    a = async () => {
      o(true);
      try {
        let e = await s.A.fetchTeams(true);
        r(e.body)
      } catch (e) {}
      o(false)
    }, d = i.useRef(true);
  return i.useEffect(() => {
    (d.current || t) && (d.current = false, a())
  }, [t]), {
    teams: n,
    loading: l,
    refresh: a
  }
}