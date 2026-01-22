/** Chunk was on web.js **/
/** chunk id: 357669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => l
});
var Chunk954571 = require("./954571.js"),
  Chunk840251 = require("./840251.js"),
  Chunk688151 = require("./688151.js"),
  Chunk652215 = require("./652215.js");
let o = new Chunk840251.E([], Chunk688151.$G.PAYMENT_FLOW_STARTED, {
  location: "payment flow started"
});

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  r.default.track(s.HAw.PAYMENT_FLOW_STARTED, e, t), o.trigger()
}