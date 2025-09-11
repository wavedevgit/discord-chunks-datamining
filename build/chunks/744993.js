/** Chunk was on 93886 **/
/** chunk id: 744993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => m,
  LG: () => h,
  NE: () => p,
  g$: () => x,
  po: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk73346 = require("./73346.js"),
  Chunk962774 = require("./962774.js"),
  Chunk675984 = require("./675984.js"),
  Chunk473682 = require("./473682.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  var t, n;
  let a = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (a) return void setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: s.kd.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3);
  let u = null != (n = null == (t = l.default.getCurrentUser()) ? true : t.isStaff) && n;
  return (0, i.Kb)({
    url: d.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(c.IU),
    query: {
      guild_id: e,
      include_unpublished_products: u,
      include_unpublished_collection: u
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, o.m)(t);
      return e[n.id] = n, e
    }, {});
    r.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function m(e) {
  setTimeout(() => {
    r.Z.dispatch({
      type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: s.qE.reduce((e, t) => (e[t.gameId] = t, e), {})
    })
  }, 5e3)
}

function x(e) {
  r.Z.dispatch({
    type: "PORTKEY_ACCEPT_TOS",
    acceptedToS: e
  })
}

function h(e, t) {
  r.Z.dispatch({
    type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}

function p(e, t, n, r) {
  return a.tn.post({
    url: d.ANM.GUILD_POWERUP_TOGGLE(e, t),
    body: {
      game_server_name: n,
      game_server_region: r
    },
    rejectWithError: true,
    oldFormErrors: true
  })
}