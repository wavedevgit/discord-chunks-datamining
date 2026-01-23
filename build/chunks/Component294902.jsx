/** Chunk was on web.js **/
/** chunk id: 294902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk685073 = require("./685073.js"),
  Chunk31432 = require("./31432.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk442228 = require("./442228.jsx"),
  Chunk192867 = require("./192867.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk351906 = require("./351906.js"),
  Chunk385612 = require("./385612.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk183959 = require("./183959.js");

function h(e) {
  let {
    user: t,
    displayProfile: n,
    guild: h,
    pendingAvatar: m,
    pendingNickname: g,
    pendingGlobalName: E,
    pendingBio: y,
    pendingPronouns: b,
    pendingLegacyUsernameDisabled: O,
    pendingBadges: v,
    pendingDisplayNameStyles: A,
    pendingPrimaryGuildId: I,
    isTryItOut: S,
    hideBioSection: T,
    shouldOpenBadgeTooltip: C
  } = e, N = (0, i.bG)([u.Ay], () => null == h ? null : u.Ay.getMember(h.id, t.id)), R = (0, i.bG)([d.A], () => d.A.hidePersonalInformation), w = null == n ? true : n.getPreviewBio(y), P = null != b ? b : null == n ? true : n.pronouns, D = (0, f.eh)({
    pendingNickname: g,
    pendingGlobalName: E,
    user: t,
    guildMember: N
  }), x = (0, a.gS)(I), L = () => {
    if (null != N && null !== m && (null != N.avatar || null != m)) return (0, r.jsx)(c.A, {
      user: t,
      nickname: D
    })
  };
  return (0, r.jsxs)("div", {
    className: _.rf,
    inert: true,
    children: [(0, r.jsx)(o.A, {
      user: t,
      guildId: null == h ? true : h.id,
      usernameIcon: L(),
      nickname: D,
      pendingDisplayNameStyles: A,
      pronouns: P,
      primaryGuild: x,
      isTryItOut: S,
      tags: (0, r.jsx)(s.A, {
        displayProfile: n,
        themeType: p.d.POPOUT,
        pendingLegacyUsernameDisabled: O,
        pendingBadges: v,
        shouldOpenBadgeTooltip: C
      })
    }), !T && null != w && "" !== w && (0, r.jsx)(l.A, {
      user: t,
      bio: w,
      hidePersonalInformation: R,
      viewFullBioDisabled: true
    })]
  })
}