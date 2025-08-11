/** Chunk was on web.js **/
/** chunk id: 946724, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o;
require.d(exports, {
  Z: () => em,
  g: () => A
}), require("./388685.js"), require("./953529.js");
var a, Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
var A = function(e) {
  return e.SOLID = "solid", e.GRADIENT = "gradient", e.HOLOGRAPHIC = "holographic", e
}({});
let N = new Set,
  C = Chunk981631.QZA.CLOSED,
  R = false,
  P = false,
  w = [],
  D = [],
  L = false,
  x = new Set,
  M = new Map,
  k = new Map,
  j = new Map;

function U() {
  return null == r || null == w ? [] : Chunk990492.ZP.calculatePositionDeltas({
    oldOrdering: Chunk485386.Z.getSortedRoles(r.id),
    newOrdering: w,
    idGetter: e => e.id,
    existingPositionGetter: e => e.position,
    ascending: false
  })
}

function G(e) {
  let {
    section: t
  } = e;
  if (null != r || t !== v.pNK.ROLES) returnfalse;
  B()
}

function B() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
  r = Chunk999382.Z.getProps().guild, R = false, P = false, o = true, N.clear(), j.clear(), C = Chunk981631.QZA.OPEN, D = [...w = null != r ? [...Chunk485386.Z.getSortedRoles(r.id)] : []], Z(null == r ? true : r.id, D), L = false, module && (k.clear(), M.forEach((e, t) => {
    k.set(t, [...e])
  }))
}

function Z(e, t) {
  t.forEach(t => {
    let n = "solid",
      r = (0, m.zI)(e, t);
    null != t.colors && r && (null != t.colors.tertiary_color ? n = "holographic" : null != t.colors.secondary_color && (n = "gradient"));
    let i = e_();
    if (null != t.colors) {
      var o, a, s;
      i[n] = {
        primary_color: null != (o = t.colors.primary_color) ? o : v.p6O,
        secondary_color: null != (a = t.colors.secondary_color) ? a : null,
        tertiary_color: null != (s = t.colors.tertiary_color) ? s : null
      }
    }
    j.set(t.id, {
      currentStyle: n,
      styleColors: i
    })
  })
}

function F() {
  r = null, D = w = [], M.clear(), N.clear(), j.clear(), k.clear(), x = new Set, R = false, P = false, L = false, C = Chunk981631.QZA.CLOSED
}

function V(e) {
  let {
    roles: t
  } = e;
  if (null != w && t.length !== w.length) returnfalse;
  w = t.map(e => ea(e)).filter(b.lm), P = true, $()
}

function H(e) {
  let {
    id: t,
    flag: n,
    allow: r
  } = e, i = ea(t);
  if (null == i) returnfalse;
  let {
    permissions: o
  } = i;
  return et(i, {
    permissions: o = r ? c.IH(o, n) : c.Od(o, n)
  })
}

function Y(e) {
  let {
    id: t,
    permissions: n
  } = e, r = ea(t);
  return null != r && et(r, {
    permissions: n
  })
}

function W(e) {
  let {
    id: t
  } = e, n = ea(t);
  return null != n && et(n, {
    permissions: y.Hn
  })
}

function K(e) {
  let {
    id: t,
    name: n
  } = e, r = ea(t);
  return null != r && et(r, {
    name: n
  })
}

function z(e) {
  let {
    id: t,
    description: n
  } = e, r = ea(t);
  return null != r && et(r, {
    description: n
  })
}

function q(e) {
  let {
    id: t,
    color: n
  } = e, r = 0 === n ? null : (0, u.Rf)(n), i = ea(t);
  if (null == i) returnfalse;
  let o = j.get(t);
  return null != o && (o.currentStyle = "solid", o.styleColors.solid = {
    primary_color: n,
    secondary_color: null,
    tertiary_color: null
  }, j.set(t, S({}, o)), et(i, {
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
}

function X(e) {
  let {
    id: t,
    colors: n,
    currentStyle: r
  } = e, i = ea(t);
  if (null == i) returnfalse;
  let o = (0, h.DX)(n),
    a = j.get(t);
  return null != a && (a.styleColors[r] = n, a.currentStyle = r, j.set(t, S({}, a)), et(i, {
    color: n.primary_color,
    colors: n,
    colorString: o.primaryColor,
    colorStrings: o
  }))
}

function Q(e) {
  let {
    id: t,
    hoist: n,
    mentionable: r
  } = e, i = ea(t);
  return null != i && et(i, {
    hoist: n,
    mentionable: r
  })
}

function J(e) {
  let {
    id: t,
    icon: n,
    unicodeEmoji: r
  } = e, i = ea(t);
  return null != i && et(i, {
    icon: n,
    unicodeEmoji: r
  })
}
let $ = l().debounce(() => {
  let e = false;
  P && ((P = U().length > 0) || (e = true)), [...N].forEach(t => {
    l().isEqual(ea(t), es(t)) && (N.delete(t), e = true)
  }), 0 === N.size && (R = false), L && l().isEqual(M, k) && (e = true, L = false), module && eh.emitChange()
}, 500);

function ee(e) {
  let {
    role: t,
    searchQuery: n
  } = e;
  if (i = n, null != t) {
    if (null != ea(t.id)) return void et(t, t);
    w = [...w, t], $()
  }
}

function et(e, t) {
  let n = w.indexOf(e);
  if (n < 0) returnfalse;
  let r = S({}, e, t),
    i = [...w];
  i[n] = r, w = i, R = true, N.add(r.id), $()
}

function en(e) {
  var t;
  let {
    id: n,
    currentStyle: r
  } = e, i = ea(n);
  if (null == i) returnfalse;
  let o = j.get(n);
  if (null == o) returnfalse;
  j.set(n, {
    currentStyle: r,
    styleColors: o.styleColors
  });
  let a = o.styleColors[r],
    s = (0, h.DX)(a);
  return et(i, {
    color: null != (t = a.primary_color) ? t : true,
    colors: a,
    colorString: s.primaryColor,
    colorStrings: s
  })
}

function er(e) {
  let {
    roleId: t,
    roleConnectionConfigurations: n
  } = e, r = ea(t);
  if (null == r) returnfalse;
  let i = M.get(r.id);
  if (l().isEqual(i, n)) returnfalse;
  k.set(r.id, n), M.set(r.id, n), $()
}

function ei(e) {
  let {
    roleId: t,
    roleConnectionConfigurations: n
  } = e, r = ea(t);
  if (null == r) returnfalse;
  L = true, x.add(r.id), k.set(r.id, n), $()
}

function eo(e) {
  let {
    guildId: t
  } = e;
  null != r && t === r.id && (r = (0, _.t8)(r, "features", r.features.union(new Set([v.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))))
}

function ea(e) {
  return w.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function es(e) {
  return D.find(t => {
    let {
      id: n
    } = t;
    return n === e
  })
}

function el(e) {
  return x.has(e.roleId) && (x.delete(e.roleId), M.delete(e.roleId), k.delete(e.roleId), L = false), ec(e)
}

function ec(e) {
  let {
    guildId: t
  } = e;
  if (null == (r = O.Z.getProps().guild) || t !== r.id || C === v.QZA.SUBMITTING) returnfalse;
  let n = [...g.Z.getSortedRoles(r.id)];
  N.forEach(e => {
    let t = ea(e),
      r = false;
    null == n.find((t, n) => {
      let {
        id: i
      } = t;
      if (i === e) return r = n, true
    }) || null == t ? N.delete(e) : n[r] = t
  }), 0 === N.size && (R = false);
  let i = new Map;
  N.forEach(e => {
    let t = j.get(e);
    null != t && i.set(e, t)
  }), j.clear(), Z(t, n), i.forEach((e, t) => {
    j.set(t, e)
  }), P = false, w = [...n]
}

function eu(e) {
  let {
    message: t
  } = e;
  C = v.QZA.OPEN, o = t
}

function ed() {
  B(false)
}

function ef() {
  C = Chunk981631.QZA.SUBMITTING
}

function e_() {
  return {
    solid: {
      primary_color: Chunk981631.p6O,
      secondary_color: null,
      tertiary_color: null
    },
    gradient: {
      primary_color: Chunk141006.Eg.primary_color,
      secondary_color: Chunk141006.Eg.secondary_color,
      tertiary_color: null
    },
    holographic: {
      primary_color: Chunk141006.SK.primary_color,
      secondary_color: Chunk141006.SK.secondary_color,
      tertiary_color: Chunk141006.SK.tertiary_color
    }
  }
}
class ep extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk999382.Z, Chunk561654.Z, Chunk485386.Z)
  }
  hasChanges() {
    return R || P || L
  }
  getRoleStyleData(e) {
    return j.get(e)
  }
  get errorMessage() {
    return o
  }
  get hasSortChanges() {
    return P
  }
  get hasRoleConfigurationChanges() {
    return L
  }
  get guild() {
    return r
  }
  get editedRoleIds() {
    return Array.from(N)
  }
  get editedRoleIdsForConfigurations() {
    return x
  }
  get roles() {
    return w
  }
  get formState() {
    return C
  }
  getSortDeltas() {
    return U()
  }
  showNotice() {
    return this.hasChanges()
  }
  getRole(e) {
    return ea(e)
  }
  getPermissionSearchQuery() {
    return i
  }
  getEditedRoleConnectionConfigurationsMap() {
    return k
  }
}
T(ep, "displayName", "GuildSettingsRolesStore");
let eh = new ep(Chunk570140.Z, __OVERLAY__ ? {} : {
    GUILD_SETTINGS_ROLES_INIT: () => B(),
    GUILD_SETTINGS_INIT: G,
    GUILD_SETTINGS_SET_SECTION: G,
    GUILD_SETTINGS_ROLES_SORT_UPDATE: V,
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: H,
    GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: Y,
    GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: W,
    GUILD_SETTINGS_ROLES_UPDATE_NAME: K,
    GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: z,
    GUILD_SETTINGS_ROLES_UPDATE_COLOR: q,
    GUILD_SETTINGS_ROLES_UPDATE_COLORS: X,
    GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: Q,
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: J,
    GUILD_SETTINGS_ROLE_SELECT: ee,
    GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: en,
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: er,
    GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: ei,
    GUILD_SETTINGS_CLOSE: F,
    GUILD_ROLE_CREATE: ec,
    GUILD_ROLE_UPDATE: ec,
    GUILD_ROLE_DELETE: el,
    GUILD_SETTINGS_ROLES_SUBMITTING: ef,
    GUILD_SETTINGS_ROLES_SAVE_FAIL: eu,
    GUILD_SETTINGS_ROLES_SAVE_SUCCESS: ed,
    GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eo
  }),
  em = eh