/** Chunk was on 93886 **/
/** chunk id: 744993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EC: () => i,
  g$: () => s,
  po: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk962774 = require("./962774.js");

function l(e) {
  setTimeout(() => {
    a.Z.dispatch({
      type: "PORTKEY_FETCH_CATALOG_SUCCESS",
      guildId: e,
      catalog: r.kd.reduce((e, t) => (e[t.id] = t, e), {})
    })
  }, 5e3)
}

function i(e) {
  setTimeout(() => {
    a.Z.dispatch({
      type: "PORTKEY_FETCH_INSTANCES_SUCCESS",
      guildId: e,
      instances: r.qE.reduce((e, t) => (e[t.gameId] = t, e), {})
    })
  }, 5e3)
}

function s(e) {
  a.Z.dispatch({
    type: "PORTKEY_ACCEPT_TOS",
    acceptedToS: e
  })
}