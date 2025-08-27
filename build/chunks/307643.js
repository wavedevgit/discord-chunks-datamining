/** Chunk was on web.js **/
/** chunk id: 307643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GF: () => l,
  UM: () => u,
  a_: () => c,
  jz: () => s,
  tn: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk981631 = require("./981631.js");
let s = async (e, t) => (await r.tn.get({
  url: o.ANM.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t),
  rejectWithError: false
})).body, l = async e => (await r.tn.get({
  url: o.ANM.GUILD_ENTITLEMENTS(e),
  query: {
    with_sku: true,
    with_application: true
  },
  rejectWithError: false
})).body, c = async e => (await r.tn.get({
  url: o.ANM.SUBSCRIPTION_PLAN_GROUP_LISTING(e),
  rejectWithError: false
})).body;

function u(e, t) {
  return i.Z.dispatch({
    type: "APPLICATION_FETCH",
    applicationId: e
  }), r.tn.get({
    url: o.ANM.APPLICATION_PUBLIC(e),
    signal: t,
    rejectWithError: false
  }).then(e => (i.Z.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: e.body
  }), e.body)).catch(t => (i.Z.dispatch({
    type: "APPLICATION_FETCH_FAIL",
    applicationId: e
  }), Promise.reject(new a.Z(t))))
}
async function d(e, t) {
  return (await r.tn.get({
    url: o.ANM.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
    query: {
      application_id: e,
      sku_id: t
    },
    rejectWithError: false
  })).body
}