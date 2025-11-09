/** Chunk was on 30025 **/
/** chunk id: 638730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => a,
  h: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js");
let l = e => e,
  a = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : true,
      a = s(l, t, n, i),
      o = r.useRef(e);
    return r.useEffect(() => {
      o.current = a(e)
    }, [e, a]), 0 === t ? e : o.current
  },
  s = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      l = arguments.length > 3 ? arguments[3] : true,
      a = r.useRef((0, i.throttle)(e, t, l));
    return r.useEffect(() => (a.current = (0, i.throttle)(e, t, l), () => {
      var e;
      null == (e = a.current) || e.cancel()
    }), [e, t, l, ...n]), a.current
  }