/** Chunk was on 86142 **/
/** chunk id: 781436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk565478 = require("./565478.js");
let s = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : true,
    l = (0, i.W)(e, t, n),
    [a, o] = r.useState(true);
  return r.useEffect(() => {
    "" === e || e === s ? o(true) : null != l && o(l)
  }, [l, e, s]), a
}