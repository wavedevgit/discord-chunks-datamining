/** Chunk was on web.js **/
/** chunk id: 338932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531685 = require("./531685.js");
let s = 1e3,
  l = (e, t) => {
    let n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
      l = (0, i.bG)([o.A], () => o.A.isFocused()),
      [c, u] = r.useState(false),
      d = r.useRef(null);
    return r.useEffect(() => {
      null !== d.current && (clearTimeout(d.current), d.current = null);
      let r = !n && !t,
        i = l && (e || r);
      i && n ? d.current = window.setTimeout(() => {
        u(true)
      }, s) : u(i)
    }, [l, e, n, t]), r.useEffect(() => () => {
      null !== d.current && (clearTimeout(d.current), d.current = null)
    }, []), {
      canAnimate: c
    }
  }