/** Chunk was on web.js **/
/** chunk id: 592183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk960048 = require("./960048.js"),
  Chunk86419 = require("./86419.js"),
  Chunk981631 = require("./981631.js");
let u = {
  setPendingWidgets(e) {
    i.Z.dispatch({
      type: "WIDGET_PENDING_SET",
      widgets: e
    })
  },
  async savePendingWidgets(e) {
    var t;
    let n = null == (t = o.default.getCurrentUser()) ? true : t.id;
    if (null == n) return;
    i.Z.dispatch({
      type: "WIDGET_PENDING_SAVE_START"
    });
    let a = e.map(l.vH);
    try {
      let e = await r.tn.put({
        url: c.ANM.USER_PROFILE_WIDGETS,
        body: {
          widgets: a
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      return i.Z.dispatch({
        type: "WIDGET_PENDING_SAVE_SUCCESS",
        userId: n,
        widgets: e.body.widgets
      }), e.body
    } catch (e) {
      throw i.Z.dispatch({
        type: "WIDGET_PENDING_SAVE_FAILURE"
      }), e
    }
  },
  clearPendingWidgets() {
    Chunk570140.Z.dispatch({
      type: "WIDGET_PENDING_CLEAR"
    })
  },
  async fetchSuggestedGames() {
    Chunk570140.Z.dispatch({
      type: "WIDGET_SUGGESTED_FETCH_START"
    });
    try {
      var e, t, n, o, a, l;
      let u = await Chunk544891.tn.get({
        url: Chunk981631.ANM.USER_PROFILE_SUGGESTED_GAMES,
        rejectWithError: true
      });
      ((null == (e = u.body) ? true : module.suggested_games) == null || (null == (t = u.body) ? true : exports.suggested_wishlist_games) == null) && Chunk960048.Z.captureMessage("Suggested games or wishlist games not found"), Chunk570140.Z.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
        suggestedGamesIds: null != (a = null == (n = u.body) ? true : require.suggested_games) ? Chunk585483 : [],
        suggestedWishlistGamesIds: null != (l = null == (o = u.body) ? true : Chunk594174.suggested_wishlist_games) ? Chunk86419 : []
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_FAILURE"
      }), Chunk960048.Z.captureException(module), module
    }
  },
  removeGameFromSuggestedGames(e) {
    i.Z.dispatch({
      type: "WIDGET_SUGGESTED_REMOVE_GAME",
      applicationId: e
    })
  },
  notifyPendingWidgets() {
    Chunk585483.S.dispatch(Chunk981631.CkL.SHAKE_PROFILE_MODAL), Chunk585483.S.dispatch(Chunk981631.CkL.EMPHASIZE_NOTICE)
  }
}