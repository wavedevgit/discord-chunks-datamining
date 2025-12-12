/** Chunk was on web.js **/
/** chunk id: 638730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a,
  h: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js");
let o = e => e,
  a = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : true,
      a = s(o, t, n, i),
      l = r.useRef(e);
    return r.useEffect(() => {
      l.current = a(e)
    }, [e, a]), 0 === t ? e : l.current
  },
  s = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      o = arguments.length > 3 ? arguments[3] : true,
      a = r.useRef((0, i.throttle)(e, t, o));
    return r.useEffect(() => (a.current = (0, i.throttle)(e, t, o), () => {
      var e;
      null == (e = a.current) || e.cancel()
    }), [e, t, o, ...n]), a.current
  }