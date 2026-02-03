/** Chunk was on 90228 **/
/** chunk id: 515038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
  Chunk409626 = require("./409626.js"),
  Chunk106799 = require("./106799.jsx"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk710969 = require("./710969.js"),
  Chunk92246 = require("./92246.js"),
  Chunk453384 = require("./453384.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk398025 = require("./398025.js"),
  Chunk516226 = require("./516226.js"),
  Chunk720875 = require("./720875.jsx"),
  Chunk713457 = require("./713457.jsx"),
  Chunk419367 = require("./419367.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk196240 = require("./196240.js");
let T = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function E(e) {
  var t, n, r, E, w;
  let {
    quest: I,
    questContent: k,
    isHovering: P,
    contentPosition: R,
    rowIndex: D,
    isVisibleInViewport: M,
    onReceiveErrorHints: L,
    sourceQuestContent: U
  } = e, B = l.useRef(null), G = (0, f.mq)(I.config), F = (0, f.mH)(I.config), V = (null == (t = I.userStatus) ? true : t.enrolledAt) != null, {
    ref: W,
    scrollHeight: H
  } = (0, d.wR)(), K = 104 !== H, {
    onAssetLoadComplete: z
  } = l.useContext(_.M), {
    expansionSpring: q
  } = (0, c.zhh)({
    expansionSpring: +!!P,
    config: (E = function(e) {
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
    }({}, C.N), w = w = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(w)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(w)).forEach(function(e) {
      Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(w, e))
    }), E)
  }), Q = (null == (n = I.userStatus) ? true : n.completedAt) != null, Y = (null == (r = I.userStatus) ? true : r.claimedAt) != null, J = (0, f.ks)(I.config), X = (0, f._Z)(I.config), {
    completedRatio: $,
    completedRatioDisplay: Z
  } = (0, x.O9)(I), ee = (0, h.gj)(I, U, m.Ob.QuestHome, B), et = l.useMemo(() => Y && J ? S.intl.format(S.t["8Op4c4"], {
    balanceHook: () => (0, a.jsxs)(N, {
      questId: I.id,
      children: [(0, a.jsx)(p.A, {
        shouldUseThemeColor: true,
        className: O.Kq,
        customSize: 14
      }), X]
    }, I.id)
  }) : Y ? (0, a.jsx)(N, {
    questId: I.id,
    children: G
  }) : J ? S.intl.format(S.t.ro1sze, {
    balanceHook: () => (0, a.jsxs)(N, {
      questId: I.id,
      children: [(0, a.jsx)(p.A, {
        shouldUseThemeColor: true,
        className: O.Kq,
        customSize: 14
      }), X]
    }, I.id)
  }) : S.intl.format(S.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, a.jsx)(N, {
      questId: I.id,
      children: F
    }, I.id)
  }), [G, Y, F, I.id, X, J]), en = l.useMemo(() => {
    if (null != ee) return (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: O.h_,
      children: ee
    })
  }, [ee]), ea = (0, o.bG)([u.A], () => u.A.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: O.kL,
    ref: B,
    children: [(0, a.jsxs)(s.animated.div, {
      style: {
        maxHeight: q.to([0, 1], [104, (null != H ? H : 0) + 12])
      },
      className: O.z,
      children: [(0, a.jsx)(y.A, {
        showPlaceholder: !M,
        width: 80,
        height: 80,
        children: (0, a.jsxs)("div", {
          className: O.c6,
          children: [!Y && Q && (0, a.jsx)("div", {
            className: O.Nz
          }), V ? (0, a.jsxs)("div", {
            className: O.Tr,
            children: [Q && (0, a.jsx)(c.akl, {
              importData: T,
              className: O.t_,
              loop: false,
              autoplay: false,
              shouldAnimate: !ea
            }), (0, a.jsx)(b.A, {
              quest: I,
              size: 76,
              percentComplete: $,
              percentCompleteText: P && !(0, g.Ic)(I) ? Z : true,
              children: (0, a.jsx)("div", {
                className: O.yv,
                children: (0, a.jsx)(v.A, {
                  quest: I,
                  questContent: k,
                  className: O.ve,
                  autoplay: P,
                  onLoadComplete: z,
                  lazyLoad: true,
                  sourceQuestContent: U
                })
              })
            })]
          }) : (0, a.jsx)(v.A, {
            quest: I,
            autoplay: P,
            questContent: k,
            className: O.eB,
            onLoadComplete: z,
            lazyLoad: true,
            sourceQuestContent: U
          })]
        })
      }), (0, a.jsxs)("div", {
        ref: W,
        className: i()(O.FS, {
          [O.wq]: !K
        }),
        children: [(0, a.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: O.G$,
          children: S.intl.format(S.t.EAYZAr, {
            questName: I.config.messages.questName
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          className: O.wx,
          children: et
        }), en]
      }), K && (0, a.jsx)(s.animated.div, {
        style: {
          opacity: (0, j.a)(q.to([0, 1], [1, 0]))
        },
        className: O.hS
      })]
    }), (0, a.jsx)(A.A, {
      quest: I,
      questContent: k,
      contentPosition: R,
      rowIndex: D,
      onReceiveErrorHints: L,
      sourceQuestContent: U
    })]
  })
}
let N = Chunk64700.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, a.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "text-strong",
    tag: "span",
    className: O.wx,
    children: n
  }, "".concat(t, "_reward"))
})