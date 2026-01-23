/** Chunk was on 65599 **/
/** chunk id: 515038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
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
let S = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function O(e) {
  var t, n, r, O, T;
  let {
    quest: N,
    questContent: w,
    isHovering: I,
    contentPosition: k,
    rowIndex: P,
    isVisibleInViewport: R,
    onReceiveErrorHints: D,
    sourceQuestContent: M
  } = e, L = l.useRef(null), U = (0, g.mq)(N.config), B = (0, g.mH)(N.config), G = (null == (t = N.userStatus) ? true : t.enrolledAt) != null, {
    ref: F,
    scrollHeight: V
  } = (0, d.wR)(), W = 104 !== V, {
    onAssetLoadComplete: H
  } = l.useContext(v.M), {
    expansionSpring: K
  } = (0, c.zhh)({
    expansionSpring: +!!I,
    config: (O = function(e) {
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
    }({}, y.N), T = T = {
      clamp: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(T)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(T)).forEach(function(e) {
      Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(T, e))
    }), O)
  }), z = (null == (n = N.userStatus) ? true : n.completedAt) != null, q = (null == (r = N.userStatus) ? true : r.claimedAt) != null, Q = (0, g.ks)(N.config), Y = (0, g._Z)(N.config), {
    completedRatio: J,
    completedRatioDisplay: X
  } = (0, h.O9)(N), Z = (0, p.gj)(N, M, L), $ = l.useMemo(() => q && Q ? A.intl.format(A.t["8Op4c4"], {
    balanceHook: () => (0, a.jsxs)(E, {
      questId: N.id,
      children: [(0, a.jsx)(m.A, {
        shouldUseThemeColor: true,
        className: C.Kq,
        customSize: 14
      }), Y]
    }, N.id)
  }) : q ? (0, a.jsx)(E, {
    questId: N.id,
    children: U
  }) : Q ? A.intl.format(A.t.ro1sze, {
    balanceHook: () => (0, a.jsxs)(E, {
      questId: N.id,
      children: [(0, a.jsx)(m.A, {
        shouldUseThemeColor: true,
        className: C.Kq,
        customSize: 14
      }), Y]
    }, N.id)
  }) : A.intl.format(A.t["0IUT4Y"], {
    rewardWithArticleHook: () => (0, a.jsx)(E, {
      questId: N.id,
      children: B
    }, N.id)
  }), [U, q, B, N.id, Y, Q]), ee = l.useMemo(() => {
    if (null != Z) return (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      className: C.h_,
      children: Z
    })
  }, [Z]), et = (0, o.bG)([u.A], () => u.A.useReducedMotion);
  return (0, a.jsxs)("div", {
    className: C.kL,
    ref: L,
    children: [(0, a.jsxs)(s.animated.div, {
      style: {
        maxHeight: K.to([0, 1], [104, (null != V ? V : 0) + 12])
      },
      className: C.z,
      children: [(0, a.jsx)(j.A, {
        showPlaceholder: !R,
        width: 80,
        height: 80,
        children: (0, a.jsxs)("div", {
          className: C.c6,
          children: [!q && z && (0, a.jsx)("div", {
            className: C.Nz
          }), G ? (0, a.jsxs)("div", {
            className: C.Tr,
            children: [z && (0, a.jsx)(c.akl, {
              importData: S,
              className: C.t_,
              loop: false,
              autoplay: false,
              shouldAnimate: !et
            }), (0, a.jsx)(f.A, {
              quest: N,
              size: 76,
              percentComplete: J,
              percentCompleteText: I && !(0, x.Ic)(N) ? X : true,
              children: (0, a.jsx)("div", {
                className: C.yv,
                children: (0, a.jsx)(b.A, {
                  quest: N,
                  questContent: w,
                  className: C.ve,
                  autoplay: I,
                  onLoadComplete: H,
                  lazyLoad: true,
                  sourceQuestContent: M
                })
              })
            })]
          }) : (0, a.jsx)(b.A, {
            quest: N,
            autoplay: I,
            questContent: w,
            className: C.eB,
            onLoadComplete: H,
            lazyLoad: true,
            sourceQuestContent: M
          })]
        })
      }), (0, a.jsxs)("div", {
        ref: F,
        className: i()(C.FS, {
          [C.wq]: !W
        }),
        children: [(0, a.jsx)(c.Heading, {
          variant: "eyebrow",
          color: "text-brand",
          className: C.G$,
          children: A.intl.format(A.t.EAYZAr, {
            questName: N.config.messages.questName
          })
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          className: C.wx,
          children: $
        }), ee]
      }), W && (0, a.jsx)(s.animated.div, {
        style: {
          opacity: K.to([0, 1], [1, 0])
        },
        className: C.hS
      })]
    }), (0, a.jsx)(_.A, {
      quest: N,
      questContent: w,
      contentPosition: k,
      rowIndex: P,
      onReceiveErrorHints: D,
      sourceQuestContent: M
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
    className: C.wx,
    children: n
  }, "".concat(t, "_reward"))
})