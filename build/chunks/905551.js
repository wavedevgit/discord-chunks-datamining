/** Chunk was on web.js **/
/** chunk id: 905551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EY: () => O,
  NE: () => y,
  UM: () => E,
  WX: () => I,
  WY: () => g,
  _k: () => S,
  ce: () => _,
  hz: () => b,
  iX: () => h,
  mF: () => m,
  s9: () => v
}), require("./642613.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk73346 = require("./73346.js"),
  Chunk602831 = require("./602831.js"),
  Chunk351721 = require("./351721.js"),
  Chunk651667 = require("./651667.js"),
  Chunk893605 = require("./893605.js"),
  Chunk619733 = require("./619733.js"),
  Chunk981631 = require("./981631.js");

function _(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (r) return void setTimeout(() => {
    i.Z.dispatch({
      type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: l.j.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3);
  let o = null != (n = null == (t = a.default.getCurrentUser()) ? true : t.isStaff()) && n;
  return (0, s.Kb)({
    url: p.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(f.SW),
    query: {
      guild_id: e,
      include_unpublished_products: o,
      include_unpublished_collection: o
    },
    oldFormErrors: true,
    rejectWithError: false,
    retries: 2
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, u.m)(t);
      return e[n.id] = n, e
    }, {});
    i.Z.dispatch({
      type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return t ? (setTimeout(() => {
    i.Z.dispatch({
      type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: l.K.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3), Promise.resolve()) : r.tn.get({
    url: p.ANM.GAME_SERVERS(e),
    rejectWithError: true,
    retries: 2,
    signal: n
  }).then(t => {
    if (null != t.body) {
      let n = t.body.reduce((e, t) => (e[t.id] = (0, c.Z)(t), e), {});
      i.Z.dispatch({
        type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
        guildId: e,
        instances: n
      })
    }
  })
}

function h(e, t) {
  return r.tn.get({
    url: p.ANM.PRODUCT_FOR_SKU(t),
    rejectWithError: true,
    retries: 3
  }).then(n => {
    if (null != n.body) {
      var r, a, o, s;
      let l = null != (s = null == (o = n.body.tenant_metadata) || null == (a = o.guild_monetization) || null == (r = a.game_server) ? true : r.instructions.pc) ? s : [];
      i.Z.dispatch({
        type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
        guildId: e,
        skuId: t,
        instructions: l
      })
    }
  })
}

function g(e, t) {
  if (e) {
    var n;
    o.default.track(p.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
      user_id: null == (n = a.default.getCurrentUser()) ? true : n.id,
      provider: t
    })
  }
}

function E() {
  Chunk570140.Z.dispatch({
    type: "GAME_SERVER_REGION_PING_STATE_RESET"
  })
}

function b(e, t) {
  i.Z.dispatch({
    type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function y(e, t, n, i) {
  return r.tn.post({
    url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: i
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function O(e, t, n, i) {
  return r.tn.patch({
    url: p.ANM.GUILD_POWERUP_UPDATE(e, t),
    body: {
      game_server_name: i,
      sku_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function v(e, t, n) {
  return r.tn.del({
    url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
    query: {
      entitlement_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function S(e) {
  return r.tn.get({
    url: p.ANM.GAME_SERVER_REGIONS(e),
    rejectWithError: true,
    oldFormErrors: true,
    retries: 3
  }).then(e => {
    i.Z.dispatch({
      type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
      regions: e.body.map(d.Z).sort((e, t) => e.name.localeCompare(t.name))
    })
  })
}

function I(e, t) {
  return r.tn.post({
    url: p.ANM.GAME_SERVER_WAKE(e, t),
    rejectWithError: true
  }).then(t => {
    i.Z.dispatch({
      type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
      guildId: e,
      instance: (0, c.Z)(t.body)
    })
  })
}