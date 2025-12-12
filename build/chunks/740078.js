/** Chunk was on web.js **/
/** chunk id: 740078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BL: () => c,
  Ct: () => h,
  F2: () => o,
  I: () => i,
  Pj: () => f,
  YP: () => _,
  bw: () => m,
  d7: () => s,
  k5: () => p,
  mv: () => l,
  t$: () => a,
  ut: () => u,
  we: () => r,
  xs: () => g,
  zV: () => d
});
var r = "top",
  i = "bottom",
  o = "right",
  a = "left",
  s = "auto",
  l = [r, i, o, a],
  c = "start",
  u = "end",
  d = "clippingParents",
  f = "viewport",
  p = "popper",
  _ = "reference",
  m = l.reduce(function(e, t) {
    return e.concat([t + "-" + c, t + "-" + u])
  }, []),
  h = [].concat(l, [s]).reduce(function(e, t) {
    return e.concat([t, t + "-" + c, t + "-" + u])
  }, []),
  g = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]