/** Chunk was on 87557 **/
/** chunk id: 515038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
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
  Chunk516226 = require("./516226.js"),
  Chunk720875 = require("./720875.jsx"),
  Chunk713457 = require("./713457.jsx"),
  Chunk419367 = require("./419367.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk196240 = require("./196240.js");
let O = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function T(e) {
  var t, n, r, T, N;
  let {
    quest: w,
    questContent: I,
    isHovering: P,
    contentPosition: k,
    rowIndex: R,
    isVisibleInViewport: D,
    onReceiveErrorHints: M,
    sourceQuestContent: L
  } = e, U = l.useRef(null), B = (0, f.mq)(w.config), G = (0, f.mH)(w.config), F = (null == (t = w.userStatus) ? true : t.enrolledAt) != null, {
    ref: V,
    scrollHeight: W
  } = (0, d.wR)(), H = 104 !== W, {
    onAssetLoadComplete: K
  } = l.useContext(j.M), {
    expansionSpring: z
  } = (0, c.zhh)({
    expansionSpring: +!!P,
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
    }({}, A.N), N = N = {
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
  }), q = (null == (n = w.userStatus) ? true : n.completedAt) != null, Q = (null == (r = w.userStatus) ? true : r.claimedAt) != null, Y = (0, f.ks)(w.config), J = (0, f._Z)(w.config), {
    completedRatio: X,
    completedRatioDisplay: Z
  } = (0, x.O9)(w), $ = (0, h.gj)(w, L, m.Ob.QuestHome, U), ee = l.useMemo(() => Q && Y ? C.intl.format(C.t["8Op4c4"], {
    balanceHook: () => (0, a.jsxs)(E, {
      questId: w.id,
      children: [(0, a.jsx)(p.A, {
        shouldUseThemeColor: true,
        className: S.Kq,
        customSize: 14
      }), J]
    }, w.id)
  }) : Q ? (0, a.jsx)(E, {
    questId: w.id,
    children: B
  }) : Y ? C.intl.format(C.t.ro1sze, {
    balanceHook: () => (0, a.jsxs)(E, {
      questId: w.id,
      children: [(0, a.jsx)(p.A, {
        shouldUseThemeColor: true,
        className: S.Kq,
        customSize: 14
      }), J]
    }, w.id)
  }) : C.intl.format(C.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, a.jsx)(E, {
      questId: w.id,
      children: G
    }, w.id)
  }), [B, Q, G, w.id, J, Y]), et = l.useMemo(() => {
    if (null != $) return (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: S.h_,
      children: $
    })
  }, [$]), en = (0, o.bG)([u.A], () => u.A.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: S.kL,
    ref: U,
    children: [(0, a.jsxs)(s.animated.div, {
      style: {
        maxHeight: z.to([0, 1], [104, (null != W ? W : 0) + 12])
      },
      className: S.z,
      children: [(0, a.jsx)(_.A, {
        showPlaceholder: !D,
        width: 80,
        height: 80,
        children: (0, a.jsxs)("div", {
          className: S.c6,
          children: [!Q && q && (0, a.jsx)("div", {
            className: S.Nz
          }), F ? (0, a.jsxs)("div", {
            className: S.Tr,
            children: [q && (0, a.jsx)(c.akl, {
              importData: O,
              className: S.t_,
              loop: false,
              autoplay: false,
              shouldAnimate: !en
            }), (0, a.jsx)(b.A, {
              quest: w,
              size: 76,
              percentComplete: X,
              percentCompleteText: P && !(0, g.Ic)(w) ? Z : true,
              children: (0, a.jsx)("div", {
                className: S.yv,
                children: (0, a.jsx)(v.A, {
                  quest: w,
                  questContent: I,
                  className: S.ve,
                  autoplay: P,
                  onLoadComplete: K,
                  lazyLoad: true,
                  sourceQuestContent: L
                })
              })
            })]
          }) : (0, a.jsx)(v.A, {
            quest: w,
            autoplay: P,
            questContent: I,
            className: S.eB,
            onLoadComplete: K,
            lazyLoad: true,
            sourceQuestContent: L
          })]
        })
      }), (0, a.jsxs)("div", {
        ref: V,
        className: i()(S.FS, {
          [S.wq]: !H
        }),
        children: [(0, a.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: S.G$,
          children: C.intl.format(C.t.EAYZAr, {
            questName: w.config.messages.questName
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          className: S.wx,
          children: ee
        }), et]
      }), H && (0, a.jsx)(s.animated.div, {
        style: {
          opacity: z.to([0, 1], [1, 0])
        },
        className: S.hS
      })]
    }), (0, a.jsx)(y.A, {
      quest: w,
      questContent: I,
      contentPosition: k,
      rowIndex: R,
      onReceiveErrorHints: M,
      sourceQuestContent: L
    })]
  })
}
let E = Chunk64700.memo(function(e) {
  let {
    questId: t,
    children: n
  } = e;
  return (0, a.jsx)(c.Text, {
    variant: "text-md/semibold",
    color: "text-strong",
    tag: "span",
    className: S.wx,
    children: n
  }, "".concat(t, "_reward"))
})