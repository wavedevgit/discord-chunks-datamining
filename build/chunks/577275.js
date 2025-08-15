/** Chunk was on 81498 **/
/** chunk id: 577275, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk586739 = require("./586739.js");
let s = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = module,
    [n, s] = Chunk647438.useState([]),
    [l, o] = Chunk647438.useState(true),
    a = async () => {
      o(true);
      try {
        let e = await Chunk586739.Z.fetchTeams(true);
        s(module.body)
      } catch (e) {}
      o(false)
    }, u = Chunk647438.useRef(true);
  return Chunk647438.useEffect(() => {
    (u.current || exports) && (u.current = false, a())
  }, [exports]), {
    teams: require,
    loading: l,
    refresh: a
  }
}