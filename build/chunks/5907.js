/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  M: () => i
});
let r = e => {
    let t;
    let n = new Set,
      r = (e, r) => {
        let i = "function" == typeof e ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          t = (null != r ? r : "object" != typeof i || null === i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
        }
      },
      i = () => t,
      o = {
        setState: r,
        getState: i,
        getInitialState: () => a,
        subscribe: e => (n.add(e), () => n.delete(e))
      },
      a = t = e(r, i, o);
    return o
  },
  i = e => e ? r(e) : r