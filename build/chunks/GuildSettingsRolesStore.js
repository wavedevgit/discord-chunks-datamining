/** Chunk was on 47841 **/
/** chunk id: 396816, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, l;
require.d(exports, {
  A: () => J,
  y: () => S
}), require("./896048.js"), require("./228524.js");
var s, a, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk867051 = require("./867051.js"),
  Chunk145643 = require("./145643.js"),
  Chunk176201 = require("./176201.js"),
  Chunk676608 = require("./676608.js"),
  Chunk317525 = require("./317525.js"),
  Chunk111613 = require("./111613.js"),
  Chunk403362 = require("./403362.js"),
  Chunk488926 = require("./488926.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js"),
  Chunk178758 = require("./178758.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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
var S = ((a = {}).SOLID = "solid", a.GRADIENT = "gradient", a.HOLOGRAPHIC = "holographic", a);
let T = new Set,
  I = Chunk652215.XlH.CLOSED,
  C = false,
  P = false,
  w = [],
  R = [],
  D = false,
  G = new Set,
  L = new Map,
  k = new Map,
  M = new Map;

function U() {
  return null == r || null == w ? [] : j.Ay.calculatePositionDeltas({
    oldOrdering: h.A.getSortedRoles(r.id),
    newOrdering: w,
    idGetter: e => e.id,
    existingPositionGetter: e => e.position,
    ascending: false
  })
}

function F(e) {
  let {
    section: t
  } = e;
  if (null != r || t !== A.BEX.ROLES) returnfalse;
  B()
}

function B() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  r = v.A.getProps().guild, C = false, P = false, l = true, T.clear(), M.clear(), I = A.XlH.OPEN, R = [...w = null != r ? [...h.A.getSortedRoles(r.id)] : []], H(null == r ? true : r.id, R), D = false, e && (k.clear(), L.forEach((e, t) => {
    k.set(t, [...e])
  }))
}

function H(e, t) {
  t.forEach(t => {
    let n = "solid",
      r = (0, x.aF)(e, t);
    null != t.colors && r && (null != t.colors.tertiary_color ? n = "holographic" : null != t.colors.secondary_color && (n = "gradient"));
    let i = {
      solid: {
        primary_color: A.TGz,
        secondary_color: null,
        tertiary_color: null
      },
      gradient: {
        primary_color: E.lO.primary_color,
        secondary_color: E.lO.secondary_color,
        tertiary_color: null
      },
      holographic: {
        primary_color: E.jl.primary_color,
        secondary_color: E.jl.secondary_color,
        tertiary_color: E.jl.tertiary_color
      }
    };
    if (null != t.colors) {
      var l, s, a;
      i[n] = {
        primary_color: null != (l = t.colors.primary_color) ? l : A.TGz,
        secondary_color: null != (s = t.colors.secondary_color) ? s : null,
        tertiary_color: null != (a = t.colors.tertiary_color) ? a : null
      }
    }
    M.set(t.id, {
      currentStyle: n,
      styleColors: i
    })
  })
}
let V = o().debounce(() => {
  let e = false;
  P && ((P = U().length > 0) || (e = true)), [...T].forEach(t => {
    var n;
    o().isEqual(z(t), (n = t, R.find(e => {
      let {
        id: t
      } = e;
      return t === n
    }))) && (T.delete(t), e = true)
  }), 0 === T.size && (C = false), D && o().isEqual(L, k) && (e = true, D = false), e && X.emitChange()
}, 500);

function K(e, t) {
  let n = w.indexOf(e);
  if (n < 0) returnfalse;
  let r = _({}, e, t),
    i = [...w];
  i[n] = r, w = i, C = true, T.add(r.id), V()
}

function z(e) {
  return w.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function Y(e) {
  let {
    guildId: t
  } = e;
  if (null == (r = v.A.getProps().guild) || t !== r.id || I === A.XlH.SUBMITTING) returnfalse;
  let n = [...h.A.getSortedRoles(r.id)];
  T.forEach(e => {
    let t = z(e),
      r = false;
    null == n.find((t, n) => {
      let {
        id: i
      } = t;
      if (i === e) return r = n, true
    }) || null == t ? T.delete(e) : n[r] = t
  }), 0 === T.size && (C = false);
  let i = new Map;
  T.forEach(e => {
    let t = M.get(e);
    null != t && i.set(e, t)
  }), M.clear(), H(t, n), i.forEach((e, t) => {
    M.set(t, e)
  }), P = false, w = [...n]
}
class W extends(s = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(v.A, m.A, h.A)
  }
  hasChanges() {
    return C || P || D
  }
  getRoleStyleData(e) {
    return M.get(e)
  }
  get errorMessage() {
    return l
  }
  get hasSortChanges() {
    return P
  }
  get hasRoleConfigurationChanges() {
    return D
  }
  get guild() {
    return r
  }
  get editedRoleIds() {
    return Array.from(T)
  }
  get editedRoleIdsForConfigurations() {
    return G
  }
  get roles() {
    return w
  }
  get formState() {
    return I
  }
  getSortDeltas() {
    return U()
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
N(W, "displayName", "GuildSettingsRolesStore");
let X = new W(Chunk73153.h, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => B(),
    GUILD_SETTINGS_INIT: F,
    GUILD_SETTINGS_SET_SECTION: F,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: function(e) {
      let {
        roles: t
      } = e;
      if (null != w && t.length !== w.length) returnfalse;
      w = t.map(e => z(e)).filter(O.Vq), P = true, V()
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
      return K(i, {
        permissions: l = r ? d.WQ(l, n) : d.TF(l, n)
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function(e) {
      let {
        id: t,
        permissions: n
      } = e, r = z(t);
      return null != r && K(r, {
        permissions: n
      })
    },
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function(e) {
      let {
        id: t
      } = e, n = z(t);
      return null != n && K(n, {
        permissions: y.x3
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_NAME: function(e) {
      let {
        id: t,
        name: n
      } = e, r = z(t);
      return null != r && K(r, {
        name: n
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function(e) {
      let {
        id: t,
        description: n
      } = e, r = z(t);
      return null != r && K(r, {
        description: n
      })
    },
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: function(e) {
      let {
        id: t,
        color: n
      } = e, r = 0 === n ? null : (0, u.Hl)(n), i = z(t);
      if (null == i) returnfalse;
      let l = M.get(t);
      return null != l && (l.currentStyle = "solid", l.styleColors.solid = {
        primary_color: n,
        secondary_color: null,
        tertiary_color: null
      }, M.set(t, _({}, l)), K(i, {
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
      let l = (0, p.K3)(n),
        s = M.get(t);
      return null != s && (s.styleColors[r] = n, s.currentStyle = r, M.set(t, _({}, s)), K(i, {
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
      return null != i && K(i, {
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
      return null != i && K(i, {
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
        if (null != z(t.id)) return void K(t, t);
        w = [...w, t], V()
      }
    },
    GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function(e) {
      var t;
      let {
        id: n,
        currentStyle: r
      } = e, i = z(n);
      if (null == i) returnfalse;
      let l = M.get(n);
      if (null == l) returnfalse;
      M.set(n, {
        currentStyle: r,
        styleColors: l.styleColors
      });
      let s = l.styleColors[r],
        a = (0, p.K3)(s);
      return K(i, {
        color: null != (t = s.primary_color) ? t : true,
        colors: s,
        colorString: a.primaryColor,
        colorStrings: a
      })
    },
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: n
      } = e, r = z(t);
      if (null == r) returnfalse;
      let i = L.get(r.id);
      if (o().isEqual(i, n)) returnfalse;
      k.set(r.id, n), L.set(r.id, n), V()
    },
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function(e) {
      let {
        roleId: t,
        roleConnectionConfigurations: n
      } = e, r = z(t);
      if (null == r) returnfalse;
      D = true, G.add(r.id), k.set(r.id, n), V()
    },
    GUILD_SETTINGS_CLOSE: function() {
      r = null, R = w = [], L.clear(), T.clear(), M.clear(), k.clear(), G = new Set, C = false, P = false, D = false, I = A.XlH.CLOSED
    },
    GUILD_ROLE_CREATE: Y,
    GUILD_ROLE_UPDATE: Y,
    GUILD_ROLE_DELETE: function(e) {
      return G.has(e.roleId) && (G.delete(e.roleId), L.delete(e.roleId), k.delete(e.roleId), D = false), Y(e)
    },
    GUILD_SETTINGS_ROLES_SUBMITTING: function() {
      I = A.XlH.SUBMITTING
    },
    GUILD_SETTINGS_ROLES_SAVE_FAIL: function(e) {
      let {
        message: t
      } = e;
      I = A.XlH.OPEN, l = t
    },
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function() {
      B(false)
    },
    GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function(e) {
      let {
        guildId: t
      } = e;
      if (null == r || t !== r.id) returnfalse;
      r = (0, b.hZ)(r, "features", new Set([...r.features, A.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]))
    },
    GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function(e) {
      let {
        guildId: t
      } = e;
      if (null == r || t !== r.id) returnfalse;
      r = (0, b.hZ)(r, "features", new Set([...r.features, A.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]))
    }
  }),
  J = X