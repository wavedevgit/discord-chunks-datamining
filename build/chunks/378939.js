/** Chunk was on web.js **/
/** chunk id: 378939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let o = {
  setGuildFilter(e) {
    let {
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: r
    } = e;
    i.h.dispatch({
      type: "SET_RECENT_MENTIONS_FILTER",
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: r
    })
  },
  clearMentions() {
    i.h.dispatch({
      type: "CLEAR_MENTIONS"
    })
  },
  truncateMentions(e) {
    i.h.dispatch({
      type: "TRUNCATE_MENTIONS",
      size: e
    })
  },
  fetchRecentMentions(e) {
    let {
      before: t,
      limit: n = a.Ue3,
      guildId: o = null,
      roles: s = true,
      everyone: l = true,
      feature: c
    } = e;
    return i.h.dispatch({
      type: "LOAD_RECENT_MENTIONS",
      guildId: o
    }), r.Bo.get({
      url: a.Rsh.MENTIONS,
      query: {
        before: t,
        limit: n,
        guild_id: o,
        roles: s,
        everyone: l,
        feature: c
      },
      retries: 2,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      let {
        body: n
      } = e;
      i.h.dispatch({
        type: "LOAD_RECENT_MENTIONS_SUCCESS",
        messages: n,
        isAfter: null != t,
        hasMoreAfter: n.length >= a.Ue3
      })
    }, () => {
      i.h.dispatch({
        type: "LOAD_RECENT_MENTIONS_FAILURE"
      })
    })
  },
  deleteRecentMention(e) {
    r.Bo.del({
      url: a.Rsh.MENTIONS_MESSAGE_ID(e),
      retries: 2,
      oldFormErrors: true,
      rejectWithError: true
    }), i.h.dispatch({
      type: "RECENT_MENTION_DELETE",
      id: e
    })
  },
  setRecentMentionsStale() {
    i.h.dispatch({
      type: "SET_RECENT_MENTIONS_STALE"
    })
  }
}