/** Chunk was on web.js **/
/** chunk id: 617617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => x
});
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk803805 = require("./803805.js"),
  Chunk873298 = require("./873298.js"),
  Chunk335871 = require("./335871.js"),
  Chunk73153 = require("./73153.js"),
  Chunk405892 = require("./405892.js"),
  Chunk761821 = require("./761821.js"),
  Chunk355097 = require("./355097.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let E = {
    ProtoClass: Chunk873298.nT,
    proto: Chunk873298.nT.create(),
    lazyLoaded: false,
    editInfo: (0, Chunk355097.O9)()
  },
  y = {
    ProtoClass: Chunk803805.aw,
    proto: Chunk803805.aw.create(),
    lazyLoaded: true,
    editInfo: (0, Chunk355097.O9)()
  },
  b = {
    [Chunk355097.oD.PRELOADED_USER_SETTINGS]: E,
    [Chunk355097.oD.FRECENCY_AND_FAVORITES_SETTINGS]: y
  },
  O = false;

function v(e) {
  let {
    userSettingsProto: t
  } = e;
  null != t && (E.proto = t, a()("string" != typeof E.proto, "UserSettingsProto cannot be a string"));
  let {
    proto: n,
    isDirty: r,
    cleanupFuncs: i
  } = (0, _.vI)(E.proto, p.A[h.oD.PRELOADED_USER_SETTINGS]);
  r && T(E), E.proto = n, a()("string" != typeof E.proto, "UserSettingsProto cannot be a string"), E.editInfo.triggeredMigrations = r, E.editInfo.cleanupFuncs = i, E.editInfo.loaded = true, Object.values(b).forEach(e => {
    e.lazyLoaded && (e.editInfo.loaded = false, e.editInfo.loading = false)
  }), S()
}

function A() {
  S()
}

function I() {
  S(), Object.values(b).forEach(e => {
    e.proto = e.ProtoClass.create(), e.editInfo = (0, h.O9)()
  })
}

function S() {
  Object.values(b).forEach(e => {
    if (null != e.editInfo.timeout) {
      var t, n;
      clearTimeout(e.editInfo.timeout), e.editInfo.timeout = true, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = false, e.editInfo.offlineEditDataVersion = null != (t = null == (n = e.proto.versions) ? true : n.dataVersion) ? t : 0
    }
  })
}

function T(e) {
  null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, h.O9)()
}

function C(e) {
  let {
    userSettingsProto: t
  } = e;
  E.proto = (0, _.Gd)(t), a()("string" != typeof E.proto, "UserSettingsProto cannot be a string")
}

function N(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    partial: r,
    resetEditInfo: i,
    local: s
  } = e;
  O = !s;
  let o = b[n];
  i && T(o), r ? (o.proto = (0, _.RK)(o.ProtoClass, o.proto, t), a()("string" != typeof o.proto, "UserSettingsProto cannot be a string")) : (o.proto = t, a()("string" != typeof o.proto, "UserSettingsProto cannot be a string"), o.editInfo.loaded = true, o.editInfo.loading = false)
}

function w(e) {
  let {
    settings: {
      type: t,
      changes: n
    }
  } = e;
  a()(!__OVERLAY__, "this cannot run in the overlay");
  let r = b[t];
  return r.editInfo = g({}, r.editInfo, n), false
}

function R(e) {
  let {
    userSettings: t
  } = e;
  P(t)
}

function P(e) {
  null != e && o().forEach(b, (t, n) => {
    var r, i;
    let s = e[Number(n)];
    if (null == s) return;
    let o = null != (r = null == s ? true : s.proto) ? r : "",
      l = (0, _.ii)(t.ProtoClass, o);
    if (null == l) return;
    t.proto = l, a()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
    let c = null != (i = null == s ? true : s.protoToSave) ? i : null;
    if (null == c || null == s.offlineEditDataVersion) return;
    let u = (0, _.ii)(t.ProtoClass, c);
    null != u && (t.editInfo.protoToSave = u, t.editInfo.offlineEditDataVersion = s.offlineEditDataVersion)
  })
}
class D extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    P(e)
  }
  getState() {
    return this.computeState()
  }
  computeState() {
    return o().mapValues(b, e => {
      let t = {
        proto: (0, _.ob)(e.ProtoClass, e.proto)
      };
      return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (t.protoToSave = (0, _.ob)(e.ProtoClass, e.editInfo.protoToSave), t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), t
    })
  }
  hasLoaded(e) {
    return b[e].editInfo.loaded
  }
  get settings() {
    return E.proto
  }
  get frecencyWithoutFetchingLatest() {
    return y.proto
  }
  get wasMostRecentUpdateFromServer() {
    return O
  }
  getFullState() {
    return b
  }
  getGuildFolders() {
    var e;
    let t = null == (e = E.proto.guildFolders) ? true : e.folders;
    return null == t ? null : t.map(e => {
      var t, n, r;
      let i = null == (t = e.id) ? true : t.value,
        a = null == (n = e.color) ? true : n.value;
      return {
        guildIds: e.guildIds,
        folderId: null == i ? true : Number(i),
        folderName: null == (r = e.name) ? true : r.value,
        folderColor: null == a ? true : Number(a)
      }
    })
  }
  getGuildRecentsDismissedAt(e) {
    var t, n;
    if (null == e) return 0;
    let r = null == (n = this.settings.guilds) || null == (t = n.guilds[e]) ? true : t.guildRecentsDismissedAt;
    return null == r ? 0 : d.D.toDate(r).getTime()
  }
  getDismissedGuildContent(e) {
    var t, n, r;
    return null == e ? null : null == (r = this.settings.guilds) || null == (n = r.guilds) || null == (t = n[e]) ? true : t.dismissedGuildContent
  }
  getGuildDismissedContentState(e) {
    var t, n, r;
    return null == (r = this.settings.guilds) || null == (n = r.guilds) || null == (t = n[e]) ? true : t.guildDismissibleContentStates
  }
  getGuildsProto() {
    var e, t;
    return null != (e = null == (t = this.settings.guilds) ? true : t.guilds) ? e : null
  }
}
m(D, "displayName", "UserSettingsProtoStore"), m(D, "persistKey", "UserSettingsProtoStore-Cache");
let x = new D(Chunk73153.h, {
  CACHE_LOADED: R,
  USER_SETTINGS_PROTO_UPDATE: N,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: N,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: w,
  CONNECTION_OPEN: v,
  CONNECTION_CLOSED: A,
  CONNECTION_RESUMED: A,
  OVERLAY_INITIALIZE: C,
  LOGOUT: I
})