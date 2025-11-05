/** Chunk was on 97961 **/
/** chunk id: 638730, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  T: () => c,
  h: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js");
let o = t => t,
  c = function(t, e) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      a = arguments.length > 3 ? arguments[3] : true,
      c = i(o, e, n, a),
      l = r.useRef(t);
    return r.useEffect(() => {
      l.current = c(t)
    }, [t, c]), 0 === e ? t : l.current
  },
  i = function(t, e) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      o = arguments.length > 3 ? arguments[3] : true,
      c = r.useRef((0, a.throttle)(t, e, o));
    return r.useEffect(() => (c.current = (0, a.throttle)(t, e, o), () => {
      var t;
      null == (t = c.current) || t.cancel()
    }), [t, e, o, ...n]), c.current
  }