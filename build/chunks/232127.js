/** Chunk was on web.js **/
/** chunk id: 232127, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => u
});
var Chunk626135 = require("./626135.js"),
  Chunk483942 = require("./483942.js"),
  Chunk91641 = require("./91641.js"),
  Chunk959784 = require("./959784.js"),
  Chunk987338 = require("./987338.js"),
  Chunk981631 = require("./981631.js");
let c = new Chunk91641.E([Chunk959784.NR, Chunk959784.ZI, Chunk959784.Ob, Chunk959784.uc, Chunk959784.m1, Chunk483942.kF, Chunk483942.kS, Chunk483942.yR, Chunk483942.Aq, Chunk483942.f7, Chunk483942.Fe], Chunk987338.$P.PAYMENT_FLOW_STARTED, {
  location: "payment flow started"
});

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  r.default.track(l.rMx.PAYMENT_FLOW_STARTED, e, t), c.trigger()
}