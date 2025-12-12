/** Chunk was on web.js **/
/** chunk id: 235820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = {
  setGuildFilter(e) {
    let {
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: r
    } = e;
    i.Z.dispatch({
      type: "SET_RECENT_MENTIONS_FILTER",
      guildFilter: t,
      roleFilter: n,
      everyoneFilter: r
    })
  },
  clearMentions() {
    Chunk570140.Z.dispatch({
      type: "CLEAR_MENTIONS"
    })
  },
  truncateMentions(e) {
    i.Z.dispatch({
      type: "TRUNCATE_MENTIONS",
      size: e
    })
  },
  fetchRecentMentions(e) {
    let {
      before: t,
      limit: n = o.DJj,
      guildId: a = null,
      roles: s = true,
      everyone: l = true,
      feature: c
    } = e;
    return i.Z.dispatch({
      type: "LOAD_RECENT_MENTIONS",
      guildId: a
    }), r.tn.get({
      url: o.ANM.MENTIONS,
      query: {
        before: t,
        limit: n,
        guild_id: a,
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
      i.Z.dispatch({
        type: "LOAD_RECENT_MENTIONS_SUCCESS",
        messages: n,
        isAfter: null != t,
        hasMoreAfter: n.length >= o.DJj
      })
    }, () => {
      i.Z.dispatch({
        type: "LOAD_RECENT_MENTIONS_FAILURE"
      })
    })
  },
  deleteRecentMention(e) {
    r.tn.del({
      url: o.ANM.MENTIONS_MESSAGE_ID(e),
      retries: 2,
      oldFormErrors: true,
      rejectWithError: true
    }), i.Z.dispatch({
      type: "RECENT_MENTION_DELETE",
      id: e
    })
  },
  setRecentMentionsStale() {
    Chunk570140.Z.dispatch({
      type: "SET_RECENT_MENTIONS_STALE"
    })
  }
}