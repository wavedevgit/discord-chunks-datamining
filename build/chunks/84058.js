/** Chunk was on 54597 **/
/** chunk id: 84058, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Gf: () => N,
  Jf: () => p,
  OW: () => _,
  S1: () => a,
  TW: () => u,
  TY: () => c,
  Uv: () => d,
  _l: () => S,
  d_: () => f,
  lO: () => r,
  sI: () => s,
  we: () => E
}), require("./953529.js"), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js"),
  Chunk228643 = require("./228643.js");

function s(t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: t
  })
}

function a() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function r(t, e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: t,
    flag: e,
    allow: n
  })
}

function c(t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: t
  })
}

function d(t, e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: t,
    name: e
  })
}

function _(t, e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: t,
    color: e
  })
}

function u(t, e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
    id: t,
    colors: e,
    currentStyle: n
  })
}

function p(t, e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
    id: t,
    currentStyle: e
  })
}

function E(t, e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: t,
    hoist: e,
    mentionable: n
  })
}

function S(t, e, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: t,
    icon: e,
    unicodeEmoji: n
  })
}

function f(t, e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: t,
    roleConnectionConfigurations: e
  })
}
async function N(t, e, n, s, a) {
  var r, c, d, _;
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    for (null != n && n.length > 0 && await o.Z.batchRoleUpdate(t, n); null != e && e.length > 0;) {
      let n = e.pop();
      null != n && "" !== n.name && await o.Z.updateRole(t, n.id, {
        name: n.name,
        description: null != (r = n.description) ? r : true,
        permissions: n.permissions,
        color: n.color,
        colors: null != (c = n.colors) ? c : true,
        hoist: n.hoist,
        mentionable: n.mentionable,
        icon: n.icon,
        unicodeEmoji: n.unicodeEmoji
      })
    }
    if (null != a && null != s)
      for await (let e of s) {
        let n = a.get(e);
        await (0, l.L_)(t, e, null != n ? n : [])
      }
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
    })
  } catch (t) {
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null != (_ = null == (d = t.body) ? true : d.message) ? _ : Object.values(t.body)[0]
    })
  }
}