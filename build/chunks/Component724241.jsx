/** Chunk was on web.js **/
/** chunk id: 724241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk731722 = require("./731722.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk246946 = require("./246946.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk155493 = require("./155493.js");

function h(e) {
  let {
    user: t,
    displayProfile: n,
    guild: h,
    pendingAvatar: m,
    pendingNickname: g,
    pendingGlobalName: E,
    pendingBio: b,
    pendingPronouns: y,
    pendingLegacyUsernameDisabled: O,
    pendingBadges: v,
    pendingDisplayNameStyles: S,
    pendingPrimaryGuildId: I,
    isTryItOut: T,
    hideBioSection: C,
    shouldOpenBadgeTooltip: A
  } = e, N = (0, i.e7)([u.ZP], () => null == h ? null : u.ZP.getMember(h.id, t.id)), P = (0, i.e7)([d.Z], () => d.Z.hidePersonalInformation), w = null == n ? true : n.getPreviewBio(b), R = null != y ? y : null == n ? true : n.pronouns, D = (0, f.Ly)({
    pendingNickname: g,
    pendingGlobalName: E,
    user: t,
    guildMember: N
  }), x = (0, a.oZ)(I), L = () => {
    if (null != N && null !== m && (null != N.avatar || null != m)) return (0, r.jsx)(c.Z, {
      user: t,
      nickname: D
    })
  };
  return (0, r.jsxs)("div", {
    className: _.body,
    inert: true,
    children: [(0, r.jsx)(s.Z, {
      user: t,
      guildId: null == h ? true : h.id,
      usernameIcon: L(),
      nickname: D,
      pendingDisplayNameStyles: S,
      pronouns: R,
      primaryGuild: x,
      isTryItOut: T,
      tags: (0, r.jsx)(o.Z, {
        displayProfile: n,
        themeType: p.l.POPOUT,
        pendingLegacyUsernameDisabled: O,
        pendingBadges: v,
        shouldOpenBadgeTooltip: A
      })
    }), !C && null != w && "" !== w && (0, r.jsx)(l.Z, {
      user: t,
      bio: w,
      hidePersonalInformation: P,
      viewFullBioDisabled: true
    })]
  })
}