/** Chunk was on 73726 **/
/** chunk id: 638730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => a,
  h: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js");
let l = e => e,
  a = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : true,
      a = o(l, t, n, i),
      s = r.useRef(e);
    return r.useEffect(() => {
      s.current = a(e)
    }, [e, a]), 0 === t ? e : s.current
  },
  o = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      l = arguments.length > 3 ? arguments[3] : true,
      a = r.useRef((0, i.throttle)(e, t, l));
    return r.useEffect(() => (a.current = (0, i.throttle)(e, t, l), () => {
      var e;
      null == (e = a.current) || e.cancel()
    }), [e, t, l, ...n]), a.current
  }