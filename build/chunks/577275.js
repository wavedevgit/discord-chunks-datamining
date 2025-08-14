/** Chunk was on 77512 **/
/** chunk id: 577275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk586739 = require("./586739.js");
let l = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    {
      refreshOnDepChange: t
    } = module,
    [n, l] = Chunk73800.useState([]),
    [o, s] = Chunk73800.useState(true),
    c = async () => {
      s(true);
      try {
        let e = await Chunk586739.Z.fetchTeams(true);
        l(module.body)
      } catch (e) {}
      s(false)
    }, a = Chunk73800.useRef(true);
  return Chunk73800.useEffect(() => {
    (a.current || exports) && (a.current = false, c())
  }, [exports]), {
    teams: require,
    loading: o,
    refresh: c
  }
}