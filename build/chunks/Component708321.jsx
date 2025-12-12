/** Chunk was on web.js **/
/** chunk id: 708321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  o: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function h(e) {
  let {
    guildId: t,
    ctaType: n,
    submitting: o,
    onGoToGuild: s,
    onAcceptInvite: u,
    onStartApplication: f,
    onComplete: h
  } = e, [g, E] = i.useState(false), b = (0, l.Z)(t), y = i.useCallback(() => {
    (0, c.uL)(_.Z5c.GUILD_MEMBER_VERIFICATION(t))
  }, [t]), O = i.useCallback(async () => {
    await (0, d.Ub)(t, {
      object: _.qAy.GUILD_PROFILE
    })
  }, [t]), {
    text: v,
    onClick: S
  } = i.useMemo(() => {
    switch (n) {
      case p.sE.IS_MEMBER:
        return {
          text: m.intl.string(m.t.IRoQXr), onClick: s
        };
      case p.sE.ADOPT_TAG:
        return {
          text: m.intl.string(m.t.cQDYRu), onClick: b
        };
      case p.sE.HAS_APPLICATION:
        return {
          text: m.intl.string(m.t["4yfIDk"]), onClick: y
        };
      case p.sE.APPLY_TO_JOIN:
        return {
          text: m.intl.string(m.t["7XdMW2"]), onClick: f
        };
      case p.sE.LURK_DISCOVERABLE:
        return {
          text: m.intl.string(m.t.VJlc0S), onClick: O
        };
      case p.sE.JOIN_VIA_INVITE:
        return {
          text: m.intl.string(m.t.VJlc0S), onClick: u
        };
      case p.sE.ACCEPT_ROLES:
        return {
          text: m.intl.string(m.t.MMlhsr), onClick: u
        };
      default:
        return {
          text: null, onClick: null
        }
    }
  }, [n, y, O, u, s, f, b]), I = i.useCallback(async e => {
    e.stopPropagation(), E(true);
    try {
      await (null == S ? true : S())
    } catch (e) {} finally {
      null == h || h(), E(false)
    }
  }, [S, h]);
  return null == v ? null : (0, r.jsx)(a.Button, {
    variant: "active",
    size: "sm",
    text: v,
    fullWidth: true,
    loading: g || o,
    onClick: I
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
  } = (0, p.ZP)(t), d = i.useCallback(() => (0, u.X)(a), [a]), _ = i.useCallback(() => {
    null != l && o.ZP.acceptInvite({
      inviteKey: l,
      context: {
        location: "guild_profile"
      }
    })
  }, [l]), m = i.useCallback(() => {
    t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != l ? _() : s.Z.openMemberVerificationModal(a, true, l)
  }, [_, a, t.visibility, l]);
  return null == c ? null : (0, r.jsx)(h, {
    guildId: a,
    ctaType: c,
    onGoToGuild: d,
    onAcceptInvite: _,
    onStartApplication: m,
    onComplete: n
  })
}