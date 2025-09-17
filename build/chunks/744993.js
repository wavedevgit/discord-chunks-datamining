/** Chunk was on 93886 **/
/** chunk id: 744993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => p,
  F4: () => b,
  LG: () => f,
  NE: () => g,
  _k: () => j,
  g$: () => x,
  po: () => h,
  s9: () => v
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk73346 = require("./73346.js"),
  Chunk962774 = require("./962774.js"),
  Chunk101805 = require("./101805.js"),
  Chunk675984 = require("./675984.js"),
  Chunk113130 = require("./113130.js"),
  Chunk473682 = require("./473682.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  var t, n;
  let a = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (a) return void setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: s.kd.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3);
  let o = null != (n = null == (t = l.default.getCurrentUser()) ? true : t.isStaff()) && n;
  return (0, i.Kb)({
    url: m.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(u.IU),
    query: {
      guild_id: e,
      include_unpublished_products: o,
      include_unpublished_collection: o
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, c.m)(t);
      return e[n.id] = n, e
    }, {});
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? void setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: s.qE.reduce((e, t) => (e[t.gameId] = t, e), {})
    })
  }, 5e3) : a.tn.get({
    url: m.ANM.GAME_SERVERS(e),
    rejectWithError: true
  }).then(t => {
    if (null != t.body) {
      let n = t.body.reduce((e, t) => (e[t.gameId] = (0, o.Z)(t), e), {});
      r.Z.dispatch({
        type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
        guildId: e,
        instances: n
      })
    }
  })
}

function x(e) {
  r.Z.dispatch({
    type: "PORTKEY_ACCEPT_TOS",
    acceptedToS: e
  })
}

function b() {
  Chunk570140.Z.dispatch({
    type: "PORTKEY_LOCATION_PING_STATE_RESET"
  })
}

function f(e, t) {
  r.Z.dispatch({
    type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function g(e, t, n, r) {
  return a.tn.post({
    url: m.ANM.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: r
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function v(e, t, n) {
  return a.tn.del({
    url: m.ANM.GUILD_POWERUP_TOGGLE(e, t),
    query: {
      entitlement_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function j(e) {
  return a.tn.get({
    url: m.ANM.GAME_SERVER_REGIONS(e),
    rejectWithError: true,
    oldFormErrors: true
  }).then(e => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_REGIONS_SUCCESS",
      regions: e.body.map(d.Z)
    })
  })
}