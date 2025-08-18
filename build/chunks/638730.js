/** Chunk was on 67079 **/
/** chunk id: 638730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => i,
  h: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js");
let a = e => e,
  i = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      l = arguments.length > 3 ? arguments[3] : true,
      i = s(a, t, n, l),
      o = r.useRef(e);
    return r.useEffect(() => {
      o.current = i(e)
    }, [e, i]), 0 === t ? e : o.current
  },
  s = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      a = arguments.length > 3 ? arguments[3] : true,
      i = r.useRef((0, l.throttle)(e, t, a));
    return r.useEffect(() => (i.current = (0, l.throttle)(e, t, a), () => {
      var e;
      null == (e = i.current) || e.cancel()
    }), [e, t, a, ...n]), i.current
  }