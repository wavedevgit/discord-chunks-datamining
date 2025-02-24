/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  FL: () => o,
  a8: () => i,
  rS: () => a
});
var r = n(570140);

function i(e, t, n) {
  r.Z.dispatch({
    type: "ANALYTICS_FEED_ITEM_SEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function o(e, t, n) {
  r.Z.dispatch({
    type: "ANALYTICS_FEED_ITEM_UNSEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function a(e, t) {
  r.Z.dispatch({
    type: "ANALYTICS_FEED_FLUSH",
    id: e,
    force: t
  })
}