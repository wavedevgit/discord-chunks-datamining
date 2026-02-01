/** Chunk was on 71447 **/
/** chunk id: 509295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk576420 = require("./576420.js");
async function l(e) {
  let {
    tab: t,
    targetId: n,
    isFavorite: l
  } = e;
  await i.h.dispatch({
    type: "OVERLAY_FRIENDS_WIDGET_SET_FAVORITE",
    tab: t,
    targetId: n,
    isFavorite: l,
    addedTimestampMs: l ? Date.now() : true
  }), l ? (r.Ay.getState().setActiveTab(t), r.Ay.getState().markFavoriteAdded(n)) : r.Ay.getState().clearFavoriteAdded(n)
}