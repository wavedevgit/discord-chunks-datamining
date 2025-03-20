/** Chunk was on 10396 **/
"use strict";
let r, i, s;
n.d(t, {
  Z: () => M
}), n(47120), n(978209), n(266796);
var a, l = n(392711),
  o = n.n(l),
  A = n(149765),
  c = n(866442),
  d = n(442837),
  u = n(570140),
  g = n(561654),
  f = n(430824),
  m = n(990492),
  p = n(823379),
  h = n(700785),
  C = n(999382),
  b = n(981631);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = new Set,
  N = b.QZA.CLOSED,
  j = !1,
  E = !1,
  I = [],
  O = [],
  y = !1,
  w = new Set,
  P = new Map,
  B = new Map;

function D() {
  if (null == r || null == I) return [];
  let e = o()(f.Z.getRoles(r.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value();
  return m.ZP.calculatePositionDeltas({
    oldOrdering: e,
    newOrdering: I,
    idGetter: e => {
      let {
        id: t
      } = e;
      return t
    },
    existingPositionGetter: e => {
      let {
        originalPosition: t
      } = e;
      return null != t ? t : 1 / 0
    },
    ascending: !1
  })
}

function T(e) {
  let {
    section: t
  } = e;
  if (null != r || t !== b.pNK.ROLES) return !1;
  S()
}

function S() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  r = C.Z.getProps().guild, j = !1, E = !1, s = void 0, x.clear(), N = b.QZA.OPEN, O = [...I = null != r ? o()(f.Z.getRoles(r.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value() : []], y = !1, e && (B.clear(), P.forEach((e, t) => {
    B.set(t, [...e])
  }))
}
let L = o().debounce(() => {
  let e = !1;
  !E || (E = D().length > 0) || (e = !0), [...x].forEach(t => {
    var n;
    o().isEqual(Q(t), (n = t, O.find(e => {
      let {
        id: t
      } = e;
      return t === n
    }))) && (x.delete(t), e = !0)
  }), 0 === x.size && (j = !1), y && o().isEqual(P, B) && (e = !0, y = !1), e && k.emitChange()
}, 500);

function R(e, t) {
  let n = I.indexOf(e);
  if (n < 0) return !1;
  let r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        v(e, t, n[t])
      })
    }
    return e
  }({}, e, t);
  I[n] = r, I = [...I], j = !0, x.add(r.id), L()
}

function Q(e) {
  return I.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function W(e) {
  let {
    guildId: t
  } = e;
  if (null == r || t !== r.id || N === b.QZA.SUBMITTING) return !1;
  r = C.Z.getProps().guild;
  let n = [];
  null != r && (n = o()(f.Z.getRoles(r.id)).values().sortBy(e => {
    let {
      position: t
    } = e;
    return t
  }).reverse().value()), x.forEach(e => {
    let t = Q(e),
      r = -1;
    null == n.find((t, n) => {
      let {
        id: i
      } = t;
      if (i === e) return r = n, !0
    }) || null == t ? x.delete(e) : n[r] = t
  }), 0 === x.size && (j = !1), E = !1, I = [...n]
}
class Z extends(a = d.ZP.Store) {
  initialize() {
    this.waitFor(C.Z, g.Z, f.Z)
  }
  hasChanges() {
    return j || E || y
  }
  get errorMessage() {
    return s
  }
  get hasSortChanges() {
    return E
  }
  get hasRoleConfigurationChanges() {
    return y
  }
  get guild() {
    return r
  }
  get editedRoleIds() {
    return Array.from(x)
  }
  get editedRoleIdsForConfigurations() {
    return w
  }
  get roles() {
    return I
  }
  get formState() {
    return N
  }
  getSortDeltas() {
    return D()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return Q(e)
  }
  getPermissionSearchQuery() {
    return i
  }
  getEditedRoleConnectionConfigurationsMap() {
    return B
  }
}
v(Z, "displayName", "GuildSettingsRolesStore");
let k = new Z(u.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => S(),
    GUILD_SETTINGS_INIT: T,
    GUILD_SETTINGS_SET_SECTION: T,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
      let {
        roles: t
      } = e;
      if (null != I && t.length !== I.length) return !1;
      I = t.map(e => Q(e)).filter(p.lm), E = !0, L()
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
      let {
        id: t,
        flag: n,
        allow: r
      } = e, i = Q(t);
      if (null == i) return !1;
      let {
        permissions: s
      } = i;
      return R(i, {
        permissions: s = r ? A.IH(s, n) : A.Od(s, n)
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
      let {
        id: t,
        permissions: n
      } = e, r = Q(t);
      return null != r && R(r, {
        permissions: n
      })
    },
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
      let {
        id: t
      } = e, n = Q(t);
      return null != n && R(n, {
        permissions: h.Hn
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
      let {
        id: t,
        name: n
      } = e, r = Q(t);
      return null != r && R(r, {
        name: n
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
      let {
        id: t,
        description: n
      } = e, r = Q(t);
      return null != r && R(r, {
        description: n
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
      let {
        id: t,
        color: n
      } = e, r = 0 === n ? null : (0, c.Rf)(n), i = Q(t);
      return null != i && R(i, {
        color: n,
        colorString: r
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
      let {
        id: t,
        hoist: n,
        mentionable: r
      } = e, i = Q(t);
      return null != i && R(i, {
        hoist: n,
        mentionable: r
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
      let {
        id: t,
        icon: n,
        unicodeEmoji: r
      } = e, i = Q(t);
      return null != i && R(i, {
        icon: n,
        unicodeEmoji: r
      })
    },
    GUILD_SETTINGS_ROLE_SELECT: function(e) {
      let {
        role: t,
        searchQuery: n
      } = e;
      if (i = n, null != t) {
        if (null != Q(t.id)) {
          R(t, t);
          return
        }
        I = [...I, t], L()
      }
    },
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: n
      } = e, r = Q(t);
      if (null == r) return !1;
      let i = P.get(r.id);
      if (o().isEqual(i, n)) return !1;
      B.set(r.id, n), P.set(r.id, n), L()
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: n
      } = e, r = Q(t);
      if (null == r) return !1;
      y = !0, w.add(r.id), B.set(r.id, n), L()
    },
    GUILD_SETTINGS_CLOSE: function() {
      r = null, O = I = [], P.clear(), x.clear(), B.clear(), w = new Set, j = !1, E = !1, y = !1, N = b.QZA.CLOSED
    },
    GUILD_ROLE_CREATE: W,
    GUILD_ROLE_UPDATE: W,
    GUILD_ROLE_DELETE: function(e) {
      return w.has(e.roleId) && (w.delete(e.roleId), P.delete(e.roleId), B.delete(e.roleId), y = !1), W(e)
    },
    GUILD_SETTINGS_ROLES_SUBMITTING: function() {
      N = b.QZA.SUBMITTING
    },
    GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
      let {
        message: t
      } = e;
      N = b.QZA.OPEN, s = t
    },
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
      S(!1)
    }
  }),
  M = k