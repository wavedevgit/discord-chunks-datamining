/** Chunk was on web.js **/
/** chunk id: 552574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk251913 = require("./251913.js"),
  Chunk825755 = require("./825755.js"),
  Chunk153084 = require("./153084.js");

function o() {
  let e = (0, r.bG)([a.A], () => a.A.error),
    [t, n] = (0, r.yK)([s.A], () => [s.A.error, s.A.isAwaitingAuthentication]);
  return {
    paymentError: null != t ? t : e,
    paymentAuthenticationState: n ? i.oc.PENDING : null != t ? i.oc.ERROR : i.oc.NONE
  }
}