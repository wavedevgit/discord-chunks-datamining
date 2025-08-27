/** Chunk was on web.js **/
/** chunk id: 929991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FL: () => a,
  a8: () => i,
  rS: () => o
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  r.Z.dispatch({
    type: "ANALYTICS_FEED_ITEM_SEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function a(e, t, n) {
  r.Z.dispatch({
    type: "ANALYTICS_FEED_ITEM_UNSEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function o(e, t) {
  r.Z.dispatch({
    type: "ANALYTICS_FEED_FLUSH",
    id: e,
    force: t
  })
}