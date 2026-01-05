/** Chunk was on web.js **/
/** chunk id: 601584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => a
});
let r = (e, t) => ({
    x: e.x - t.x,
    y: e.y - t.y
  }),
  i = e => {
    let t = e.getInitialClientOffset(),
      n = e.getInitialSourceClientOffset();
    return null === t || null === n ? {
      x: 0,
      y: 0
    } : r(t, n)
  },
  a = (e, t) => {
    let n = e.getClientOffset();
    if (null === n) return null;
    if (!t.current || !t.current.getBoundingClientRect) return r(n, i(e));
    let a = t.current.getBoundingClientRect();
    return r(n, {
      x: a.width / 2,
      y: a.height / 2
    })
  }