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
  return a === b.E.GET_NITRO ? (0, r.jsx)(E.A, {
    fullWidth: true,
    showGradient: true,
    premiumModalAnalyticsLocation: {
      section: v.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT
    },
    subscriptionTier: O.pe.TIER_2,
    size: l.$n.Sizes.SMALL,
    color: l.$n.Colors.CUSTOM,
    onClick: n,
    textOptions: {
      textOverride: I.intl.string(I.t.pj0XBN)
    }
  }) : a === b.E.JOIN_GUILD ? (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: I.intl.string(I.t.riu2R5),
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
  } = e, E = t.guildId === A.mV, O = (0, s.bG)([g.A], () => g.A.getGuild(t.guildId)), v = !E && null != O, [C, N] = i.useState(), R = (0, y.tj)({
    location: "SoundmojiGuildInfo"
  }), w = E || v || null != C || !R, [P, D] = i.useState(!w);
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
  } = (0, b.A)(t, n, v, C), j = x === b.E.JOIN_GUILD, M = !E && P, k = i.useMemo(() => v ? d.GO.createFromGuildRecord(O) : null != C ? d.GO.createFromDiscoverableGuild(C) : true, [O, v, C]);
  return M ? (0, r.jsx)(p.Y0, {}) : (0, r.jsxs)("div", {
    className: S.op,
    children: [(0, r.jsxs)(p.Uq, {
      children: [(0, r.jsxs)("div", {
        className: S.g4,
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
        className: S.Qe,
        children: [(0, r.jsx)(a.EYj, {
          variant: "eyebrow",
          color: "text-muted",
          className: S.x$,
          children: v ? I.intl.string(I.t.tGDabk) : I.intl.string(I.t.rnOmOa)
        }), (0, r.jsx)("div", {
          className: S.Ff,
          children: (0, r.jsx)(f.G7, {
            expressionSourceGuild: k,
            hasJoinedExpressionSourceGuild: v,
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
      className: S.aZ
    })]
  })
}