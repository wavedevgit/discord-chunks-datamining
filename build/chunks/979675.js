/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  $: () => r
});
let r = (e, t) => function(n, r, i) {
  return new Promise(o => {
    var a;
    e.dispatch({
      type: t,
      event: n,
      properties: r,
      flush: null !== (a = null == i ? void 0 : i.flush) && void 0 !== a && a,
      fingerprint: null == i ? void 0 : i.fingerprint,
      resolve: o
    })
  })
}