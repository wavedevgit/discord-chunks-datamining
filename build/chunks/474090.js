/** Chunk was on web.js **/
/** chunk id: 474090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => l,
  CC: () => i,
  YE: () => s,
  cr: () => a,
  ki: () => o
});
var Chunk788868 = require("./788868.js");

function i(e, t) {
  return null == t || null != e && r.ci[e] >= r.ci[t]
}

function a(e, t) {
  return null == e || r.ci[e] <= r.ci[t]
}

function o(e, t) {
  return null != e && null != e.premiumType && i(e.premiumType, t)
}

function s(e, t) {
  return null != e && e.premiumType === t
}
let l = {
  isPremiumAtLeast: i,
  isPremium: o,
  isPremiumExactly: s
}