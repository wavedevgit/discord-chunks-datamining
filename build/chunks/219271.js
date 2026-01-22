/** Chunk was on web.js **/
/** chunk id: 219271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk153488 = require("./153488.js"),
  Chunk318295 = require("./318295.js"),
  Chunk21119 = require("./21119.js"),
  Chunk652215 = require("./652215.js");

function c() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  return o.A.shouldFetch() && a.A.hasConsented(l.YAq.PERSONALIZATION) ? (i.h.dispatch({
    type: "LOAD_USER_AFFINITIES_V2"
  }), r.Bo.get({
    url: l.Rsh.USER_AFFINITIES_V2,
    retries: 3 * !!e,
    oldFormErrors: true,
    rejectWithError: false,
    query: {
      user_flags: s.b.RECENTLY_RETURNED
    }
  }).then(e => {
    var t;
    let {
      body: n
    } = e;
    i.h.dispatch({
      type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
      affineUsers: n.user_affinities.map(e => {
        var t, n, r, i, a, s, o, l;
        return {
          otherUserId: e.other_user_id,
          userSegment: e.user_segment,
          otherUserSegment: e.other_user_segment,
          isFriend: e.is_friend,
          dmProbability: null != (t = e.dm_probability) ? t : 0,
          dmRank: null != (n = e.dm_rank) ? n : 0,
          vcProbability: null != (r = e.vc_probability) ? r : 0,
          vcRank: null != (i = e.vc_rank) ? i : 0,
          serverMessageProbability: null != (a = e.server_message_probability) ? a : 0,
          serverMessageRank: null != (s = e.server_message_rank) ? s : 0,
          communicationProbability: null != (o = e.communication_probability) ? o : 0,
          communicationRank: null != (l = e.communication_rank) ? l : 0
        }
      }),
      userFlags: null != (t = n.user_flags) ? t : {}
    })
  }, () => {
    i.h.dispatch({
      type: "LOAD_USER_AFFINITIES_V2_FAILURE"
    })
  })) : Promise.resolve()
}