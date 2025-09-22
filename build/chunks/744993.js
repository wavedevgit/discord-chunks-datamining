/** Chunk was on 86478 **/
/** chunk id: 744993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => x,
  NE: () => v,
  TN: () => b,
  _k: () => _,
  g$: () => f,
  po: () => p,
  s9: () => j,
  yP: () => g
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk73346 = require("./73346.js"),
  Chunk962774 = require("./962774.js"),
  Chunk101805 = require("./101805.js"),
  Chunk675984 = require("./675984.js"),
  Chunk113130 = require("./113130.js"),
  Chunk473682 = require("./473682.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  var t, n;
  let a = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (a) return void setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: o.kd.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3);
  let l = null != (n = null == (t = i.default.getCurrentUser()) ? true : t.isStaff()) && n;
  return (0, s.Kb)({
    url: h.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(m.IU),
    query: {
      guild_id: e,
      include_unpublished_products: l,
      include_unpublished_collection: l
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, d.m)(t);
      return e[n.id] = n, e
    }, {});
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? void setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: o.qE.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3) : a.tn.get({
    url: h.ANM.GAME_SERVERS(e),
    rejectWithError: true
  }).then(t => {
    if (null != t.body) {
      let n = t.body.reduce((e, t) => (e[t.id] = (0, c.Z)(t), e), {});
      r.Z.dispatch({
        type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
        guildId: e,
        instances: n
      })
    }
  })
}

function f(e, t) {
  if (e) {
    var n;
    l.default.track(h.rMx.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, {
      user_id: null == (n = i.default.getCurrentUser()) ? true : n.id,
      provider: t
    })
  }
}

function b() {
  Chunk570140.Z.dispatch({
    type: "PORTKEY_REGION_PING_STATE_RESET"
  })
}

function g(e, t) {
  r.Z.dispatch({
    type: "PORTKEY_REGION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function v(e, t, n, r) {
  return a.tn.post({
    url: h.ANM.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: r
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function j(e, t, n) {
  return a.tn.del({
    url: h.ANM.GUILD_POWERUP_TOGGLE(e, t),
    query: {
      entitlement_id: n
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}

function _(e) {
  return a.tn.get({
    url: h.ANM.GAME_SERVER_REGIONS(e),
    rejectWithError: true,
    oldFormErrors: true
  }).then(e => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_REGIONS_SUCCESS",
      regions: e.body.map(u.Z)
    })
  })
}