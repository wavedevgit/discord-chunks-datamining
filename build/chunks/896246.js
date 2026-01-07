/** Chunk was on web.js **/
/** chunk id: 896246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk176919 = require("./176919.js"),
  Chunk975060 = require("./975060.js"),
  Chunk505649 = require("./505649.js");

function s() {
  let e = (0, r.e7)([a.Z], () => a.Z.error),
    [t, n] = (0, r.Wu)([o.Z], () => [o.Z.error, o.Z.isAwaitingAuthentication]);
  return {
    paymentError: null != t ? t : e,
    paymentAuthenticationState: n ? i.wr.PENDING : null != t ? i.wr.ERROR : i.wr.NONE
  }
}