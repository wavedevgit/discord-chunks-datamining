/** Chunk was on 1272 **/
/** chunk id: 507468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk78687 = require("./78687.js"),
  Chunk315341 = require("./315341.js"),
  Chunk262847 = require("./262847.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk526761 = require("./526761.js");
let p = {
  init() {
    s.Z[d.yP.PRELOADED_USER_SETTINGS] = o.Z, s.Z[d.yP.FRECENCY_AND_FAVORITES_SETTINGS] = a.Z, l.Z.subscribe("CONNECTION_OPEN", f), l.Z.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", g), l.Z.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", m), l.Z.subscribe("APP_STATE_UPDATE", h)
  }
};

function f() {
  let e = u.Z.getFullState(),
    t = e[d.yP.PRELOADED_USER_SETTINGS];
  t.editInfo.triggeredMigrations && c.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), i().forEach(c.aj, (t, n) => {
    let r = e[Number(n)];
    null != r.editInfo.offlineEditDataVersion && null != r.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit()
  })
}

function g(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    delaySeconds: r,
    jitter: i
  } = e;
  c.aj[n].markDirty(t, {
    delaySeconds: r,
    jitter: i
  })
}

function m(e) {
  let {
    settingsType: t
  } = e;
  c.aj[t].loadIfNecessary()
}

function h(e) {
  let {
    state: t
  } = e;
  ("inactive" === t || "background" === t) && i().forEach(c.aj, (e, t) => {
    null != u.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges())
  })
}