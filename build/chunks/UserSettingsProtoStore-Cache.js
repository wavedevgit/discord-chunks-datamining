/** Chunk was on web.js **/
/** chunk id: 581883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
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
  Chunk710845 = require("./710845.js"),
  Chunk930133 = require("./930133.js"),
  Chunk262847 = require("./262847.js"),
  Chunk48481 = require("./48481.js"),
  Chunk526761 = require("./526761.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let y = {
    ProtoClass: Chunk524437.o8,
    proto: Chunk524437.o8.create(),
    lazyLoaded: false,
    editInfo: (0, Chunk526761.JC)()
  },
  O = {
    ProtoClass: Chunk377108.ji,
    proto: Chunk377108.ji.create(),
    lazyLoaded: true,
    editInfo: (0, Chunk526761.JC)()
  },
  v = {
    [Chunk526761.yP.PRELOADED_USER_SETTINGS]: y,
    [Chunk526761.yP.FRECENCY_AND_FAVORITES_SETTINGS]: O
  },
  S = false,
  I = new Chunk710845.Z("UserSettingsProtoStore"),
  T = new Chunk930133.Z("UserSettingsProtoStore");

function C(e) {
  let {
    userSettingsProto: t
  } = e;
  null != t && (y.proto = t, a()("string" != typeof y.proto, "UserSettingsProto cannot be a string"));
  let {
    proto: n,
    isDirty: r,
    cleanupFuncs: i
  } = (0, h.xt)(y.proto, m.Z[g.yP.PRELOADED_USER_SETTINGS]);
  r && R(y), y.proto = n, a()("string" != typeof y.proto, "UserSettingsProto cannot be a string"), y.editInfo.triggeredMigrations = r, y.editInfo.cleanupFuncs = i, y.editInfo.loaded = true, Object.values(v).forEach(e => {
    e.lazyLoaded && (e.editInfo.loaded = false, e.editInfo.loading = false)
  }), P()
}

function A() {
  P()
}

function N() {
  P(), Object.values(v).forEach(e => {
    e.proto = e.ProtoClass.create(), e.editInfo = (0, g.JC)()
  })
}

function P() {
  Object.values(v).forEach(e => {
    if (null != e.editInfo.timeout) {
      var t, n;
      clearTimeout(e.editInfo.timeout), e.editInfo.timeout = true, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = false, e.editInfo.offlineEditDataVersion = null != (n = null == (t = e.proto.versions) ? true : t.dataVersion) ? n : 0
    }
  })
}

function R(e) {
  null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, g.JC)()
}

function D(e) {
  let {
    userSettingsProto: t
  } = e;
  y.proto = (0, h.ac)(t), a()("string" != typeof y.proto, "UserSettingsProto cannot be a string")
}

function w(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    partial: r,
    resetEditInfo: i,
    local: o
  } = e;
  S = !o;
  let s = v[n];
  i && R(s), r ? (s.proto = (0, h.re)(s.ProtoClass, s.proto, t), a()("string" != typeof s.proto, "UserSettingsProto cannot be a string")) : (s.proto = t, a()("string" != typeof s.proto, "UserSettingsProto cannot be a string"), s.editInfo.loaded = true, s.editInfo.loading = false)
}

function x(e) {
  let {
    settings: {
      type: t,
      changes: n
    }
  } = e;
  a()(!__OVERLAY__, "this cannot run in the overlay");
  let r = v[t];
  return r.editInfo = b({}, r.editInfo, n), false
}

function L(e) {
  let {
    userSettings: t
  } = e;
  j(t)
}

function j(e) {
  null != e && s().forEach(v, (t, n) => {
    let r = Number(n),
      i = e[r];
    null != i && M(t, r, i) && (a()("string" != typeof t.proto, "UserSettingsProto cannot be a string"), k(t, r, i))
  })
}

function M(e, t, n) {
  var r;
  let i = null != (r = null == n ? true : n.proto) ? r : "";
  if ("" === i) returntrue;
  let a = T.readParsedProto(t, i);
  if (null != a) return e.proto = a, true;
  let o = (0, h.d5)(e.ProtoClass, i);
  return null == o ? (I.warn("b64ToProto returned null", {
    type: t,
    b64: i
  }), false) : (e.proto = o, T.writeParsedProto(t, i, e.proto), true)
}

function k(e, t, n) {
  var r;
  let i = null != (r = null == n ? true : n.protoToSave) ? r : null,
    a = n.offlineEditDataVersion;
  if (null == i || null == a) return;
  let o = T.readProtoToSave(t, i, a);
  if (null != o) {
    e.editInfo.protoToSave = o, e.editInfo.offlineEditDataVersion = a;
    return
  }
  let s = (0, h.d5)(e.ProtoClass, i);
  if (null == s) return void I.warn("b64ToProto returned null for protoToSave", {
    type: t,
    protoToSaveB64: i
  });
  e.editInfo.protoToSave = s, e.editInfo.offlineEditDataVersion = a, T.writeProtoToSave(t, i, a, e.editInfo.protoToSave)
}
class U extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    j(e)
  }
  getState() {
    return this.computeState()
  }
  computeState() {
    return s().mapValues(v, (e, t) => {
      var n;
      let r = Number(t),
        i = {
          proto: (0, h.xU)(e.ProtoClass, e.proto)
        };
      return T.writeParsedProto(r, null != (n = i.proto) ? n : "", e.proto), null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (i.protoToSave = (0, h.xU)(e.ProtoClass, e.editInfo.protoToSave), i.offlineEditDataVersion = e.editInfo.offlineEditDataVersion, T.writeProtoToSave(r, i.protoToSave, i.offlineEditDataVersion, e.editInfo.protoToSave)), i
    })
  }
  hasLoaded(e) {
    return v[e].editInfo.loaded
  }
  get settings() {
    return y.proto
  }
  get frecencyWithoutFetchingLatest() {
    return O.proto
  }
  get wasMostRecentUpdateFromServer() {
    return S
  }
  getFullState() {
    return v
  }
  getGuildFolders() {
    var e;
    let t = null == (e = y.proto.guildFolders) ? true : module.folders;
    return null == exports ? null : exports.map(e => {
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
    return null != (t = null == (e = this.settings.guilds) ? true : module.guilds) ? exports : null
  }
}
E(U, "displayName", "UserSettingsProtoStore"), E(U, "persistKey", "UserSettingsProtoStore-Cache");
let G = new U(Chunk570140.Z, {
  CACHE_LOADED: L,
  USER_SETTINGS_PROTO_UPDATE: w,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: w,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: x,
  CONNECTION_OPEN: C,
  CONNECTION_CLOSED: A,
  CONNECTION_RESUMED: A,
  OVERLAY_INITIALIZE: D,
  LOGOUT: N
})