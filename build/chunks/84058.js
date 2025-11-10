/** Chunk was on 54597 **/
/** chunk id: 84058, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gf: () => N,
  Jf: () => p,
  OW: () => _,
  S1: () => r,
  TW: () => u,
  TY: () => c,
  Uv: () => d,
  _l: () => m,
  d_: () => E,
  lO: () => l,
  sI: () => s,
  we: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js"),
  Chunk228643 = require("./228643.js");

function s(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function r() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function l(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: e,
    flag: t,
    allow: n
  })
}

function c(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: e
  })
}

function d(e, t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: e,
    name: t
  })
}

function _(e, t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: e,
    color: t
  })
}

function u(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
    id: e,
    colors: t,
    currentStyle: n
  })
}

function p(e, t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
    id: e,
    currentStyle: t
  })
}

function f(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: e,
    hoist: t,
    mentionable: n
  })
}

function m(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: e,
    icon: t,
    unicodeEmoji: n
  })
}

function E(e, t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: e,
    roleConnectionConfigurations: t
  })
}
async function N(e, t, n, s, r) {
  var l, c, d, _;
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    for (null != n && n.length > 0 && await a.Z.batchRoleUpdate(e, n); null != t && t.length > 0;) {
      let n = t.pop();
      null != n && "" !== n.name && await a.Z.updateRole(e, n.id, {
        name: n.name,
        description: null != (l = n.description) ? l : true,
        permissions: n.permissions,
        color: n.color,
        colors: null != (c = n.colors) ? c : true,
        hoist: n.hoist,
        mentionable: n.mentionable,
        icon: n.icon,
        unicodeEmoji: n.unicodeEmoji
      })
    }
    if (null != r && null != s)
      for await (let t of s) {
        let n = r.get(t);
        await (0, o.L_)(e, t, null != n ? n : [])
      }
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
    })
  } catch (e) {
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null != (_ = null == (d = e.body) ? true : d.message) ? _ : Object.values(e.body)[0]
    })
  }
}