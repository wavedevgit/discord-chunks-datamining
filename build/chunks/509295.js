/** Chunk was on 7685 **/
/** chunk id: 509295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => i
});
var Chunk73153 = require("./73153.js"),
  Chunk576420 = require("./576420.js");
async function i(e) {
  let {
    tab: t,
    targetId: n,
    isFavorite: i
  } = e;
  await l.h.dispatch({
    type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
    tab: t,
    targetId: n,
    isFavorite: i,
    addedTimestampMs: i ? Date.now() : true
  }), i ? (r.Ay.getState().setActiveTab(t), r.Ay.getState().markFavoriteAdded(n)) : r.Ay.getState().clearFavoriteAdded(n)
}