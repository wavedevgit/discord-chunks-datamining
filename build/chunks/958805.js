/** Chunk was on web.js **/
/** chunk id: 958805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = {
  setPendingWidgets(e) {
    a.h.dispatch({
      type: "WIDGET_PENDING_SET",
      widgets: e
    })
  },
  async savePendingWidgets(e) {
    var t;
    let n = null == (t = s.default.getCurrentUser()) ? true : t.id;
    if (null == n) return;
    a.h.dispatch({
      type: "WIDGET_PENDING_SAVE_START"
    });
    let i = e.map(e => e.toSubmission());
    try {
      let e = await r.Bo.put({
        url: c.Rsh.USER_PROFILE_WIDGETS,
        body: {
          widgets: i
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      return a.h.dispatch({
        type: "WIDGET_PENDING_SAVE_SUCCESS",
        userId: n,
        widgets: e.body.widgets
      }), e.body
    } catch (e) {
      throw a.h.dispatch({
        type: "WIDGET_PENDING_SAVE_FAILURE"
      }), e
    }
  },
  clearPendingWidgets() {
    a.h.dispatch({
      type: "WIDGET_PENDING_CLEAR"
    })
  },
  async fetchSuggestedGames() {
    a.h.dispatch({
      type: "WIDGET_SUGGESTED_FETCH_START"
    });
    try {
      var e, t, n, i, s, o;
      let u = await r.Bo.get({
        url: c.Rsh.USER_PROFILE_SUGGESTED_GAMES,
        rejectWithError: true
      });
      ((null == (n = u.body) ? true : n.suggested_games) == null || (null == (i = u.body) ? true : i.suggested_wishlist_games) == null) && l.A.captureMessage("Suggested games or wishlist games not found"), a.h.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
        suggestedGamesIds: null != (e = null == (s = u.body) ? true : s.suggested_games) ? e : [],
        suggestedWishlistGamesIds: null != (t = null == (o = u.body) ? true : o.suggested_wishlist_games) ? t : []
      })
    } catch (e) {
      throw a.h.dispatch({
        type: "WIDGET_SUGGESTED_FETCH_FAILURE"
      }), l.A.captureException(e), e
    }
  },
  removeGameFromSuggestedGames(e) {
    a.h.dispatch({
      type: "WIDGET_SUGGESTED_REMOVE_GAME",
      applicationId: e
    })
  },
  notifyUnsavedWidgets() {
    o._.dispatch(c.jej.SHAKE_PROFILE_MODAL), o._.dispatch(c.jej.EMPHASIZE_NOTICE), i.OR.announce("".concat(u.intl.string(u.t.GP7JLE), " ").concat(u.intl.string(u.t.gKoO1D)))
  }
}