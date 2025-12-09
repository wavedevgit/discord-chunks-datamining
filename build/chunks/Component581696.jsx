/** Chunk was on 1272 **/
/** chunk id: 581696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk144725 = require("./144725.js"),
  Chunk613928 = require("./613928.js"),
  Chunk390536 = require("./390536.js"),
  Chunk853041 = require("./853041.js"),
  Chunk352153 = require("./352153.js"),
  Chunk589694 = require("./589694.jsx"),
  Chunk62001 = require("./62001.js"),
  Chunk869886 = require("./869886.js");
let g = function(e) {
  let {
    scrollContainerRef: t
  } = e, n = (0, l.e7)([a.Z], () => a.Z.notificationItem(), []), {
    showDot: g
  } = (0, c.Z)(), h = i.useRef(null), [m, _] = i.useState(false), {
    data: b,
    loading: E,
    isRefreshing: O,
    handleOnRefresh: v,
    viewabilityConfigCallbackPairs: y
  } = (0, u.a)({
    showDot: g,
    notificationItem: n
  }), I = (0, o.G)();
  i.useEffect(() => () => {
    I()
  }, [I]);
  let C = (0, l.e7)([a.Z], () => a.Z.hasNewContent(), []),
    S = (0, l.e7)([a.Z], () => a.Z.isHydrating(), []),
    T = i.useMemo(() => y[0].onViewableItemsChanged, [y]),
    {
      registerItemRef: N
    } = (0, p.m)(b, T, t),
    j = i.useMemo(() => b.some(e => "end" === e.data.kind), [b]),
    P = i.useCallback(() => {
      if (j) return;
      let e = t.current;
      if (null == e) return;
      let n = e.scrollHeight;
      !(n - e.scrollTop - e.clientHeight < 300) || m || E || S || (_(true), (0, s.es)().finally(() => {
        setTimeout(() => {
          _(false)
        }, 300)
      }))
    }, [E, m, S, j, t]);
  i.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("scroll", P), () => {
      e.removeEventListener("scroll", P)
    }
  }, [P, t]);
  let x = i.useCallback(() => {
      var e;
      null == (e = t.current) || e.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, [t]),
    A = i.useCallback(() => {
      v(), x()
    }, [v, x]),
    Z = i.useCallback(e => "loading" === e.data.kind ? (0, r.jsx)("div", {
      style: {
        padding: "32px",
        textAlign: "center"
      },
      children: (0, r.jsx)("div", {
        children: "Loading ICYMI feed..."
      })
    }, e.id) : "bottomLoading" === e.data.kind ? (0, r.jsx)("div", {
      style: {
        padding: "16px",
        textAlign: "center"
      },
      children: (0, r.jsx)("div", {
        children: "Loading more..."
      })
    }, e.id) : "end" === e.data.kind ? (0, r.jsx)("div", {
      style: {
        padding: "32px",
        textAlign: "center",
        color: "#949ba4"
      },
      children: (0, r.jsx)("div", {
        children: "You're all caught up!"
      })
    }, e.id) : (0, r.jsx)("div", {
      ref: t => N(e.id, t),
      "data-item-id": e.id,
      children: (0, r.jsx)(d.Z, {
        item: e
      })
    }, e.id), [N]);
  return E && 0 === b.length ? (0, r.jsx)("div", {
    style: {
      padding: "32px",
      textAlign: "center"
    },
    children: (0, r.jsx)("div", {
      children: "Loading ICYMI feed..."
    })
  }) : (0, r.jsxs)("div", {
    className: f.container,
    children: [C && !O && (0, r.jsx)("div", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 10,
        padding: "8px",
        textAlign: "center"
      },
      children: (0, r.jsx)("button", {
        onClick: A,
        style: {
          background: "#5865f2",
          color: "white",
          border: "none",
          borderRadius: "16px",
          padding: "8px 16px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500
        },
        children: "New content available"
      })
    }), (0, r.jsxs)("div", {
      ref: h,
      className: f.scrollContainer,
      children: [b.map(e => Z(e)), !j && (m || S) && (0, r.jsx)("div", {
        style: {
          padding: "16px",
          textAlign: "center"
        },
        children: (0, r.jsx)("div", {
          style: {
            color: "#949ba4"
          },
          children: "Loading more..."
        })
      })]
    })]
  })
}