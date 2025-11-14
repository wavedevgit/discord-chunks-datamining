/** Chunk was on 99904 **/
/** chunk id: 905551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EY: () => _,
  NE: () => j,
  UM: () => b,
  WX: () => S,
  WY: () => f,
  _k: () => C,
  ce: () => h,
  hz: () => v,
  iX: () => g,
  mF: () => x,
  s9: () => y
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

function h(e) {
  var t, n;
  let a = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (a) return void setTimeout(() => {
    r.Z.dispatch({
      type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: s.j.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3);
  let l = null != (n = null == (t = i.default.getCurrentUser()) ? true : t.isStaff()) && n;
  return (0, o.Kb)({
    url: p.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(m.SW),
    query: {
      guild_id: e,
      include_unpublished_products: l,
      include_unpublished_collection: l
    },
    oldFormErrors: true,
    rejectWithError: false,
    retries: 2
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, d.m)(t);
      return e[n.id] = n, e
    }, {});
    r.Z.dispatch({
      type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true;
  return t ? (setTimeout(() => {
    r.Z.dispatch({
      type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: s.K.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3), Promise.resolve()) : a.tn.get({
    url: p.ANM.GAME_SERVERS(e),
    rejectWithError: true,
    retries: 2,
    signal: n
  }).then(t => {
    if (null != t.body) {
      let n = t.body.reduce((e, t) => (e[t.id] = (0, c.Z)(t), e), {});
      r.Z.dispatch({
        type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
        guildId: e,
        instances: n
      })
    }
  })
}

function g(e, t) {
  return a.tn.get({
    url: p.ANM.PRODUCT_FOR_SKU(t),
    rejectWithError: true,
    retries: 3
  }).then(n => {
    if (null != n.body) {
      var a, i, l, o;
      let s = null != (o = null == (l = n.body.tenant_metadata) || null == (i = l.guild_monetization) || null == (a = i.game_server) ? true : a.instructions.pc) ? o : [];
      r.Z.dispatch({
        type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS",
        guildId: e,
        skuId: t,
        instructions: s
      })
    }
  })
}

function f(e, t) {
  if (e) {
    var n;
    l.default.track(p.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
      user_id: null == (n = i.default.getCurrentUser()) ? true : n.id,
      provider: t
    })
  }
}

function b() {
  Chunk570140.Z.dispatch({
    type: "GAME_SERVER_REGION_PING_STATE_RESET"
  })
}

function v(e, t) {
  r.Z.dispatch({
    type: "GAME_SERVER_REGION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function j(e, t, n, r) {
  return a.tn.post({
    url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: r
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function _(e, t, n, r) {
  return a.tn.patch({
    url: p.ANM.GUILD_POWERUP_UPDATE(e, t),
    body: {
      game_server_name: r,
      sku_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function y(e, t, n) {
  return a.tn.del({
    url: p.ANM.GUILD_POWERUP_TOGGLE(e, t),
    query: {
      entitlement_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function C(e) {
  return a.tn.get({
    url: p.ANM.GAME_SERVER_REGIONS(e),
    rejectWithError: true,
    oldFormErrors: true,
    retries: 3
  }).then(e => {
    r.Z.dispatch({
      type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
      regions: e.body.map(u.Z).sort((e, t) => e.name.localeCompare(t.name))
    })
  })
}

function S(e, t) {
  return a.tn.post({
    url: p.ANM.GAME_SERVER_WAKE(e, t),
    rejectWithError: true
  }).then(t => {
    r.Z.dispatch({
      type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
      guildId: e,
      instance: (0, c.Z)(t.body)
    })
  })
}