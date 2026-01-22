/** Chunk was on 71905 **/
/** chunk id: 636042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C5: () => u,
  E9: () => h,
  JY: () => S,
  Ts: () => c,
  Ul: () => s,
  Y_: () => l,
  ZH: () => p,
  n3: () => E,
  nK: () => d,
  pn: () => O,
  uc: () => _,
  yy: () => r
}), require("./228524.js"), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk686956 = require("./686956.js"),
  Chunk619006 = require("./619006.js");

function r(e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: e
  })
}

function c() {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function s(e, t, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: e,
    flag: t,
    allow: n
  })
}

function l(e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: e
  })
}

function d(e, t) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: e,
    name: t
  })
}

function p(e, t) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: e,
    color: t
  })
}

function _(e, t, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
    id: e,
    colors: t,
    currentStyle: n
  })
}

function u(e, t) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
    id: e,
    currentStyle: t
  })
}

function h(e, t, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: e,
    hoist: t,
    mentionable: n
  })
}

function E(e, t, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: e,
    icon: t,
    unicodeEmoji: n
  })
}

function O(e, t) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: e,
    roleConnectionConfigurations: t
  })
}
async function S(e, t, n, r, c) {
  var s, l, d, p;
  let _ = arguments.length > 5 && true !== arguments[5] ? arguments[5] : {};
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    for (null != n && n.length > 0 && await a.A.batchRoleUpdate(e, n); null != t && t.length > 0;) {
      let n = t.pop();
      null != n && "" !== n.name && await a.A.updateRole(e, n.id, {
        name: n.name,
        description: null != (s = n.description) ? s : true,
        permissions: n.permissions,
        color: n.color,
        colors: null != (l = n.colors) ? l : true,
        hoist: n.hoist,
        mentionable: n.mentionable,
        icon: n.icon,
        unicodeEmoji: n.unicodeEmoji
      })
    }
    if (null != c && null != r)
      for await (let t of r) {
        let n = c.get(t);
        await (0, o.qK)(e, t, null != n ? n : [])
      }
    i.h.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
    })
  } catch (e) {
    if (i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
        message: null != (d = null == (p = e.body) ? true : p.message) ? d : Object.values(e.body)[0]
      }), _.throwErr) throw e
  }
}