/** Chunk was on web.js **/
/** chunk id: 708321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  o: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk66511 = require("./66511.jsx"),
  Chunk226746 = require("./226746.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk900849 = require("./900849.js"),
  Chunk330705 = require("./330705.js"),
  Chunk993860 = require("./993860.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    guildId: t,
    ctaType: n,
    submitting: o,
    onGoToGuild: s,
    onAcceptInvite: u,
    onStartApplication: f,
    onComplete: m
  } = e, [g, E] = i.useState(false), b = (0, l.Z)(t), y = i.useCallback(() => {
    (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(t))
  }, [t]), O = i.useCallback(async () => {
    await (0, d.Ub)(t, {
      object: p.qAy.GUILD_PROFILE
    })
  }, [t]), {
    text: v,
    onClick: I
  } = i.useMemo(() => {
    switch (n) {
      case _.sE.IS_MEMBER:
        return {
          text: h.intl.string(h.t.IRoQXl), onClick: s
        };
      case _.sE.ADOPT_TAG:
        return {
          text: h.intl.string(h.t.cQDYRk), onClick: b
        };
      case _.sE.HAS_APPLICATION:
        return {
          text: h.intl.string(h.t["4yfIDg"]), onClick: y
        };
      case _.sE.APPLY_TO_JOIN:
        return {
          text: h.intl.string(h.t["7XdMW1"]), onClick: f
        };
      case _.sE.LURK_DISCOVERABLE:
        return {
          text: h.intl.string(h.t.VJlc0d), onClick: O
        };
      case _.sE.JOIN_VIA_INVITE:
        return {
          text: h.intl.string(h.t.VJlc0d), onClick: u
        };
      default:
        return {
          text: null, onClick: null
        }
    }
  }, [n, y, O, u, s, f, b]), T = i.useCallback(async e => {
    e.stopPropagation(), E(true);
    try {
      await (null == I ? true : I())
    } catch (e) {} finally {
      null == m || m(), E(false)
    }
  }, [I, m]);
  return null == v ? null : (0, r.jsx)(a.zxk, {
    variant: "active",
    size: "sm",
    text: v,
    fullWidth: true,
    loading: g || o,
    onClick: T
  })
}

function g(e) {
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
  return null == c ? null : (0, r.jsx)(m, {
    guildId: a,
    ctaType: c,
    onGoToGuild: d,
    onAcceptInvite: p,
    onStartApplication: h,
    onComplete: n
  })
}