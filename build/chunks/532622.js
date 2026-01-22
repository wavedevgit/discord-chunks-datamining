/** Chunk was on web.js **/
/** chunk id: 532622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => d,
  qC: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk488926 = require("./488926.js"),
  Chunk818348 = require("./818348.js");
let o = [Chunk818348.xB.SET_VOICE_CHANNEL_STATUS, Chunk818348.xB.CONNECT, Chunk818348.xB.VIEW_CHANNEL],
  l = [Chunk818348.xB.SET_VOICE_CHANNEL_STATUS];

function c(e, t, n, r) {
  return (n ? l : o).every(n => null == r ? t.can(n, e) : a.$3({
    permission: n,
    user: r,
    context: e
  }))
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return c(e, i.A, t, n)
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return (0, r.bG)([i.A], () => c(e, i.A, t, n), [e, t, n])
}