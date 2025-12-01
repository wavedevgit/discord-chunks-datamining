/** Chunk was on web.js **/
/** chunk id: 809206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FD: () => f,
  I5: () => E,
  Mn: () => h,
  NI: () => S,
  OU: () => P,
  P6: () => C,
  S2: () => m,
  V3: () => g,
  W0: () => b,
  W3: () => A,
  ZB: () => O,
  Zy: () => p,
  b9: () => I,
  e1: () => y,
  iR: () => N,
  s4: () => v,
  si: () => T,
  ss: () => _
});
var Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk703656 = require("./703656.js"),
  Chunk893776 = require("./893776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk792101 = require("./792101.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function p() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function _(e, t) {
  let n = t ? c.ANM.DELETE_ACCOUNT : c.ANM.DISABLE_ACCOUNT;
  return r.tn.post({
    url: n,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    l.Z.logoutInternal(), (0, s.uL)(c.Z5c.DEFAULT_LOGGED_OUT)
  })
}
async function m(e) {
  let t = await r.tn.patch({
      url: c.ANM.ME,
      oldFormErrors: true,
      body: e,
      rejectWithError: false
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, o.Z.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? true : e.password) != null && (null == e ? true : e.new_password) != null && o.Z.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return o.Z.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function h(e) {
  var t, n;
  let {
    username: r,
    discriminator: a,
    email: s,
    emailToken: l,
    password: d,
    avatar: f,
    avatarDescription: p,
    avatarId: _,
    avatarDecoration: h,
    newPassword: g,
    globalName: E,
    legacyUsername: b,
    nameplate: y,
    primaryGuildId: O,
    displayNameStyles: v
  } = e;
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  });
  let S = {
    username: r,
    email: s,
    email_token: l,
    password: d,
    avatar: f,
    avatar_description: p,
    avatar_id: _,
    discriminator: a,
    global_name: E,
    legacy_username: b,
    new_password: g
  };
  true !== h && (S.avatar_decoration_sku_id = null != (t = null == h ? true : h.skuId) ? t : null), true !== y && (S.nameplate_sku_id = null != (n = null == y ? true : y.skuId) ? n : null), true !== O && (S.primary_guild_id = O), null != v ? (S.display_name_font_id = v.fontId, S.display_name_effect_id = v.effectId, S.display_name_colors = v.colors) : null === v && (S.display_name_font_id = null, S.display_name_effect_id = null, S.display_name_colors = null);
  let I = i.K.get(c.JkL),
    T = (0, u.xJ)();
  null != T && null != I && (S.push_provider = T, S.push_token = I);
  let A = i.K.get(c.scU);
  return null != u.mv && null != A && (S.push_voip_provider = u.mv, S.push_voip_token = A), m(S).then(e => (o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
  }), (null != f || null != _) && o.Z.dispatch({
    type: "RECENT_AVATARS_UPDATE"
  }), e), e => (o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function g(e) {
  return r.tn.post({
    url: c.ANM.USER_HARVEST,
    body: {
      backends: e
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}

function E(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? a.uv.announce(d.intl.string(d.t["f1+oNk"])) : a.uv.announce(d.intl.string(d.t.NstziV))
}

function b(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function y(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED",
    legacyUsernameDisabled: e
  })
}

function O(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM",
    item: e
  })
}

function v(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID",
    primaryGuildId: e
  })
}

function S(e) {
  o.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES",
    displayNameStyles: e
  })
}

function I() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function T() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function A() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function C() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function N() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED"
  })
}

function P() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
  })
}