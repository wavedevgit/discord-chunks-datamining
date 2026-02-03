/** Chunk was on 90228 **/
/** chunk id: 139210, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
  Chunk398025 = require("./398025.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk223352 = require("./223352.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk116224 = require("./116224.js");
let y = (0, Chunk353709.animated)(Chunk57718.Ay),
  A = () => {
    let e = (0, u.go)(),
      {
        expansionSpring: t
      } = l.useContext(f.PW),
      {
        onCtxMenuOpen: n,
        onCtxMenuClose: r,
        onCtxMenuSelect: h,
        isExpanded: A,
        isExpansionAnimationComplete: C,
        quest: S
      } = l.useContext(b.T),
      O = l.useCallback(() => {
        (0, g.Zc)(S, {
          content: c.uF.QUEST_BAR_V2,
          ctaContent: d.Cy.OPEN_DISCLOSURE,
          sourceQuestContent: c.uF.QUEST_BAR_V2
        })
      }, [S]),
      T = l.useCallback(() => {
        (0, m.pu)(S, {
          content: c.uF.QUEST_BAR_V2,
          ctaContent: d.Cy.OPEN_GAME_LINK,
          impressionId: e,
          sourceQuestContent: c.uF.QUEST_BAR_V2
        })
      }, [e, S]),
      E = A && C,
      N = (0, a.jsx)(o.DUT, {
        onClick: T,
        className: i()(_.vk, {
          [_.wm]: E
        }),
        children: (0, a.jsx)(y, {
          quest: S,
          withGameTile: false,
          logotypeClassName: _.Iu,
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
      className: i()(_.iE, _.Ht, {
        [_.tT]: E
      }),
      style: {
        transform: (0, s.to)([t.to({
          range: [0, 1],
          output: [6, 0]
        })], e => "translateY(".concat(e, "px)"))
      },
      children: [(0, a.jsx)(s.animated.div, {
        className: _.Tu,
        style: {
          opacity: (0, x.a)(t.to({
            range: [0, 1],
            output: [0, 1]
          }))
        }
      }), (0, a.jsx)(v.A, {
        isFullyExpanded: E,
        partnerBranding: N
      }), (0, a.jsxs)(s.animated.div, {
        className: _.P0,
        style: {
          opacity: (0, x.a)(t.to({
            range: [0, 1],
            output: [0, 1]
          }))
        },
        children: [(0, a.jsxs)(o.DUT, {
          className: _.y8,
          onClick: O,
          children: [(0, a.jsx)(o.Text, {
            color: "always-white",
            variant: "text-xs/normal",
            children: j.intl.string(j.t.o6FLcF)
          }), (0, a.jsx)(o.cBN, {
            color: o.LU0.colors.WHITE,
            className: _.P$
          })]
        }), (0, a.jsx)(p.C, {
          onOpen: n,
          onClose: r,
          onSelect: h,
          questContent: c.uF.QUEST_BAR_V2,
          quest: S,
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
              className: _.rb,
              "aria-label": j.intl.string(j.t.DEoVWZ),
              children: (0, a.jsx)(o.jNK, {
                size: "md",
                color: "currentColor",
                className: i()(_.Bx, _.ON)
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