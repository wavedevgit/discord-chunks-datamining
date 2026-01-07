/** Chunk was on web.js **/
/** chunk id: 43015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Z: () => s,
  L$: () => l,
  fw: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o() {
  var e;
  let t = await r.tn.get({
    url: a.ANM.AUTH_SESSIONS,
    rejectWithError: false
  });
  return (null == t ? true : t.ok) && (null == (e = t.body) ? true : e.user_sessions) != null && i.Z.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: t.body.user_sessions
  }), t
}

function s() {
  i.Z.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: []
  })
}
async function l(e) {
  if (Array.isArray(e)) {
    if (0 === e.length) return
  } else e = [e];
  let t = await r.tn.post({
    url: a.ANM.AUTH_SESSIONS_LOGOUT,
    body: {
      session_id_hashes: e
    },
    rejectWithError: false
  });
  return (null == t ? true : t.ok) && i.Z.dispatch({
    type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
    sessionIdHashes: e
  }), t
}