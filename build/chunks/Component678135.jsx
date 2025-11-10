/** Chunk was on web.js **/
/** chunk id: 678135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function S(e) {
  var t, n;
  let {
    user: i,
    guild: S,
    canUsePremiumCustomization: T,
    onUpsellClick: A,
    pendingBanner: C,
    pendingAccentColor: N,
    pendingBio: R,
    pendingPronouns: P,
    pendingAvatar: w,
    pendingAvatarDecoration: D,
    pendingNickname: x,
    pendingGlobalName: L,
    pendingThemeColors: M,
    pendingProfileEffect: j,
    pendingLegacyUsernameDisabled: k,
    pendingDisplayNameStyles: U,
    avatarClassName: G,
    containerClassName: B,
    isTryItOut: Z = false,
    disabledInputs: F = false,
    hideCustomStatus: V = false,
    hideBioSection: H = false,
    hideMessageInput: Y = true,
    pendingBadges: W,
    shouldOpenBadgeTooltip: K,
    hideExampleButton: z = false,
    interactive: q = true
  } = e, X = (0, c.ZP)(i.id, null == S ? true : S.id), Q = (0, o.e7)([p.ZP], () => null != S ? p.ZP.getMember(S.id, i.id) : null), J = (0, h.Ys)({
    pendingValue: D,
    userValue: null == i ? true : i.avatarDecoration,
    guildValue: null == Q ? true : Q.avatarDecoration,
    guildId: null == S ? true : S.id
  }), {
    avatarSrc: $,
    avatarDecorationSrc: ee
  } = (0, d.Z)({
    userId: null == i ? true : i.id,
    guildId: null == S ? true : S.id,
    avatarDecorationOverride: J,
    avatarOverride: w,
    size: s.EFr.SIZE_80,
    showPending: true
  }), et = (0, h.Ys)({
    pendingValue: j,
    userValue: null == X || null == (t = X._userProfile) ? true : t.profileEffect,
    guildValue: null == X || null == (n = X._guildMemberProfile) ? true : n.profileEffect,
    guildId: null == S ? true : S.id
  }), {
    theme: en,
    primaryColor: er
  } = (0, u.Z)({
    user: i,
    displayProfile: X,
    pendingThemeColors: M,
    isPreview: T
  }), ei = (0, r.jsxs)(f.Z, {
    user: i,
    displayProfile: X,
    themeType: O.l.POPOUT,
    pendingThemeColors: M,
    className: a()(I.container, B),
    forceShowPremium: T,
    children: [(0, r.jsxs)("div", {
      className: I.header,
      children: [(0, r.jsx)(g.Z, {
        user: i,
        displayProfile: X,
        guildId: null == S ? true : S.id,
        canUsePremiumCustomization: T,
        pendingBanner: C,
        pendingAccentColor: N,
        isTryItOut: Z,
        disabledInputs: F,
        onUpsellClick: () => null == A ? true : A({
          object: y.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, r.jsx)(m.Z, {
        user: i,
        guild: S,
        displayProfile: X,
        canUsePremiumCustomization: T,
        previewAvatar: $,
        previewAvatarDecorationSrc: ee,
        previewTheme: en,
        previewPrimaryColor: er,
        className: G,
        disabledInputs: F,
        isTryItOut: Z,
        onUpsellClick: () => null == A ? true : A({
          object: y.qAy.AVATAR
        })
      }), !V && (0, r.jsx)(_.Z, {
        user: i,
        themeType: O.l.POPOUT,
        disableToolbar: F
      })]
    }), (0, r.jsx)(E.Z, {
      user: i,
      displayProfile: X,
      guild: S,
      pendingAvatar: w,
      pendingNickname: x,
      pendingGlobalName: L,
      pendingBio: R,
      pendingPronouns: P,
      pendingLegacyUsernameDisabled: k,
      pendingDisplayNameStyles: U,
      isTryItOut: Z,
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