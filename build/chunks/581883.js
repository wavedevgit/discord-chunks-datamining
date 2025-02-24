/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => x
});
var r, i = n(512722),
  o = n.n(i),
  a = n(392711),
  s = n.n(a),
  l = n(442837),
  c = n(377108),
  u = n(524437),
  d = n(835913),
  f = n(570140),
  p = n(262847),
  _ = n(48481),
  h = n(526761);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    ProtoClass: u.o8,
    proto: u.o8.create(),
    lazyLoaded: !1,
    editInfo: (0, h.JC)()
  },
  v = {
    ProtoClass: c.ji,
    proto: c.ji.create(),
    lazyLoaded: !0,
    editInfo: (0, h.JC)()
  },
  b = {
    [h.yP.PRELOADED_USER_SETTINGS]: E,
    [h.yP.FRECENCY_AND_FAVORITES_SETTINGS]: v
  },
  y = !1;

function O(e) {
  let {
    userSettingsProto: t
  } = e;
  null != t && (E.proto = t, o()("string" != typeof E.proto, "UserSettingsProto cannot be a string"));
  let {
    proto: n,
    isDirty: r,
    cleanupFuncs: i
  } = (0, _.xt)(E.proto, p.Z[h.yP.PRELOADED_USER_SETTINGS]);
  r && N(E), E.proto = n, o()("string" != typeof E.proto, "UserSettingsProto cannot be a string"), E.editInfo.triggeredMigrations = r, E.editInfo.cleanupFuncs = i, E.editInfo.loaded = !0, Object.values(b).forEach(e => {
    e.lazyLoaded && (e.editInfo.loaded = !1, e.editInfo.loading = !1)
  }), T()
}

function S() {
  T()
}

function I() {
  T(), Object.values(b).forEach(e => {
    e.proto = e.ProtoClass.create(), e.editInfo = (0, h.JC)()
  })
}

function T() {
  Object.values(b).forEach(e => {
    if (null != e.editInfo.timeout) {
      var t, n;
      clearTimeout(e.editInfo.timeout), e.editInfo.timeout = void 0, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = !1, e.editInfo.offlineEditDataVersion = null !== (n = null === (t = e.proto.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : 0
    }
  })
}

function N(e) {
  null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, h.JC)()
}

function A(e) {
  let {
    userSettingsProto: t
  } = e;
  E.proto = (0, _.ac)(t), o()("string" != typeof E.proto, "UserSettingsProto cannot be a string")
}

function C(e) {
  let {
    settings: {
      proto: t,
      type: n
    },
    partial: r,
    resetEditInfo: i,
    local: a
  } = e;
  y = !a;
  let s = b[n];
  i && N(s), r ? (s.proto = (0, _.re)(s.ProtoClass, s.proto, t), o()("string" != typeof s.proto, "UserSettingsProto cannot be a string")) : (s.proto = t, o()("string" != typeof s.proto, "UserSettingsProto cannot be a string"), s.editInfo.loaded = !0, s.editInfo.loading = !1)
}

function R(e) {
  let {
    settings: {
      type: t,
      changes: n
    }
  } = e;
  o()(!__OVERLAY__, "this cannot run in the overlay");
  let r = b[t];
  return r.editInfo = g({}, r.editInfo, n), !1
}

function P(e) {
  let {
    userSettings: t
  } = e;
  w(t)
}

function w(e) {
  null != e && s().forEach(b, (t, n) => {
    var r, i;
    let a = e[Number(n)];
    if (null == a) return;
    let s = null !== (r = null == a ? void 0 : a.proto) && void 0 !== r ? r : "",
      l = (0, _.d5)(t.ProtoClass, s);
    if (null == l) return;
    t.proto = l, o()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
    let c = null !== (i = null == a ? void 0 : a.protoToSave) && void 0 !== i ? i : null;
    if (null == c || null == a.offlineEditDataVersion) return;
    let u = (0, _.d5)(t.ProtoClass, c);
    null != u && (t.editInfo.protoToSave = u, t.editInfo.offlineEditDataVersion = a.offlineEditDataVersion)
  })
}
class D extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    w(e)
  }
  getState() {
    return this.computeState()
  }
  computeState() {
    return s().mapValues(b, e => {
      let t = {
        proto: (0, _.xU)(e.ProtoClass, e.proto)
      };
      return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (t.protoToSave = (0, _.xU)(e.ProtoClass, e.editInfo.protoToSave), t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), t
    })
  }
  hasLoaded(e) {
    return b[e].editInfo.loaded
  }
  get settings() {
    return E.proto
  }
  get frecencyWithoutFetchingLatest() {
    return v.proto
  }
  get wasMostRecentUpdateFromServer() {
    return y
  }
  getFullState() {
    return b
  }
  getGuildFolders() {
    var e;
    let t = null === (e = E.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
    return null == t ? null : t.map(e => {
      var t, n, r;
      let i = null === (t = e.id) || void 0 === t ? void 0 : t.value,
        o = null === (n = e.color) || void 0 === n ? void 0 : n.value;
      return {
        guildIds: e.guildIds,
        folderId: null == i ? void 0 : Number(i),
        folderName: null === (r = e.name) || void 0 === r ? void 0 : r.value,
        folderColor: null == o ? void 0 : Number(o)
      }
    })
  }
  getGuildRecentsDismissedAt(e) {
    var t, n;
    if (null == e) return 0;
    let r = null === (n = this.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds[e]) || void 0 === t ? void 0 : t.guildRecentsDismissedAt;
    return null == r ? 0 : d.E.toDate(r).getTime()
  }
  getDismissedGuildContent(e) {
    var t, n, r;
    return null == e ? null : null === (r = this.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.dismissedGuildContent
  }
  getGuildsProto() {
    var e, t;
    return null !== (t = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : null
  }
}
m(D, "displayName", "UserSettingsProtoStore"), m(D, "persistKey", "UserSettingsProtoStore-Cache");
let x = new D(f.Z, {
  CACHE_LOADED: P,
  USER_SETTINGS_PROTO_UPDATE: C,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: C,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: R,
  CONNECTION_OPEN: O,
  CONNECTION_CLOSED: S,
  CONNECTION_RESUMED: S,
  OVERLAY_INITIALIZE: A,
  LOGOUT: I
})