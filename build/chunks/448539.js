/** Chunk was on web.js **/
/** chunk id: 448539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk340287 = require("./340287.js");
let a = Object.freeze({
  box: "border-box"
});

function o(e) {
  let {
    ref: t,
    onUpdate: n,
    resizeObserver: o,
    listenerMap: s,
    key: l
  } = e;
  (0, r.useLayoutEffect)(() => {
    let e = e => {
        (0, i.flushSync)(() => {
          n(e, l)
        })
      },
      {
        current: r
      } = t;
    return null != r && (s.set(r, e), o.observe(r, a)), () => {
      null != r && (o.unobserve(r), s.delete(r))
    }
  }, [n, o, t, s, l])
}