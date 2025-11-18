/** Chunk was on 77419 **/
/** chunk id: 84058, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Gf: () => T,
  Jf: () => s,
  OW: () => d,
  S1: () => c,
  TW: () => S,
  TY: () => r,
  Uv: () => p,
  _l: () => I,
  d_: () => u,
  lO: () => l,
  sI: () => a,
  we: () => E
}), require("./953529.js"), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js"),
  Chunk228643 = require("./228643.js");

function a(e) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function c() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function l(e, t, o) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: e,
    flag: t,
    allow: o
  })
}

function r(e) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: e
  })
}

function p(e, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: e,
    name: t
  })
}

function d(e, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: e,
    color: t
  })
}

function S(e, t, o) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
    id: e,
    colors: t,
    currentStyle: o
  })
}

function s(e, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
    id: e,
    currentStyle: t
  })
}

function E(e, t, o) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: e,
    hoist: t,
    mentionable: o
  })
}

function I(e, t, o) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: e,
    icon: t,
    unicodeEmoji: o
  })
}

function u(e, t) {
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: e,
    roleConnectionConfigurations: t
  })
}
async function T(e, t, o, a, c) {
  var l, r, p, d;
  n.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    for (null != o && o.length > 0 && await i.Z.batchRoleUpdate(e, o); null != t && t.length > 0;) {
      let o = t.pop();
      null != o && "" !== o.name && await i.Z.updateRole(e, o.id, {
        name: o.name,
        description: null != (l = o.description) ? l : true,
        permissions: o.permissions,
        color: o.color,
        colors: null != (r = o.colors) ? r : true,
        hoist: o.hoist,
        mentionable: o.mentionable,
        icon: o.icon,
        unicodeEmoji: o.unicodeEmoji
      })
    }
    if (null != c && null != a)
      for await (let t of a) {
        let o = c.get(t);
        await (0, _.L_)(e, t, null != o ? o : [])
      }
    n.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
    })
  } catch (e) {
    n.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null != (d = null == (p = e.body) ? true : p.message) ? d : Object.values(e.body)[0]
    })
  }
}