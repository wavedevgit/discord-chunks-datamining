/** Chunk was on 83615 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
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
let S = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function T(e) {
  var t, n, o, T, P;
  let {
    quest: N,
    questContent: R,
    isHovering: A,
    contentPosition: B,
    rowIndex: k,
    isVisibleInViewport: I,
    onReceiveErrorHints: D,
    sourceQuestContent: q
  } = e, L = s.useRef(null), Q = (0, h.w8)(N.config), V = (0, h.B3)(N.config), M = (null == (t = N.userStatus) ? true : t.enrolledAt) != null, {
    ref: Z,
    scrollHeight: W
  } = (0, d.kE)(), U = 104 !== W, {
    onAssetLoadComplete: H
  } = s.useContext(b.k), {
    expansionSpring: F
  } = (0, c.q_F)({
    expansionSpring: +!!A,
    config: (T = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, y.Y), P = P = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(P)).forEach(function(e) {
      Object.defineProperty(T, e, Object.getOwnPropertyDescriptor(P, e))
    }), T)
  }), z = (null == (n = N.userStatus) ? true : n.completedAt) != null, G = (null == (o = N.userStatus) ? true : o.claimedAt) != null, K = (0, h.xN)(N.config), X = (0, h.LM)(N.config), {
    completedRatio: Y,
    completedRatioDisplay: J
  } = (0, f.I)(N), $ = (0, g.Bd)(N, q, L), ee = s.useMemo(() => G && K ? E.intl.format(E.t["8Op4c4"], {
    balanceHook: () => (0, r.jsxs)(w, {
      questId: N.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: O.orbsBalanceIcon,
        customSize: 14
      }), X]
    }, N.id)
  }) : G ? (0, r.jsx)(w, {
    questId: N.id,
    children: Q
  }) : K ? E.intl.format(E.t.ro1sze, {
    balanceHook: () => (0, r.jsxs)(w, {
      questId: N.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: O.orbsBalanceIcon,
        customSize: 14
      }), X]
    }, N.id)
  }) : E.intl.format(E.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, r.jsx)(w, {
      questId: N.id,
      children: V
    }, N.id)
  }), [Q, G, V, N.id, X, K]), et = s.useMemo(() => {
    if (null != $) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: O.description,
      children: $
    })
  }, [$]), en = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: O.container,
    ref: L,
    children: [(0, r.jsxs)(i.animated.div, {
      style: {
        maxHeight: F.to([0, 1], [104, (null != W ? W : 0) + 12])
      },
      className: O.rewardDescriptionContainer,
      children: [(0, r.jsx)(j.E, {
        showPlaceholder: !I,
        width: 80,
        height: 80,
        children: (0, r.jsxs)("div", {
          className: O.assetWrapper,
          children: [!G && z && (0, r.jsx)("div", {
            className: O.completionAnimation
          }), M && !G ? (0, r.jsxs)("div", {
            className: O.progressWrapper,
            children: [z && (0, r.jsx)(c.Fmz, {
              importData: S,
              className: O.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !en
            }), (0, r.jsx)(x.Z, {
              quest: N,
              size: 76,
              percentComplete: Y,
              percentCompleteText: A && !(0, m.zi)(N) ? J : true,
              children: (0, r.jsx)("div", {
                className: O.circularRewardTileWrapper,
                children: (0, r.jsx)(_.Z, {
                  quest: N,
                  questContent: R,
                  className: O.circularQuestRewardTileAsset,
                  location: C.dr.QUEST_HOME_DESKTOP,
                  autoplay: A,
                  onLoadComplete: H,
                  lazyLoad: true,
                  sourceQuestContent: q
                })
              })
            })]
          }) : (0, r.jsx)(_.Z, {
            quest: N,
            autoplay: A,
            questContent: R,
            className: O.questRewardTileAsset,
            location: C.dr.QUEST_HOME_DESKTOP,
            onLoadComplete: H,
            lazyLoad: true,
            sourceQuestContent: q
          })]
        })
      }), (0, r.jsxs)("div", {
        ref: Z,
        className: a()(O.textContainer, {
          [O.justifyCenter]: !U
        }),
        children: [(0, r.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: O.questName,
          children: E.intl.format(E.t.EAYZAr, {
            questName: N.config.messages.questName
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: O.header,
          children: ee
        }), et]
      }), U && (0, r.jsx)(i.animated.div, {
        style: {
          opacity: F.to([0, 1], [1, 0])
        },
        className: O.textOverflowBlur
      })]
    }), (0, r.jsx)(v.Z, {
      quest: N,
      questContent: R,
      contentPosition: B,
      rowIndex: k,
      onReceiveErrorHints: D,
      sourceQuestContent: q
    })]
  })
}
let w = Chunk473749.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "header-primary",
    tag: "span",
    className: O.header,
    children: n
  }, "".concat(t, "_reward"))
})