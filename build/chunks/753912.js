/** Chunk was on web.js **/
/** chunk id: 753912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => r
});
let r = (e, t) => function(n, r, i) {
  return new Promise(a => {
    var o;
    e.dispatch({
      type: t,
      event: n,
      properties: r,
      flush: null != (o = null == i ? true : i.flush) && o,
      fingerprint: null == i ? true : i.fingerprint,
      resolve: a
    })
  })
}