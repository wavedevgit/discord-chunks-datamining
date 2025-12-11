/** Chunk was on 23736 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk111131 = require("./111131.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk623249 = require("./623249.jsx"),
  Chunk477005 = require("./477005.jsx"),
  Chunk698716 = require("./698716.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk642145 = require("./642145.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk598589 = require("./598589.js");

function Z(e) {
  let {
    children: t,
    variant: n = "default"
  } = e;
  return (0, a.jsx)("div", {
    className: l()(D.pill, {
      [D.pillBrand]: "brand" === n,
      "theme-light": "default" === n
    }),
    children: (0, a.jsx)(u.Text, {
      variant: "eyebrow",
      color: "brand" === n ? "always-white" : "text-default",
      className: D.eyebrowText,
      children: t
    })
  })
}

function L(e) {
  var t;
  let {
    quest: n,
    errorHints: i,
    warningHints: l,
    isDarkTheme: o,
    sourceQuestContent: c
  } = e, {
    ref: d,
    height: p = 0
  } = (0, m.ZP)([i]), h = (null == (t = n.userStatus) ? true : t.completedAt) != null, f = (0, j.z)(n), {
    type: x,
    hints: b
  } = r.useMemo(() => h || f ? {
    type: 2,
    hints: []
  } : i.length > 0 ? {
    type: 0,
    hints: i.map(e => e.message)
  } : l.length > 0 ? {
    type: 1,
    hints: l
  } : {
    type: 2,
    hints: []
  }, [i, h, f, l]), g = 2 !== x, v = (0, u.q_F)({
    opacity: +!!g,
    height: g ? p : 0,
    config: k.Y
  }), y = 0 === x ? u.Mgn : u.d3s, C = u.TVs.unsafe_rawColors.RED_345.css, _ = 0 === x ? C : o ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
  return (0, a.jsx)(s.animated.div, {
    style: v,
    children: (0, a.jsxs)("div", {
      ref: d,
      className: D.hints,
      children: [(0, a.jsxs)("div", {
        className: D.hintsContainer,
        children: [(0, a.jsx)(y, {
          size: "xs",
          color: _
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: o ? "text-muted" : "always-white",
          children: b.at(0)
        })]
      }), 0 === x && (0, a.jsx)(u.Avr, {
        text: A.intl.string(A.t["yKJi+/"]),
        onClick: () => (0, S.y)({
          quest: n,
          errorHints: i,
          sourceQuestContent: c
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function M(e) {
  var t, n, i, s, m;
  let {
    quest: S,
    isHovering: k,
    errorHints: M,
    warningHints: U,
    isVisibleInViewport: B,
    onCtxMenuClose: F,
    onCtxMenuOpen: G,
    onCtxMenuSelect: V,
    sourceQuestContent: H
  } = e, W = (0, C.PB)(S), z = (0, p.ZP)(), q = ((0, d.wj)(z) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK, K = (0, j.tP)(S), Q = (null == (t = S.userStatus) ? true : t.claimedAt) != null, Y = (0, j.B6)(S.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), X = (null == (n = S.userStatus) ? true : n.enrolledAt) != null, J = (null == (i = S.userStatus) ? true : i.completedAt) != null, {
    onAssetLoadComplete: $
  } = r.useContext(P.k), ee = q ? "text-muted" : "always-white", et = r.useCallback(async () => {
    W && ((0, y.zi)(S) || X ? (0, N.openVideoQuestModal)({
      quest: S,
      questContent: g.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: H,
      sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, v.R)(I.dr.QUEST_HOME_DESKTOP) ? await (0, N.enrollAndStartVideoQuestWithErrorHandling)(S, {
      questContent: g.jn.QUEST_HOME_DESKTOP,
      questContentCTA: x.jZ.ACCEPT_QUEST,
      sourceQuestContent: H,
      sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, f.AH)(S.id, {
      questContent: g.jn.QUEST_HOME_DESKTOP,
      questContentCTA: x.jZ.ACCEPT_QUEST,
      sourceQuestContent: H
    }), (0, N.openVideoQuestModal)({
      quest: S,
      questContent: g.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: H,
      sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [W, S, X, H]), en = (0, o.e7)([b.Z], () => b.Z.getQuestHomeTakeoverConfig()), ea = r.useMemo(() => null != en && (0, _.P9)(en, S.id), [en, S.id]);
  return (0, a.jsxs)("div", {
    className: D.container,
    children: [(0, a.jsx)("div", {
      className: D.heroAssetWrapper,
      children: (0, a.jsx)(E.Z, {
        quest: S,
        isInteracting: k,
        hideAssets: !B,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: D.heroAssetCont
      })
    }), (0, a.jsx)("div", {
      className: l()(D.overlay, {
        [D.lightThemeGradient]: z === R.BRd.LIGHT,
        [D.darkThemeGradient]: z === R.BRd.DARK,
        [D.darkerThemeGradient]: z === R.BRd.DARKER,
        [D.midnightThemeGradient]: z === R.BRd.MIDNIGHT
      })
    }), (0, a.jsxs)("div", {
      className: D.positionContentOverBackground,
      children: [(0, a.jsxs)("div", {
        className: D.contents,
        children: [(0, a.jsxs)("div", {
          className: D.topRow,
          children: [(ea || S.preview) && (0, a.jsxs)(u.Kqy, {
            className: D.pills,
            direction: "horizontal",
            fullWidth: false,
            gap: 8,
            children: [ea && !(0, y.zi)(S) && (0, a.jsx)(Z, {
              children: A.intl.string(A.t.Jt6u7B)
            }), S.preview && (0, a.jsx)(Z, {
              variant: "brand",
              children: A.intl.string(A.t.SKNnqq)
            })]
          }), W && (0, a.jsx)(c.u, {
            text: J ? A.intl.string(A.t.YsCuyF) : X ? A.intl.string(A.t["74KqrR"]) : (0, y.zi)(S) ? A.intl.string(A.t.I6JG46) : A.intl.string(A.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, a.jsx)(u.P3F, {
              className: D.utilButtonWrapper,
              "aria-label": A.intl.string(A.t.RscU7I),
              onClick: et,
              children: (0, a.jsx)(u.o1U, {
                color: "currentColor",
                className: D.utilButtonIcon
              })
            })
          }), (0, a.jsx)(O.i, {
            onOpen: G,
            onClose: F,
            onSelect: V,
            questContent: g.jn.QUEST_HOME_DESKTOP,
            quest: S,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: H,
            children: e => {
              var t, n;
              return (0, a.jsx)(u.P3F, (t = function(e) {
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
                className: D.utilButtonWrapper,
                "aria-label": A.intl.string(A.t.DEoVWZ),
                children: (0, a.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: D.utilButtonIcon
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
        }), (0, a.jsx)(w.E, {
          showPlaceholder: !B,
          width: 100,
          height: 30,
          className: D.partnerBranding,
          children: (0, a.jsx)(T.ZP, {
            className: D.partnerBranding,
            logotypeClassName: D.partnerLogotypes,
            quest: S,
            separatorSpacing: T.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: $
          })
        }), (0, a.jsxs)("div", {
          className: D.bottomRow,
          children: [(0, a.jsxs)("span", {
            className: D.promotedByRow,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: ee,
              children: A.intl.string(A.t.VAbKhK)
            }), (0, a.jsx)(h.Z, {
              className: D.verifiedIcon,
              size: 16,
              color: u.TVs.unsafe_rawColors.GREEN_360.css,
              allowFullSizedIcon: true,
              children: (0, a.jsx)(u.kSu, {
                color: u.TVs.unsafe_rawColors.WHITE_500.css,
                size: "custom",
                width: 13,
                height: 13
              })
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: null != (m = null == (s = S.config.cosponsorMetadata) ? true : s.name) ? m : S.config.messages.gamePublisher
            })]
          }), K || Q ? null : (0, a.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: ee,
            children: A.intl.format(A.t["7D8r4F"], {
              expiryDate: Y
            })
          })]
        })]
      }), (0, a.jsx)(L, {
        quest: S,
        errorHints: M,
        warningHints: U,
        isDarkTheme: q,
        sourceQuestContent: H
      })]
    })]
  })
}