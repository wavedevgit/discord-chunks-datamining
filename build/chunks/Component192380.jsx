/** Chunk was on 21738 **/
/** chunk id: 192380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk883344 = require("./883344.js"),
  Chunk859524 = require("./859524.js"),
  Chunk567061 = require("./567061.js"),
  Chunk519028 = require("./519028.js"),
  Chunk285545 = require("./285545.js"),
  Chunk673310 = require("./673310.jsx"),
  Chunk884801 = require("./884801.js"),
  Chunk739954 = require("./739954.js");
let f = function(e) {
  let {
    scrollContainerRef: t
  } = e, n = (0, l.bG)([a.A], () => a.A.notificationItem(), []), {
    showDot: f
  } = (0, c.A)(), g = i.useRef(null), [m, A] = i.useState(false), {
    data: _,
    loading: b,
    isRefreshing: E,
    handleOnRefresh: O,
    viewabilityConfigCallbackPairs: y
  } = (0, u.i)({
    showDot: f,
    notificationItem: n
  }), I = (0, o.E)();
  i.useEffect(() => () => {
    I()
  }, [I]);
  let v = (0, l.bG)([a.A], () => a.A.hasNewContent(), []),
    S = (0, l.bG)([a.A], () => a.A.isHydrating(), []),
    C = i.useMemo(() => y[0].onViewableItemsChanged, [y]),
    {
      registerItemRef: N
    } = (0, p.N)(_, C, t),
    T = i.useMemo(() => _.some(e => "end" === e.data.kind), [_]),
    j = i.useCallback(() => {
      if (T) return;
      let e = t.current;
      null == e || !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) || m || b || S || (A(true), (0, s._x)().finally(() => {
        setTimeout(() => {
          A(false)
        }, 300)
      }))
    }, [b, m, S, T, t]);
  i.useEffect(() => {
    let e = t.current;
    if (null != e) return e.addEventListener("scroll", j), () => {
      e.removeEventListener("scroll", j)
    }
  }, [j, t]);
  let x = i.useCallback(() => {
      var e;
      null == (e = t.current) || e.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, [t]),
    P = i.useCallback(() => {
      O(), x()
    }, [O, x]),
    w = i.useCallback(e => "loading" === e.data.kind ? (0, r.jsx)("div", {
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
      children: (0, r.jsx)(d.A, {
        item: e
      })
    }, e.id), [N]);
  return b && 0 === _.length ? (0, r.jsx)("div", {
    style: {
      padding: "32px",
      textAlign: "center"
    },
    children: (0, r.jsx)("div", {
      children: "Loading ICYMI feed..."
    })
  }) : (0, r.jsxs)("div", {
    className: h.k,
    children: [v && !E && (0, r.jsx)("div", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 10,
        padding: "8px",
        textAlign: "center"
      },
      children: (0, r.jsx)("button", {
        onClick: P,
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
      ref: g,
      className: h.j,
      children: [_.map(e => w(e)), !T && (m || S) && (0, r.jsx)("div", {
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