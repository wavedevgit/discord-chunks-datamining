/** Chunk was on web.js **/
/** chunk id: 18438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => p,
  Fq: () => l,
  HP: () => s,
  I5: () => u,
  ID: () => _,
  IO: () => E,
  It: () => c,
  N_: () => g,
  W3: () => y,
  ZB: () => d,
  b9: () => O,
  g_: () => f,
  iq: () => o,
  pG: () => b,
  sr: () => h,
  z5: () => m
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o(e, t) {
  var n;
  let {
    nick: o,
    avatar: s,
    avatarDescription: l,
    avatarId: c,
    avatarDecoration: u,
    nameplate: d,
    displayNameStyles: f
  } = t;
  if (null == e) throw Error("Need guildId");
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let p = {
    nick: o,
    avatar: s,
    avatar_description: l,
    avatar_id: c,
    avatar_decoration_sku_id: true !== u ? null != (n = null == u ? true : u.skuId) ? n : null : true,
    collectibles: true !== d ? {
      nameplate: null === d ? null : {
        sku_id: d.skuId
      }
    } : true,
    display_name_font_id: true !== f ? null !== f ? f.fontId : null : true,
    display_name_effect_id: true !== f ? null !== f ? f.effectId : null : true,
    display_name_colors: true !== f ? null !== f ? f.colors : null : true
  };
  try {
    let t = await r.tn.patch({
        url: a.ANM.SET_GUILD_MEMBER(e),
        body: p,
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
    }), (null != s || null != c) && i.Z.dispatch({
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
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM",
    item: e
  })
}

function f(e) {
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

function _(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function h(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function m(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function g(e) {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES",
    displayNameStyles: e
  })
}

function E() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function b() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function y() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function O() {
  i.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}