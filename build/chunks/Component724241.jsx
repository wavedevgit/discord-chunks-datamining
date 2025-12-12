/** Chunk was on web.js **/
/** chunk id: 724241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function _(e) {
  let {
    user: t,
    displayProfile: n,
    guild: _,
    pendingAvatar: m,
    pendingNickname: h,
    pendingGlobalName: g,
    pendingBio: E,
    pendingPronouns: b,
    pendingLegacyUsernameDisabled: y,
    pendingBadges: O,
    pendingDisplayNameStyles: v,
    isTryItOut: S,
    hideBioSection: I,
    shouldOpenBadgeTooltip: T
  } = e, C = (0, i.e7)([c.ZP], () => null == _ ? null : c.ZP.getMember(_.id, t.id)), A = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), N = null == n ? true : n.getPreviewBio(E), P = null != b ? b : null == n ? true : n.pronouns, R = (0, d.Ly)({
    pendingNickname: h,
    pendingGlobalName: g,
    user: t,
    guildMember: C
  }), w = () => {
    if (null != C && null !== m && (null != C.avatar || null != m)) return (0, r.jsx)(l.Z, {
      user: t,
      nickname: R
    })
  };
  return (0, r.jsxs)("div", {
    className: p.body,
    inert: true,
    children: [(0, r.jsx)(a.Z, {
      user: t,
      guildId: null == _ ? true : _.id,
      usernameIcon: w(),
      nickname: R,
      pendingDisplayNameStyles: v,
      pronouns: P,
      isTryItOut: S,
      tags: (0, r.jsx)(o.Z, {
        displayProfile: n,
        themeType: f.l.POPOUT,
        pendingLegacyUsernameDisabled: y,
        pendingBadges: O,
        shouldOpenBadgeTooltip: T
      })
    }), !I && null != N && "" !== N && (0, r.jsx)(s.Z, {
      user: t,
      bio: N,
      hidePersonalInformation: A,
      viewFullBioDisabled: true
    })]
  })
}