/** Chunk was on web.js **/
/** chunk id: 287070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk101928 = require("./101928.js"),
  Chunk854627 = require("./854627.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk919395 = require("./919395.js"),
  Chunk979849 = require("./979849.jsx"),
  Chunk37188 = require("./37188.jsx"),
  Chunk294902 = require("./294902.jsx"),
  Chunk418555 = require("./418555.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk633960 = require("./633960.js");

function I(e) {
  var t, n;
  let {
    user: i,
    guild: I,
    canUsePremiumCustomization: S,
    onUpsellClick: T,
    pendingBanner: C,
    pendingAccentColor: N,
    pendingBio: w,
    pendingPronouns: R,
    pendingAvatar: P,
    pendingAvatarDecoration: D,
    pendingNickname: L,
    pendingGlobalName: x,
    pendingThemeColors: M,
    pendingProfileEffect: j,
    pendingLegacyUsernameDisabled: k,
    pendingDisplayNameStyles: U,
    pendingPrimaryGuildId: G,
    avatarClassName: V,
    containerClassName: F,
    isTryItOut: B = false,
    disabledInputs: H = false,
    hideCustomStatus: Y = false,
    hideBioSection: W = false,
    hideMessageInput: K = true,
    pendingBadges: z,
    shouldOpenBadgeTooltip: q,
    hideExampleButton: Z = false,
    interactive: Q = true
  } = e, X = (0, c.Ay)(i.id, null == I ? true : I.id), J = (0, o.bG)([_.Ay], () => null != I ? _.Ay.getMember(I.id, i.id) : null), $ = (0, h.lw)({
    pendingValue: D,
    userValue: null == i ? true : i.avatarDecoration,
    guildValue: null == J ? true : J.avatarDecoration,
    guildId: null == I ? true : I.id
  }), {
    avatarSrc: ee,
    avatarDecorationSrc: et
  } = (0, d.A)({
    userId: null == i ? true : i.id,
    guildId: null == I ? true : I.id,
    avatarDecorationOverride: $,
    avatarOverride: P,
    size: s._3J.SIZE_80,
    showPending: true
  }), en = (0, h.lw)({
    pendingValue: j,
    userValue: null == X || null == (t = X._userProfile) ? true : t.profileEffect,
    guildValue: null == X || null == (n = X._guildMemberProfile) ? true : n.profileEffect,
    guildId: null == I ? true : I.id
  }), {
    theme: er,
    primaryColor: ei
  } = (0, u.A)({
    user: i,
    displayProfile: X,
    pendingThemeColors: M,
    isPreview: S
  }), ea = (0, r.jsxs)(f.A, {
    user: i,
    displayProfile: X,
    themeType: O.d.POPOUT,
    pendingThemeColors: M,
    className: a()(A.k, F),
    forceShowPremium: S,
    children: [(0, r.jsxs)("div", {
      className: A.w,
      children: [(0, r.jsx)(g.A, {
        user: i,
        displayProfile: X,
        guildId: null == I ? true : I.id,
        canUsePremiumCustomization: S,
        pendingBanner: C,
        pendingAccentColor: N,
        isTryItOut: B,
        disabledInputs: H,
        onUpsellClick: () => null == T ? true : T({
          object: b.ZSU.EDIT_PROFILE_BANNER
        })
      }), (0, r.jsx)(m.A, {
        user: i,
        guild: I,
        displayProfile: X,
        canUsePremiumCustomization: S,
        previewAvatar: ee,
        previewAvatarDecorationSrc: et,
        previewTheme: er,
        previewPrimaryColor: ei,
        className: V,
        disabledInputs: H,
        isTryItOut: B,
        onUpsellClick: () => null == T ? true : T({
          object: b.ZSU.AVATAR
        })
      }), !Y && (0, r.jsx)(p.A, {
        user: i,
        themeType: O.d.POPOUT,
        disableToolbar: H
      })]
    }), (0, r.jsx)(E.A, {
      user: i,
      displayProfile: X,
      guild: I,
      pendingAvatar: P,
      pendingNickname: L,
      pendingGlobalName: x,
      pendingBio: w,
      pendingPronouns: R,
      pendingLegacyUsernameDisabled: k,
      pendingDisplayNameStyles: U,
      pendingPrimaryGuildId: G,
      isTryItOut: B,
      hideBioSection: W,
      pendingBadges: z,
      shouldOpenBadgeTooltip: q
    }), (0, r.jsx)(y.A, {
      user: i,
      hideMessageInput: K,
      hideExampleButton: Z
    }), null != en && (0, r.jsx)(l.A, {
      skuId: en.skuId
    })]
  });
  return Q ? ea : (0, r.jsx)("div", {
    role: "img",
    "aria-label": v.intl.string(v.t.ayozFl),
    children: (0, r.jsx)(s.M1G, {
      children: ea
    })
  })
}