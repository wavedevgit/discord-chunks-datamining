/** Chunk was on 23736 **/
/** chunk id: 551097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
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
  Chunk952334 = require("./952334.js");
let v = (0, Chunk467721.animated)(Chunk685613.ZP),
  j = e => {
    let {
      quest: t,
      expansionSpring: n,
      onCtxMenuSelect: i,
      onCtxMenuOpen: h,
      onCtxMenuClose: j,
      useReducedMotion: y,
      isExpanded: C,
      isExpansionAnimationComplete: _
    } = e, S = (0, d.aM)(), E = r.useCallback(() => {
      (0, f.openDisclosureModal)(t, {
        content: u.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: u.jn.QUEST_BAR_V2
      })
    }, [t]), O = r.useCallback(() => {
      (0, m.nc)(t, {
        content: u.jn.QUEST_BAR_V2,
        ctaContent: c.jZ.OPEN_GAME_LINK,
        impressionId: S,
        sourceQuestContent: u.jn.QUEST_BAR_V2
      })
    }, [S, t]), T = C && _, N = (0, a.jsx)(o.P3F, {
      onClick: O,
      className: l()(g.clickable, {
        [g.logo]: T
      }),
      children: (0, a.jsx)(v, {
        quest: t,
        withGameTile: false,
        logotypeClassName: g.partnerBranding,
        logotypeStyle: {
          height: 24,
          maxWidth: 92,
          transform: (0, s.to)([n.to({
            range: [0, 1],
            output: [1, 1]
          })], e => "scale(".concat(e, ")"))
        }
      })
    });
    return (0, a.jsxs)(s.animated.div, {
      className: l()(g.wrapper, g.rewardHighlightWrapper, {
        [g.interactable]: T
      }),
      style: {
        transform: (0, s.to)([n.to({
          range: [0, 1],
          output: [6, 0]
        })], e => "translateY(".concat(e, "px)"))
      },
      children: [(0, a.jsx)(s.animated.div, {
        className: g.opaqueExpandedBackground,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [0, 1]
          })
        }
      }), (0, a.jsx)(x.Z, {
        quest: t,
        expansionSpring: n,
        isFullyExpanded: T,
        partnerBranding: N,
        useReducedMotion: y
      }), (0, a.jsxs)(s.animated.div, {
        className: g.promotedBadgeWrapper,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: [(0, a.jsxs)(o.P3F, {
          className: g.promotedBadge,
          onClick: E,
          children: [(0, a.jsx)(o.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: b.intl.string(b.t.o6FLcF)
          }), (0, a.jsx)(o.idN, {
            color: o.TVs.colors.WHITE,
            className: g.promotedBadgeIcon
          })]
        }), (0, a.jsx)(p.i, {
          onOpen: h,
          onClose: j,
          onSelect: i,
          questContent: u.jn.QUEST_BAR_V2,
          quest: t,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: u.jn.QUEST_BAR_V2,
          children: e => {
            var t, n;
            return (0, a.jsx)(o.P3F, (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), a.forEach(function(t) {
                  var a;
                  a = n[t], t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = a
                })
              }
              return e
            }({}, e), n = n = {
              className: g.submenuWrapper,
              "aria-label": b.intl.string(b.t.DEoVWZ),
              children: (0, a.jsx)(o.xhG, {
                size: "md",
                color: "currentColor",
                className: l()(g.submenuIcon, g.white)
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n.push.apply(n, a)
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