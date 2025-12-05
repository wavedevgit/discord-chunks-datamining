/** Chunk was on 83615 **/
/** chunk id: 551097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk387745 = require("./387745.js"),
  Chunk698716 = require("./698716.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk73826 = require("./73826.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765486 = require("./765486.js");
let b = (0, Chunk205120.animated)(Chunk685613.ZP),
  j = e => {
    let {
      quest: t,
      expansionSpring: n,
      onCtxMenuSelect: o,
      onCtxMenuOpen: f,
      onCtxMenuClose: j,
      useReducedMotion: v,
      isExpanded: C,
      isExpansionAnimationComplete: y
    } = e, E = (0, u.aM)(), O = s.useCallback(() => {
      (0, g.openDisclosureModal)(t, {
        content: d.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: d.jn.QUEST_BAR_V2
      })
    }, [t]), S = s.useCallback(() => {
      (0, p.nc)(t, {
        content: d.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_GAME_LINK,
        impressionId: E,
        sourceQuestContent: d.jn.QUEST_BAR_V2
      })
    }, [E, t]), T = C && y, w = (0, r.jsx)(l.P3F, {
      onClick: S,
      className: a()(_.clickable, {
        [_.logo]: T
      }),
      children: (0, r.jsx)(b, {
        quest: t,
        withGameTile: false,
        logotypeClassName: _.partnerBranding,
        logotypeStyle: {
          height: 24,
          maxWidth: 92,
          transform: (0, i.to)([n.to({
            range: [0, 1],
            output: [1, 1]
          })], e => "scale(".concat(e, ")"))
        }
      })
    });
    return (0, r.jsxs)(i.animated.div, {
      className: a()(_.wrapper, _.rewardHighlightWrapper, {
        [_.interactable]: T
      }),
      style: {
        transform: (0, i.to)([n.to({
          range: [0, 1],
          output: [6, 0]
        })], e => "translateY(".concat(e, "px)"))
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
        isFullyExpanded: T,
        partnerBranding: w,
        useReducedMotion: v
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
          onClick: O,
          children: [(0, r.jsx)(l.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: h.intl.string(h.t.o6FLcF)
          }), (0, r.jsx)(l.idN, {
            color: l.TVs.colors.WHITE,
            className: _.promotedBadgeIcon
          })]
        }), (0, r.jsx)(m.i, {
          onOpen: f,
          onClose: j,
          onSelect: o,
          questContent: d.jn.QUEST_BAR_V2,
          quest: t,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: d.jn.QUEST_BAR_V2,
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
              "aria-label": h.intl.string(h.t.DEoVWZ),
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