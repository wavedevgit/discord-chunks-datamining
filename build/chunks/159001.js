/** Chunk was on web.js **/
/** chunk id: 159001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Er: () => p,
  GL: () => s,
  IM: () => b,
  Iz: () => f,
  JJ: () => o,
  Oz: () => _,
  RE: () => y,
  V2: () => l,
  WR: () => d,
  Zz: () => m,
  go: () => E,
  mZ: () => g,
  sy: () => c,
  x8: () => O,
  y3: () => h,
  zq: () => u
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
async function s(e, t) {
  var n;
  let {
    nick: s,
    avatar: o,
    avatarDescription: l,
    avatarId: c,
    avatarDecoration: u,
    nameplate: d,
    displayNameStyles: f
  } = t;
  if (null == e) throw Error("Need guildId");
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let p = {
    nick: s,
    avatar: o,
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
    let t = await r.Bo.patch({
        url: a.Rsh.SET_GUILD_MEMBER(e),
        body: p,
        oldFormErrors: true,
        rejectWithError: false
      }),
      n = t.body;
    return i.h.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), i.h.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: n,
      guildId: e
    }), (null != o || null != c) && i.h.dispatch({
      type: "RECENT_AVATARS_UPDATE"
    }), t
  } catch (t) {
    let e = t.body;
    return (null == e ? true : e.username) != null && (e.nick = e.username, delete e.username), i.h.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    }), t
  }
}

function o(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function l(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e
  })
}

function c() {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function u(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function d(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM",
    item: e
  })
}

function f(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function p(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function _(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function h(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function m(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function g(e) {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES",
    displayNameStyles: e
  })
}

function E() {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function y() {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function b() {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function O() {
  i.h.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}