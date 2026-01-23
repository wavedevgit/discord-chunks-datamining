/** Chunk was on web.js **/
/** chunk id: 123213, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  Y: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk415951 = require("./415951.jsx"),
  Chunk849841 = require("./849841.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk449054 = require("./449054.js"),
  Chunk348943 = require("./348943.js"),
  Chunk461888 = require("./461888.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    guildId: t,
    ctaType: n,
    submitting: s,
    onGoToGuild: o,
    onAcceptInvite: u,
    onStartApplication: f,
    onComplete: m
  } = e, [g, E] = i.useState(false), y = (0, l.A)(t), b = i.useCallback(() => {
    (0, c.pX)(_.BVt.GUILD_MEMBER_VERIFICATION(t))
  }, [t]), O = i.useCallback(async () => {
    await (0, d.Z2)(t, {
      object: _.ZSU.GUILD_PROFILE
    })
  }, [t]), {
    text: v,
    onClick: A
  } = i.useMemo(() => {
    switch (n) {
      case p.SP.IS_MEMBER:
        return {
          text: h.intl.string(h.t.IRoQXr), onClick: o
        };
      case p.SP.ADOPT_TAG:
        return {
          text: h.intl.string(h.t.cQDYRu), onClick: y
        };
      case p.SP.HAS_APPLICATION:
        return {
          text: h.intl.string(h.t["4yfIDk"]), onClick: b
        };
      case p.SP.APPLY_TO_JOIN:
        return {
          text: h.intl.string(h.t["7XdMW2"]), onClick: f
        };
      case p.SP.LURK_DISCOVERABLE:
        return {
          text: h.intl.string(h.t.VJlc0S), onClick: O
        };
      case p.SP.JOIN_VIA_INVITE:
        return {
          text: h.intl.string(h.t.VJlc0S), onClick: u
        };
      case p.SP.ACCEPT_ROLES:
        return {
          text: h.intl.string(h.t.MMlhsr), onClick: u
        };
      default:
        return {
          text: null, onClick: null
        }
    }
  }, [n, b, O, u, o, f, y]), I = i.useCallback(async e => {
    e.stopPropagation(), E(true);
    try {
      await (null == A ? true : A())
    } catch (e) {} finally {
      null == m || m(), E(false)
    }
  }, [A, m]);
  return null == v ? null : (0, r.jsx)(a.Button, {
    variant: "active",
    size: "sm",
    text: v,
    fullWidth: true,
    loading: g || s,
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
  } = (0, p.Ay)(t), d = i.useCallback(() => (0, u.u)(a), [a]), _ = i.useCallback(() => {
    null != l && s.Ay.acceptInvite({
      inviteKey: l,
      context: {
        location: "guild_profile"
      }
    })
  }, [l]), h = i.useCallback(() => {
    t.visibility !== f.n.PUBLIC_WITH_RECRUITMENT && null != l ? _() : o.A.openMemberVerificationModal(a, true, l)
  }, [_, a, t.visibility, l]);
  return null == c ? null : (0, r.jsx)(m, {
    guildId: a,
    ctaType: c,
    onGoToGuild: d,
    onAcceptInvite: _,
    onStartApplication: h,
    onComplete: n
  })
}