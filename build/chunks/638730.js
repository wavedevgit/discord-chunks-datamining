/** Chunk was on 69634 **/
/** chunk id: 638730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => a,
  h: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js");
let i = e => e,
  a = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      l = arguments.length > 3 ? arguments[3] : true,
      a = o(i, t, n, l),
      u = r.useRef(e);
    return r.useEffect(() => {
      u.current = a(e)
    }, [e, a]), 0 === t ? e : u.current
  },
  o = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : true,
      a = r.useRef((0, l.throttle)(e, t, i));
    return r.useEffect(() => (a.current = (0, l.throttle)(e, t, i), () => {
      var e;
      null == (e = a.current) || e.cancel()
    }), [e, t, i, ...n]), a.current
  }