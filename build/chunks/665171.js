/** Chunk was on web.js **/
/** chunk id: 665171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jr: () => A,
  KH: () => E,
  QK: () => y,
  Wp: () => g,
  as: () => I,
  cq: () => h,
  e_: () => v,
  jL: () => b,
  pj: () => O,
  tT: () => m,
  z9: () => _
}), require("./638769.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk371794 = require("./371794.js"),
  Chunk79133 = require("./79133.js"),
  Chunk532555 = require("./532555.js"),
  Chunk627072 = require("./627072.js"),
  Chunk760321 = require("./760321.js"),
  Chunk800007 = require("./800007.js"),
  Chunk652215 = require("./652215.js");

function _(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (r) return void setTimeout(() => {
    i.h.dispatch({
      type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: l.q.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3);
  let s = null != (t = null == (n = a.default.getCurrentUser()) ? true : n.isStaff()) && t;
  return (0, o.aP)({
    url: p.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(f.q4),
    query: {
      guild_id: e,
      include_unpublished_products: s,
      include_unpublished_collection: s
    },
    oldFormErrors: true,
    rejectWithError: false,
    retries: 2
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, u.o)(t);
      return e[n.id] = n, e
    }, {});
    i.h.dispatch({
      type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return t ? (setTimeout(() => {
    i.h.dispatch({
      type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: l.L.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3), Promise.resolve()) : r.Bo.get({
    url: p.Rsh.GAME_SERVERS(e),
    rejectWithError: true,
    retries: 2,
    signal: n
  }).then(t => {
    if (null != t.body) {
      let n = t.body.reduce((e, t) => (e[t.id] = (0, c.A)(t), e), {});
      i.h.dispatch({
        type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
        guildId: e,
        instances: n
      })
    }
  })
}

function m(e, t) {
  return r.Bo.get({
    url: p.Rsh.PRODUCT_FOR_SKU(t),
    rejectWithError: true,
    retries: 3
  }).then(n => {
    if (null != n.body) {
      var r, a, s, o;
      let l = null != (r = null == (o = n.body.tenant_metadata) || null == (s = o.guild_monetization) || null == (a = s.game_server) ? true : a.instructions.pc) ? r : [];
      i.h.dispatch({
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
    s.default.track(p.HAw.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
      user_id: null == (n = a.default.getCurrentUser()) ? true : n.id,
      provider: t
    })
  }
}

function E() {
  i.h.dispatch({
    type: "GAME_SERVER_REGION_PING_STATE_RESET"
  })
}

function y(e, t) {
  i.h.dispatch({
    type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function b(e, t, n, i) {
  return r.Bo.post({
    url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: i
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function O(e, t, n, i) {
  return r.Bo.patch({
    url: p.Rsh.GUILD_POWERUP_UPDATE(e, t),
    body: {
      game_server_name: i,
      sku_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function v(e, t, n) {
  return r.Bo.del({
    url: p.Rsh.GUILD_POWERUP_TOGGLE(e, t),
    query: {
      entitlement_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function A(e) {
  return r.Bo.get({
    url: p.Rsh.GAME_SERVER_REGIONS(e),
    rejectWithError: true,
    oldFormErrors: true,
    retries: 3
  }).then(e => {
    i.h.dispatch({
      type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
      regions: e.body.map(d.A).sort((e, t) => e.name.localeCompare(t.name))
    })
  })
}

function I(e, t) {
  return r.Bo.post({
    url: p.Rsh.GAME_SERVER_WAKE(e, t),
    rejectWithError: true
  }).then(t => {
    i.h.dispatch({
      type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
      guildId: e,
      instance: (0, c.A)(t.body)
    })
  })
}