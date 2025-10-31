/** Chunk was on web.js **/
/** chunk id: 724241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk246946 = require("./246946.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk116649 = require("./116649.js");

function p(e) {
  let {
    user: t,
    displayProfile: n,
    guild: p,
    pendingAvatar: h,
    pendingNickname: m,
    pendingGlobalName: g,
    pendingBio: E,
    pendingPronouns: b,
    pendingLegacyUsernameDisabled: y,
    pendingBadges: O,
    pendingDisplayNameStyles: v,
    isTryItOutFlow: I,
    hideBioSection: T,
    shouldOpenBadgeTooltip: S
  } = e, A = (0, i.e7)([c.ZP], () => null == p ? null : c.ZP.getMember(p.id, t.id)), C = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), N = null == n ? true : n.getPreviewBio(E), R = null != b ? b : null == n ? true : n.pronouns, P = (0, d.Ly)({
    pendingNickname: m,
    pendingGlobalName: g,
    user: t,
    guildMember: A
  }), w = () => {
    if (null != A && null !== h && (null != A.avatar || null != h)) return (0, r.jsx)(l.Z, {
      user: t,
      nickname: P
    })
  };
  return (0, r.jsxs)("div", {
    className: _.body,
    inert: true,
    children: [(0, r.jsx)(o.Z, {
      user: t,
      guildId: null == p ? true : p.id,
      usernameIcon: w(),
      nickname: P,
      pendingDisplayNameStyles: v,
      pronouns: R,
      isTryItOut: I,
      tags: (0, r.jsx)(a.Z, {
        displayProfile: n,
        themeType: f.l.POPOUT,
        pendingLegacyUsernameDisabled: y,
        pendingBadges: O,
        shouldOpenBadgeTooltip: S
      })
    }), !T && null != N && "" !== N && (0, r.jsx)(s.Z, {
      user: t,
      bio: N,
      hidePersonalInformation: C,
      viewFullBioDisabled: true
    })]
  })
}