/** Chunk was on 84249 **/
/** chunk id: 551097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk387745 = require("./387745.js"),
  Chunk698716 = require("./698716.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk73826 = require("./73826.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk952334 = require("./952334.js");
let y = (0, Chunk620389.animated)(Chunk685613.ZP),
  C = () => {
    let e = (0, d.aM)(),
      {
        expansionSpring: t
      } = r.useContext(x.xo),
      {
        onCtxMenuOpen: n,
        onCtxMenuClose: i,
        onCtxMenuSelect: h,
        isExpanded: C,
        isExpansionAnimationComplete: _,
        quest: S
      } = r.useContext(b.A),
      E = r.useCallback(() => {
        (0, f.openDisclosureModal)(S, {
          content: u.jn.QUEST_BAR_V2,
          ctaContent: c.jZ.OPEN_DISCLOSURE,
          sourceQuestContent: u.jn.QUEST_BAR_V2
        })
      }, [S]),
      T = r.useCallback(() => {
        (0, m.nc)(S, {
          content: u.jn.QUEST_BAR_V2,
          ctaContent: c.jZ.OPEN_GAME_LINK,
          impressionId: e,
          sourceQuestContent: u.jn.QUEST_BAR_V2
        })
      }, [e, S]),
      O = C && _,
      N = (0, a.jsx)(o.P3F, {
        onClick: T,
        className: l()(j.clickable, {
          [j.logo]: O
        }),
        children: (0, a.jsx)(y, {
          quest: S,
          withGameTile: false,
          logotypeClassName: j.partnerBranding,
          logotypeStyle: {
            height: 24,
            maxWidth: 92,
            transform: (0, s.to)([t.to({
              range: [0, 1],
              output: [1, 1]
            })], e => "scale(".concat(e, ")"))
          }
        })
      });
    return (0, a.jsxs)(s.animated.div, {
      className: l()(j.wrapper, j.rewardHighlightWrapper, {
        [j.interactable]: O
      }),
      style: {
        transform: (0, s.to)([t.to({
          range: [0, 1],
          output: [6, 0]
        })], e => "translateY(".concat(e, "px)"))
      },
      children: [(0, a.jsx)(s.animated.div, {
        className: j.opaqueExpandedBackground,
        style: {
          opacity: t.to({
            range: [0, 1],
            output: [0, 1]
          })
        }
      }), (0, a.jsx)(g.Z, {
        isFullyExpanded: O,
        partnerBranding: N
      }), (0, a.jsxs)(s.animated.div, {
        className: j.promotedBadgeWrapper,
        style: {
          opacity: t.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: [(0, a.jsxs)(o.P3F, {
          className: j.promotedBadge,
          onClick: E,
          children: [(0, a.jsx)(o.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: v.intl.string(v.t.o6FLcF)
          }), (0, a.jsx)(o.idN, {
            color: o.TVs.colors.WHITE,
            className: j.promotedBadgeIcon
          })]
        }), (0, a.jsx)(p.i, {
          onOpen: n,
          onClose: i,
          onSelect: h,
          questContent: u.jn.QUEST_BAR_V2,
          quest: S,
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
              className: j.submenuWrapper,
              "aria-label": v.intl.string(v.t.DEoVWZ),
              children: (0, a.jsx)(o.xhG, {
                size: "md",
                color: "currentColor",
                className: l()(j.submenuIcon, j.white)
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