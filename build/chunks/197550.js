/** Chunk was on web.js **/
/** chunk id: 197550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  bl: () => c,
  co: () => u,
  iF: () => l
}), require("./415506.js");
var Chunk544891 = require("./544891.js");
require("./570140.js");
var Chunk710845 = require("./710845.js"),
  Chunk122289 = require("./122289.js"),
  Chunk981631 = require("./981631.js");
let s = new Chunk710845.Z("OrderActionCreators");
var l = function(e) {
    return e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.DRAFT = 1] = "DRAFT", e[e.SIGNED = 2] = "SIGNED", e[e.DISCARDED = 3] = "DISCARDED", e[e.SIGNING_IN_PROGRESS = 4] = "SIGNING_IN_PROGRESS", e
  }({}),
  c = function(e) {
    return e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ONE_TIME = 1] = "ONE_TIME", e[e.SUBSCRIPTION = 2] = "SUBSCRIPTION", e
  }({});
async function u(e) {
  try {
    return (await r.tn.get({
      url: o.ANM.ORDER_GET(e),
      rejectWithError: true
    })).body || null
  } catch (t) {
    return s.error("failed to fetch order", {
      error: t,
      orderId: e
    }), (0, a.q2)(t, {
      tags: {
        source: "OrderActionCreators_getOrder"
      },
      extra: {
        orderId: e
      }
    }), null
  }
}