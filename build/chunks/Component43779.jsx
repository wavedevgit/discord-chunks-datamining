/** Chunk was on 75393 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
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
  Chunk324805 = require("./324805.js"),
  Chunk642145 = require("./642145.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289157 = require("./289157.js");
let O = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function T(e) {
  var t, n, i, T, P;
  let {
    quest: w,
    questContent: I,
    isHovering: k,
    contentPosition: R,
    rowIndex: A,
    isVisibleInViewport: D,
    onReceiveErrorHints: Z,
    sourceQuestContent: L
  } = e, M = r.useRef(null), U = (0, f.w8)(w.config), B = (0, f.B3)(w.config), F = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, {
    ref: G,
    scrollHeight: V
  } = (0, d.kE)(), H = 104 !== V, {
    onAssetLoadComplete: W
  } = r.useContext(v.k), {
    expansionSpring: z
  } = (0, c.q_F)({
    expansionSpring: +!!k,
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
    }({}, C.Y), P = P = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(P)).forEach(function(e) {
      Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(P, e))
    }), T)
  }), K = (null == (n = w.userStatus) ? true : n.completedAt) != null, q = (null == (i = w.userStatus) ? true : i.claimedAt) != null, Q = (0, f.xN)(w.config), Y = (0, f.LM)(w.config), {
    completedRatio: X,
    completedRatioDisplay: J
  } = (0, h.I)(w), $ = (0, p.Bd)(w, L, M), ee = r.useMemo(() => q && Q ? S.intl.format(S.t["8Op4c4"], {
    balanceHook: () => (0, a.jsxs)(N, {
      questId: w.id,
      children: [(0, a.jsx)(m.Z, {
        shouldUseThemeColor: true,
        className: E.orbsBalanceIcon,
        customSize: 14
      }), Y]
    }, w.id)
  }) : q ? (0, a.jsx)(N, {
    questId: w.id,
    children: U
  }) : Q ? S.intl.format(S.t.ro1sze, {
    balanceHook: () => (0, a.jsxs)(N, {
      questId: w.id,
      children: [(0, a.jsx)(m.Z, {
        shouldUseThemeColor: true,
        className: E.orbsBalanceIcon,
        customSize: 14
      }), Y]
    }, w.id)
  }) : S.intl.format(S.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, a.jsx)(N, {
      questId: w.id,
      children: B
    }, w.id)
  }), [U, q, B, w.id, Y, Q]), et = r.useMemo(() => {
    if (null != $) return (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: E.description,
      children: $
    })
  }, [$]), en = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: E.container,
    ref: M,
    children: [(0, a.jsxs)(s.animated.div, {
      style: {
        maxHeight: z.to([0, 1], [104, (null != V ? V : 0) + 12])
      },
      className: E.rewardDescriptionContainer,
      children: [(0, a.jsx)(j.E, {
        showPlaceholder: !D,
        width: 80,
        height: 80,
        children: (0, a.jsxs)("div", {
          className: E.assetWrapper,
          children: [!q && K && (0, a.jsx)("div", {
            className: E.completionAnimation
          }), F ? (0, a.jsxs)("div", {
            className: E.progressWrapper,
            children: [K && (0, a.jsx)(c.Fmz, {
              importData: O,
              className: E.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !en
            }), (0, a.jsx)(g.Z, {
              quest: w,
              size: 76,
              percentComplete: X,
              percentCompleteText: k && !(0, x.zi)(w) ? J : true,
              children: (0, a.jsx)("div", {
                className: E.circularRewardTileWrapper,
                children: (0, a.jsx)(b.Z, {
                  quest: w,
                  questContent: I,
                  className: E.circularQuestRewardTileAsset,
                  location: y.dr.QUEST_HOME_DESKTOP,
                  autoplay: k,
                  onLoadComplete: W,
                  lazyLoad: true,
                  sourceQuestContent: L
                })
              })
            })]
          }) : (0, a.jsx)(b.Z, {
            quest: w,
            autoplay: k,
            questContent: I,
            className: E.questRewardTileAsset,
            location: y.dr.QUEST_HOME_DESKTOP,
            onLoadComplete: W,
            lazyLoad: true,
            sourceQuestContent: L
          })]
        })
      }), (0, a.jsxs)("div", {
        ref: G,
        className: l()(E.textContainer, {
          [E.justifyCenter]: !H
        }),
        children: [(0, a.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: E.questName,
          children: S.intl.format(S.t.EAYZAr, {
            questName: w.config.messages.questName
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: E.header,
          children: ee
        }), et]
      }), H && (0, a.jsx)(s.animated.div, {
        style: {
          opacity: z.to([0, 1], [1, 0])
        },
        className: E.textOverflowBlur
      })]
    }), (0, a.jsx)(_.Z, {
      quest: w,
      questContent: I,
      contentPosition: R,
      rowIndex: A,
      onReceiveErrorHints: Z,
      sourceQuestContent: L
    })]
  })
}
let N = Chunk473749.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, a.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "header-primary",
    tag: "span",
    className: E.header,
    children: n
  }, "".concat(t, "_reward"))
})