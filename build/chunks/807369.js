/** Chunk was on 84956 **/
/** chunk id: 807369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk363577 = require("./363577.js");
let o = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true,
    a = (0, r.M)(e, t, n),
    [s, l] = i.useState(true);
  return i.useEffect(() => {
    "" === e || e === o ? l(true) : null != a && l(a)
  }, [a, e, o]), s
}