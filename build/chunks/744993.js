/** Chunk was on 93886 **/
/** chunk id: 744993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => u,
  LG: () => x,
  NE: () => h,
  g$: () => m,
  po: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk73346 = require("./73346.js"),
  Chunk962774 = require("./962774.js"),
  Chunk675984 = require("./675984.js"),
  Chunk473682 = require("./473682.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? void setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: i.kd.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3) : (0, l.Kb)({
    url: c.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(o.IU),
    query: {
      guild_id: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, s.m)(t);
      return e[n.id] = n, e
    }, {});
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function u(e) {
  setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: i.qE.reduce((e, t) => (e[t.gameId] = t, e), {})
    })
  }, 5e3)
}

function m(e) {
  r.Z.dispatch({
    type: "PORTKEY_ACCEPT_TOS",
    acceptedToS: e
  })
}

function x(e, t) {
  r.Z.dispatch({
    type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function h(e, t, n, r) {
  return a.tn.post({
    url: c.ANM.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: r
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}