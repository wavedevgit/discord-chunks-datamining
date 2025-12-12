/** Chunk was on web.js **/
/** chunk id: 106767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 200,
    n = arguments.length > 2 ? arguments[2] : true,
    [i, o] = r.useState("top");
  return r.useEffect(() => {
    if (null == e.current) return void o("top");
    let n = e.current.getBoundingClientRect(),
      r = window.innerWidth,
      i = window.innerHeight,
      a = {
        top: n.top,
        bottom: i - n.bottom,
        left: n.left,
        right: r - n.right
      },
      s = ["top", "bottom", "right", "left"];
    for (let e of s)
      if (a[e] >= t) return void o(e);
    o(s.reduce((e, t) => a[t] > a[e] ? t : e, "top"))
  }, [e, t, n]), i
}