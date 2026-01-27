/** Chunk was on web.js **/
/** chunk id: 337095, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L5: () => d,
  TA: () => u,
  dU: () => l,
  fY: () => s,
  q$: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk181658 = require("./181658.js"),
  Chunk652215 = require("./652215.js");
let s = async (e, t) => (await r.Bo.get({
  url: o.Rsh.APPLICATION_SUBSCRIPTION_GROUP_LISTING(e, t),
  rejectWithError: false
})).body, l = async e => (await r.Bo.get({
  url: o.Rsh.GUILD_ENTITLEMENTS(e),
  query: {
    with_sku: true,
    with_application: true
  },
  rejectWithError: false
})).body, c = async e => (await r.Bo.get({
  url: o.Rsh.SUBSCRIPTION_PLAN_GROUP_LISTING(e),
  rejectWithError: false
})).body;

function u(e, t) {
  return i.h.dispatch({
    type: "APPLICATION_FETCH",
    applicationId: e
  }), r.Bo.get({
    url: o.Rsh.APPLICATION_PUBLIC(e),
    signal: t,
    rejectWithError: false
  }).then(e => (i.h.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: e.body
  }), e.body)).catch(t => (i.h.dispatch({
    type: "APPLICATION_FETCH_FAIL",
    applicationId: e
  }), Promise.reject(new a.A(t))))
}
async function d(e, t) {
  return (await r.Bo.get({
    url: o.Rsh.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS,
    query: {
      application_id: e,
      sku_id: t
    },
    rejectWithError: false
  })).body
}