/** Chunk was on web.js **/
/** chunk id: 923408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CD: () => f,
  Ey: () => m,
  HJ: () => h,
  VA: () => p,
  VU: () => u,
  jZ: () => _,
  tO: () => d
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk563173 = require("./563173.js"),
  Chunk545934 = require("./545934.js"),
  Chunk166403 = require("./166403.js"),
  Chunk652215 = require("./652215.js");
async function u(e) {
  let t = (await r.Bo.get({
    url: c.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
    oldFormErrors: true,
    rejectWithError: true
  })).body.map(e => s.A.createFromServer(e));
  return i.h.dispatch({
    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
    guildId: e,
    appliedBoosts: t
  }), t
}
async function d() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = (await r.Bo.get({
      url: c.Rsh.USER_APPLIED_GUILD_BOOSTS,
      oldFormErrors: true,
      query: {
        paused: e
      },
      rejectWithError: true
    })).body.map(e => s.A.createFromServer(e));
  return i.h.dispatch({
    type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS",
    appliedGuildBoosts: t
  }), t
}
async function f() {
  i.h.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH"
  });
  let e = (await r.Bo.get({
    url: c.Rsh.USER_GUILD_BOOST_SLOTS,
    oldFormErrors: true,
    rejectWithError: false
  })).body.map(e => o.A.createFromServer(e, l.A.getSubscriptionById(e.subscription_id)));
  return i.h.dispatch({
    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
    guildBoostSlots: e
  }), e
}
async function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  i.h.dispatch({
    type: "GUILD_APPLY_BOOST_START"
  });
  try {
    let a = await r.Bo.put({
        url: c.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
        body: {
          user_premium_guild_subscription_slot_ids: t,
          disable_powerup_auto_apply: n
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      o = Array.isArray(a.body) ? a.body.map(s.A.createFromServer) : [s.A.createFromServer(a.body)];
    return i.h.dispatch({
      type: "GUILD_APPLY_BOOST_SUCCESS",
      appliedGuildBoost: o
    }), f(), o
  } catch (t) {
    let e = new a.ex(t);
    throw i.h.dispatch({
      type: "GUILD_APPLY_BOOST_FAIL",
      error: e
    }), e
  }
}
async function _(e, t) {
  i.h.dispatch({
    type: "GUILD_UNAPPLY_BOOST_START"
  });
  try {
    await r.Bo.del({
      url: c.Rsh.APPLIED_GUILD_BOOST(e, t),
      oldFormErrors: true,
      rejectWithError: false
    }), f()
  } catch (t) {
    let e = new a.ex(t);
    throw i.h.dispatch({
      type: "GUILD_UNAPPLY_BOOST_FAIL",
      error: e
    }), e
  }
  i.h.dispatch({
    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
    boostId: t
  })
}
async function h(e) {
  let t = await r.Bo.post({
      url: c.Rsh.USER_GUILD_BOOST_SLOT_CANCEL(e),
      oldFormErrors: true,
      rejectWithError: true
    }),
    n = o.A.createFromServer(t.body, l.A.getSubscriptionById(t.body.subscription_id));
  return i.h.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}
async function m(e) {
  let t = await r.Bo.post({
      url: c.Rsh.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
      oldFormErrors: true,
      rejectWithError: true
    }),
    n = o.A.createFromServer(t.body, l.A.getSubscriptionById(t.body.subscription_id));
  return i.h.dispatch({
    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
    guildBoostSlot: n
  }), n
}