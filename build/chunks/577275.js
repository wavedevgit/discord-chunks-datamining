/** Chunk was on 81498 **/
/** chunk id: 577275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk586739 = require("./586739.js");
let s = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = module,
    [n, s] = Chunk73800.useState([]),
    [l, o] = Chunk73800.useState(true),
    a = async () => {
      o(true);
      try {
        let e = await Chunk586739.Z.fetchTeams(true);
        s(module.body)
      } catch (e) {}
      o(false)
    }, u = Chunk73800.useRef(true);
  return Chunk73800.useEffect(() => {
    (u.current || exports) && (u.current = false, a())
  }, [exports]), {
    teams: require,
    loading: l,
    refresh: a
  }
}