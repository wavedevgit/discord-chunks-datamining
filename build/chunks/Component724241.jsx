/** Chunk was on web.js **/
/** chunk id: 724241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk648052 = require("./648052.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk420654 = require("./420654.jsx"),
  Chunk116854 = require("./116854.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk246946 = require("./246946.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk200669 = require("./200669.js");

function p(e) {
  var t;
  let {
    user: n,
    displayProfile: p,
    guild: h,
    pendingAvatar: m,
    pendingNickname: g,
    pendingGlobalName: E,
    pendingBio: b,
    pendingPronouns: y,
    pendingLegacyUsernameDisabled: O,
    pendingBadges: v,
    isTryItOutFlow: I,
    hideBioSection: T,
    shouldOpenBadgeTooltip: S
  } = e, A = (0, i.e7)([c.ZP], () => null == h ? null : c.ZP.getMember(h.id, n.id)), N = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), C = null == p || null == (t = p.getPreviewBio(b)) ? true : t.value, R = null != y ? y : null == p ? true : p.pronouns, P = (0, d.Ly)({
    pendingNickname: g,
    pendingGlobalName: E,
    user: n,
    guildMember: A
  }), w = () => {
    if (null != A && null !== m && (null != A.avatar || null != m)) return (0, r.jsx)(l.Z, {
      user: n,
      nickname: P
    })
  };
  return (0, r.jsxs)("div", {
    className: _.body,
    inert: true,
    children: [(0, r.jsx)(a.Z, {
      user: n,
      usernameIcon: w(),
      nickname: P,
      pronouns: R,
      isTryItOut: I,
      tags: (0, r.jsx)(o.Z, {
        displayProfile: p,
        themeType: f.lY.POPOUT,
        pendingLegacyUsernameDisabled: O,
        pendingBadges: v,
        shouldOpenBadgeTooltip: S
      })
    }), !T && null != C && "" !== C && (0, r.jsx)(s.Z, {
      user: n,
      bio: C,
      hidePersonalInformation: N,
      viewFullBioDisabled: true
    })]
  })
}