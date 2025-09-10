/** Chunk was on 93886 **/
/** chunk id: 744993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => d,
  LG: () => m,
  g$: () => u,
  po: () => c
});
var Chunk570140 = require("./570140.js"),
  Chunk73346 = require("./73346.js"),
  Chunk962774 = require("./962774.js"),
  Chunk675984 = require("./675984.js"),
  Chunk473682 = require("./473682.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return t ? void setTimeout(() => {
    a.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: l.kd.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3) : (0, r.Kb)({
    url: o.ANM.COLLECTION_PUBLISHED_LISTINGS_SKU(s.IU),
    query: {
      guild_id: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = t.body.products.reduce((e, t) => {
      let n = (0, i.m)(t);
      return e[n.id] = n, e
    }, {});
    a.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: n
    })
  })
}

function d(e) {
  setTimeout(() => {
    a.Z.dispatch({
      type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: l.qE.reduce((e, t) => (e[t.gameId] = t, e), {})
    })
  }, 5e3)
}

function u(e) {
  a.Z.dispatch({
    type: "PORTKEY_ACCEPT_TOS",
    acceptedToS: e
  })
}

function m(e, t) {
  a.Z.dispatch({
    type: "PORTKEY_LOCATION_PING_STATE_UPDATE",
    pingUrl: e,
    state: t
  })
}