/** Chunk was on web.js **/
/** chunk id: 979675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => r
});
let r = (e, t) => function(n, r, i) {
  return new Promise(o => {
    var a;
    e.dispatch({
      type: t,
      event: n,
      properties: r,
      flush: null != (a = null == i ? true : i.flush) && a,
      fingerprint: null == i ? true : i.fingerprint,
      resolve: o
    })
  })
}