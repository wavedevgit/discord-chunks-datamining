/** Chunk was on web.js **/
/** chunk id: 592183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let d = {
  setPendingWidgets(e) {
    a.Z.dispatch({
      type: "WIDGET_PENDING_SET",
      widgets: e
    })
  },
  async savePendingWidgets(e) {
    var t;
    let n = null == (t = o.default.getCurrentUser()) ? true : t.id;
    if (null == n) return;
    a.Z.dispatch({
      type: "WIDGET_PENDING_SAVE_START"
    });
    let i = e.map(e => e.toSubmission());
    try {
      let e = await r.tn.put({
        url: c.ANM.USER_PROFILE_WIDGETS,
        body: {
          widgets: i
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      return a.Z.dispatch({
        type: "WIDGET_PENDING_SAVE_SUCCESS",
        userId: n,
        widgets: e.body.widgets
      }), e.body
    } catch (e) {
      throw a.Z.dispatch({
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
      var e, t, n, i, o, s;
      let u = await Chunk544891.tn.get({
        url: Chunk981631.ANM.USER_PROFILE_SUGGESTED_GAMES,
        rejectWithError: true
      });
      ((null == (e = Chunk388032.body) ? true : module.suggested_games) == null || (null == (t = Chunk388032.body) ? true : exports.suggested_wishlist_games) == null) && Chunk960048.Z.captureMessage("Suggested games or wishlist games not found"), Chunk570140.Z.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
        suggestedGamesIds: null != (o = null == (n = Chunk388032.body) ? true : require.suggested_games) ? Chunk594174 : [],
        suggestedWishlistGamesIds: null != (s = null == (i = Chunk388032.body) ? true : Chunk780384.suggested_wishlist_games) ? Chunk585483 : []
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_FAILURE"
      }), Chunk960048.Z.captureException(module), module
    }
  },
  removeGameFromSuggestedGames(e) {
    a.Z.dispatch({
      type: "WIDGET_SUGGESTED_REMOVE_GAME",
      applicationId: e
    })
  },
  notifyPendingWidgets() {
    Chunk585483.S.dispatch(Chunk981631.CkL.SHAKE_PROFILE_MODAL), Chunk585483.S.dispatch(Chunk981631.CkL.EMPHASIZE_NOTICE), Chunk780384.uv.announce("".concat(Chunk388032.intl.string(Chunk388032.t.GP7JLE), " ").concat(Chunk388032.intl.string(Chunk388032.t.gKoO1D)))
  }
}