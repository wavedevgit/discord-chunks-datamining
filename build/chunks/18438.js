/** Chunk was on web.js **/
/** chunk id: 18438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => p,
  Fq: () => l,
  HP: () => s,
  I5: () => u,
  ID: () => h,
  IO: () => b,
  It: () => c,
  RH: () => E,
  W3: () => O,
  b9: () => v,
  cV: () => d,
  g_: () => _,
  iq: () => o,
  pG: () => y,
  sr: () => m,
  xn: () => f,
  z5: () => g
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o(e, t) {
  let {
    nick: n,
    avatar: o,
    avatarDescription: s,
    avatarId: l,
    avatarDecoration: c,
    nameplate: u
  } = t;
  if (null == e) throw Error("Need guildId");
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let d = {
    nick: n,
    avatar: o,
    avatar_description: s,
    avatar_id: l,
    avatar_decoration_id: null === c ? null : null == c ? true : c.id,
    avatar_decoration_sku_id: null === c ? null : null == c ? true : c.skuId,
    collectibles: true !== u ? {
      nameplate: null === u ? null : {
        id: u.id,
        sku_id: u.skuId
      }
    } : true
  };
  try {
    let t = await r.tn.patch({
        url: a.ANM.SET_GUILD_MEMBER(e),
        body: d,
        oldFormErrors: true,
        rejectWithError: false
      }),
      n = t.body;
    return i.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), i.Z.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: n,
      guildId: e
    }), (null != o || null != l) && i.Z.dispatch({
      type: "RECENT_AVATARS_UPDATE"
    }), t
  } catch (t) {
    let e = t.body;
    return (null == e ? true : e.username) != null && (e.nick = e.username, delete e.username), i.Z.dispatch({
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

function l(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e
  })
}

function c() {
  Chunk570140.Z.dispatch({
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

function _(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function p(e) {
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

function E(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE",
    nameplate: e
  })
}

function b() {
  Chunk570140.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function y() {
  Chunk570140.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function O() {
  Chunk570140.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function v() {
  Chunk570140.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}