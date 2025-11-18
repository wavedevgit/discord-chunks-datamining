/** Chunk was on web.js **/
/** chunk id: 240479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./457542.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk831209 = require("./831209.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk231053 = require("./231053.js"),
  Chunk183023 = require("./183023.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk208049 = require("./208049.js"),
  Chunk697426 = require("./697426.js"),
  Chunk294206 = require("./294206.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk125900 = require("./125900.js"),
  Chunk767434 = require("./767434.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk518025 = require("./518025.js");

function A(e) {
  let {
    discoverableGuildId: t,
    closePopout: n,
    buttonType: a
  } = e, o = i.useCallback(async () => {
    if (n(), null != t) try {
      await u.Z.joinGuild(t), u.Z.transitionToGuildSync(t)
    } catch (e) {}
  }, [n, t]);
  return a === y.y.GET_NITRO ? (0, r.jsx)(E.Z, {
    fullWidth: true,
    showGradient: true,
    premiumModalAnalyticsLocation: {
      section: v.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT
    },
    subscriptionTier: O.Si.TIER_2,
    size: l.zx.Sizes.SMALL,
    color: l.zx.Colors.CUSTOM,
    onClick: n,
    textOptions: {
      textOverride: T.intl.string(T.t.pj0XBN)
    }
  }) : a === y.y.JOIN_GUILD ? (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: T.intl.string(T.t.riu2R5),
    fullWidth: true,
    onClick: o
  }) : null
}

function C(e) {
  let {
    sound: t,
    channel: n,
    closePopout: l,
    refreshPosition: u
  } = e, E = t.guildId === I.X8, O = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guildId)), v = !E && null != O, [C, N] = i.useState(), R = (0, b.V2)({
    location: "SoundmojiGuildInfo"
  }), P = E || v || null != C || !R, [D, w] = i.useState(!P);
  i.useEffect(() => {
    P || (w(true), (0, p.xU)(t.soundId, t.guildId).then(e => {
      N(e)
    }).finally(() => {
      w(false), u()
    }))
  }, [u, P, t.guildId, t.soundId]);
  let {
    buttonType: L,
    description: x
  } = (0, y.Z)(t, n, v, C), M = L === y.y.JOIN_GUILD, j = !E && D, k = i.useMemo(() => v ? d.JO.createFromGuildRecord(O) : null != C ? d.JO.createFromDiscoverableGuild(C) : true, [O, v, C]);
  return j ? (0, r.jsx)(_.SE, {}) : (0, r.jsxs)("div", {
    className: S.infoContainer,
    children: [(0, r.jsxs)(_.W_, {
      children: [(0, r.jsxs)("div", {
        className: S.infoExpandedSoundContainer,
        children: [(0, r.jsx)(m.ZP, {
          buttonOverlay: h.Pb.NONE,
          sound: t,
          channel: true,
          isSoundmoji: true,
          onSelectItem: () => {}
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/normal",
          children: x
        })]
      }), null != k && (0, r.jsxs)("div", {
        className: S.infoExpandedGuildContainer,
        children: [(0, r.jsx)(o.xvT, {
          variant: "eyebrow",
          color: "header-muted",
          className: S.infoExpandedGuildTitle,
          children: v ? T.intl.string(T.t.tGDabk) : T.intl.string(T.t.rnOmOa)
        }), (0, r.jsx)("div", {
          className: S.infoExpandedGuildInfo,
          children: (0, r.jsx)(f.Oe, {
            expressionSourceGuild: k,
            hasJoinedExpressionSourceGuild: v,
            isDisplayingJoinGuildButtonInPopout: M
          })
        }), (0, r.jsx)(A, {
          buttonType: L,
          discoverableGuildId: null == C ? true : C.id,
          closePopout: l
        })]
      })]
    }), (0, r.jsx)(c.IGR, {
      text: "BETA",
      color: a.Z.BG_BRAND,
      className: S.betaBadge
    })]
  })
}