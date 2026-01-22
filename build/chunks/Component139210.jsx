/** Chunk was on 22477 **/
/** chunk id: 139210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk341915 = require("./341915.js"),
  Chunk901406 = require("./901406.js"),
  Chunk270045 = require("./270045.jsx"),
  Chunk57718 = require("./57718.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk223352 = require("./223352.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk116224 = require("./116224.js");
let y = (0, Chunk108531.animated)(Chunk57718.Ay),
  _ = () => {
    let e = (0, d.go)(),
      {
        expansionSpring: t
      } = l.useContext(x.PW),
      {
        onCtxMenuOpen: n,
        onCtxMenuClose: i,
        onCtxMenuSelect: h,
        isExpanded: _,
        isExpansionAnimationComplete: A,
        quest: C
      } = l.useContext(b.T),
      S = l.useCallback(() => {
        (0, f.Zc)(C, {
          content: u.uF.QUEST_BAR_V2,
          ctaContent: c.Cy.OPEN_DISCLOSURE,
          sourceQuestContent: u.uF.QUEST_BAR_V2
        })
      }, [C]),
      O = l.useCallback(() => {
        (0, m.pu)(C, {
          content: u.uF.QUEST_BAR_V2,
          ctaContent: c.Cy.OPEN_GAME_LINK,
          impressionId: e,
          sourceQuestContent: u.uF.QUEST_BAR_V2
        })
      }, [e, C]),
      E = _ && A,
      N = (0, a.jsx)(o.DUT, {
        onClick: O,
        className: r()(j.vk, {
          [j.wm]: E
        }),
        children: (0, a.jsx)(y, {
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
      className: r()(j.iE, j.Ht, {
        [j.tT]: E
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
      }), (0, a.jsx)(g.A, {
        isFullyExpanded: E,
        partnerBranding: N
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
          onClose: i,
          onSelect: h,
          questContent: u.uF.QUEST_BAR_V2,
          quest: C,
          shouldShowDisclosure: true,
          showShareLink: true,
          sourceQuestContent: u.uF.QUEST_BAR_V2,
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
                className: r()(j.Bx, j.ON)
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