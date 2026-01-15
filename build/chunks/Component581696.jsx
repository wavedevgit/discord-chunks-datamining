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
  Chunk38282 = require("./38282.js");
let g = function(e) {
  let {
    scrollContainerRef: t
  } = e, n = (0, l.e7)([a.Z], () => a.Z.notificationItem(), []), {
    showDot: g
  } = (0, c.Z)(), h = i.useRef(null), [m, b] = i.useState(false), {
    data: E,
    loading: _,
    isRefreshing: O,
    handleOnRefresh: v,
    viewabilityConfigCallbackPairs: I
  } = (0, u.a)({
    showDot: g,
    notificationItem: n
  }), y = (0, s.G)();
  i.useEffect(() => () => {
    y()
  }, [y]);
  let C = (0, l.e7)([a.Z], () => a.Z.hasNewContent(), []),
    S = (0, l.e7)([a.Z], () => a.Z.isHydrating(), []),
    T = i.useMemo(() => I[0].onViewableItemsChanged, [I]),
    {
      registerItemRef: N
    } = (0, p.m)(E, T, t),
    j = i.useMemo(() => E.some(e => "end" === e.data.kind), [E]),
    x = i.useCallback(() => {
      if (j) return;
      let e = t.current;
      if (null == e) return;
      let n = e.scrollHeight;
      !(n - e.scrollTop - e.clientHeight < 300) || m || _ || S || (b(true), (0, o.es)().finally(() => {
        setTimeout(() => {
          b(false)
        }, 300)
      }))
    }, [_, m, S, j, t]);
  i.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("scroll", x), () => {
      e.removeEventListener("scroll", x)
    }
  }, [x, t]);
  let P = i.useCallback(() => {
      var e;
      null == (e = t.current) || e.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, [t]),
    A = i.useCallback(() => {
      v(), P()
    }, [v, P]),
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
  return _ && 0 === E.length ? (0, r.jsx)("div", {
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
      children: [E.map(e => Z(e)), !j && (m || S) && (0, r.jsx)("div", {
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