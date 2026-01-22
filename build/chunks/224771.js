/** Chunk was on web.js **/
/** chunk id: 224771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BM: () => c,
  Re: () => l,
  r$: () => u
}), require("./65821.js");
var Chunk562465 = require("./562465.js");
require("./73153.js");
var Chunk626584 = require("./626584.js"),
  Chunk739508 = require("./739508.js"),
  Chunk652215 = require("./652215.js");
let o = new Chunk626584.A("OrderActionCreators");
var l = function(e) {
    return e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.DRAFT = 1] = "DRAFT", e[e.SIGNED = 2] = "SIGNED", e[e.DISCARDED = 3] = "DISCARDED", e[e.SIGNING_IN_PROGRESS = 4] = "SIGNING_IN_PROGRESS", e
  }({}),
  c = function(e) {
    return e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ONE_TIME = 1] = "ONE_TIME", e[e.SUBSCRIPTION = 2] = "SUBSCRIPTION", e
  }({});
async function u(e) {
  try {
    return (await r.Bo.get({
      url: s.Rsh.ORDER_GET(e),
      rejectWithError: true
    })).body || null
  } catch (t) {
    return o.error("failed to fetch order", {
      error: t,
      orderId: e
    }), (0, a.pM)(t, {
      tags: {
        source: "OrderActionCreators_getOrder"
      },
      extra: {
        orderId: e
      }
    }), null
  }
}