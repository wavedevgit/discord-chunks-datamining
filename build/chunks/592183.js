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
    a.Z.dispatch({
      type: "WIDGET_PENDING_CLEAR"
    })
  },
  async fetchSuggestedGames() {
    a.Z.dispatch({
      type: "WIDGET_SUGGESTED_FETCH_START"
    });
    try {
      var e, t, n, i, o, s;
      let u = await r.tn.get({
        url: c.ANM.USER_PROFILE_SUGGESTED_GAMES,
        rejectWithError: true
      });
      ((null == (e = u.body) ? true : e.suggested_games) == null || (null == (t = u.body) ? true : t.suggested_wishlist_games) == null) && l.Z.captureMessage("Suggested games or wishlist games not found"), a.Z.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
        suggestedGamesIds: null != (o = null == (n = u.body) ? true : n.suggested_games) ? o : [],
        suggestedWishlistGamesIds: null != (s = null == (i = u.body) ? true : i.suggested_wishlist_games) ? s : []
      })
    } catch (e) {
      throw a.Z.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_FAILURE"
      }), l.Z.captureException(e), e
    }
  },
  removeGameFromSuggestedGames(e) {
    a.Z.dispatch({
      type: "WIDGET_SUGGESTED_REMOVE_GAME",
      applicationId: e
    })
  },
  notifyUnsavedWidgets() {
    s.S.dispatch(c.CkL.SHAKE_PROFILE_MODAL), s.S.dispatch(c.CkL.EMPHASIZE_NOTICE), i.uv.announce("".concat(u.intl.string(u.t.GP7JLE), " ").concat(u.intl.string(u.t.gKoO1D)))
  }
}