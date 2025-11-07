/** Chunk was on 34297 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk566078 = require("./566078.js"),
  Chunk472144 = require("./472144.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk69439 = require("./69439.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk642145 = require("./642145.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289157 = require("./289157.js");
let O = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function S(e) {
  var t, n, a, S, w;
  let {
    quest: P,
    questContent: N,
    isHovering: R,
    contentPosition: A,
    rowIndex: B,
    isVisibleInViewport: k,
    onReceiveErrorHints: I,
    sourceQuestContent: D
  } = e, q = s.useRef(null), L = s.useMemo(() => f.r.build(P.config), [P.config]), Q = L.defaultRewardName, V = L.defaultRewardNameWithArticle, M = (null == (t = P.userStatus) ? true : t.enrolledAt) != null, {
    ref: Z,
    scrollHeight: W
  } = (0, d.kE)(), H = 104 !== W, {
    onAssetLoadComplete: U
  } = s.useContext(_.k), {
    expansionSpring: F
  } = (0, c.q_F)({
    expansionSpring: +!!R,
    config: (S = function(e) {
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
    }({}, C.Y), w = w = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(w)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(w)).forEach(function(e) {
      Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(w, e))
    }), S)
  }), z = (null == (n = P.userStatus) ? true : n.completedAt) != null, K = (null == (a = P.userStatus) ? true : a.claimedAt) != null, G = (0, m.xN)(P.config), X = (0, m.LM)(P.config), {
    completedRatio: Y,
    completedRatioDisplay: J
  } = (0, g.I)(P), $ = (0, g.Bd)(P, D, q), ee = s.useMemo(() => K && G ? y.intl.format(y.t["8Op4c4"], {
    balanceHook: () => (0, r.jsxs)(T, {
      questId: P.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: E.orbsBalanceIcon,
        customSize: 14
      }), X]
    }, P.id)
  }) : K ? (0, r.jsx)(T, {
    questId: P.id,
    children: Q
  }) : G ? y.intl.format(y.t.ro1sze, {
    balanceHook: () => (0, r.jsxs)(T, {
      questId: P.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: E.orbsBalanceIcon,
        customSize: 14
      }), X]
    }, P.id)
  }) : y.intl.format(y.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, r.jsx)(T, {
      questId: P.id,
      children: V
    }, P.id)
  }), [Q, K, V, P.id, X, G]), et = s.useMemo(() => {
    if (null != $) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: E.description,
      children: $
    })
  }, [$]), en = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: E.container,
    ref: q,
    children: [(0, r.jsxs)(i.animated.div, {
      style: {
        maxHeight: F.to([0, 1], [104, (null != W ? W : 0) + 12])
      },
      className: E.rewardDescriptionContainer,
      children: [(0, r.jsx)(b.E, {
        showPlaceholder: !k,
        width: 80,
        height: 80,
        children: (0, r.jsxs)("div", {
          className: E.assetWrapper,
          children: [!K && z && (0, r.jsx)("div", {
            className: E.completionAnimation
          }), M && !K ? (0, r.jsxs)("div", {
            className: E.progressWrapper,
            children: [z && (0, r.jsx)(c.Fmz, {
              importData: O,
              className: E.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !en
            }), (0, r.jsx)(h.Z, {
              quest: P,
              size: 76,
              percentComplete: Y,
              percentCompleteText: R && !(0, m.zi)(P) ? J : true,
              children: (0, r.jsx)("div", {
                className: E.circularRewardTileWrapper,
                children: (0, r.jsx)(x.Z, {
                  quest: P,
                  questContent: N,
                  className: E.circularQuestRewardTileAsset,
                  location: v.dr.QUEST_HOME_DESKTOP,
                  autoplay: R,
                  onLoadComplete: U,
                  lazyLoad: true,
                  sourceQuestContent: D
                })
              })
            })]
          }) : (0, r.jsx)(x.Z, {
            quest: P,
            autoplay: R,
            questContent: N,
            className: E.questRewardTileAsset,
            location: v.dr.QUEST_HOME_DESKTOP,
            onLoadComplete: U,
            lazyLoad: true,
            sourceQuestContent: D
          })]
        })
      }), (0, r.jsxs)("div", {
        ref: Z,
        className: o()(E.textContainer, {
          [E.justifyCenter]: !H
        }),
        children: [(0, r.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: E.questName,
          children: y.intl.format(y.t.EAYZAr, {
            questName: P.config.messages.questName
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: E.header,
          children: ee
        }), et]
      }), H && (0, r.jsx)(i.animated.div, {
        style: {
          opacity: F.to([0, 1], [1, 0])
        },
        className: E.textOverflowBlur
      })]
    }), (0, r.jsx)(j.Z, {
      quest: P,
      questContent: N,
      contentPosition: A,
      rowIndex: B,
      onReceiveErrorHints: I,
      sourceQuestContent: D
    })]
  })
}
let T = Chunk647438.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "header-primary",
    tag: "span",
    className: E.header,
    children: n
  }, "".concat(t, "_reward"))
})