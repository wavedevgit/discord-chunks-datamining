/** Chunk was on 90228 **/
/** chunk id: 139210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk590202 = require("./590202.js"),
  Chunk971649 = require("./971649.js"),
  Chunk901406 = require("./901406.js"),
  Chunk270045 = require("./270045.jsx"),
  Chunk57718 = require("./57718.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk223352 = require("./223352.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk116224 = require("./116224.js");
let _ = (0, Chunk353709.animated)(Chunk57718.Ay),
  y = () => {
    let e = (0, u.go)(),
      {
        expansionSpring: t
      } = l.useContext(g.PW),
      {
        onCtxMenuOpen: n,
        onCtxMenuClose: r,
        onCtxMenuSelect: h,
        isExpanded: y,
        isExpansionAnimationComplete: A,
        quest: C
      } = l.useContext(f.T),
      S = l.useCallback(() => {
        (0, x.Zc)(C, {
          content: c.uF.QUEST_BAR_V2,
          ctaContent: d.Cy.OPEN_DISCLOSURE,
          sourceQuestContent: c.uF.QUEST_BAR_V2
        })
      }, [C]),
      O = l.useCallback(() => {
        (0, m.pu)(C, {
          content: c.uF.QUEST_BAR_V2,
          ctaContent: d.Cy.OPEN_GAME_LINK,
          impressionId: e,
          sourceQuestContent: c.uF.QUEST_BAR_V2
        })
      }, [e, C]),
      T = y && A,
      E = (0, a.jsx)(o.DUT, {
        onClick: O,
        className: i()(j.vk, {
          [j.wm]: T
        }),
        children: (0, a.jsx)(_, {
          quest: C,
          withGameTile: false,
          logotypeClassName: j.Iu,
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
      className: i()(j.iE, j.Ht, {
        [j.tT]: T
      }),
      style: {
        transform: (0, s.to)([t.to({
          range: [0, 1],
          output: [6, 0]
        })], e => "translateY(".concat(e, "px)"))
      },
      children: [(0, a.jsx)(s.animated.div, {
        className: j.Tu,
        style: {
          opacity: t.to({
            range: [0, 1],
            output: [0, 1]
          })
        }
      }), (0, a.jsx)(b.A, {
        isFullyExpanded: T,
        partnerBranding: E
      }), (0, a.jsxs)(s.animated.div, {
        className: j.P0,
        style: {
          opacity: t.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: [(0, a.jsxs)(o.DUT, {
          className: j.y8,
          onClick: S,
          children: [(0, a.jsx)(o.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: v.intl.string(v.t.o6FLcF)
          }), (0, a.jsx)(o.cBN, {
            color: o.LU0.colors.WHITE,
            className: j.P$
          })]
        }), (0, a.jsx)(p.C, {
          onOpen: n,
          onClose: r,
          onSelect: h,
          questContent: c.uF.QUEST_BAR_V2,
          quest: C,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: c.uF.QUEST_BAR_V2,
          children: e => {
            var t, n;
            return (0, a.jsx)(o.DUT, (t = function(e) {
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
              className: j.rb,
              "aria-label": v.intl.string(v.t.DEoVWZ),
              children: (0, a.jsx)(o.jNK, {
                size: "md",
                color: "currentColor",
                className: i()(j.Bx, j.ON)
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