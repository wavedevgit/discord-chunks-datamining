/** Chunk was on 54597 **/
n.d(t, {
  Gf: () => N,
  OW: () => u,
  S1: () => r,
  TY: () => c,
  Uv: () => d,
  _l: () => p,
  d_: () => f,
  lO: () => l,
  sI: () => s,
  we: () => _
}), n(266796), n(47120);
var i = n(570140),
  a = n(749210),
  o = n(228643);

function s(e) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function r() {
  i.Z.dispatch({
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

function u(e, t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: e,
    color: t
  })
}

function _(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: e,
    hoist: t,
    mentionable: n
  })
}

function p(e, t, n) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: e,
    icon: t,
    unicodeEmoji: n
  })
}

function f(e, t) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: e,
    roleConnectionConfigurations: t
  })
}
async function N(e, t, n, s, r) {
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    let i = async () => {
      if (null == t || 0 === t.length) return;
      let n = t.pop();
      if (null == n || "" === n.name) return i();
      await a.Z.updateRole(e, n.id, {
        name: n.name,
        description: n.description,
        permissions: n.permissions,
        color: n.color,
        hoist: n.hoist,
        mentionable: n.mentionable,
        icon: n.icon,
        unicodeEmoji: n.unicodeEmoji
      }).then(i, i)
    };
    if (null != n && n.length > 0 ? await a.Z.batchRoleUpdate(e, n).then(i, i) : await i(), null != r && null != s)
      for await (let t of s) {
        let n = r.get(t);
        await (0, o.L_)(e, t, null != n ? n : [])
      }
  } catch (e) {
    var l, c;
    i.Z.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
      message: null !== (c = null === (l = e.body) || void 0 === l ? void 0 : l.message) && void 0 !== c ? c : Object.values(e.body)[0]
    });
    return
  }
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
  })
}