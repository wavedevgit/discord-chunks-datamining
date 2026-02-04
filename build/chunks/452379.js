/** Chunk was on 21738 **/
/** chunk id: 452379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk73153 = require("./73153.js"),
  Chunk510595 = require("./510595.js"),
  Chunk35177 = require("./35177.js"),
  Chunk405892 = require("./405892.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk355097 = require("./355097.js");
let p = {
  init() {
    o.A[d.oD.PRELOADED_USER_SETTINGS] = s.A, o.A[d.oD.FRECENCY_AND_FAVORITES_SETTINGS] = a.A, l.h.subscribe("CONNECTION_OPEN", h), l.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", f), l.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", g), l.h.subscribe("APP_STATE_UPDATE", m)
  }
};

function h() {
  let e = u.A.getFullState(),
    t = e[d.oD.PRELOADED_USER_SETTINGS];
  t.editInfo.triggeredMigrations && c.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), i().forEach(c.Df, (t, n) => {
    let r = e[Number(n)];
    null != r.editInfo.offlineEditDataVersion && null != r.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit()
  })
}

function f(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    delaySeconds: r,
    jitter: i
  } = e;
  c.Df[n].markDirty(t, {
    delaySeconds: r,
    jitter: i
  })
}

function g(e) {
  let {
    settingsType: t
  } = e;
  c.Df[t].loadIfNecessary()
}

function m(e) {
  let {
    state: t
  } = e;
  ("inactive" === t || "background" === t) && i().forEach(c.Df, (e, t) => {
    null != u.A.getFullState()[Number(t)].editInfo.timeout && (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges())
  })
}