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
  Chunk593540 = require("./593540.js");

function p(e) {
  var t, n;
  let {
    user: p,
    displayProfile: h,
    guild: m,
    pendingAvatar: g,
    pendingNickname: E,
    pendingGlobalName: b,
    pendingBio: y,
    pendingPronouns: O,
    pendingLegacyUsernameDisabled: v,
    pendingBadges: I,
    pendingDisplayNameStyles: T,
    isTryItOutFlow: S,
    hideBioSection: A,
    shouldOpenBadgeTooltip: C
  } = e, N = (0, i.e7)([c.ZP], () => null == m ? null : c.ZP.getMember(m.id, p.id)), R = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), P = null == h || null == (t = h.getPreviewBio(y)) ? true : t.value, w = null != O ? O : null == h ? true : h.pronouns, D = (0, d.Ly)({
    pendingNickname: E,
    pendingGlobalName: b,
    user: p,
    guildMember: N
  }), x = true !== T ? T : null != (n = null == N ? true : N.displayNameStyles) ? n : p.displayNameStyles, L = () => {
    if (null != N && null !== g && (null != N.avatar || null != g)) return (0, r.jsx)(l.Z, {
      user: p,
      nickname: D
    })
  };
  return (0, r.jsxs)("div", {
    className: _.body,
    inert: true,
    children: [(0, r.jsx)(o.Z, {
      user: p,
      usernameIcon: L(),
      nickname: D,
      displayNameStyles: x,
      pronouns: w,
      isTryItOut: S,
      tags: (0, r.jsx)(a.Z, {
        displayProfile: h,
        themeType: f.l.POPOUT,
        pendingLegacyUsernameDisabled: v,
        pendingBadges: I,
        shouldOpenBadgeTooltip: C
      })
    }), !A && null != P && "" !== P && (0, r.jsx)(s.Z, {
      user: p,
      bio: P,
      hidePersonalInformation: R,
      viewFullBioDisabled: true
    })]
  })
}