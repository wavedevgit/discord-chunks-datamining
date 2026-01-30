/** Chunk was on 87557 **/
/** chunk id: 56853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk736653 = require("./736653.js"),
  Chunk496885 = require("./496885.jsx"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk590202 = require("./590202.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk988436 = require("./988436.jsx"),
  Chunk918338 = require("./918338.jsx"),
  Chunk270045 = require("./270045.jsx"),
  Chunk57718 = require("./57718.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk516226 = require("./516226.js"),
  Chunk720875 = require("./720875.jsx"),
  Chunk419367 = require("./419367.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk627669 = require("./627669.js");

function k(e) {
  let {
    children: t,
    variant: n = "default"
  } = e;
  return (0, a.jsx)("div", {
    className: i()(P.Io, {
      [P.tV]: "brand" === n,
      "theme-light": "default" === n
    }),
    children: (0, a.jsx)(u.Text, {
      variant: "eyebrow",
      color: "brand" === n ? "always-white" : "text-default",
      className: P.Xi,
      children: t
    })
  })
}

function R(e) {
  var t;
  let {
    quest: n,
    errorHints: r,
    warningHints: i,
    isDarkTheme: o,
    sourceQuestContent: c
  } = e, {
    ref: d,
    height: p = 0
  } = (0, m.Ay)([r]), h = (null == (t = n.userStatus) ? true : t.completedAt) != null, x = (0, f.Vn)(n), {
    type: g,
    hints: b
  } = l.useMemo(() => h || x ? {
    type: 2,
    hints: []
  } : r.length > 0 ? {
    type: 0,
    hints: r.map(e => e.message)
  } : i.length > 0 ? {
    type: 1,
    hints: i
  } : {
    type: 2,
    hints: []
  }, [r, h, x, i]), v = 2 !== g, j = (0, u.zhh)({
    opacity: +!!v,
    height: v ? p : 0,
    config: N.N
  }), _ = 0 === g ? u.EpV : u.mir, A = u.LU0.unsafe_rawColors.RED_345.css, C = 0 === g ? A : o ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
  return (0, a.jsx)(s.animated.div, {
    style: j,
    children: (0, a.jsxs)("div", {
      ref: d,
      className: P.XZ,
      children: [(0, a.jsxs)("div", {
        className: P.M5,
        children: [(0, a.jsx)(_, {
          size: "xs",
          color: C
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: o ? "text-muted" : "always-white",
          children: b.at(0)
        })]
      }), 0 === g && (0, a.jsx)(u.QWc, {
        text: I.intl.string(I.t["yKJi+/"]),
        onClick: () => (0, y.i)({
          quest: n,
          errorHints: r,
          sourceQuestContent: c
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function D(e) {
  var t, n, r, s, m;
  let {
    quest: y,
    isHovering: N,
    errorHints: D,
    warningHints: M,
    isVisibleInViewport: L,
    onCtxMenuClose: U,
    onCtxMenuOpen: B,
    onCtxMenuSelect: G,
    sourceQuestContent: F
  } = e, V = (0, j.IO)(y), W = (0, p.Ay)(), H = ((0, d.Mw)(W) ? w.NJ8.DARK : w.NJ8.LIGHT) === w.NJ8.DARK, K = (0, f.LS)(y), z = (null == (n = y.userStatus) ? true : n.claimedAt) != null, q = (0, f.S5)(y.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), Q = (null == (r = y.userStatus) ? true : r.enrolledAt) != null, Y = (null == (s = y.userStatus) ? true : s.completedAt) != null, {
    onAssetLoadComplete: J
  } = l.useContext(T.M), X = H ? "text-muted" : "always-white", Z = l.useCallback(() => {
    V && (0, O.d5)({
      quest: y,
      questContent: g.uF.QUEST_HOME_DESKTOP,
      sourceQuestContent: F,
      sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })
  }, [V, y, F]), $ = (0, o.bG)([x.A], () => x.A.getQuestHomeTakeoverConfig()), ee = l.useMemo(() => null != $ && (0, _.f0)($, y.id), [$, y.id]);
  return (0, a.jsxs)("div", {
    className: P.kL,
    children: [(0, a.jsx)("div", {
      className: P.IC,
      children: (0, a.jsx)(A.A, {
        quest: y,
        isInteracting: N,
        hideAssets: !L,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: P.l1
      })
    }), (0, a.jsx)("div", {
      className: i()(P.Lw, {
        [P.So]: W === w.NJ8.LIGHT,
        [P.en]: W === w.NJ8.DARK,
        [P.FN]: W === w.NJ8.DARKER,
        [P.QQ]: W === w.NJ8.MIDNIGHT
      })
    }), (0, a.jsxs)("div", {
      className: P.nX,
      children: [(0, a.jsxs)("div", {
        className: P.PG,
        children: [(0, a.jsxs)("div", {
          className: P.mY,
          children: [(ee || y.preview) && (0, a.jsxs)(u.BJc, {
            className: P.Bv,
            direction: "horizontal",
            fullWidth: false,
            gap: 8,
            children: [ee && !(0, v.Ic)(y) && (0, a.jsx)(k, {
              children: I.intl.string(I.t.Jt6u7B)
            }), y.preview && (0, a.jsx)(k, {
              variant: "brand",
              children: I.intl.string(I.t.SKNnqq)
            })]
          }), V && (0, a.jsx)(c.m, {
            text: Y ? I.intl.string(I.t.YsCuyF) : Q ? I.intl.string(I.t["74KqrR"]) : (0, v.Ic)(y) ? I.intl.string(I.t.I6JG46) : I.intl.string(I.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, a.jsx)(u.DUT, {
              className: P.iI,
              "aria-label": I.intl.string(I.t.RscU7I),
              onClick: Z,
              children: (0, a.jsx)(u.udU, {
                color: "currentColor",
                className: P.A9
              })
            })
          }), (0, a.jsx)(C.C, {
            onOpen: B,
            onClose: U,
            onSelect: G,
            questContent: g.uF.QUEST_HOME_DESKTOP,
            quest: y,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: F,
            children: e => {
              var t, n;
              return (0, a.jsx)(u.DUT, (t = function(e) {
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
                className: P.iI,
                "aria-label": I.intl.string(I.t.DEoVWZ),
                children: (0, a.jsx)(u.jNK, {
                  size: "md",
                  color: "currentColor",
                  className: P.A9
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
        }), (0, a.jsx)(E.A, {
          showPlaceholder: !L,
          width: 100,
          height: 30,
          className: P.Iu,
          children: (0, a.jsx)(S.Ay, {
            className: P.Iu,
            logotypeClassName: P.ND,
            quest: y,
            separatorSpacing: S.C8.MEDIUM,
            withGameTile: false,
            onLoadComplete: J
          })
        }), (0, a.jsxs)("div", {
          className: P.E_,
          children: [(0, a.jsxs)("span", {
            className: P.O,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: X,
              children: I.intl.string(I.t.VAbKhK)
            }), (0, a.jsx)(h.A, {
              className: P.w$,
              size: 16,
              color: u.LU0.unsafe_rawColors.GREEN_360.css,
              allowFullSizedIcon: true,
              children: (0, a.jsx)(u.BNr, {
                color: u.LU0.unsafe_rawColors.WHITE.css,
                size: "custom",
                width: 13,
                height: 13
              })
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: null != (t = null == (m = y.config.cosponsorMetadata) ? true : m.name) ? t : y.config.messages.gamePublisher
            })]
          }), K || z ? null : (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: X,
            children: I.intl.format(I.t["7D8r4F"], {
              expiryDate: q
            })
          })]
        })]
      }), (0, a.jsx)(R, {
        quest: y,
        errorHints: D,
        warningHints: M,
        isDarkTheme: H,
        sourceQuestContent: F
      })]
    })]
  })
}