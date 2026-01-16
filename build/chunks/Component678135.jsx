/** Chunk was on web.js **/
/** chunk id: 678135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk518950 = require("./518950.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk150039 = require("./150039.js"),
  Chunk397689 = require("./397689.jsx"),
  Chunk656229 = require("./656229.jsx"),
  Chunk724241 = require("./724241.jsx"),
  Chunk890876 = require("./890876.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357086 = require("./357086.js");

function I(e) {
  var t, n;
  let {
    user: i,
    guild: I,
    canUsePremiumCustomization: T,
    onUpsellClick: C,
    pendingBanner: A,
    pendingAccentColor: N,
    pendingBio: P,
    pendingPronouns: w,
    pendingAvatar: R,
    pendingAvatarDecoration: D,
    pendingNickname: x,
    pendingGlobalName: L,
    pendingThemeColors: j,
    pendingProfileEffect: M,
    pendingLegacyUsernameDisabled: k,
    pendingDisplayNameStyles: U,
    pendingPrimaryGuildId: G,
    avatarClassName: Z,
    containerClassName: F,
    isTryItOut: B = false,
    disabledInputs: V = false,
    hideCustomStatus: H = false,
    hideBioSection: Y = false,
    hideMessageInput: W = true,
    pendingBadges: K,
    shouldOpenBadgeTooltip: z,
    hideExampleButton: q = false,
    interactive: Q = true
  } = e, X = (0, c.ZP)(i.id, null == I ? true : I.id), J = (0, o.e7)([_.ZP], () => null != I ? _.ZP.getMember(I.id, i.id) : null), $ = (0, h.Ys)({
    pendingValue: D,
    userValue: null == i ? true : i.avatarDecoration,
    guildValue: null == J ? true : J.avatarDecoration,
    guildId: null == I ? true : I.id
  }), {
    avatarSrc: ee,
    avatarDecorationSrc: et
  } = (0, d.Z)({
    userId: null == i ? true : i.id,
    guildId: null == I ? true : I.id,
    avatarDecorationOverride: $,
    avatarOverride: R,
    size: s.EFr.SIZE_80,
    showPending: true
  }), en = (0, h.Ys)({
    pendingValue: M,
    userValue: null == X || null == (t = X._userProfile) ? true : t.profileEffect,
    guildValue: null == X || null == (n = X._guildMemberProfile) ? true : n.profileEffect,
    guildId: null == I ? true : I.id
  }), {
    theme: er,
    primaryColor: ei
  } = (0, u.Z)({
    user: i,
    displayProfile: X,
    pendingThemeColors: j,
    isPreview: T
  }), ea = (0, r.jsxs)(f.Z, {
    user: i,
    displayProfile: X,
    themeType: O.l.POPOUT,
    pendingThemeColors: j,
    className: a()(S.container, F),
    forceShowPremium: T,
    children: [(0, r.jsxs)("div", {
      className: S.header,
      children: [(0, r.jsx)(g.Z, {
        user: i,
        displayProfile: X,
        guildId: null == I ? true : I.id,
        canUsePremiumCustomization: T,
        pendingBanner: A,
        pendingAccentColor: N,
        isTryItOut: B,
        disabledInputs: V,
        onUpsellClick: () => null == C ? true : C({
          object: y.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, r.jsx)(m.Z, {
        user: i,
        guild: I,
        displayProfile: X,
        canUsePremiumCustomization: T,
        previewAvatar: ee,
        previewAvatarDecorationSrc: et,
        previewTheme: er,
        previewPrimaryColor: ei,
        className: Z,
        disabledInputs: V,
        isTryItOut: B,
        onUpsellClick: () => null == C ? true : C({
          object: y.qAy.AVATAR
        })
      }), !H && (0, r.jsx)(p.Z, {
        user: i,
        themeType: O.l.POPOUT,
        disableToolbar: V
      })]
    }), (0, r.jsx)(E.Z, {
      user: i,
      displayProfile: X,
      guild: I,
      pendingAvatar: R,
      pendingNickname: x,
      pendingGlobalName: L,
      pendingBio: P,
      pendingPronouns: w,
      pendingLegacyUsernameDisabled: k,
      pendingDisplayNameStyles: U,
      pendingPrimaryGuildId: G,
      isTryItOut: B,
      hideBioSection: Y,
      pendingBadges: K,
      shouldOpenBadgeTooltip: z
    }), (0, r.jsx)(b.Z, {
      user: i,
      hideMessageInput: W,
      hideExampleButton: q
    }), null != en && (0, r.jsx)(l.Z, {
      skuId: en.skuId
    })]
  });
  return Q ? ea : (0, r.jsx)("div", {
    role: "img",
    "aria-label": v.intl.string(v.t.ayozFl),
    children: (0, r.jsx)(s.Rny, {
      children: ea
    })
  })
}