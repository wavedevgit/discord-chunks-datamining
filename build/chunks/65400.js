/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  F: () => u,
  s: () => l
});
var r = n(192379),
  i = n(584171),
  o = n(5907);
let {
  useSyncExternalStoreWithSelector: a
} = i, s = e => e;

function l(e, t = s, n) {
  let i = a(e.subscribe, e.getState, e.getInitialState, t, n);
  return r.useDebugValue(i), i
}
let c = (e, t) => {
    let n = (0, o.M)(e),
      r = (e, r = t) => l(n, e, r);
    return Object.assign(r, n), r
  },
  u = (e, t) => e ? c(e, t) : c