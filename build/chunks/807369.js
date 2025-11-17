/** Chunk was on 42758 **/
/** chunk id: 807369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk363577 = require("./363577.js");
let a = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true,
    s = (0, r.M)(e, t, n),
    [o, l] = i.useState(true);
  return i.useEffect(() => {
    "" === e || e === a ? l(true) : null != s && l(s)
  }, [s, e, a]), o
}