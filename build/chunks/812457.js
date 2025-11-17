/** Chunk was on web.js **/
/** chunk id: 812457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js");
let s = 1e3,
  l = (e, t) => {
    let n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
      l = (0, i.e7)([o.Z], () => o.Z.isFocused()),
      [c, u] = r.useState(false),
      d = r.useRef(null);
    return r.useEffect(() => {
      clearTimeout(d.current), d.current = null;
      let r = !n && !t,
        i = l && (e || r);
      i && n ? d.current = window.setTimeout(() => {
        u(true)
      }, s) : u(i)
    }, [l, e, n, t]), r.useEffect(() => () => clearTimeout(d.current), []), {
      canAnimate: c
    }
  }