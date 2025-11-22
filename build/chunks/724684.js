/** Chunk was on web.js **/
/** chunk id: 724684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DJ: () => s,
  U0: () => u,
  W_: () => a,
  Z$: () => c,
  Z0: () => f,
  iM: () => o,
  j2: () => d,
  jc: () => l,
  uq: () => i
});
var Chunk49436 = require("./49436.js");

function i(e) {
  return [r.jn.GIFT_INVENTORY_FOR_YOU, r.jn.GIFT_INVENTORY_OTHER].includes(e)
}

function a(e) {
  return e === r.jn.GIFT_INVENTORY_FOR_YOU || !i(e)
}

function o(e) {
  let {
    quest: t,
    location: n
  } = e, {
    userStatus: r
  } = t;
  return (null == r ? true : r.enrolledAt) != null && null == r.completedAt || a(n)
}
let s = 100,
  l = 20,
  c = 32,
  u = 1e3,
  d = 460,
  f = 280