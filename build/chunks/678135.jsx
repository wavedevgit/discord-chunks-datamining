/** Chunk was on web.js **/
/** chunk id: 678135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk680295 = require("./680295.js"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk518950 = require("./518950.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk397689 = require("./397689.jsx"),
  Chunk656229 = require("./656229.jsx"),
  Chunk724241 = require("./724241.js"),
  Chunk890876 = require("./890876.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997926 = require("./997926.js");

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
    pendingAvatar: N,
    pendingAvatarDecoration: C,
    pendingNickname: R,
    pendingGlobalName: P,
    pendingThemeColors: w,
    pendingProfileEffectId: D,
    pendingLegacyUsernameDisabled: L,
    avatarClassName: x,
    containerClassName: M,
    isTryItOutFlow: k = false,
    disabledInputs: j = false,
    hideCustomStatus: U = false,
    hideBioSection: G = false,
    hideMessageInput: B = true,
    pendingBadges: Z,
    shouldOpenBadgeTooltip: F,
    hideViewFullProfileButton: V = false,
    interactive: H = true
  } = e, Y = (0, l.ZP)(t.id, null == n ? true : n.id), {
    avatarSrc: W,
    avatarDecorationSrc: K
  } = (0, u.Z)({
    userId: null == t ? true : t.id,
    guildId: null == n ? true : n.id,
    avatarDecorationOverride: C,
    avatarOverride: N,
    size: a.EFr.SIZE_80,
    showPending: true
  }), z = (0, _.ZT)({
    pendingProfileEffectId: D,
    displayProfile: Y
  }), {
    theme: q,
    primaryColor: X
  } = (0, c.Z)({
    user: t,
    displayProfile: Y,
    pendingThemeColors: w,
    isPreview: i
  }), Q = <d.Z user={t} displayProfile={Y} themeType={b.lY.POPOUT} pendingThemeColors={w} className={o()(O.container, M)} forceShowPremium={i}>{<div className={O.header}>{<h.Z user={t} displayProfile={Y} guildId={null == n ? true : n.id} canUsePremiumCustomization={i} pendingBanner={I} pendingAccentColor={T} isTryItOutFlow={k} disabledInputs={j} onUpsellClick={() => null == v ? true : v({
          object: E.qAy.EDIT_PROFILE_BANNER
        })} />}{<p.Z user={t} guild={n} displayProfile={Y} canUsePremiumCustomization={i} previewAvatar={W} previewAvatarDecoration={K} previewTheme={q} previewPrimaryColor={X} className={x} disabledInputs={j} isTryItOutFlow={k} onUpsellClick={() => null == v ? true : v({
          object: E.qAy.AVATAR
        })} />}{!U && <f.Z location={"UserProfilePreview"} user={t} themeType={b.lY.POPOUT} disableToolbar={j} />}</div>}{<m.Z user={t} displayProfile={Y} guild={n} pendingAvatar={N} pendingNickname={R} pendingGlobalName={P} pendingBio={S} pendingPronouns={A} pendingLegacyUsernameDisabled={L} isTryItOutFlow={k} hideBioSection={G} pendingBadges={Z} shouldOpenBadgeTooltip={F} />}{<g.Z user={t} hideMessageInput={B} hideViewFullProfileButton={V} />}{null != z && <s.Z profileEffectId={z} />}</d.Z>;
  return H ? Q : <div role={"img"} aria-label={y.intl.string(y.t.ayozFh)}><a.Rny>{Q}</a.Rny></div>
}