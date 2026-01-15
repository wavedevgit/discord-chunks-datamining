/** Chunk was on web.js **/
/** chunk id: 581883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk377108 = require("./377108.js"),
  Chunk524437 = require("./524437.js"),
  Chunk835913 = require("./835913.js"),
  Chunk570140 = require("./570140.js"),
  Chunk262847 = require("./262847.js"),
  Chunk48481 = require("./48481.js"),
  Chunk526761 = require("./526761.js");

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
    ProtoClass: Chunk524437.o8,
    proto: Chunk524437.o8.create(),
    lazyLoaded: false,
    editInfo: (0, Chunk526761.JC)()
  },
  b = {
    ProtoClass: Chunk377108.ji,
    proto: Chunk377108.ji.create(),
    lazyLoaded: true,
    editInfo: (0, Chunk526761.JC)()
  },
  y = {
    [Chunk526761.yP.PRELOADED_USER_SETTINGS]: E,
    [Chunk526761.yP.FRECENCY_AND_FAVORITES_SETTINGS]: b
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
  } = (0, _.xt)(E.proto, p.Z[h.yP.PRELOADED_USER_SETTINGS]);
  r && C(E), E.proto = n, a()("string" != typeof E.proto, "UserSettingsProto cannot be a string"), E.editInfo.triggeredMigrations = r, E.editInfo.cleanupFuncs = i, E.editInfo.loaded = true, Object.values(y).forEach(e => {
    e.lazyLoaded && (e.editInfo.loaded = false, e.editInfo.loading = false)
  }), T()
}

function S() {
  T()
}

function I() {
  T(), Object.values(y).forEach(e => {
    e.proto = e.ProtoClass.create(), e.editInfo = (0, h.JC)()
  })
}

function T() {
  Object.values(y).forEach(e => {
    if (null != e.editInfo.timeout) {
      var t, n;
      clearTimeout(e.editInfo.timeout), e.editInfo.timeout = true, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = false, e.editInfo.offlineEditDataVersion = null != (n = null == (t = e.proto.versions) ? true : t.dataVersion) ? n : 0
    }
  })
}

function C(e) {
  null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, h.JC)()
}

function A(e) {
  let {
    userSettingsProto: t
  } = e;
  E.proto = (0, _.ac)(t), a()("string" != typeof E.proto, "UserSettingsProto cannot be a string")
}

function N(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    partial: r,
    resetEditInfo: i,
    local: o
  } = e;
  O = !o;
  let s = y[n];
  i && C(s), r ? (s.proto = (0, _.re)(s.ProtoClass, s.proto, t), a()("string" != typeof s.proto, "UserSettingsProto cannot be a string")) : (s.proto = t, a()("string" != typeof s.proto, "UserSettingsProto cannot be a string"), s.editInfo.loaded = true, s.editInfo.loading = false)
}

function P(e) {
  let {
    settings: {
      type: t,
      changes: n
    }
  } = e;
  a()(!__OVERLAY__, "this cannot run in the overlay");
  let r = y[t];
  return r.editInfo = g({}, r.editInfo, n), false
}

function w(e) {
  let {
    userSettings: t
  } = e;
  R(t)
}

function R(e) {
  null != e && s().forEach(y, (t, n) => {
    var r, i;
    let o = e[Number(n)];
    if (null == o) return;
    let s = null != (r = null == o ? true : o.proto) ? r : "",
      l = (0, _.d5)(t.ProtoClass, s);
    if (null == l) return;
    t.proto = l, a()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
    let c = null != (i = null == o ? true : o.protoToSave) ? i : null;
    if (null == c || null == o.offlineEditDataVersion) return;
    let u = (0, _.d5)(t.ProtoClass, c);
    null != u && (t.editInfo.protoToSave = u, t.editInfo.offlineEditDataVersion = o.offlineEditDataVersion)
  })
}
class D extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    R(e)
  }
  getState() {
    return this.computeState()
  }
  computeState() {
    return s().mapValues(y, e => {
      let t = {
        proto: (0, _.xU)(e.ProtoClass, e.proto)
      };
      return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (t.protoToSave = (0, _.xU)(e.ProtoClass, e.editInfo.protoToSave), t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), t
    })
  }
  hasLoaded(e) {
    return y[e].editInfo.loaded
  }
  get settings() {
    return E.proto
  }
  get frecencyWithoutFetchingLatest() {
    return b.proto
  }
  get wasMostRecentUpdateFromServer() {
    return O
  }
  getFullState() {
    return y
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
    return null == r ? 0 : d.E.toDate(r).getTime()
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
    return null != (t = null == (e = this.settings.guilds) ? true : e.guilds) ? t : null
  }
}
m(D, "displayName", "UserSettingsProtoStore"), m(D, "persistKey", "UserSettingsProtoStore-Cache");
let x = new D(Chunk570140.Z, {
  CACHE_LOADED: w,
  USER_SETTINGS_PROTO_UPDATE: N,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: N,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: P,
  CONNECTION_OPEN: v,
  CONNECTION_CLOSED: S,
  CONNECTION_RESUMED: S,
  OVERLAY_INITIALIZE: A,
  LOGOUT: I
})