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
  let e = (0, Chunk442837.e7)([Chunk975060.Z], () => Chunk975060.Z.error),
    [t, n] = (0, Chunk442837.Wu)([Chunk505649.Z], () => [Chunk505649.Z.error, Chunk505649.Z.isAwaitingAuthentication]);
  return {
    paymentError: null != exports ? exports : module,
    paymentAuthenticationState: require ? Chunk176919.wr.PENDING : null != exports ? Chunk176919.wr.ERROR : Chunk176919.wr.NONE
  }
}