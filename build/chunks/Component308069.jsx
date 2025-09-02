/** Chunk was on web.js **/
/** chunk id: 308069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk303385 = require("./303385.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk579605 = require("./579605.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
  let {
    quest: t,
    expansionSpring: n,
    onCtxMenuSelect: a,
    onCtxMenuOpen: b,
    onCtxMenuClose: O,
    useReducedMotion: I,
    isExpanded: T,
    isExpansionAnimationComplete: S
  } = e, A = (0, u.aM)(), C = i.useCallback(() => {
    (0, p.openDisclosureModal)(t, {
      content: f.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_DISCLOSURE,
      sourceQuestContent: f.jn.QUEST_BAR_V2
    })
  }, [t]), N = i.useCallback(() => {
    (0, d.nc)(t, {
      content: f.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_GAME_LINK,
      impressionId: A,
      sourceQuestContent: f.jn.QUEST_BAR_V2
    })
  }, [A, t]), R = T && S, P = (0, r.jsx)(l.P3F, {
    onClick: N,
    className: o()(E.clickable, {
      [E.logo]: R
    }),
    children: (0, r.jsx)(_.ZP, {
      quest: t,
      logotypeClassName: E.rewardHighlightLogotype,
      withGameTile: false
    })
  });
  return (0, r.jsxs)(s.animated.div, {
    className: o()(E.wrapper, E.rewardHighlightWrapper, {
      [E.interactable]: R
    }),
    style: {
      transform: (0, s.to)([n.to({
        range: [0, 1],
        output: [8, 0]
      })], e => "translateY(".concat(e, "px"))
    },
    children: [(0, r.jsx)(s.animated.div, {
      className: E.opaqueExpandedBackground,
      style: {
        opacity: n.to({
          range: [0, 1],
          output: [0, 1]
        })
      }
    }), (0, r.jsx)(m.Z, {
      quest: t,
      expansionSpring: n,
      isFullyExpanded: R,
      partnerBranding: P,
      useReducedMotion: I
    }), (0, r.jsxs)(s.animated.div, {
      className: E.promotedBadgeWrapper,
      style: {
        opacity: n.to({
          range: [0, 1],
          output: [0, 1]
        })
      },
      children: [(0, r.jsxs)(l.P3F, {
        className: E.promotedBadge,
        onClick: C,
        children: [(0, r.jsx)(l.Text, {
          color: "always-white",
          variant: "text-xs/normal",
          children: g.intl.string(g.t.o6FLcH)
        }), (0, r.jsx)(l.idN, {
          color: l.TVs.colors.WHITE,
          className: E.promotedBadgeIcon
        })]
      }), (0, r.jsx)(h.r, {
        onOpen: b,
        onClose: O,
        onSelect: a,
        questContent: f.jn.QUEST_BAR_V2,
        quest: t,
        shouldShowDisclosure: true,
        showShareLink: true,
        sourceQuestContent: f.jn.QUEST_BAR_V2,
        children: e => (0, r.jsx)(l.P3F, v(y({}, e), {
          className: E.submenuWrapper,
          "aria-label": g.intl.string(g.t.DEoVWV),
          children: (0, r.jsx)(l.xhG, {
            size: "md",
            color: "currentColor",
            className: o()(E.submenuIcon, E.white)
          })
        }))
      })]
    })]
  })
}