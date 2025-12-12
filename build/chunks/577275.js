/** Chunk was on web.js **/
/** chunk id: 577275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk586739 = require("./586739.js");
let o = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = module,
    [n, o] = Chunk473749.useState([]),
    [a, s] = Chunk473749.useState(true),
    l = async () => {
      s(true);
      try {
        let e = await Chunk586739.Z.fetchTeams(true);
        o(module.body)
      } catch (e) {}
      s(false)
    }, c = Chunk473749.useRef(true);
  return Chunk473749.useEffect(() => {
    (c.current || exports) && (c.current = false, l())
  }, [exports]), {
    teams: require,
    loading: a,
    refresh: l
  }
}