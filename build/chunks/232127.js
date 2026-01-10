/** Chunk was on web.js **/
/** chunk id: 232127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => l
});
var Chunk626135 = require("./626135.js"),
  Chunk91641 = require("./91641.js"),
  Chunk987338 = require("./987338.js"),
  Chunk981631 = require("./981631.js");
let s = new Chunk91641.E([], Chunk987338.$P.PAYMENT_FLOW_STARTED, {
  location: "payment flow started"
});

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  r.default.track(o.rMx.PAYMENT_FLOW_STARTED, e, t), s.trigger()
}