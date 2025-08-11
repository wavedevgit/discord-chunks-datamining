/** Chunk was on 85342 **/
/** chunk id: 986197, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let m = {
  resetSuggestions: () => Chunk570140.Z.dispatch({
    type: "POMELO_SUGGESTIONS_RESET"
  }),
  async fetchSuggestionsRegistration(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1500;
    a.Z.dispatch({
      type: "POMELO_SUGGESTIONS_RESET"
    });
    try {
      var r;
      let n = await i.tn.get({
        url: u.ANM.POMELO_SUGGESTIONS_UNAUTHED,
        query: null == e ? true : {
          global_name: e
        },
        timeout: t,
        rejectWithError: true,
        failImmediatelyWhenRateLimited: true
      });
      if (n.ok && (null == (r = n.body) ? true : r.username) != null) return a.Z.dispatch({
        type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
        suggestion: n.body,
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
      let r = await i.tn.get({
        url: u.ANM.POMELO_SUGGESTIONS,
        timeout: e,
        rejectWithError: true
      });
      if (r.ok && (null == (t = r.body) ? true : t.username) != null) return a.Z.dispatch({
        type: "POMELO_SUGGESTIONS_SUCCESS",
        suggestion: r.body
      })
    } catch (e) {
      return
    }
  },
  async attemptPomelo(e) {
    var t;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "modal",
      i = arguments.length > 2 && true !== arguments[2] && arguments[2],
      c = arguments.length > 3 && true !== arguments[3] && arguments[3],
      m = false === /^[A-Za-z0-9_.]*$/.test(e) ? d.intl.string(d.t.z7c4bG) : e.includes("..") ? d.intl.string(d.t["C7G+go"]) : e.length < 2 || e.length > 32 ? d.intl.formatToPlainString(d.t.IpijXF, {
        maxNum: 32,
        minNum: 2
      }) : true;
    if (null != m) return s.default.track(u.rMx.POMELO_ERRORS, {
      reason: m,
      username_error: true,
      location: r,
      one_click_flow: c
    }), a.Z.dispatch({
      type: "POMELO_ATTEMPT_FAILURE",
      username: e,
      error: m
    });
    try {
      let t = await l.Z.post({
        url: i ? u.ANM.POMELO_ATTEMPT_UNAUTHED : u.ANM.POMELO_ATTEMPT,
        body: {
          username: e
        },
        trackedActionData: {
          event: n.NetworkActionNames.POMELO_ATTEMPT,
          properties: {
            requested_username: e
          }
        },
        rejectWithError: false
      });
      t.body.taken && s.default.track(u.rMx.POMELO_ERRORS, {
        reason: "already_taken",
        username_error: true,
        location: r,
        one_click_flow: c
      }), a.Z.dispatch({
        type: "POMELO_ATTEMPT_SUCCESS",
        username: e,
        taken: t.body.taken
      })
    } catch (l) {
      let n = new o.Hx(l),
        i = null != (t = n.getAnyErrorMessage()) ? t : true;
      s.default.track(u.rMx.POMELO_ERRORS, {
        reason: i,
        username_error: true,
        location: r,
        one_click_flow: c
      }), a.Z.dispatch({
        username: e,
        type: "POMELO_ATTEMPT_FAILURE",
        error: null != n.status && n.status < 500 && 401 !== n.status ? i : true,
        statusCode: n.status,
        retryAfter: n.retryAfter
      })
    }
  },
  async createPomelo(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      r = await l.Z.post({
        body: e,
        url: u.ANM.POMELO_CREATE,
        trackedActionData: {
          event: n.NetworkActionNames.POMELO_CREATE,
          properties: {
            one_click_flow: t
          }
        },
        rejectWithError: false
      });
    return a.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: r.body
    }), r.body
  }
}