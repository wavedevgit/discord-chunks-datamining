/** Chunk was on web.js **/
/** chunk id: 277044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./492834.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk624793 = require("./624793.js"),
  Chunk767143 = require("./767143.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk796774 = require("./796774.js"),
  Chunk807348 = require("./807348.js"),
  Chunk69217 = require("./69217.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk704591 = require("./704591.js"),
  Chunk586652 = require("./586652.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk331129 = require("./331129.js");

function T(e) {
  let {
    discoverableGuildId: t,
    closePopout: n,
    buttonType: a
  } = e, s = i.useCallback(async () => {
    if (n(), null != t) try {
      await u.A.joinGuild(t), u.A.transitionToGuildSync(t)
    } catch (e) {}
  }, [n, t]);
  return a === y.E.GET_NITRO ? (0, r.jsx)(E.A, {
    fullWidth: true,
    showGradient: true,
    premiumModalAnalyticsLocation: {
      section: A.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT
    },
    subscriptionTier: O.pe.TIER_2,
    size: l.$n.Sizes.SMALL,
    color: l.$n.Colors.CUSTOM,
    onClick: n,
    textOptions: {
      textOverride: S.intl.string(S.t.pj0XBN)
    }
  }) : a === y.E.JOIN_GUILD ? (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: S.intl.string(S.t.riu2R5),
    fullWidth: true,
    onClick: s
  }) : null
}

function C(e) {
  let {
    sound: t,
    channel: n,
    closePopout: l,
    refreshPosition: u
  } = e, E = t.guildId === v.mV, O = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)), A = !E && null != O, [C, N] = i.useState(), R = (0, b.tj)({
    location: "SoundmojiGuildInfo"
  }), w = E || A || null != C || !R, [P, D] = i.useState(!w);
  i.useEffect(() => {
    w || (D(true), (0, _.nh)(t.soundId, t.guildId).then(e => {
      N(e)
    }).finally(() => {
      D(false), u()
    }))
  }, [u, w, t.guildId, t.soundId]);
  let {
    buttonType: x,
    description: L
  } = (0, y.A)(t, n, A, C), j = x === y.E.JOIN_GUILD, M = !E && P, k = i.useMemo(() => A ? d.GO.createFromGuildRecord(O) : null != C ? d.GO.createFromDiscoverableGuild(C) : true, [O, A, C]);
  return M ? (0, r.jsx)(p.Y0, {}) : (0, r.jsxs)("div", {
    className: I.op,
    children: [(0, r.jsxs)(p.Uq, {
      children: [(0, r.jsxs)("div", {
        className: I.g4,
        children: [(0, r.jsx)(m.Ay, {
          buttonOverlay: h.If.NONE,
          sound: t,
          channel: true,
          isSoundmoji: true,
          onSelectItem: () => {}
        }), (0, r.jsx)(a.EYj, {
          variant: "text-sm/normal",
          children: L
        })]
      }), null != k && (0, r.jsxs)("div", {
        className: I.Qe,
        children: [(0, r.jsx)(a.EYj, {
          variant: "eyebrow",
          color: "text-muted",
          className: I.x$,
          children: A ? S.intl.string(S.t.tGDabk) : S.intl.string(S.t.rnOmOa)
        }), (0, r.jsx)("div", {
          className: I.Ff,
          children: (0, r.jsx)(f.G7, {
            expressionSourceGuild: k,
            hasJoinedExpressionSourceGuild: A,
            isDisplayingJoinGuildButtonInPopout: j
          })
        }), (0, r.jsx)(T, {
          buttonType: x,
          discoverableGuildId: null == C ? true : C.id,
          closePopout: l
        })]
      })]
    }), (0, r.jsx)(c.LpS, {
      text: "BETA",
      color: o.A.colors.BACKGROUND_BRAND.css,
      className: I.aZ
    })]
  })
}