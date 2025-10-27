/** Chunk was on web.js **/
/** chunk id: 678135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk518950 = require("./518950.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk397689 = require("./397689.jsx"),
  Chunk656229 = require("./656229.jsx"),
  Chunk724241 = require("./724241.jsx"),
  Chunk890876 = require("./890876.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448239 = require("./448239.js");

function v(e) {
  let {
    user: t,
    guild: n,
    canUsePremiumCustomization: i,
    onUpsellClick: v,
    pendingBanner: I,
    pendingAccentColor: T,
    pendingBio: S,
    pendingPronouns: A,
    pendingAvatar: C,
    pendingAvatarDecoration: N,
    pendingNickname: R,
    pendingGlobalName: P,
    pendingThemeColors: D,
    pendingProfileEffect: w,
    pendingLegacyUsernameDisabled: L,
    pendingDisplayNameStyles: x,
    avatarClassName: M,
    containerClassName: k,
    isTryItOutFlow: j = false,
    disabledInputs: U = false,
    hideCustomStatus: G = false,
    hideBioSection: B = false,
    hideMessageInput: Z = true,
    pendingBadges: F,
    shouldOpenBadgeTooltip: V,
    hideExampleButton: H = false,
    interactive: Y = true
  } = e, W = (0, l.ZP)(t.id, null == n ? true : n.id), {
    avatarSrc: K,
    avatarDecorationSrc: z
  } = (0, u.Z)({
    userId: null == t ? true : t.id,
    guildId: null == n ? true : n.id,
    avatarDecorationOverride: N,
    avatarOverride: C,
    size: o.EFr.SIZE_80,
    showPending: true
  }), q = (0, _.IG)({
    pendingProfileEffect: w,
    displayProfile: W
  }), {
    theme: X,
    primaryColor: Q
  } = (0, c.Z)({
    user: t,
    displayProfile: W,
    pendingThemeColors: D,
    isPreview: i
  }), J = (0, r.jsxs)(d.Z, {
    user: t,
    displayProfile: W,
    themeType: b.l.POPOUT,
    pendingThemeColors: D,
    className: a()(O.container, k),
    forceShowPremium: i,
    children: [(0, r.jsxs)("div", {
      className: O.header,
      children: [(0, r.jsx)(h.Z, {
        user: t,
        displayProfile: W,
        guildId: null == n ? true : n.id,
        canUsePremiumCustomization: i,
        pendingBanner: I,
        pendingAccentColor: T,
        isTryItOutFlow: j,
        disabledInputs: U,
        onUpsellClick: () => null == v ? true : v({
          object: E.qAy.EDIT_PROFILE_BANNER
        })
      }), (0, r.jsx)(p.Z, {
        user: t,
        guild: n,
        displayProfile: W,
        canUsePremiumCustomization: i,
        previewAvatar: K,
        previewAvatarDecoration: z,
        previewTheme: X,
        previewPrimaryColor: Q,
        className: M,
        disabledInputs: U,
        isTryItOutFlow: j,
        onUpsellClick: () => null == v ? true : v({
          object: E.qAy.AVATAR
        })
      }), !G && (0, r.jsx)(f.Z, {
        user: t,
        themeType: b.l.POPOUT,
        disableToolbar: U
      })]
    }), (0, r.jsx)(m.Z, {
      user: t,
      displayProfile: W,
      guild: n,
      pendingAvatar: C,
      pendingNickname: R,
      pendingGlobalName: P,
      pendingBio: S,
      pendingPronouns: A,
      pendingLegacyUsernameDisabled: L,
      pendingDisplayNameStyles: x,
      isTryItOutFlow: j,
      hideBioSection: B,
      pendingBadges: F,
      shouldOpenBadgeTooltip: V
    }), (0, r.jsx)(g.Z, {
      user: t,
      hideMessageInput: Z,
      hideExampleButton: H
    }), null != q && (0, r.jsx)(s.Z, {
      skuId: q.skuId
    })]
  });
  return Y ? J : (0, r.jsx)("div", {
    role: "img",
    "aria-label": y.intl.string(y.t.ayozFl),
    children: (0, r.jsx)(o.Rny, {
      children: J
    })
  })
}