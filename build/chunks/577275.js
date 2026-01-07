/** Chunk was on web.js **/
/** chunk id: 577275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk586739 = require("./586739.js");
let a = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = e,
    [n, a] = r.useState([]),
    [o, s] = r.useState(true),
    l = async () => {
      s(true);
      try {
        let e = await i.Z.fetchTeams(true);
        a(e.body)
      } catch (e) {}
      s(false)
    }, c = r.useRef(true);
  return r.useEffect(() => {
    (c.current || t) && (c.current = false, l())
  }, [t]), {
    teams: n,
    loading: o,
    refresh: l
  }
}