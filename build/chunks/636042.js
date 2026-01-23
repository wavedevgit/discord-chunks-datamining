/** Chunk was on 71905 **/
/** chunk id: 636042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  C5: () => u,
  E9: () => h,
  JY: () => S,
  Ts: () => s,
  Ul: () => l,
  Y_: () => c,
  ZH: () => _,
  n3: () => E,
  nK: () => d,
  pn: () => O,
  uc: () => p,
  yy: () => r
}), require("./228524.js"), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk686956 = require("./686956.js"),
  Chunk619006 = require("./619006.js");

function r(t) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
    roles: t
  })
}

function s() {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_INIT"
  })
}

function l(t, e, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
    id: t,
    flag: e,
    allow: n
  })
}

function c(t) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
    id: t
  })
}

function d(t, e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
    id: t,
    name: e
  })
}

function _(t, e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
    id: t,
    color: e
  })
}

function p(t, e, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
    id: t,
    colors: e,
    currentStyle: n
  })
}

function u(t, e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
    id: t,
    currentStyle: e
  })
}

function h(t, e, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
    id: t,
    hoist: e,
    mentionable: n
  })
}

function E(t, e, n) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
    id: t,
    icon: e,
    unicodeEmoji: n
  })
}

function O(t, e) {
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: t,
    roleConnectionConfigurations: e
  })
}
async function S(t, e, n, r, s) {
  var l, c, d, _;
  let p = arguments.length > 5 && true !== arguments[5] ? arguments[5] : {};
  i.h.dispatch({
    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
  });
  try {
    for (null != n && n.length > 0 && await o.A.batchRoleUpdate(t, n); null != e && e.length > 0;) {
      let n = e.pop();
      null != n && "" !== n.name && await o.A.updateRole(t, n.id, {
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
    if (null != s && null != r)
      for await (let e of r) {
        let n = s.get(e);
        await (0, a.qK)(t, e, null != n ? n : [])
      }
    i.h.dispatch({
      type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
    })
  } catch (t) {
    if (i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
        message: null != (d = null == (_ = t.body) ? true : _.message) ? d : Object.values(t.body)[0]
      }), p.throwErr) throw t
  }
}