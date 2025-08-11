/** Chunk was on 56534 **/
/** chunk id: 53365, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  $J: () => I,
  He: () => s,
  av: () => p,
  df: () => E,
  hY: () => O,
  oL: () => T,
  wE: () => d,
  wZ: () => _,
  yk: () => c,
  zo: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk728345 = require("./728345.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js");
async function s(e) {
  await n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
    rejectWithError: false
  })
}
async function c(e) {
  return (await n.tn.get({
    url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
    rejectWithError: false
  })).body
}
async function d(e, t) {
  await n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
    rejectWithError: false
  })
}
async function u(e) {
  await n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
    rejectWithError: false
  })
}
async function _(e) {
  return (await n.tn.get({
    url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
    rejectWithError: false
  })).body
}
async function p(e) {
  try {
    let t = await n.tn.get({
      url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
      query: {
        nag_guild_ids: e
      },
      rejectWithError: true
    });
    i.Z.dispatch({
      type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
      eligibleGuilds: t.body.eligible_guilds
    })
  } catch (e) {}
}
async function E(e, t) {
  let r = (await n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
    body: {
      team_id: t
    },
    rejectWithError: false
  })).body;
  return null != r.application && i.Z.dispatch({
    type: "APPLICATION_FETCH_SUCCESS",
    application: r.application
  }), r
}

function O(e) {
  return n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
    rejectWithError: false
  })
}

function I(e) {
  return n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
    rejectWithError: false
  })
}
async function A(e) {
  await n.tn.post({
    url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
    body: {},
    rejectWithError: false
  })
}
async function T(e) {
  return await A(e), await a.ZP.getApplicationsForGuild(e, {
    type: l.wW.GUILD_ROLE_SUBSCRIPTIONS,
    includeTeam: true
  })
}