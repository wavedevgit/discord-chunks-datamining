/** Chunk was on 54597 **/
n.d(t, {
  Gf: () => N,
  Jf: () => p,
  OW: () => _,
  S1: () => l,
  TW: () => u,
  TY: () => c,
  Uv: () => d,
  _l: () => m,
  d_: () => E,
  lO: () => r,
  sI: () => s,
  we: () => f
}), n(953529), n(388685);
var i = n(570140),
  a = n(749210),
  o = n(228643);

function s(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function l() {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function r(e, t, n) {
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
async function N(e, t, n, s, l) {
  var r, c, d, _;
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    for (null != n && n.length > 0 && await a.Z.batchRoleUpdate(e, n); null != t && t.length > 0;) {
      let n = t.pop();
      null != n && "" !== n.name && await a.Z.updateRole(e, n.id, {
        name: n.name,
        description: null != (r = n.description) ? r : void 0,
        permissions: n.permissions,
        color: n.color,
        colors: null != (c = n.colors) ? c : void 0,
        hoist: n.hoist,
        mentionable: n.mentionable,
        icon: n.icon,
        unicodeEmoji: n.unicodeEmoji
      })
    }
    if (null != l && null != s)
      for await (let t of s) {
        let n = l.get(t);
        await (0, o.L_)(e, t, null != n ? n : [])
      }
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
    })
  } catch (e) {
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null != (_ = null == (d = e.body) ? void 0 : d.message) ? _ : Object.values(e.body)[0]
    })
  }
}