/** Chunk was on 83615 **/
/** chunk id: 43779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk313481 = require("./313481.js"),
  Chunk509212 = require("./509212.js"),
  Chunk472144 = require("./472144.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk69439 = require("./69439.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk642145 = require("./642145.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289157 = require("./289157.js");
let E = async () => await require.e("67963").then(require.t.bind(require, 145193, 19));

function O(e) {
  var t, n, o, O, T;
  let {
    quest: w,
    questContent: P,
    isHovering: N,
    contentPosition: R,
    rowIndex: A,
    isVisibleInViewport: B,
    onReceiveErrorHints: k,
    sourceQuestContent: I
  } = e, D = s.useRef(null), q = (0, g.w8)(w.config), L = (0, g.B3)(w.config), Q = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, {
    ref: V,
    scrollHeight: M
  } = (0, d.kE)(), Z = 104 !== M, {
    onAssetLoadComplete: W
  } = s.useContext(x.k), {
    expansionSpring: H
  } = (0, c.q_F)({
    expansionSpring: +!!N,
    config: (O = function(e) {
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
    }({}, v.Y), T = T = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(T)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(T)).forEach(function(e) {
      Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(T, e))
    }), O)
  }), U = (null == (n = w.userStatus) ? true : n.completedAt) != null, F = (null == (o = w.userStatus) ? true : o.claimedAt) != null, z = (0, g.xN)(w.config), G = (0, g.LM)(w.config), {
    completedRatio: K,
    completedRatioDisplay: X
  } = (0, m.I)(w), Y = (0, m.Bd)(w, I, D), J = s.useMemo(() => F && z ? C.intl.format(C.t["8Op4c4"], {
    balanceHook: () => (0, r.jsxs)(S, {
      questId: w.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: y.orbsBalanceIcon,
        customSize: 14
      }), G]
    }, w.id)
  }) : F ? (0, r.jsx)(S, {
    questId: w.id,
    children: q
  }) : z ? C.intl.format(C.t.ro1sze, {
    balanceHook: () => (0, r.jsxs)(S, {
      questId: w.id,
      children: [(0, r.jsx)(p.Z, {
        shouldUseThemeColor: true,
        className: y.orbsBalanceIcon,
        customSize: 14
      }), G]
    }, w.id)
  }) : C.intl.format(C.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, r.jsx)(S, {
      questId: w.id,
      children: L
    }, w.id)
  }), [q, F, L, w.id, G, z]), $ = s.useMemo(() => {
    if (null != Y) return (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: y.description,
      children: Y
    })
  }, [Y]), ee = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: y.container,
    ref: D,
    children: [(0, r.jsxs)(i.animated.div, {
      style: {
        maxHeight: H.to([0, 1], [104, (null != M ? M : 0) + 12])
      },
      className: y.rewardDescriptionContainer,
      children: [(0, r.jsx)(_.E, {
        showPlaceholder: !B,
        width: 80,
        height: 80,
        children: (0, r.jsxs)("div", {
          className: y.assetWrapper,
          children: [!F && U && (0, r.jsx)("div", {
            className: y.completionAnimation
          }), Q && !F ? (0, r.jsxs)("div", {
            className: y.progressWrapper,
            children: [U && (0, r.jsx)(c.Fmz, {
              importData: E,
              className: y.confetti,
              loop: false,
              autoplay: false,
              shouldAnimate: !ee
            }), (0, r.jsx)(f.Z, {
              quest: w,
              size: 76,
              percentComplete: K,
              percentCompleteText: N && !(0, g.zi)(w) ? X : true,
              children: (0, r.jsx)("div", {
                className: y.circularRewardTileWrapper,
                children: (0, r.jsx)(h.Z, {
                  quest: w,
                  questContent: P,
                  className: y.circularQuestRewardTileAsset,
                  location: j.dr.QUEST_HOME_DESKTOP,
                  autoplay: N,
                  onLoadComplete: W,
                  lazyLoad: true,
                  sourceQuestContent: I
                })
              })
            })]
          }) : (0, r.jsx)(h.Z, {
            quest: w,
            autoplay: N,
            questContent: P,
            className: y.questRewardTileAsset,
            location: j.dr.QUEST_HOME_DESKTOP,
            onLoadComplete: W,
            lazyLoad: true,
            sourceQuestContent: I
          })]
        })
      }), (0, r.jsxs)("div", {
        ref: V,
        className: a()(y.textContainer, {
          [y.justifyCenter]: !Z
        }),
        children: [(0, r.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: y.questName,
          children: C.intl.format(C.t.EAYZAr, {
            questName: w.config.messages.questName
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: y.header,
          children: J
        }), $]
      }), Z && (0, r.jsx)(i.animated.div, {
        style: {
          opacity: H.to([0, 1], [1, 0])
        },
        className: y.textOverflowBlur
      })]
    }), (0, r.jsx)(b.Z, {
      quest: w,
      questContent: P,
      contentPosition: R,
      rowIndex: A,
      onReceiveErrorHints: k,
      sourceQuestContent: I
    })]
  })
}
let S = Chunk473749.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "header-primary",
    tag: "span",
    className: y.header,
    children: n
  }, "".concat(t, "_reward"))
})