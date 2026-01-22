/** Chunk was on web.js **/
/** chunk id: 525576, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 200,
    n = arguments.length > 2 ? arguments[2] : true,
    [i, a] = r.useState("top");
  return r.useEffect(() => {
    if (null == e.current) return void a("top");
    let n = e.current.getBoundingClientRect(),
      r = window.innerWidth,
      i = window.innerHeight,
      s = {
        top: n.top,
        bottom: i - n.bottom,
        left: n.left,
        right: r - n.right
      },
      o = ["top", "bottom", "right", "left"];
    for (let e of o)
      if (s[e] >= t) return void a(e);
    a(o.reduce((e, t) => s[t] > s[e] ? t : e, "top"))
  }, [e, t, n]), i
}