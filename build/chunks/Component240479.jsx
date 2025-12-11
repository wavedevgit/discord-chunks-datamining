/** Chunk was on web.js **/
/** chunk id: 240479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./457542.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk258462 = require("./258462.js");

function C(e) {
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
      textOverride: I.intl.string(I.t.pj0XBN)
    }
  }) : a === y.y.JOIN_GUILD ? (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: I.intl.string(I.t.riu2R5),
    fullWidth: true,
    onClick: o
  }) : null
}

function A(e) {
  let {
    sound: t,
    channel: n,
    closePopout: l,
    refreshPosition: u
  } = e, E = t.guildId === S.X8, O = (0, o.e7)([g.Z], () => g.Z.getGuild(t.guildId)), v = !E && null != O, [A, N] = i.useState(), P = (0, b.V2)({
    location: "SoundmojiGuildInfo"
  }), R = E || v || null != A || !P, [w, D] = i.useState(!R);
  i.useEffect(() => {
    R || (D(true), (0, _.xU)(t.soundId, t.guildId).then(e => {
      N(e)
    }).finally(() => {
      D(false), u()
    }))
  }, [u, R, t.guildId, t.soundId]);
  let {
    buttonType: x,
    description: L
  } = (0, y.Z)(t, n, v, A), j = x === y.y.JOIN_GUILD, M = !E && w, k = i.useMemo(() => v ? d.JO.createFromGuildRecord(O) : null != A ? d.JO.createFromDiscoverableGuild(A) : true, [O, v, A]);
  return M ? (0, r.jsx)(p.SE, {}) : (0, r.jsxs)("div", {
    className: T.infoContainer,
    children: [(0, r.jsxs)(p.W_, {
      children: [(0, r.jsxs)("div", {
        className: T.infoExpandedSoundContainer,
        children: [(0, r.jsx)(h.ZP, {
          buttonOverlay: m.Pb.NONE,
          sound: t,
          channel: true,
          isSoundmoji: true,
          onSelectItem: () => {}
        }), (0, r.jsx)(a.xvT, {
          variant: "text-sm/normal",
          children: L
        })]
      }), null != k && (0, r.jsxs)("div", {
        className: T.infoExpandedGuildContainer,
        children: [(0, r.jsx)(a.xvT, {
          variant: "eyebrow",
          color: "text-muted",
          className: T.infoExpandedGuildTitle,
          children: v ? I.intl.string(I.t.tGDabk) : I.intl.string(I.t.rnOmOa)
        }), (0, r.jsx)("div", {
          className: T.infoExpandedGuildInfo,
          children: (0, r.jsx)(f.Oe, {
            expressionSourceGuild: k,
            hasJoinedExpressionSourceGuild: v,
            isDisplayingJoinGuildButtonInPopout: j
          })
        }), (0, r.jsx)(C, {
          buttonType: x,
          discoverableGuildId: null == A ? true : A.id,
          closePopout: l
        })]
      })]
    }), (0, r.jsx)(c.IGR, {
      text: "BETA",
      color: s.Z.colors.BACKGROUND_BRAND.css,
      className: T.betaBadge
    })]
  })
}