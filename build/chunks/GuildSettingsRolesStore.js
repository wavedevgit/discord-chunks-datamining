/** Chunk was on 67325 **/
/** chunk id: 946724, original params: e,r,l (module,exports,require) **/
let t, n, o;
require.d(exports, {
  Z: () => z,
  g: () => D
}), require("./388685.js"), require("./953529.js");
var i, u, Chunk392711 = require("./392711.js"),
  _ = require.n(Chunk392711),
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

function A(e, r, l) {
  return r in e ? Object.defineProperty(e, r, {
    value: l,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = l, e
}

function C(e) {
  for (var r = 1; r < arguments.length; r++) {
    var l = null != arguments[r] ? arguments[r] : {},
      t = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), t.forEach(function(r) {
      A(e, r, l[r])
    })
  }
  return e
}
var D = ((u = {}).SOLID = "solid", u.GRADIENT = "gradient", u.HOLOGRAPHIC = "holographic", u);
let P = new Set,
  p = Chunk981631.QZA.CLOSED,
  m = false,
  U = false,
  M = [],
  h = [],
  b = false,
  w = new Set,
  x = new Map,
  Z = new Map,
  v = new Map;

function q() {
  return null == t || null == M ? [] : Chunk990492.ZP.calculatePositionDeltas({
    oldOrdering: Chunk485386.Z.getSortedRoles(t.id),
    newOrdering: M,
    idGetter: e => e.id,
    existingPositionGetter: e => e.position,
    ascending: false
  })
}

function F(e) {
  let {
    section: r
  } = e;
  if (null != t || r !== L.pNK.ROLES) returnfalse;
  H()
}

function H() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  t = Chunk999382.Z.getProps().guild, m = false, U = false, o = true, P.clear(), v.clear(), p = Chunk981631.QZA.OPEN, h = [...M = null != t ? [...Chunk485386.Z.getSortedRoles(t.id)] : []], B(null == t ? true : t.id, h), b = false, module && (Z.clear(), x.forEach((e, r) => {
    Z.set(r, [...e])
  }))
}

function B(e, r) {
  r.forEach(r => {
    let l = "solid",
      t = (0, T.zI)(e, r);
    null != r.colors && t && (null != r.colors.tertiary_color ? l = "holographic" : null != r.colors.secondary_color && (l = "gradient"));
    let n = {
      solid: {
        primary_color: L.p6O,
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
    if (null != r.colors) {
      var o, i, u;
      n[l] = {
        primary_color: null != (o = r.colors.primary_color) ? o : L.p6O,
        secondary_color: null != (i = r.colors.secondary_color) ? i : null,
        tertiary_color: null != (u = r.colors.tertiary_color) ? u : null
      }
    }
    v.set(r.id, {
      currentStyle: l,
      styleColors: n
    })
  })
}
let K = _().debounce(() => {
  let e = false;
  U && ((U = q().length > 0) || (e = true)), [...P].forEach(r => {
    var l;
    _().isEqual(j(r), (l = r, h.find(e => {
      let {
        id: r
      } = e;
      return r === l
    }))) && (P.delete(r), e = true)
  }), 0 === P.size && (m = false), b && _().isEqual(x, Z) && (e = true, b = false), module && k.emitChange()
}, 500);

function Q(e, r) {
  let l = M.indexOf(e);
  if (l < 0) returnfalse;
  let t = C({}, e, r),
    n = [...M];
  n[l] = t, M = n, m = true, P.add(t.id), K()
}

function j(e) {
  return M.find(r => {
    let {
      id: l
    } = r;
    return l === e
  })
}

function V(e) {
  let {
    guildId: r
  } = e;
  if (null == (t = R.Z.getProps().guild) || r !== t.id || p === L.QZA.SUBMITTING) returnfalse;
  let l = [...O.Z.getSortedRoles(t.id)];
  P.forEach(e => {
    let r = j(e),
      t = false;
    null == l.find((r, l) => {
      let {
        id: n
      } = r;
      if (n === e) return t = l, true
    }) || null == r ? P.delete(e) : l[t] = r
  }), 0 === P.size && (m = false);
  let n = new Map;
  P.forEach(e => {
    let r = v.get(e);
    null != r && n.set(e, r)
  }), v.clear(), B(r, l), n.forEach((e, r) => {
    v.set(r, e)
  }), U = false, M = [...l]
}
class Y extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk561654.Z, Chunk485386.Z)
  }
  hasChanges() {
    return m || U || b
  }
  getRoleStyleData(e) {
    return v.get(e)
  }
  get errorMessage() {
    return o
  }
  get hasSortChanges() {
    return U
  }
  get hasRoleConfigurationChanges() {
    return b
  }
  get guild() {
    return t
  }
  get editedRoleIds() {
    return Array.from(P)
  }
  get editedRoleIdsForConfigurations() {
    return w
  }
  get roles() {
    return M
  }
  get formState() {
    return p
  }
  getSortDeltas() {
    return q()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return j(e)
  }
  getPermissionSearchQuery() {
    return n
  }
  getEditedRoleConnectionConfigurationsMap() {
    return Z
  }
}
A(Y, "displayName", "GuildSettingsRolesStore");
let k = new Y(Chunk570140.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => H(),
    GUILD_SETTINGS_INIT: F,
    GUILD_SETTINGS_SET_SECTION: F,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
      let {
        roles: r
      } = e;
      if (null != M && r.length !== M.length) returnfalse;
      M = r.map(e => j(e)).filter(G.lm), U = true, K()
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function(e) {
      let {
        id: r,
        flag: l,
        allow: t
      } = e, n = j(r);
      if (null == n) returnfalse;
      let {
        permissions: o
      } = n;
      return Q(n, {
        permissions: o = t ? c.IH(o, l) : c.Od(o, l)
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
      let {
        id: r,
        permissions: l
      } = e, t = j(r);
      return null != t && Q(t, {
        permissions: l
      })
    },
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
      let {
        id: r
      } = e, l = j(r);
      return null != l && Q(l, {
        permissions: g.Hn
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
      let {
        id: r,
        name: l
      } = e, t = j(r);
      return null != t && Q(t, {
        name: l
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
      let {
        id: r,
        description: l
      } = e, t = j(r);
      return null != t && Q(t, {
        description: l
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
      let {
        id: r,
        color: l
      } = e, t = 0 === l ? null : (0, E.Rf)(l), n = j(r);
      if (null == n) returnfalse;
      let o = v.get(r);
      return null != o && (o.currentStyle = "solid", o.styleColors.solid = {
        primary_color: l,
        secondary_color: null,
        tertiary_color: null
      }, v.set(r, C({}, o)), Q(n, {
        color: l,
        colorString: t,
        colors: {
          primary_color: l,
          secondary_color: null,
          tertiary_color: null
        },
        colorStrings: null != t ? {
          primaryColor: t,
          secondaryColor: null,
          tertiaryColor: null
        } : null
      }))
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLORS: function(e) {
      let {
        id: r,
        colors: l,
        currentStyle: t
      } = e, n = j(r);
      if (null == n) returnfalse;
      let o = (0, I.DX)(l),
        i = v.get(r);
      return null != i && (i.styleColors[t] = l, i.currentStyle = t, v.set(r, C({}, i)), Q(n, {
        color: l.primary_color,
        colors: l,
        colorString: o.primaryColor,
        colorStrings: o
      }))
    },
    GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function(e) {
      let {
        id: r,
        hoist: l,
        mentionable: t
      } = e, n = j(r);
      return null != n && Q(n, {
        hoist: l,
        mentionable: t
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function(e) {
      let {
        id: r,
        icon: l,
        unicodeEmoji: t
      } = e, n = j(r);
      return null != n && Q(n, {
        icon: l,
        unicodeEmoji: t
      })
    },
    GUILD_SETTINGS_ROLE_SELECT: function(e) {
      let {
        role: r,
        searchQuery: l
      } = e;
      if (n = l, null != r) {
        if (null != j(r.id)) return void Q(r, r);
        M = [...M, r], K()
      }
    },
    GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function(e) {
      var r;
      let {
        id: l,
        currentStyle: t
      } = e, n = j(l);
      if (null == n) returnfalse;
      let o = v.get(l);
      if (null == o) returnfalse;
      v.set(l, {
        currentStyle: t,
        styleColors: o.styleColors
      });
      let i = o.styleColors[t],
        u = (0, I.DX)(i);
      return Q(n, {
        color: null != (r = i.primary_color) ? r : true,
        colors: i,
        colorString: u.primaryColor,
        colorStrings: u
      })
    },
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
      let {
        roleId: r,
        roleConnectionConfigurations: l
      } = e, t = j(r);
      if (null == t) returnfalse;
      let n = x.get(t.id);
      if (_().isEqual(n, l)) returnfalse;
      Z.set(t.id, l), x.set(t.id, l), K()
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
      let {
        roleId: r,
        roleConnectionConfigurations: l
      } = e, t = j(r);
      if (null == t) returnfalse;
      b = true, w.add(t.id), Z.set(t.id, l), K()
    },
    GUILD_SETTINGS_CLOSE: function() {
      t = null, h = M = [], x.clear(), P.clear(), v.clear(), Z.clear(), w = new Set, m = false, U = false, b = false, p = Chunk981631.QZA.CLOSED
    },
    GUILD_ROLE_CREATE: V,
    GUILD_ROLE_UPDATE: V,
    GUILD_ROLE_DELETE: function(e) {
      return w.has(e.roleId) && (w.delete(e.roleId), x.delete(e.roleId), Z.delete(e.roleId), b = false), V(e)
    },
    GUILD_SETTINGS_ROLES_SUBMITTING: function() {
      p = Chunk981631.QZA.SUBMITTING
    },
    GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
      let {
        message: r
      } = e;
      p = L.QZA.OPEN, o = r
    },
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
      H(false)
    },
    GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function(e) {
      let {
        guildId: r
      } = e;
      null != t && r === t.id && (t = (0, d.t8)(t, "features", t.features.union(new Set([L.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))))
    }
  }),
  z = k