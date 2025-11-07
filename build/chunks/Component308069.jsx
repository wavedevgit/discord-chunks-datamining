/** Chunk was on 10150 **/
/** chunk id: 308069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
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
let v = (0, Chunk509442.animated)(Chunk685613.ZP),
  C = e => {
    let {
      quest: t,
      expansionSpring: n,
      onCtxMenuSelect: o,
      onCtxMenuOpen: g,
      onCtxMenuClose: C,
      useReducedMotion: y,
      isExpanded: E,
      isExpansionAnimationComplete: O
    } = e, S = (0, d.aM)(), {
      status: T
    } = (0, m.n)({
      location: j.dr.QUESTS_BAR,
      questConfig: t.config
    }), w = null == T ? true : T.progressBlur, P = s.useCallback(() => {
      (0, f.openDisclosureModal)(t, {
        content: p.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: p.jn.QUEST_BAR_V2
      })
    }, [t]), N = s.useCallback(() => {
      (0, u.nc)(t, {
        content: p.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_GAME_LINK,
        impressionId: S,
        sourceQuestContent: p.jn.QUEST_BAR_V2
      })
    }, [S, t]), A = E && O, R = (0, r.jsx)(l.P3F, {
      onClick: N,
      className: a()(_.clickable, {
        [_.logo]: A
      }),
      children: (0, r.jsx)(v, {
        quest: t,
        withGameTile: false,
        logotypeClassName: _.partnerBranding,
        logotypeStyle: {
          height: w ? 32 : 24,
          maxWidth: w ? 130 : 92,
          transform: (0, i.to)([n.to({
            range: [0, 1],
            output: [1, w ? .72 : 1]
          })], e => "scale(".concat(e, ")"))
        }
      })
    });
    return (0, r.jsxs)(i.animated.div, {
      className: a()(_.wrapper, _.rewardHighlightWrapper, {
        [_.interactable]: A
      }),
      style: {
        transform: (0, i.to)([n.to({
          range: [0, 1],
          output: [w ? 5 : 6, 0]
        })], e => "translateY(".concat(e, "px"))
      },
      children: [(0, r.jsx)(i.animated.div, {
        className: _.opaqueExpandedBackground,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [0, 1]
          })
        }
      }), (0, r.jsx)(x.Z, {
        quest: t,
        expansionSpring: n,
        isFullyExpanded: A,
        partnerBranding: R,
        useReducedMotion: y
      }), (0, r.jsxs)(i.animated.div, {
        className: _.promotedBadgeWrapper,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: [(0, r.jsxs)(l.P3F, {
          className: _.promotedBadge,
          onClick: P,
          children: [(0, r.jsx)(l.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: b.intl.string(b.t.o6FLcF)
          }), (0, r.jsx)(l.idN, {
            color: l.TVs.colors.WHITE,
            className: _.promotedBadgeIcon
          })]
        }), (0, r.jsx)(h.r, {
          onOpen: g,
          onClose: C,
          onSelect: o,
          questContent: p.jn.QUEST_BAR_V2,
          quest: t,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: p.jn.QUEST_BAR_V2,
          children: e => {
            var t, n;
            return (0, r.jsx)(l.P3F, (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, e), n = n = {
              className: _.submenuWrapper,
              "aria-label": b.intl.string(b.t.DEoVWZ),
              children: (0, r.jsx)(l.xhG, {
                size: "md",
                color: "currentColor",
                className: a()(_.submenuIcon, _.white)
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })]
      })]
    })
  }