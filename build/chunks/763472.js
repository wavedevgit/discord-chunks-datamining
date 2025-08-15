/** Chunk was on web.js **/
/** chunk id: 763472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z_: () => l,
  hY: () => c,
  sd: () => u
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk647162 = require("./647162.js"),
  Chunk158776 = require("./158776.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  i.Z.dispatch({
    type: "ACTIVITY_SYNC",
    activity: e,
    userId: t
  })
}

function c(e, t) {
  (0, a.iy)(e, t).then(n => i.Z.dispatch({
    type: "ACTIVITY_PLAY",
    activity: e,
    userId: t,
    metadata: n
  })).catch(() => i.Z.dispatch({
    type: "ACTIVITY_PLAY",
    activity: e,
    userId: t
  }))
}
async function u(e, t) {
  let n = e.metadata;
  if (null != n && Object.keys(n).length > 0) return n;
  let a = o.Z.getActivityMetadata(t);
  if (null != a) return a;
  if (null == e.session_id) throw Error("null/undefined session_id");
  let {
    body: l
  } = await r.tn.get({
    url: s.ANM.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
    oldFormErrors: true,
    rejectWithError: false
  });
  return i.Z.dispatch({
    type: "ACTIVITY_METADATA_UPDATE",
    metadata: l,
    userId: t
  }), l
}