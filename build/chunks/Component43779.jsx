/** Chunk was on 83615 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk313481 = require("./313481.js"),
  Chunk509212 = require("./509212.js"),
  Chunk373370 = require("./373370.js"),
  Chunk472144 = require("./472144.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk69439 = require("./69439.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk642145 = require("./642145.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289157 = require("./289157.js");
let O = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function S(e) {
  var t, n, o, S, w;
  let {
    quest: P,
    questContent: N,
    isHovering: R,
    contentPosition: A,
    rowIndex: B,
    isVisibleInViewport: k,
    onReceiveErrorHints: I,
    sourceQuestContent: D
  } = e, q = s.useRef(null), L = (0, g.w8)(P.config), Q = (0, g.B3)(P.config), V = (null == (t = P.userStatus) ? true : t.enrolledAt) != null, {
    ref: M,
    scrollHeight: Z
  } = (0, d.kE)(), W = 104 !== Z, {
    onAssetLoadComplete: H
  } = s.useContext(_.k), {
    expansionSpring: U
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
  }), F = (null == (n = P.userStatus) ? true : n.completedAt) != null, z = (null == (o = P.userStatus) ? true : o.claimedAt) != null, G = (0, g.xN)(P.config), K = (0, g.LM)(P.config), {
    completedRatio: Y,
    completedRatioDisplay: X
  } = (0, m.I)(P), J = (0, f.Bd)(P, D, q), $ = s.useMemo(() => z && G ? y.intl.format(y.t["8Op4c4"], {
    balanceHook: () => (0, r.jsxs)(T, {
      questId: P.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: E.orbsBalanceIcon,
        customSize: 14
      }), K]
    }, P.id)
  }) : z ? (0, r.jsx)(T, {
    questId: P.id,
    children: L
  }) : G ? y.intl.format(y.t.ro1sze, {
    balanceHook: () => (0, r.jsxs)(T, {
      questId: P.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: E.orbsBalanceIcon,
        customSize: 14
      }), K]
    }, P.id)
  }) : y.intl.format(y.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, r.jsx)(T, {
      questId: P.id,
      children: Q
    }, P.id)
  }), [L, z, Q, P.id, K, G]), ee = s.useMemo(() => {
    if (null != J) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: E.description,
      children: J
    })
  }, [J]), et = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: E.container,
    ref: q,
    children: [(0, r.jsxs)(i.animated.div, {
      style: {
        maxHeight: U.to([0, 1], [104, (null != Z ? Z : 0) + 12])
      },
      className: E.rewardDescriptionContainer,
      children: [(0, r.jsx)(b.E, {
        showPlaceholder: !k,
        width: 80,
        height: 80,
        children: (0, r.jsxs)("div", {
          className: E.assetWrapper,
          children: [!z && F && (0, r.jsx)("div", {
            className: E.completionAnimation
          }), V && !z ? (0, r.jsxs)("div", {
            className: E.progressWrapper,
            children: [F && (0, r.jsx)(c.Fmz, {
              importData: O,
              className: E.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !et
            }), (0, r.jsx)(h.Z, {
              quest: P,
              size: 76,
              percentComplete: Y,
              percentCompleteText: R && !(0, g.zi)(P) ? X : true,
              children: (0, r.jsx)("div", {
                className: E.circularRewardTileWrapper,
                children: (0, r.jsx)(x.Z, {
                  quest: P,
                  questContent: N,
                  className: E.circularQuestRewardTileAsset,
                  location: v.dr.QUEST_HOME_DESKTOP,
                  autoplay: R,
                  onLoadComplete: H,
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
            onLoadComplete: H,
            lazyLoad: true,
            sourceQuestContent: D
          })]
        })
      }), (0, r.jsxs)("div", {
        ref: M,
        className: a()(E.textContainer, {
          [E.justifyCenter]: !W
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
          children: $
        }), ee]
      }), W && (0, r.jsx)(i.animated.div, {
        style: {
          opacity: U.to([0, 1], [1, 0])
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
let T = Chunk473749.memo(function(e) {
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