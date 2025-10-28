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
    pendingDisplayNameStyles: I,
    isTryItOutFlow: T,
    hideBioSection: S,
    shouldOpenBadgeTooltip: A
  } = e, C = (0, i.e7)([c.ZP], () => null == h ? null : c.ZP.getMember(h.id, n.id)), N = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation), R = null == p || null == (t = p.getPreviewBio(b)) ? true : t.value, P = null != y ? y : null == p ? true : p.pronouns, w = (0, d.Ly)({
    pendingNickname: g,
    pendingGlobalName: E,
    user: n,
    guildMember: C
  }), D = () => {
    if (null != C && null !== m && (null != C.avatar || null != m)) return (0, r.jsx)(l.Z, {
      user: n,
      nickname: w
    })
  };
  return (0, r.jsxs)("div", {
    className: _.body,
    inert: true,
    children: [(0, r.jsx)(o.Z, {
      user: n,
      guildId: null == h ? true : h.id,
      usernameIcon: D(),
      nickname: w,
      pendingDisplayNameStyles: I,
      pronouns: P,
      isTryItOut: T,
      tags: (0, r.jsx)(a.Z, {
        displayProfile: p,
        themeType: f.l.POPOUT,
        pendingLegacyUsernameDisabled: O,
        pendingBadges: v,
        shouldOpenBadgeTooltip: A
      })
    }), !S && null != R && "" !== R && (0, r.jsx)(s.Z, {
      user: n,
      bio: R,
      hidePersonalInformation: N,
      viewFullBioDisabled: true
    })]
  })
}