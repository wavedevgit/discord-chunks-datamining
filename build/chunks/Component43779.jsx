/** Chunk was on 22979 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk115179 = require("./115179.js"),
  Chunk836831 = require("./836831.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk69439 = require("./69439.jsx"),
  Chunk642145 = require("./642145.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710294 = require("./710294.js");
let E = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));

function T(e) {
  var t, n, i, T, N;
  let {
    quest: P,
    questContent: w,
    isHovering: I,
    contentPosition: k,
    rowIndex: R,
    isVisibleInViewport: A,
    onReceiveErrorHints: D,
    sourceQuestContent: Z
  } = e, L = r.useRef(null), M = (0, x.w8)(P.config), U = (0, x.B3)(P.config), B = (null == (t = P.userStatus) ? true : t.enrolledAt) != null, {
    ref: F,
    scrollHeight: G
  } = (0, d.kE)(), V = 104 !== G, {
    onAssetLoadComplete: z
  } = r.useContext(v.k), {
    expansionSpring: H
  } = (0, c.q_F)({
    expansionSpring: +!!I,
    config: (T = function(e) {
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
    }({}, C.Y), N = N = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(N)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(N)).forEach(function(e) {
      Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(N, e))
    }), T)
  }), W = (null == (n = P.userStatus) ? true : n.completedAt) != null, K = (null == (i = P.userStatus) ? true : i.claimedAt) != null, q = (0, x.xN)(P.config), Y = (0, x.LM)(P.config), {
    completedRatio: Q,
    completedRatioDisplay: X
  } = (0, h.I)(P), J = (0, p.Bd)(P, Z, L), $ = r.useMemo(() => K && q ? _.intl.format(_.t["8Op4c4"], {
    balanceHook: () => (0, a.jsxs)(O, {
      questId: P.id,
      children: [(0, a.jsx)(m.Z, {
        shouldUseThemeColor: true,
        className: S.orbsBalanceIcon,
        customSize: 14
      }), Y]
    }, P.id)
  }) : K ? (0, a.jsx)(O, {
    questId: P.id,
    children: M
  }) : q ? _.intl.format(_.t.ro1sze, {
    balanceHook: () => (0, a.jsxs)(O, {
      questId: P.id,
      children: [(0, a.jsx)(m.Z, {
        shouldUseThemeColor: true,
        className: S.orbsBalanceIcon,
        customSize: 14
      }), Y]
    }, P.id)
  }) : _.intl.format(_.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, a.jsx)(O, {
      questId: P.id,
      children: U
    }, P.id)
  }), [M, K, U, P.id, Y, q]), ee = r.useMemo(() => {
    if (null != J) return (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: S.description,
      children: J
    })
  }, [J]), et = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: S.container,
    ref: L,
    children: [(0, a.jsxs)(s.animated.div, {
      style: {
        maxHeight: H.to([0, 1], [104, (null != G ? G : 0) + 12])
      },
      className: S.rewardDescriptionContainer,
      children: [(0, a.jsx)(j.E, {
        showPlaceholder: !A,
        width: 80,
        height: 80,
        children: (0, a.jsxs)("div", {
          className: S.assetWrapper,
          children: [!K && W && (0, a.jsx)("div", {
            className: S.completionAnimation
          }), B ? (0, a.jsxs)("div", {
            className: S.progressWrapper,
            children: [W && (0, a.jsx)(c.Fmz, {
              importData: E,
              className: S.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !et
            }), (0, a.jsx)(b.Z, {
              quest: P,
              size: 76,
              percentComplete: Q,
              percentCompleteText: I && !(0, f.zi)(P) ? X : true,
              children: (0, a.jsx)("div", {
                className: S.circularRewardTileWrapper,
                children: (0, a.jsx)(g.Z, {
                  quest: P,
                  questContent: w,
                  className: S.circularQuestRewardTileAsset,
                  autoplay: I,
                  onLoadComplete: z,
                  lazyLoad: true,
                  sourceQuestContent: Z
                })
              })
            })]
          }) : (0, a.jsx)(g.Z, {
            quest: P,
            autoplay: I,
            questContent: w,
            className: S.questRewardTileAsset,
            onLoadComplete: z,
            lazyLoad: true,
            sourceQuestContent: Z
          })]
        })
      }), (0, a.jsxs)("div", {
        ref: F,
        className: l()(S.textContainer, {
          [S.justifyCenter]: !V
        }),
        children: [(0, a.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: S.questName,
          children: _.intl.format(_.t.EAYZAr, {
            questName: P.config.messages.questName
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          className: S.header,
          children: $
        }), ee]
      }), V && (0, a.jsx)(s.animated.div, {
        style: {
          opacity: H.to([0, 1], [1, 0])
        },
        className: S.textOverflowBlur
      })]
    }), (0, a.jsx)(y.Z, {
      quest: P,
      questContent: w,
      contentPosition: k,
      rowIndex: R,
      onReceiveErrorHints: D,
      sourceQuestContent: Z
    })]
  })
}
let O = Chunk473749.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, a.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "text-strong",
    tag: "span",
    className: S.header,
    children: n
  }, "".concat(t, "_reward"))
})