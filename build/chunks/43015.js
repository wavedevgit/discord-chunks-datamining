/** Chunk was on 7384 **/
/** chunk id: 43015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Z: () => l,
  L$: () => o,
  fw: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function a() {
  var e;
  let t = await Chunk544891.tn.get({
    url: Chunk981631.ANM.AUTH_SESSIONS,
    rejectWithError: false
  });
  return (null == exports ? true : exports.ok) && (null == (e = exports.body) ? true : module.user_sessions) != null && Chunk570140.Z.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: exports.body.user_sessions
  }), exports
}

function l() {
  Chunk570140.Z.dispatch({
    type: "FETCH_AUTH_SESSIONS_SUCCESS",
    sessions: []
  })
}
async function o(e) {
  if (Array.isArray(e)) {
    if (0 === e.length) return
  } else e = [e];
  let t = await i.tn.post({
    url: s.ANM.AUTH_SESSIONS_LOGOUT,
    body: {
      session_id_hashes: e
    },
    rejectWithError: false
  });
  return (null == t ? true : t.ok) && r.Z.dispatch({
    type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
    sessionIdHashes: e
  }), t
}