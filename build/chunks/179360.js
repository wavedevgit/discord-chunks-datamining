/** Chunk was on web.js **/
/** chunk id: 179360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C0: () => u,
  W3: () => p,
  X8: () => f,
  bG: () => h,
  dG: () => _,
  pD: () => m,
  tH: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk932015 = require("./932015.js"),
  Chunk209747 = require("./209747.js"),
  Chunk78839 = require("./78839.js"),
  Chunk981631 = require("./981631.js");
async function u(e) {
  let t = (await r.tn.get({
    url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
    oldFormErrors: true,
    rejectWithError: true
  })).body.map(e => o.Z.createFromServer(e));
  return i.Z.dispatch({
    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
    guildId: e,
    appliedBoosts: t
  }), t
}
async function d() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_APPLIED_GUILD_BOOSTS,
      oldFormErrors: true,
      query: {
        paused: module
      },
      rejectWithError: true
    })).body.map(e => o.Z.createFromServer(e));
  return Chunk570140.Z.dispatch({
    type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS",
    appliedGuildBoosts: exports
  }), exports
}
async function f() {
  Chunk570140.Z.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH"
  });
  let e = (await Chunk544891.tn.get({
    url: Chunk981631.ANM.USER_GUILD_BOOST_SLOTS,
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(e => s.Z.createFromServer(e, l.Z.getSubscriptionById(e.subscription_id)));
  return Chunk570140.Z.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
    guildBoostSlots: module
  }), module
}
async function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  i.Z.dispatch({
    type: "GUILD_APPLY_BOOST_START"
  });
  try {
    let a = await r.tn.put({
        url: c.ANM.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
        body: {
          user_premium_guild_subscription_slot_ids: t,
          disable_powerup_auto_apply: n
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      s = Array.isArray(a.body) ? a.body.map(o.Z.createFromServer) : [o.Z.createFromServer(a.body)];
    return i.Z.dispatch({
      type: "GUILD_APPLY_BOOST_SUCCESS",
      appliedGuildBoost: s
    }), f(), s
  } catch (t) {
    let e = new a.zN(t);
    throw i.Z.dispatch({
      type: "GUILD_APPLY_BOOST_FAIL",
      error: e
    }), e
  }
}
async function _(e, t) {
  i.Z.dispatch({
    type: "GUILD_UNAPPLY_BOOST_START"
  });
  try {
    await r.tn.del({
      url: c.ANM.APPLIED_GUILD_BOOST(e, t),
      oldFormErrors: true,
      rejectWithError: false
    }), f()
  } catch (t) {
    let e = new a.zN(t);
    throw i.Z.dispatch({
      type: "GUILD_UNAPPLY_BOOST_FAIL",
      error: e
    }), e
  }
  i.Z.dispatch({
    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
    boostId: t
  })
}
async function m(e) {
  let t = await r.tn.post({
      url: c.ANM.USER_GUILD_BOOST_SLOT_CANCEL(e),
      oldFormErrors: true,
      rejectWithError: true
    }),
    n = s.Z.createFromServer(t.body, l.Z.getSubscriptionById(t.body.subscription_id));
  return i.Z.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}
async function h(e) {
  let t = await r.tn.post({
      url: c.ANM.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
      oldFormErrors: true,
      rejectWithError: true
    }),
    n = s.Z.createFromServer(t.body, l.Z.getSubscriptionById(t.body.subscription_id));
  return i.Z.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}