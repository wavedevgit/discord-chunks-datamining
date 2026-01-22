/** Chunk was on web.js **/
/** chunk id: 729937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OH: () => l,
  ZH: () => c,
  yb: () => u
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk981616 = require("./981616.js"),
  Chunk290863 = require("./290863.js"),
  Chunk652215 = require("./652215.js");

function l(e, t) {
  i.h.dispatch({
    type: "ACTIVITY_SYNC",
    activity: e,
    userId: t
  })
}

function c(e, t) {
  (0, a.LI)(e, t).then(n => i.h.dispatch({
    type: "ACTIVITY_PLAY",
    activity: e,
    userId: t,
    metadata: n
  })).catch(() => i.h.dispatch({
    type: "ACTIVITY_PLAY",
    activity: e,
    userId: t
  }))
}
async function u(e, t) {
  let n = e.metadata;
  if (null != n && Object.keys(n).length > 0) return n;
  let a = s.A.getActivityMetadata(t);
  if (null != a) return a;
  if (null == e.session_id) throw Error("null/undefined session_id");
  let {
    body: l
  } = await r.Bo.get({
    url: o.Rsh.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
    oldFormErrors: true,
    rejectWithError: false
  });
  return i.h.dispatch({
    type: "ACTIVITY_METADATA_UPDATE",
    metadata: l,
    userId: t
  }), l
}