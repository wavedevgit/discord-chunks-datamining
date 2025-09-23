/** Chunk was on web.js **/
/** chunk id: 43779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
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
  Chunk878040 = require("./878040.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = 104,
  P = 12,
  w = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function D(e) {
  var t, n, a;
  let {
    quest: S,
    questContent: C,
    isHovering: D,
    contentPosition: L,
    rowIndex: j,
    isVisibleInViewport: M,
    onReceiveErrorHints: k,
    sourceQuestContent: U
  } = e, G = i.useRef(null), B = i.useMemo(() => h.r.build(S.config), [S.config]), Z = B.defaultRewardName, F = B.defaultRewardNameWithArticle, V = (null == (t = S.userStatus) ? true : t.enrolledAt) != null, {
    ref: H,
    scrollHeight: Y
  } = (0, u.kE)(), W = (null != Y ? Y : 0) + P, K = Y !== R, {
    onAssetLoadComplete: z
  } = i.useContext(E.k), {
    expansionSpring: q
  } = (0, c.q_F)({
    expansionSpring: +!!D,
    config: N(A({}, v.Y), {
      clamp: true
    })
  }), X = (null == (n = S.userStatus) ? true : n.completedAt) != null, Q = (null == (a = S.userStatus) ? true : a.claimedAt) != null, J = (0, _.xN)(S.config), $ = (0, _.LM)(S.config), {
    completedRatio: ee,
    completedRatioDisplay: et
  } = (0, p.I)(S), en = (0, p.Bd)(S, U, G), er = i.useMemo(() => Q && J ? I.intl.format(I.t["8Op4c3"], {
    balanceHook: () => (0, r.jsxs)(x, {
      questId: S.id,
      children: [(0, r.jsx)(f.Z, {
        shouldUseThemeColor: true,
        className: T.orbsBalanceIcon
      }), $]
    })
  }) : Q ? (0, r.jsx)(x, {
    questId: S.id,
    children: Z
  }) : J ? I.intl.format(I.t.ro1szc, {
    balanceHook: () => (0, r.jsxs)(x, {
      questId: S.id,
      children: [(0, r.jsx)(f.Z, {
        shouldUseThemeColor: true,
        className: T.orbsBalanceIcon
      }), $]
    })
  }) : I.intl.format(I.t["0IUT4e"], {
    rewardWithArticleHook: () => (0, r.jsx)(x, {
      questId: S.id,
      children: F
    })
  }), [Z, Q, F, S.id, $, J]), ei = i.useMemo(() => {
    if (null != en) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: T.description,
      children: en
    })
  }, [en]), ea = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: T.container,
    ref: G,
    children: [(0, r.jsxs)(s.animated.div, {
      style: {
        maxHeight: q.to([0, 1], [R, W])
      },
      className: T.rewardDescriptionContainer,
      children: [(0, r.jsx)(b.E, {
        showPlaceholder: !M,
        width: 80,
        height: 80,
        children: (0, r.jsxs)("div", {
          className: T.assetWrapper,
          children: [!Q && X && (0, r.jsx)("div", {
            className: T.completionAnimation
          }), V && !Q ? (0, r.jsxs)("div", {
            className: T.progressWrapper,
            children: [X && (0, r.jsx)(c.Fmz, {
              importData: w,
              className: T.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !ea
            }), (0, r.jsx)(m.Z, {
              quest: S,
              size: 76,
              percentComplete: ee,
              percentCompleteText: D && !(0, _.zi)(S) ? et : true,
              children: (0, r.jsx)("div", {
                className: T.circularRewardTileWrapper,
                children: (0, r.jsx)(g.Z, {
                  quest: S,
                  questContent: C,
                  className: T.circularQuestRewardTileAsset,
                  location: O.dr.QUEST_HOME_DESKTOP,
                  autoplay: D,
                  onLoadComplete: z,
                  lazyLoad: true,
                  sourceQuestContent: U
                })
              })
            })]
          }) : (0, r.jsx)(g.Z, {
            quest: S,
            autoplay: D,
            questContent: C,
            className: T.questRewardTileAsset,
            location: O.dr.QUEST_HOME_DESKTOP,
            onLoadComplete: z,
            lazyLoad: true,
            sourceQuestContent: U
          })]
        })
      }), (0, r.jsxs)("div", {
        ref: H,
        className: o()(T.textContainer, {
          [T.justifyCenter]: !K
        }),
        children: [(0, r.jsx)(c.X6q, {
          variant: "eyebrow",
          color: "text-brand",
          className: T.questName,
          children: I.intl.format(I.t.EAYZAg, {
            questName: S.config.messages.questName
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: T.header,
          children: er
        }), ei]
      }), K && (0, r.jsx)(s.animated.div, {
        style: {
          opacity: q.to([0, 1], [1, 0])
        },
        className: T.textOverflowBlur
      })]
    }), (0, r.jsx)(y.Z, {
      quest: S,
      questContent: C,
      contentPosition: L,
      rowIndex: j,
      onReceiveErrorHints: k,
      sourceQuestContent: U
    })]
  })
}
let x = Chunk647438.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "header-primary",
    tag: "span",
    className: T.header,
    children: n
  }, "".concat(t, "_reward"))
})