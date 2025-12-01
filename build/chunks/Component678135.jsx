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
  Chunk448239 = require("./448239.js");

function I(e) {
  var t, n;
  let {
    user: i,
    guild: I,
    canUsePremiumCustomization: T,
    onUpsellClick: A,
    pendingBanner: C,
    pendingAccentColor: N,
    pendingBio: P,
    pendingPronouns: R,
    pendingAvatar: w,
    pendingAvatarDecoration: D,
    pendingNickname: x,
    pendingGlobalName: L,
    pendingThemeColors: j,
    pendingProfileEffect: M,
    pendingLegacyUsernameDisabled: k,
    pendingDisplayNameStyles: U,
    avatarClassName: G,
    containerClassName: Z,
    isTryItOut: B = false,
    disabledInputs: F = false,
    hideCustomStatus: V = false,
    hideBioSection: H = false,
    hideMessageInput: Y = true,
    pendingBadges: W,
    shouldOpenBadgeTooltip: K,
    hideExampleButton: z = false,
    interactive: q = true
  } = e, Q = (0, c.ZP)(i.id, null == I ? true : I.id), X = (0, o.e7)([_.ZP], () => null != I ? _.ZP.getMember(I.id, i.id) : null), J = (0, m.Ys)({
    pendingValue: D,
    userValue: null == i ? true : i.avatarDecoration,
    guildValue: null == X ? true : X.avatarDecoration,
    guildId: null == I ? true : I.id
  }), {
    avatarSrc: $,
    avatarDecorationSrc: ee
  } = (0, d.Z)({
    userId: null == i ? true : i.id,
    guildId: null == I ? true : I.id,
    avatarDecorationOverride: J,
    avatarOverride: w,
    size: s.EFr.SIZE_80,
    showPending: true
  }), et = (0, m.Ys)({
    pendingValue: M,
    userValue: null == Q || null == (t = Q._userProfile) ? true : t.profileEffect,
    guildValue: null == Q || null == (n = Q._guildMemberProfile) ? true : n.profileEffect,
    guildId: null == I ? true : I.id
  }), {
    theme: en,
    primaryColor: er
  } = (0, u.Z)({
    user: i,
    displayProfile: Q,
    pendingThemeColors: j,
    isPreview: T
  }), ei = (0, r.jsxs)(f.Z, {
    user: i,
    displayProfile: Q,
    themeType: O.l.POPOUT,
    pendingThemeColors: j,
    className: a()(S.container, Z),
    forceShowPremium: T,
    children: [(0, r.jsxs)("div", {
      className: S.header,
      children: [(0, r.jsx)(g.Z, {
        user: i,
        displayProfile: Q,
        guildId: null == I ? true : I.id,
        canUsePremiumCustomization: T,
        pendingBanner: C,
        pendingAccentColor: N,
        isTryItOut: B,
        disabledInputs: F,
        onUpsellClick: () => null == A ? true : A({
          object: y.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, r.jsx)(h.Z, {
        user: i,
        guild: I,
        displayProfile: Q,
        canUsePremiumCustomization: T,
        previewAvatar: $,
        previewAvatarDecorationSrc: ee,
        previewTheme: en,
        previewPrimaryColor: er,
        className: G,
        disabledInputs: F,
        isTryItOut: B,
        onUpsellClick: () => null == A ? true : A({
          object: y.qAy.AVATAR
        })
      }), !V && (0, r.jsx)(p.Z, {
        user: i,
        themeType: O.l.POPOUT,
        disableToolbar: F
      })]
    }), (0, r.jsx)(E.Z, {
      user: i,
      displayProfile: Q,
      guild: I,
      pendingAvatar: w,
      pendingNickname: x,
      pendingGlobalName: L,
      pendingBio: P,
      pendingPronouns: R,
      pendingLegacyUsernameDisabled: k,
      pendingDisplayNameStyles: U,
      isTryItOut: B,
      hideBioSection: H,
      pendingBadges: W,
      shouldOpenBadgeTooltip: K
    }), (0, r.jsx)(b.Z, {
      user: i,
      hideMessageInput: Y,
      hideExampleButton: z
    }), null != et && (0, r.jsx)(l.Z, {
      skuId: et.skuId
    })]
  });
  return q ? ei : (0, r.jsx)("div", {
    role: "img",
    "aria-label": v.intl.string(v.t.ayozFl),
    children: (0, r.jsx)(s.Rny, {
      children: ei
    })
  })
}