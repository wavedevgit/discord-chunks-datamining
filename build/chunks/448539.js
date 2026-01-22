/** Chunk was on web.js **/
/** chunk id: 448539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk340287 = require("./340287.js");
let a = Object.freeze({
  box: "border-box"
});

function s(e) {
  let {
    ref: t,
    onUpdate: n,
    resizeObserver: s,
    listenerMap: o,
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
    return null != r && (o.set(r, e), s.observe(r, a)), () => {
      null != r && (s.unobserve(r), o.delete(r))
    }
  }, [n, s, t, o, l])
}