/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Cf: () => _,
  Fq: () => l,
  HP: () => s,
  I5: () => u,
  ID: () => h,
  IO: () => E,
  It: () => c,
  W3: () => b,
  b9: () => y,
  cV: () => d,
  g_: () => p,
  iq: () => a,
  pG: () => v,
  sr: () => m,
  xn: () => f,
  z5: () => g
}), n(411104);
var r = n(544891),
  i = n(570140);
n(37234);
var o = n(981631);
async function a(e, t) {
  let {
    nick: n,
    avatar: a,
    avatarDecoration: s
  } = t;
  if (null == e) throw Error("Need guildId");
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let l = {
    nick: n,
    avatar: a,
    avatar_decoration_id: null === s ? null : null == s ? void 0 : s.id,
    avatar_decoration_sku_id: null === s ? null : null == s ? void 0 : s.skuId
  };
  try {
    let t = await r.tn.patch({
      url: o.ANM.SET_GUILD_MEMBER(e),
      body: l,
      oldFormErrors: !0,
      rejectWithError: !1
    });
    return i.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), i.Z.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: t.body,
      guildId: e
    }), t
  } catch (t) {
    let e = t.body;
    return (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), i.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    }), t
  }
}

function s(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function l(e, t) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function c() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function u(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function d(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function f(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function p(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function _(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function h(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function m(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function g(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function E() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function v() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function b() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function y() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}