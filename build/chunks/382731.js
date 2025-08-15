/** Chunk was on web.js **/
/** chunk id: 382731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk867309 = require("./867309.js");
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