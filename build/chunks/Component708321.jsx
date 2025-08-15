/** Chunk was on web.js **/
/** chunk id: 708321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E,
  o: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk66511 = require("./66511.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk900849 = require("./900849.js"),
  Chunk330705 = require("./330705.js"),
  Chunk993860 = require("./993860.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    guildId: t,
    ctaType: n,
    submitting: o,
    onGoToGuild: s,
    onAcceptInvite: u,
    onStartApplication: f,
    onComplete: g
  } = e, [E, b] = i.useState(false), y = (0, l.Z)({
    scrollPosition: h.Y_.GUILD_TAG
  }), O = i.useCallback(() => {
    (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(t))
  }, [t]), v = i.useCallback(async () => {
    await (0, d.Ub)(t, {
      object: p.qAy.GUILD_PROFILE
    })
  }, [t]), {
    text: I,
    onClick: T
  } = i.useMemo(() => {
    switch (n) {
      case _.sE.IS_MEMBER:
        return {
          text: m.intl.string(m.t.IRoQXl), onClick: s
        };
      case _.sE.ADOPT_TAG:
        return {
          text: m.intl.string(m.t.cQDYRk), onClick: y
        };
      case _.sE.HAS_APPLICATION:
        return {
          text: m.intl.string(m.t["4yfIDg"]), onClick: O
        };
      case _.sE.APPLY_TO_JOIN:
        return {
          text: m.intl.string(m.t["7XdMW1"]), onClick: f
        };
      case _.sE.LURK_DISCOVERABLE:
        return {
          text: m.intl.string(m.t.VJlc0d), onClick: v
        };
      case _.sE.JOIN_VIA_INVITE:
        return {
          text: m.intl.string(m.t.VJlc0d), onClick: u
        };
      default:
        return {
          text: null, onClick: null
        }
    }
  }, [n, O, v, u, s, f, y]), S = i.useCallback(async e => {
    e.stopPropagation(), b(true);
    try {
      await (null == T ? true : T())
    } catch (e) {} finally {
      null == g || g(), b(false)
    }
  }, [T, g]);
  return null == I ? null : (0, r.jsx)(a.zxk, {
    variant: "active",
    size: "sm",
    text: I,
    fullWidth: true,
    loading: E || o,
    onClick: S
  })
}

function E(e) {
  let {
    profile: t,
    onComplete: n
  } = e, {
    guildId: a,
    validInviteKey: l,
    ctaType: c
  } = (0, _.ZP)(t), d = i.useCallback(() => (0, u.X)(a), [a]), p = i.useCallback(() => {
    null != l && o.ZP.acceptInvite({
      inviteKey: l,
      context: {
        location: "guild_profile"
      }
    })
  }, [l]), h = i.useCallback(() => {
    t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != l ? p() : s.Z.openMemberVerificationModal(a, true, l)
  }, [p, a, t.visibility, l]);
  return null == c ? null : (0, r.jsx)(g, {
    guildId: a,
    ctaType: c,
    onGoToGuild: d,
    onAcceptInvite: p,
    onStartApplication: h,
    onComplete: n
  })
}