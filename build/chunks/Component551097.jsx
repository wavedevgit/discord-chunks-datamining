/** Chunk was on 6043 **/
/** chunk id: 551097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk620792 = require("./620792.js"),
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
let C = (0, Chunk620792.animated)(Chunk685613.ZP),
  y = () => {
    let e = (0, Chunk915750.aM)(),
      {
        expansionSpring: t
      } = Chunk473749.useContext(Chunk444134.xo),
      {
        onCtxMenuOpen: n,
        onCtxMenuClose: i,
        onCtxMenuSelect: f,
        isExpanded: y,
        isExpansionAnimationComplete: _,
        quest: S
      } = Chunk473749.useContext(Chunk526188.A),
      E = Chunk473749.useCallback(() => {
        (0, Chunk110560.openDisclosureModal)(S, {
          content: Chunk49436.jn.QUEST_BAR_V2,
          ctaContent: Chunk617136.jZ.OPEN_DISCLOSURE,
          sourceQuestContent: Chunk49436.jn.QUEST_BAR_V2
        })
      }, [S]),
      T = Chunk473749.useCallback(() => {
        (0, Chunk387745.nc)(S, {
          content: Chunk49436.jn.QUEST_BAR_V2,
          ctaContent: Chunk617136.jZ.OPEN_GAME_LINK,
          impressionId: module,
          sourceQuestContent: Chunk49436.jn.QUEST_BAR_V2
        })
      }, [module, S]),
      O = y && _,
      N = (0, Chunk54381.jsx)(Chunk481060.P3F, {
        onClick: T,
        className: l()(Chunk952334.clickable, {
          [Chunk952334.logo]: O
        }),
        children: (0, Chunk54381.jsx)(C, {
          quest: S,
          withGameTile: false,
          logotypeClassName: Chunk952334.partnerBranding,
          logotypeStyle: {
            height: 24,
            maxWidth: 92,
            transform: (0, Chunk620792.to)([exports.to({
              range: [0, 1],
              output: [1, 1]
            })], e => "scale(".concat(e, ")"))
          }
        })
      });
    return (0, Chunk54381.jsxs)(Chunk620792.animated.div, {
      className: l()(Chunk952334.wrapper, Chunk952334.rewardHighlightWrapper, {
        [Chunk952334.interactable]: O
      }),
      style: {
        transform: (0, Chunk620792.to)([exports.to({
          range: [0, 1],
          output: [6, 0]
        })], e => "translateY(".concat(e, "px)"))
      },
      children: [(0, Chunk54381.jsx)(Chunk620792.animated.div, {
        className: Chunk952334.opaqueExpandedBackground,
        style: {
          opacity: exports.to({
            range: [0, 1],
            output: [0, 1]
          })
        }
      }), (0, Chunk54381.jsx)(Chunk73826.Z, {
        isFullyExpanded: O,
        partnerBranding: N
      }), (0, Chunk54381.jsxs)(Chunk620792.animated.div, {
        className: Chunk952334.promotedBadgeWrapper,
        style: {
          opacity: exports.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: [(0, Chunk54381.jsxs)(Chunk481060.P3F, {
          className: Chunk952334.promotedBadge,
          onClick: E,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: Chunk388032.intl.string(Chunk388032.t.o6FLcF)
          }), (0, Chunk54381.jsx)(Chunk481060.idN, {
            color: Chunk481060.TVs.colors.WHITE,
            className: Chunk952334.promotedBadgeIcon
          })]
        }), (0, Chunk54381.jsx)(Chunk698716.i, {
          onOpen: require,
          onClose: Chunk120356,
          onSelect: Chunk685613,
          questContent: Chunk49436.jn.QUEST_BAR_V2,
          quest: S,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: Chunk49436.jn.QUEST_BAR_V2,
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