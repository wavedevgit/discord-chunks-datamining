/** Chunk was on web.js **/
/** chunk id: 140851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DD: () => m,
  GM: () => g,
  Mn: () => r,
  OM: () => l,
  Ol: () => h,
  R9: () => f,
  WY: () => d,
  _N: () => u,
  ir: () => _,
  kb: () => o,
  ni: () => c,
  pG: () => a,
  qZ: () => s,
  sQ: () => i,
  xf: () => p
});
var r = "top",
  i = "bottom",
  a = "right",
  o = "left",
  s = "auto",
  l = [r, i, a, o],
  c = "start",
  u = "end",
  d = "clippingParents",
  f = "viewport",
  p = "popper",
  _ = "reference",
  h = l.reduce(function(e, t) {
    return e.concat([t + "-" + c, t + "-" + u])
  }, []),
  m = [].concat(l, [s]).reduce(function(e, t) {
    return e.concat([t, t + "-" + c, t + "-" + u])
  }, []),
  g = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]