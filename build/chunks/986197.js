/** Chunk was on 85342 **/
/** chunk id: 986197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./35282.js");
var Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk109488 = require("./109488.js"),
  Chunk981631 = require("./981631.js");
require("./135200.js");
var Chunk388032 = require("./388032.jsx");
let f = {
  resetSuggestions: () => a.Z.dispatch({
    type: "POMELO_SUGGESTIONS_RESET"
  }),
  async fetchSuggestionsRegistration(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1500;
    a.Z.dispatch({
      type: "POMELO_SUGGESTIONS_RESET"
    });
    try {
      var n;
      let r = await i.tn.get({
        url: u.ANM.POMELO_SUGGESTIONS_UNAUTHED,
        query: null == e ? true : {
          global_name: e
        },
        timeout: t,
        rejectWithError: true,
        failImmediatelyWhenRateLimited: true
      });
      if (r.ok && (null == (n = r.body) ? true : n.username) != null) return a.Z.dispatch({
        type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
        suggestion: r.body,
        source: e
      })
    } catch (e) {
      return
    }
  },
  async fetchSuggestions(e) {
    if ((0, c.P)()) try {
      var t;
      a.Z.dispatch({
        type: "POMELO_SUGGESTIONS_FETCH",
        usernameSuggestionLoading: true
      });
      let n = await i.tn.get({
        url: u.ANM.POMELO_SUGGESTIONS,
        timeout: e,
        rejectWithError: true
      });
      if (n.ok && (null == (t = n.body) ? true : t.username) != null) return a.Z.dispatch({
        type: "POMELO_SUGGESTIONS_SUCCESS",
        suggestion: n.body
      })
    } catch (e) {
      return
    }
  },
  async attemptPomelo(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "modal",
      i = arguments.length > 2 && true !== arguments[2] && arguments[2],
      c = arguments.length > 3 && true !== arguments[3] && arguments[3],
      f = false === /^[A-Za-z0-9_.]*$/.test(e) ? d.intl.string(d.t.z7c4bP) : e.includes("..") ? d.intl.string(d.t["C7G+gr"]) : e.length < 2 || e.length > 32 ? d.intl.formatToPlainString(d.t.IpijXA, {
        maxNum: 32,
        minNum: 2
      }) : true;
    if (null != f) return s.default.track(u.rMx.POMELO_ERRORS, {
      reason: f,
      username_error: true,
      location: n,
      one_click_flow: c
    }), a.Z.dispatch({
      type: "POMELO_ATTEMPT_FAILURE",
      username: e,
      error: f
    });
    try {
      let t = await l.Z.post({
        url: i ? u.ANM.POMELO_ATTEMPT_UNAUTHED : u.ANM.POMELO_ATTEMPT,
        body: {
          username: e
        },
        trackedActionData: {
          event: r.NetworkActionNames.POMELO_ATTEMPT,
          properties: {
            requested_username: e
          }
        },
        rejectWithError: false
      });
      t.body.taken && s.default.track(u.rMx.POMELO_ERRORS, {
        reason: "already_taken",
        username_error: true,
        location: n,
        one_click_flow: c
      }), a.Z.dispatch({
        type: "POMELO_ATTEMPT_SUCCESS",
        username: e,
        taken: t.body.taken
      })
    } catch (l) {
      let r = new o.Hx(l),
        i = null != (t = r.getAnyErrorMessage()) ? t : true;
      s.default.track(u.rMx.POMELO_ERRORS, {
        reason: i,
        username_error: true,
        location: n,
        one_click_flow: c
      }), a.Z.dispatch({
        username: e,
        type: "POMELO_ATTEMPT_FAILURE",
        error: null != r.status && r.status < 500 && 401 !== r.status ? i : true,
        statusCode: r.status,
        retryAfter: r.retryAfter
      })
    }
  },
  async createPomelo(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = await l.Z.post({
        body: e,
        url: u.ANM.POMELO_CREATE,
        trackedActionData: {
          event: r.NetworkActionNames.POMELO_CREATE,
          properties: {
            one_click_flow: t
          }
        },
        rejectWithError: false
      });
    return a.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n.body
    }), n.body
  }
}