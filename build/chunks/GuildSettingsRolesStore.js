/** Chunk was on 384 **/
/** chunk id: 103576, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, l;
require.d(exports, {
  Z: () => q,
  g: () => I
}), require("./388685.js"), require("./953529.js");
var a, s, Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk311929 = require("./311929.js"),
  Chunk561654 = require("./561654.js"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk485386 = require("./485386.js"),
  Chunk990492 = require("./990492.js"),
  Chunk823379 = require("./823379.js"),
  Chunk700785 = require("./700785.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk141006 = require("./141006.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}
var I = ((s = {}).SOLID = "solid", s.GRADIENT = "gradient", s.HOLOGRAPHIC = "holographic", s);
let S = new Set,
  T = Chunk981631.QZA.CLOSED,
  P = false,
  w = false,
  Z = [],
  R = [],
  D = false,
  A = new Set,
  L = new Map,
  k = new Map,
  G = new Map;

function M() {
  return null == r || null == Z ? [] : Chunk990492.ZP.calculatePositionDeltas({
    oldOrdering: Chunk485386.Z.getSortedRoles(r.id),
    newOrdering: Z,
    idGetter: e => e.id,
    existingPositionGetter: e => e.position,
    ascending: false
  })
}

function U(e) {
  let {
    section: t
  } = e;
  if (null != r || t !== C.pNK.ROLES) returnfalse;
  B()
}

function B() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  r = Chunk999382.Z.getProps().guild, P = false, w = false, l = true, S.clear(), G.clear(), T = Chunk981631.QZA.OPEN, R = [...Z = null != r ? [...Chunk485386.Z.getSortedRoles(r.id)] : []], F(null == r ? true : r.id, R), D = false, module && (k.clear(), L.forEach((e, t) => {
    k.set(t, [...e])
  }))
}

function F(e, t) {
  t.forEach(t => {
    let n = "solid",
      r = (0, b.zI)(e, t);
    null != t.colors && r && (null != t.colors.tertiary_color ? n = "holographic" : null != t.colors.secondary_color && (n = "gradient"));
    let i = {
      solid: {
        primary_color: C.p6O,
        secondary_color: null,
        tertiary_color: null
      },
      gradient: {
        primary_color: y.Eg.primary_color,
        secondary_color: y.Eg.secondary_color,
        tertiary_color: null
      },
      holographic: {
        primary_color: y.SK.primary_color,
        secondary_color: y.SK.secondary_color,
        tertiary_color: y.SK.tertiary_color
      }
    };
    if (null != t.colors) {
      var l, a, s;
      i[n] = {
        primary_color: null != (l = t.colors.primary_color) ? l : C.p6O,
        secondary_color: null != (a = t.colors.secondary_color) ? a : null,
        tertiary_color: null != (s = t.colors.tertiary_color) ? s : null
      }
    }
    G.set(t.id, {
      currentStyle: n,
      styleColors: i
    })
  })
}
let H = c().debounce(() => {
  let e = false;
  w && ((w = M().length > 0) || (e = true)), [...S].forEach(t => {
    var n;
    c().isEqual(z(t), (n = t, R.find(e => {
      let {
        id: t
      } = e;
      return t === n
    }))) && (S.delete(t), e = true)
  }), 0 === S.size && (P = false), D && c().isEqual(L, k) && (e = true, D = false), module && Y.emitChange()
}, 500);

function W(e, t) {
  let n = Z.indexOf(e);
  if (n < 0) returnfalse;
  let r = E({}, e, t),
    i = [...Z];
  i[n] = r, Z = i, P = true, S.add(r.id), H()
}

function z(e) {
  return Z.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function V(e) {
  let {
    guildId: t
  } = e;
  if (null == (r = O.Z.getProps().guild) || t !== r.id || T === C.QZA.SUBMITTING) returnfalse;
  let n = [...x.Z.getSortedRoles(r.id)];
  S.forEach(e => {
    let t = z(e),
      r = false;
    null == n.find((t, n) => {
      let {
        id: i
      } = t;
      if (i === e) return r = n, true
    }) || null == t ? S.delete(e) : n[r] = t
  }), 0 === S.size && (P = false);
  let i = new Map;
  S.forEach(e => {
    let t = G.get(e);
    null != t && i.set(e, t)
  }), G.clear(), F(t, n), i.forEach((e, t) => {
    G.set(t, e)
  }), w = false, Z = [...n]
}
class K extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk561654.Z, Chunk485386.Z)
  }
  hasChanges() {
    return P || w || D
  }
  getRoleStyleData(e) {
    return G.get(e)
  }
  get errorMessage() {
    return l
  }
  get hasSortChanges() {
    return w
  }
  get hasRoleConfigurationChanges() {
    return D
  }
  get guild() {
    return r
  }
  get editedRoleIds() {
    return Array.from(S)
  }
  get editedRoleIdsForConfigurations() {
    return A
  }
  get roles() {
    return Z
  }
  get formState() {
    return T
  }
  getSortDeltas() {
    return M()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return z(e)
  }
  getPermissionSearchQuery() {
    return i
  }
  getEditedRoleConnectionConfigurationsMap() {
    return k
  }
}
N(K, "displayName", "GuildSettingsRolesStore");
let Y = new K(Chunk570140.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => B(),
    GUILD_SETTINGS_INIT: U,
    GUILD_SETTINGS_SET_SECTION: U,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
      let {
        roles: t
      } = e;
      if (null != Z && t.length !== Z.length) returnfalse;
      Z = t.map(e => z(e)).filter(_.lm), w = true, H()
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
      let {
        id: t,
        flag: n,
        allow: r
      } = e, i = z(t);
      if (null == i) returnfalse;
      let {
        permissions: l
      } = i;
      return W(i, {
        permissions: l = r ? d.IH(l, n) : d.Od(l, n)
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
      let {
        id: t,
        permissions: n
      } = e, r = z(t);
      return null != r && W(r, {
        permissions: n
      })
    },
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
      let {
        id: t
      } = e, n = z(t);
      return null != n && W(n, {
        permissions: v.Hn
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
      let {
        id: t,
        name: n
      } = e, r = z(t);
      return null != r && W(r, {
        name: n
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
      let {
        id: t,
        description: n
      } = e, r = z(t);
      return null != r && W(r, {
        description: n
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
      let {
        id: t,
        color: n
      } = e, r = 0 === n ? null : (0, u.Rf)(n), i = z(t);
      if (null == i) returnfalse;
      let l = G.get(t);
      return null != l && (l.currentStyle = "solid", l.styleColors.solid = {
        primary_color: n,
        secondary_color: null,
        tertiary_color: null
      }, G.set(t, E({}, l)), W(i, {
        color: n,
        colorString: r,
        colors: {
          primary_color: n,
          secondary_color: null,
          tertiary_color: null
        },
        colorStrings: null != r ? {
          primaryColor: r,
          secondaryColor: null,
          tertiaryColor: null
        } : null
      }))
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLORS: function(e) {
      let {
        id: t,
        colors: n,
        currentStyle: r
      } = e, i = z(t);
      if (null == i) returnfalse;
      let l = (0, h.DX)(n),
        a = G.get(t);
      return null != a && (a.styleColors[r] = n, a.currentStyle = r, G.set(t, E({}, a)), W(i, {
        color: n.primary_color,
        colors: n,
        colorString: l.primaryColor,
        colorStrings: l
      }))
    },
    GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
      let {
        id: t,
        hoist: n,
        mentionable: r
      } = e, i = z(t);
      return null != i && W(i, {
        hoist: n,
        mentionable: r
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
      let {
        id: t,
        icon: n,
        unicodeEmoji: r
      } = e, i = z(t);
      return null != i && W(i, {
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
        if (null != z(t.id)) return void W(t, t);
        Z = [...Z, t], H()
      }
    },
    GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function(e) {
      var t;
      let {
        id: n,
        currentStyle: r
      } = e, i = z(n);
      if (null == i) returnfalse;
      let l = G.get(n);
      if (null == l) returnfalse;
      G.set(n, {
        currentStyle: r,
        styleColors: l.styleColors
      });
      let a = l.styleColors[r],
        s = (0, h.DX)(a);
      return W(i, {
        color: null != (t = a.primary_color) ? t : true,
        colors: a,
        colorString: s.primaryColor,
        colorStrings: s
      })
    },
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: n
      } = e, r = z(t);
      if (null == r) returnfalse;
      let i = L.get(r.id);
      if (c().isEqual(i, n)) returnfalse;
      k.set(r.id, n), L.set(r.id, n), H()
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: n
      } = e, r = z(t);
      if (null == r) returnfalse;
      D = true, A.add(r.id), k.set(r.id, n), H()
    },
    GUILD_SETTINGS_CLOSE: function() {
      r = null, R = Z = [], L.clear(), S.clear(), G.clear(), k.clear(), A = new Set, P = false, w = false, D = false, T = Chunk981631.QZA.CLOSED
    },
    GUILD_ROLE_CREATE: V,
    GUILD_ROLE_UPDATE: V,
    GUILD_ROLE_DELETE: function(e) {
      return A.has(e.roleId) && (A.delete(e.roleId), L.delete(e.roleId), k.delete(e.roleId), D = false), V(e)
    },
    GUILD_SETTINGS_ROLES_SUBMITTING: function() {
      T = Chunk981631.QZA.SUBMITTING
    },
    GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
      let {
        message: t
      } = e;
      T = C.QZA.OPEN, l = t
    },
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
      B(false)
    },
    GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function(e) {
      let {
        guildId: t
      } = e;
      if (null == r || t !== r.id) returnfalse;
      r = (0, p.t8)(r, "features", new Set([...r.features, C.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))
    },
    GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function(e) {
      let {
        guildId: t
      } = e;
      if (null == r || t !== r.id) returnfalse;
      r = (0, p.t8)(r, "features", new Set([...r.features, C.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]))
    }
  }),
  q = Y