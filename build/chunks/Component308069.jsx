/** Chunk was on web.js **/
/** chunk id: 308069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685138 = require("./685138.js"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk303385 = require("./303385.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk579605 = require("./579605.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = (0, Chunk488290.animated)(Chunk685613.ZP),
  A = e => {
    let {
      quest: t,
      expansionSpring: n,
      onCtxMenuSelect: a,
      onCtxMenuOpen: p,
      onCtxMenuClose: O,
      useReducedMotion: I,
      isExpanded: A,
      isExpansionAnimationComplete: C
    } = e, N = (0, u.aM)(), {
      status: R
    } = (0, _.n)({
      location: E.dr.QUESTS_BAR,
      questConfig: t.config
    }), P = null == R ? true : R.progressBlur, w = i.useCallback(() => {
      (0, h.openDisclosureModal)(t, {
        content: f.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: f.jn.QUEST_BAR_V2
      })
    }, [t]), D = i.useCallback(() => {
      (0, d.nc)(t, {
        content: f.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_GAME_LINK,
        impressionId: N,
        sourceQuestContent: f.jn.QUEST_BAR_V2
      })
    }, [N, t]), x = A && C, L = P ? 32 : 24, j = P ? 130 : 92, M = P ? .72 : 1, k = (0, r.jsx)(l.P3F, {
      onClick: D,
      className: o()(y.clickable, {
        [y.logo]: x
      }),
      children: (0, r.jsx)(S, {
        quest: t,
        withGameTile: false,
        logotypeClassName: y.partnerBranding,
        logotypeStyle: {
          height: L,
          maxWidth: j,
          transform: (0, s.to)([n.to({
            range: [0, 1],
            output: [1, M]
          })], e => "scale(".concat(e, ")"))
        }
      })
    });
    return (0, r.jsxs)(s.animated.div, {
      className: o()(y.wrapper, y.rewardHighlightWrapper, {
        [y.interactable]: x
      }),
      style: {
        transform: (0, s.to)([n.to({
          range: [0, 1],
          output: [P ? 5 : 6, 0]
        })], e => "translateY(".concat(e, "px"))
      },
      children: [(0, r.jsx)(s.animated.div, {
        className: y.opaqueExpandedBackground,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [0, 1]
          })
        }
      }), (0, r.jsx)(g.Z, {
        quest: t,
        expansionSpring: n,
        isFullyExpanded: x,
        partnerBranding: k,
        useReducedMotion: I
      }), (0, r.jsxs)(s.animated.div, {
        className: y.promotedBadgeWrapper,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: [(0, r.jsxs)(l.P3F, {
          className: y.promotedBadge,
          onClick: w,
          children: [(0, r.jsx)(l.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: b.intl.string(b.t.o6FLcH)
          }), (0, r.jsx)(l.idN, {
            color: l.TVs.colors.WHITE,
            className: y.promotedBadgeIcon
          })]
        }), (0, r.jsx)(m.r, {
          onOpen: p,
          onClose: O,
          onSelect: a,
          questContent: f.jn.QUEST_BAR_V2,
          quest: t,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: f.jn.QUEST_BAR_V2,
          children: e => (0, r.jsx)(l.P3F, T(v({}, e), {
            className: y.submenuWrapper,
            "aria-label": b.intl.string(b.t.DEoVWV),
            children: (0, r.jsx)(l.xhG, {
              size: "md",
              color: "currentColor",
              className: o()(y.submenuIcon, y.white)
            })
          }))
        })]
      })]
    })
  }