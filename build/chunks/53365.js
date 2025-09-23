/** Chunk was on 31835 **/
/** chunk id: 53365, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  $J: () => O,
  He: () => T,
  av: () => u,
  df: () => N,
  hY: () => s,
  oL: () => R,
  wE: () => l,
  wZ: () => _,
  yk: () => c,
  zo: () => A
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk728345 = require("./728345.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js");
async function T(t) {
  await i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
    rejectWithError: false
  })
}
async function c(t) {
  return (await i.tn.get({
    url: E.ANM.CREATOR_MONETIZATION_ELIGIBILITY(t),
    rejectWithError: false
  })).body
}
async function l(t, r) {
  await i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r),
    rejectWithError: false
  })
}
async function A(t) {
  await i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
    rejectWithError: false
  })
}
async function _(t) {
  return (await i.tn.get({
    url: E.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
    rejectWithError: false
  })).body
}
async function u(t) {
  try {
    let r = await i.tn.get({
      url: E.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: t
      },
      rejectWithError: true
    });
    e.Z.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: r.body.eligible_guilds
    })
  } catch (t) {}
}
async function N(t, r) {
  let n = (await i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
    body: {
      team_id: r
    },
    rejectWithError: false
  })).body;
  return null != n.application && e.Z.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: n.application
  }), n
}

function s(t) {
  return i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
    rejectWithError: false
  })
}

function O(t) {
  return i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
    rejectWithError: false
  })
}
async function I(t) {
  await i.tn.post({
    url: E.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
    body: {},
    rejectWithError: false
  })
}
async function R(t) {
  return await I(t), await a.ZP.getApplicationsForGuild(t, {
    type: o.wW.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: true
  })
}