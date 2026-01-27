/** Chunk was on 86142 **/
/** chunk id: 32120, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./747238.js");
var Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk954571 = require("./954571.js"),
  Chunk499785 = require("./499785.js"),
  Chunk916882 = require("./916882.js"),
  Chunk652215 = require("./652215.js");
require("./574454.js");
var Chunk985018 = require("./985018.jsx");
let h = {
  resetSuggestions: () => s.h.dispatch({
    type: "POMELO_SUGGESTIONS_RESET"
  }),
  async fetchSuggestionsRegistration(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1500;
    s.h.dispatch({
      type: "POMELO_SUGGESTIONS_RESET"
    });
    try {
      var n;
      let r = await i.Bo.get({
        url: u.Rsh.POMELO_SUGGESTIONS_UNAUTHED,
        query: null == e ? true : {
          global_name: e
        },
        timeout: t,
        rejectWithError: true,
        failImmediatelyWhenRateLimited: true
      });
      if (r.ok && (null == (n = r.body) ? true : n.username) != null) return s.h.dispatch({
        type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
        suggestion: r.body,
        source: e
      })
    } catch (e) {
      return
    }
  },
  async fetchSuggestions(e) {
    if ((0, c.E)()) try {
      var t;
      s.h.dispatch({
        type: "POMELO_SUGGESTIONS_FETCH",
        usernameSuggestionLoading: true
      });
      let n = await i.Bo.get({
        url: u.Rsh.POMELO_SUGGESTIONS,
        timeout: e,
        rejectWithError: true
      });
      if (n.ok && (null == (t = n.body) ? true : t.username) != null) return s.h.dispatch({
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
      h = false === /^[A-Za-z0-9_.]*$/.test(e) ? d.intl.string(d.t.z7c4bP) : e.includes("..") ? d.intl.string(d.t["C7G+gr"]) : e.length < 2 || e.length > 32 ? d.intl.formatToPlainString(d.t.IpijXA, {
        maxNum: 32,
        minNum: 2
      }) : true;
    if (null != h) return a.default.track(u.HAw.POMELO_ERRORS, {
      reason: h,
      username_error: true,
      location: n,
      one_click_flow: c
    }), s.h.dispatch({
      type: "POMELO_ATTEMPT_FAILURE",
      username: e,
      error: h
    });
    try {
      let t = await o.A.post({
        url: i ? u.Rsh.POMELO_ATTEMPT_UNAUTHED : u.Rsh.POMELO_ATTEMPT,
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
      t.body.taken && a.default.track(u.HAw.POMELO_ERRORS, {
        reason: "already_taken",
        username_error: true,
        location: n,
        one_click_flow: c
      }), s.h.dispatch({
        type: "POMELO_ATTEMPT_SUCCESS",
        username: e,
        taken: t.body.taken
      })
    } catch (o) {
      let r = new l.LG(o),
        i = null != (t = r.getAnyErrorMessage()) ? t : true;
      a.default.track(u.HAw.POMELO_ERRORS, {
        reason: i,
        username_error: true,
        location: n,
        one_click_flow: c
      }), s.h.dispatch({
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
      n = await o.A.post({
        body: e,
        url: u.Rsh.POMELO_CREATE,
        trackedActionData: {
          event: r.NetworkActionNames.POMELO_CREATE,
          properties: {
            one_click_flow: t
          }
        },
        rejectWithError: false
      });
    return s.h.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n.body
    }), n.body
  }
}