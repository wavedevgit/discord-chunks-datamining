/** Chunk was on web.js **/
/** chunk id: 382731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js");
let o = Object.freeze({
  box: "border-box"
});

function a(e) {
  let {
    ref: t,
    onUpdate: n,
    resizeObserver: a,
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
    return null != r && (s.set(r, e), a.observe(r, o)), () => {
      null != r && (a.unobserve(r), s.delete(r))
    }
  }, [n, a, t, s, l])
}