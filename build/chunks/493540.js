/** Chunk was on 91826 **/
/** chunk id: 493540, original params: t,r,i (module,exports,require) **/
require.d(exports, {
  Bo: () => l,
  DP: () => s,
  KW: () => u,
  P: () => R,
  Y7: () => A,
  _8: () => _,
  gO: () => T,
  im: () => O,
  jh: () => c,
  ms: () => C
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk627363 = require("./627363.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js");
async function T(t) {
  await e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
    rejectWithError: false
  })
}
async function c(t) {
  return (await e.Bo.get({
    url: o.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(t),
    rejectWithError: false
  })).body
}
async function s(t, r) {
  await e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r),
    rejectWithError: false
  })
}
async function l(t) {
  await e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
    rejectWithError: false
  })
}
async function R(t) {
  return (await e.Bo.get({
    url: o.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
    rejectWithError: false
  })).body
}
async function _(t) {
  try {
    let r = await e.Bo.get({
      url: o.Rsh.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: t
      },
      rejectWithError: true
    });
    n.h.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: r.body.eligible_guilds
    })
  } catch (t) {}
}
async function O(t, r) {
  let i = (await e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
    body: {
      team_id: r
    },
    rejectWithError: false
  })).body;
  return null != i.application && n.h.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: i.application
  }), i
}

function u(t) {
  return e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
    rejectWithError: false
  })
}

function A(t) {
  return e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
    rejectWithError: false
  })
}
async function I(t) {
  await e.Bo.post({
    url: o.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
    body: {},
    rejectWithError: false
  })
}
async function C(t) {
  return await I(t), await a.Ay.getApplicationsForGuild(t, {
    type: E.S7.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: true
  })
}