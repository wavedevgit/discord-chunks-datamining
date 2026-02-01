/** Chunk was on 9207 **/
/** chunk id: 200921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GY: () => s,
  U0: () => o,
  ZQ: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
async function s() {
  var e;
  let t = await r.Bo.get({
    url: l.Rsh.AUTH_SESSIONS,
    rejectWithError: false
  });
  return (null == t ? true : t.ok) && (null == (e = t.body) ? true : e.user_sessions) != null && i.h.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: t.body.user_sessions
  }), t
}

function a() {
  i.h.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: []
  })
}
async function o(e) {
  if (Array.isArray(e)) {
    if (0 === e.length) return
  } else e = [e];
  let t = await r.Bo.post({
    url: l.Rsh.AUTH_SESSIONS_LOGOUT,
    body: {
      session_id_hashes: e
    },
    rejectWithError: false
  });
  return (null == t ? true : t.ok) && i.h.dispatch({
    type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
    sessionIdHashes: e
  }), t
}