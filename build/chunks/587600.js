/** Chunk was on web.js **/
/** chunk id: 587600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C5: () => s,
  Sk: () => a,
  yX: () => i,
  yg: () => o
}), require("./228524.js");
var Chunk392107 = require("./392107.js");

function i(e) {
  let t = {};
  if (true !== e.pendingBanner && (t.banner = e.pendingBanner), null != e.pendingBio && (t.bio = e.pendingBio), null != e.pendingPronouns && (t.pronouns = e.pendingPronouns), true !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), true !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), true !== e.pendingProfileEffect) {
    var n, r;
    t.profile_effect_sku_id = null != (n = null == (r = e.pendingProfileEffect) ? true : r.skuId) ? n : null
  }
  return t
}

function a(e) {
  let t = {};
  if (true !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName), true !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), true !== e.pendingAvatar) {
    let {
      pendingAvatar: n
    } = e;
    null === n ? t.avatar = null : n.assetOrigin === r.E.ARCHIVED_ASSET ? t.avatarId = n.originalAsset.id : (t.avatar = n.imageUri, t.avatarDescription = n.description)
  }
  return true !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), true !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles), t
}

function s(e) {
  let t = {};
  if (true !== e.pendingAvatar) {
    let {
      pendingAvatar: n
    } = e;
    null === n ? t.avatar = null : n.assetOrigin === r.E.ARCHIVED_ASSET ? t.avatarId = n.originalAsset.id : (t.avatar = n.imageUri, t.avatarDescription = n.description)
  }
  if (true !== e.pendingNickname) {
    var n;
    t.nick = null != (n = e.pendingNickname) ? n : ""
  }
  return true !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), true !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), true !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles), t
}

function o(e) {
  let t = {};
  return true !== e.pendingPrimaryGuildId && (t.primaryGuildId = e.pendingPrimaryGuildId), t
}