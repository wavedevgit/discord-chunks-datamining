/** Chunk was on 37082 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
  Chunk882067 = require("./882067.js");
let E = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function S(e) {
  var t, n, o, S, w;
  let {
    quest: P,
    questContent: N,
    isHovering: A,
    contentPosition: R,
    rowIndex: B,
    isVisibleInViewport: k,
    onReceiveErrorHints: I,
    sourceQuestContent: q
  } = e, D = s.useMemo(() => f.r.build(P.config), [P.config]), Q = D.defaultRewardName, V = D.defaultRewardNameWithArticle, L = (null == (t = P.userStatus) ? true : t.enrolledAt) != null, {
    ref: M,
    scrollHeight: Z
  } = (0, u.kE)(), W = 104 !== Z, {
    onAssetLoadComplete: U
  } = s.useContext(j.k), {
    expansionSpring: H
  } = (0, c.q_F)({
    expansionSpring: +!!A,
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
  }), z = (null == (n = P.userStatus) ? true : n.completedAt) != null, F = (null == (o = P.userStatus) ? true : o.claimedAt) != null, X = (0, m.xN)(P.config), K = (0, m.LM)(P.config), {
    completedRatio: Y,
    completedRatioDisplay: G
  } = (0, g.I)(P), J = (0, g.Bd)(P, q), $ = s.useMemo(() => F && X ? y.intl.format(y.t["8Op4c3"], {
    balanceHook: () => (0, r.jsxs)(T, {
      questId: P.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: O.orbsBalanceIcon
      }), K]
    })
  }) : F ? (0, r.jsx)(T, {
    questId: P.id,
    children: Q
  }) : X ? y.intl.format(y.t.ro1szc, {
    balanceHook: () => (0, r.jsxs)(T, {
      questId: P.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: O.orbsBalanceIcon
      }), K]
    })
  }) : y.intl.format(y.t["0IUT4e"], {
    rewardWithArticleHook: () => (0, r.jsx)(T, {
      questId: P.id,
      children: V
    })
  }), [Q, F, V, P.id, K, X]), ee = s.useMemo(() => {
    if (null != J) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: O.description,
      children: J
    })
  }, [J]), et = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: O.container,
    children: [(0, r.jsxs)(i.animated.div, {
      style: {
        maxHeight: H.to([0, 1], [104, (null != Z ? Z : 0) + 12])
      },
      className: O.rewardDescriptionContainer,
      children: [(0, r.jsx)(_.E, {
        showPlaceholder: !k,
        width: 80,
        height: 80,
        children: (0, r.jsxs)("div", {
          className: O.assetWrapper,
          children: [!F && z && (0, r.jsx)("div", {
            className: O.completionAnimation
          }), L && !F ? (0, r.jsxs)("div", {
            className: O.progressWrapper,
            children: [z && (0, r.jsx)(c.Fmz, {
              importData: E,
              className: O.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !et
            }), (0, r.jsx)(x.Z, {
              quest: P,
              size: 76,
              percentComplete: Y,
              percentCompleteText: A && !(0, m.zi)(P) ? G : true,
              children: (0, r.jsx)("div", {
                className: O.circularRewardTileWrapper,
                children: (0, r.jsx)(h.Z, {
                  quest: P,
                  questContent: N,
                  className: O.circularQuestRewardTileAsset,
                  location: v.dr.QUEST_HOME_DESKTOP,
                  autoplay: A,
                  onLoadComplete: U,
                  lazyLoad: true,
                  sourceQuestContent: q
                })
              })
            })]
          }) : (0, r.jsx)(h.Z, {
            quest: P,
            autoplay: A,
            questContent: N,
            className: O.questRewardTileAsset,
            location: v.dr.QUEST_HOME_DESKTOP,
            onLoadComplete: U,
            lazyLoad: true,
            sourceQuestContent: q
          })]
        })
      }), (0, r.jsxs)("div", {
        ref: M,
        className: a()(O.textContainer, {
          [O.justifyCenter]: !W
        }),
        children: [(0, r.jsx)(c.X6q, {
          variant: "eyebrow",
          color: "text-brand",
          className: O.questName,
          children: y.intl.format(y.t.EAYZAg, {
            questName: P.config.messages.questName
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: O.header,
          children: $
        }), ee]
      }), W && (0, r.jsx)(i.animated.div, {
        style: {
          opacity: H.to([0, 1], [1, 0])
        },
        className: O.textOverflowBlur
      })]
    }), (0, r.jsx)(b.Z, {
      quest: P,
      questContent: N,
      contentPosition: R,
      rowIndex: B,
      onReceiveErrorHints: I,
      sourceQuestContent: q
    })]
  })
}
let T = Chunk73800.memo(function(e) {
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