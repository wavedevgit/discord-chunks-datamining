/** Chunk was on 15261 **/
/** chunk id: 638730, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  T: () => o,
  h: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js");
let a = e => e,
  o = function(e, t) {
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : true,
      o = l(a, t, r, i),
      c = n.useRef(e);
    return n.useEffect(() => {
      c.current = o(e)
    }, [e, o]), 0 === t ? e : c.current
  },
  l = function(e, t) {
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      a = arguments.length > 3 ? arguments[3] : true,
      o = n.useRef((0, i.throttle)(e, t, a));
    return n.useEffect(() => (o.current = (0, i.throttle)(e, t, a), () => {
      var e;
      null == (e = o.current) || e.cancel()
    }), [e, t, a, ...r]), o.current
  }