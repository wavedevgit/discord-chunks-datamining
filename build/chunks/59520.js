/** Chunk was on web.js **/
/** chunk id: 59520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s,
  J: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js");
let a = e => e,
  o = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 ? arguments[3] : true,
      o = s(a, t, n, i),
      l = r.useRef(e);
    return r.useEffect(() => {
      l.current = o(e)
    }, [e, o]), 0 === t ? e : l.current
  },
  s = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
      a = arguments.length > 3 ? arguments[3] : true,
      o = r.useRef((0, i.throttle)(e, t, a));
    return r.useEffect(() => (o.current = (0, i.throttle)(e, t, a), () => {
      var e;
      null == (e = o.current) || e.cancel()
    }), [e, t, a, ...n]), o.current
  }