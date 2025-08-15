/** Chunk was on 96812 **/
/** chunk id: 946724, original params: e,t,l (module,exports,require) **/
let r, n, o;
require.d(exports, {
  Z: () => Q,
  g: () => C
}), require("./388685.js"), require("./953529.js");
var i, a, Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
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

function L(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = l, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, l[t])
    })
  }
  return e
}
var C = ((a = {}).SOLID = "solid", a.GRADIENT = "gradient", a.HOLOGRAPHIC = "holographic", a);
let G = new Set,
  P = Chunk981631.QZA.CLOSED,
  A = false,
  m = false,
  b = [],
  U = [],
  v = false,
  M = new Set,
  x = new Map,
  w = new Map,
  Z = new Map;

function H() {
  return null == r || null == b ? [] : Chunk990492.ZP.calculatePositionDeltas({
    oldOrdering: Chunk485386.Z.getSortedRoles(r.id),
    newOrdering: b,
    idGetter: e => e.id,
    existingPositionGetter: e => e.position,
    ascending: false
  })
}

function j(e) {
  let {
    section: t
  } = e;
  if (null != r || t !== T.pNK.ROLES) returnfalse;
  q()
}

function q() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  r = Chunk999382.Z.getProps().guild, A = false, m = false, o = true, G.clear(), Z.clear(), P = Chunk981631.QZA.OPEN, U = [...b = null != r ? [...Chunk485386.Z.getSortedRoles(r.id)] : []], k(null == r ? true : r.id, U), v = false, module && (w.clear(), x.forEach((e, t) => {
    w.set(t, [...e])
  }))
}

function k(e, t) {
  t.forEach(t => {
    let l = "solid",
      r = (0, p.zI)(e, t);
    null != t.colors && r && (null != t.colors.tertiary_color ? l = "holographic" : null != t.colors.secondary_color && (l = "gradient"));
    let n = {
      solid: {
        primary_color: T.p6O,
        secondary_color: null,
        tertiary_color: null
      },
      gradient: {
        primary_color: N.Eg.primary_color,
        secondary_color: N.Eg.secondary_color,
        tertiary_color: null
      },
      holographic: {
        primary_color: N.SK.primary_color,
        secondary_color: N.SK.secondary_color,
        tertiary_color: N.SK.tertiary_color
      }
    };
    if (null != t.colors) {
      var o, i, a;
      n[l] = {
        primary_color: null != (o = t.colors.primary_color) ? o : T.p6O,
        secondary_color: null != (i = t.colors.secondary_color) ? i : null,
        tertiary_color: null != (a = t.colors.tertiary_color) ? a : null
      }
    }
    Z.set(t.id, {
      currentStyle: l,
      styleColors: n
    })
  })
}
let K = u().debounce(() => {
  let e = false;
  m && ((m = H().length > 0) || (e = true)), [...G].forEach(t => {
    var l;
    u().isEqual(X(t), (l = t, U.find(e => {
      let {
        id: t
      } = e;
      return t === l
    }))) && (G.delete(t), e = true)
  }), 0 === G.size && (A = false), v && u().isEqual(x, w) && (e = true, v = false), module && W.emitChange()
}, 500);

function F(e, t) {
  let l = b.indexOf(e);
  if (l < 0) returnfalse;
  let r = D({}, e, t),
    n = [...b];
  n[l] = r, b = n, A = true, G.add(r.id), K()
}

function X(e) {
  return b.find(t => {
    let {
      id: l
    } = t;
    return l === e
  })
}

function B(e) {
  let {
    guildId: t
  } = e;
  if (null == (r = y.Z.getProps().guild) || t !== r.id || P === T.QZA.SUBMITTING) returnfalse;
  let l = [...h.Z.getSortedRoles(r.id)];
  G.forEach(e => {
    let t = X(e),
      r = false;
    null == l.find((t, l) => {
      let {
        id: n
      } = t;
      if (n === e) return r = l, true
    }) || null == t ? G.delete(e) : l[r] = t
  }), 0 === G.size && (A = false);
  let n = new Map;
  G.forEach(e => {
    let t = Z.get(e);
    null != t && n.set(e, t)
  }), Z.clear(), k(t, l), n.forEach((e, t) => {
    Z.set(t, e)
  }), m = false, b = [...l]
}
class z extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk561654.Z, Chunk485386.Z)
  }
  hasChanges() {
    return A || m || v
  }
  getRoleStyleData(e) {
    return Z.get(e)
  }
  get errorMessage() {
    return o
  }
  get hasSortChanges() {
    return m
  }
  get hasRoleConfigurationChanges() {
    return v
  }
  get guild() {
    return r
  }
  get editedRoleIds() {
    return Array.from(G)
  }
  get editedRoleIdsForConfigurations() {
    return M
  }
  get roles() {
    return b
  }
  get formState() {
    return P
  }
  getSortDeltas() {
    return H()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return X(e)
  }
  getPermissionSearchQuery() {
    return n
  }
  getEditedRoleConnectionConfigurationsMap() {
    return w
  }
}
L(z, "displayName", "GuildSettingsRolesStore");
let W = new z(Chunk570140.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => q(),
    GUILD_SETTINGS_INIT: j,
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
      let {
        roles: t
      } = e;
      if (null != b && t.length !== b.length) returnfalse;
      b = t.map(e => X(e)).filter(R.lm), m = true, K()
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
      let {
        id: t,
        flag: l,
        allow: r
      } = e, n = X(t);
      if (null == n) returnfalse;
      let {
        permissions: o
      } = n;
      return F(n, {
        permissions: o = r ? c.IH(o, l) : c.Od(o, l)
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
      let {
        id: t,
        permissions: l
      } = e, r = X(t);
      return null != r && F(r, {
        permissions: l
      })
    },
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
      let {
        id: t
      } = e, l = X(t);
      return null != l && F(l, {
        permissions: O.Hn
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
      let {
        id: t,
        name: l
      } = e, r = X(t);
      return null != r && F(r, {
        name: l
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
      let {
        id: t,
        description: l
      } = e, r = X(t);
      return null != r && F(r, {
        description: l
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
      let {
        id: t,
        color: l
      } = e, r = 0 === l ? null : (0, d.Rf)(l), n = X(t);
      if (null == n) returnfalse;
      let o = Z.get(t);
      return null != o && (o.currentStyle = "solid", o.styleColors.solid = {
        primary_color: l,
        secondary_color: null,
        tertiary_color: null
      }, Z.set(t, D({}, o)), F(n, {
        color: l,
        colorString: r,
        colors: {
          primary_color: l,
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
        colors: l,
        currentStyle: r
      } = e, n = X(t);
      if (null == n) returnfalse;
      let o = (0, g.DX)(l),
        i = Z.get(t);
      return null != i && (i.styleColors[r] = l, i.currentStyle = r, Z.set(t, D({}, i)), F(n, {
        color: l.primary_color,
        colors: l,
        colorString: o.primaryColor,
        colorStrings: o
      }))
    },
    GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
      let {
        id: t,
        hoist: l,
        mentionable: r
      } = e, n = X(t);
      return null != n && F(n, {
        hoist: l,
        mentionable: r
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
      let {
        id: t,
        icon: l,
        unicodeEmoji: r
      } = e, n = X(t);
      return null != n && F(n, {
        icon: l,
        unicodeEmoji: r
      })
    },
    GUILD_SETTINGS_ROLE_SELECT: function(e) {
      let {
        role: t,
        searchQuery: l
      } = e;
      if (n = l, null != t) {
        if (null != X(t.id)) return void F(t, t);
        b = [...b, t], K()
      }
    },
    GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function(e) {
      var t;
      let {
        id: l,
        currentStyle: r
      } = e, n = X(l);
      if (null == n) returnfalse;
      let o = Z.get(l);
      if (null == o) returnfalse;
      Z.set(l, {
        currentStyle: r,
        styleColors: o.styleColors
      });
      let i = o.styleColors[r],
        a = (0, g.DX)(i);
      return F(n, {
        color: null != (t = i.primary_color) ? t : true,
        colors: i,
        colorString: a.primaryColor,
        colorStrings: a
      })
    },
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: l
      } = e, r = X(t);
      if (null == r) returnfalse;
      let n = x.get(r.id);
      if (u().isEqual(n, l)) returnfalse;
      w.set(r.id, l), x.set(r.id, l), K()
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: l
      } = e, r = X(t);
      if (null == r) returnfalse;
      v = true, M.add(r.id), w.set(r.id, l), K()
    },
    GUILD_SETTINGS_CLOSE: function() {
      r = null, U = b = [], x.clear(), G.clear(), Z.clear(), w.clear(), M = new Set, A = false, m = false, v = false, P = Chunk981631.QZA.CLOSED
    },
    GUILD_ROLE_CREATE: B,
    GUILD_ROLE_UPDATE: B,
    GUILD_ROLE_DELETE: function(e) {
      return M.has(e.roleId) && (M.delete(e.roleId), x.delete(e.roleId), w.delete(e.roleId), v = false), B(e)
    },
    GUILD_SETTINGS_ROLES_SUBMITTING: function() {
      P = Chunk981631.QZA.SUBMITTING
    },
    GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
      let {
        message: t
      } = e;
      P = T.QZA.OPEN, o = t
    },
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
      q(false)
    },
    GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function(e) {
      let {
        guildId: t
      } = e;
      null != r && t === r.id && (r = (0, S.t8)(r, "features", r.features.union(new Set([T.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))))
    }
  }),
  Q = W