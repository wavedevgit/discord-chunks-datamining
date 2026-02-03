/** Chunk was on 90228 **/
/** chunk id: 56853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
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
  Chunk398025 = require("./398025.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk516226 = require("./516226.js"),
  Chunk720875 = require("./720875.jsx"),
  Chunk419367 = require("./419367.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk627669 = require("./627669.js");

function R(e) {
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

function D(e) {
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
    config: w.N
  }), _ = 0 === g ? u.EpV : u.mir, A = u.LU0.unsafe_rawColors.RED_345.css, C = 0 === g ? A : o ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
  return (0, a.jsx)(s.animated.div, {
    style: {
      height: j.height,
      opacity: (0, O.a)(j.opacity)
    },
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
        text: k.intl.string(k.t["yKJi+/"]),
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

function M(e) {
  var t, n, r, s, m;
  let {
    quest: y,
    isHovering: O,
    errorHints: w,
    warningHints: M,
    isVisibleInViewport: L,
    onCtxMenuClose: U,
    onCtxMenuOpen: B,
    onCtxMenuSelect: G,
    sourceQuestContent: F
  } = e, V = (0, j.IO)(y), W = (0, p.Ay)(), H = ((0, d.Mw)(W) ? I.NJ8.DARK : I.NJ8.LIGHT) === I.NJ8.DARK, K = (0, f.LS)(y), z = (null == (n = y.userStatus) ? true : n.claimedAt) != null, q = (0, f.S5)(y.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), Q = (null == (r = y.userStatus) ? true : r.enrolledAt) != null, Y = (null == (s = y.userStatus) ? true : s.completedAt) != null, {
    onAssetLoadComplete: J
  } = l.useContext(E.M), X = H ? "text-muted" : "always-white", $ = l.useCallback(() => {
    V && (0, T.d5)({
      quest: y,
      questContent: g.uF.QUEST_HOME_DESKTOP,
      sourceQuestContent: F,
      sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })
  }, [V, y, F]), Z = (0, o.bG)([x.A], () => x.A.getQuestHomeTakeoverConfig()), ee = l.useMemo(() => null != Z && (0, _.f0)(Z, y.id), [Z, y.id]);
  return (0, a.jsxs)("div", {
    className: P.kL,
    children: [(0, a.jsx)("div", {
      className: P.IC,
      children: (0, a.jsx)(A.A, {
        quest: y,
        isInteracting: O,
        hideAssets: !L,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: P.l1
      })
    }), (0, a.jsx)("div", {
      className: i()(P.Lw, {
        [P.So]: W === I.NJ8.LIGHT,
        [P.en]: W === I.NJ8.DARK,
        [P.FN]: W === I.NJ8.DARKER,
        [P.QQ]: W === I.NJ8.MIDNIGHT
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
            children: [ee && !(0, v.Ic)(y) && (0, a.jsx)(R, {
              children: k.intl.string(k.t.Jt6u7B)
            }), y.preview && (0, a.jsx)(R, {
              variant: "brand",
              children: k.intl.string(k.t.SKNnqq)
            })]
          }), V && (0, a.jsx)(c.m, {
            text: Y ? k.intl.string(k.t.YsCuyF) : Q ? k.intl.string(k.t["74KqrR"]) : (0, v.Ic)(y) ? k.intl.string(k.t.I6JG46) : k.intl.string(k.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, a.jsx)(u.DUT, {
              className: P.iI,
              "aria-label": k.intl.string(k.t.RscU7I),
              onClick: $,
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
                "aria-label": k.intl.string(k.t.DEoVWZ),
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
        }), (0, a.jsx)(N.A, {
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
              children: k.intl.string(k.t.VAbKhK)
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
            children: k.intl.format(k.t["7D8r4F"], {
              expiryDate: q
            })
          })]
        })]
      }), (0, a.jsx)(D, {
        quest: y,
        errorHints: w,
        warningHints: M,
        isDarkTheme: H,
        sourceQuestContent: F
      })]
    })]
  })
}