/** Chunk was on 1272 **/
/** chunk id: 273596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk900849 = require("./900849.js"),
  Chunk356164 = require("./356164.js"),
  Chunk164991 = require("./164991.js"),
  Chunk726115 = require("./726115.js"),
  Chunk28494 = require("./28494.js"),
  Chunk746728 = require("./746728.jsx"),
  Chunk140700 = require("./140700.jsx"),
  Chunk665807 = require("./665807.jsx"),
  Chunk188493 = require("./188493.jsx"),
  Chunk294330 = require("./294330.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk17923 = require("./17923.js");
let S = Object.freeze({
    top: 0,
    bottom: 0,
    left: 32,
    right: 202
  }),
  T = Object.freeze({
    top: 0,
    bottom: 0,
    left: 32,
    right: 32
  }),
  N = {
    page: Chunk981631.ZY5.GUILD_DISCOVERY,
    object: Chunk981631.qAy.CARD,
    section: Chunk981631.jXE.DISCOVER_SEARCH
  },
  j = o().throttle(Chunk900849.c6, 1e3, {
    leading: false,
    trailing: true
  });

function P(e) {
  let {
    loadId: t,
    onGuildCardSeen: n,
    onGuildCardClick: l
  } = e, {
    guildIds: o,
    loading: f,
    searchResultsQuery: I,
    loadMore: P,
    searchCategoryId: x
  } = (0, _.f)({
    loadId: t
  }), A = 0 === o.length && !f, Z = i.useContext(d.AnalyticsContext), [w, L] = i.useState((0, m.PM)()), [R, D] = i.useState(true), M = i.useRef(R), [k, U] = i.useState(3), G = i.useRef(k), B = i.useRef(null), H = i.useCallback(e => {
    if (null != e && !A && !f) 336 * (o.length / k) <= e.height && P()
  }, [A, f, o.length, k, P]), V = i.useCallback(e => {
    let t = e.contentRect;
    if (null == t) return;
    let n = t.width;
    n < 1024 && M.current ? (M.current = false, D(false)) : n > 1024 && !M.current && (M.current = true, D(true));
    let r = 1;
    for (n -= 450 * !!R, n -= 280; n > 0;) n -= 264, r += 1;
    r !== G.current && (G.current = r, U(r)), H(t)
  }, [R, H]), F = (0, u.y)(V, [R, H]);
  i.useEffect(() => {
    L((0, m.PM)())
  }, [I]), i.useEffect(() => {
    j({
      loadId: t,
      searchId: w,
      query: I,
      guildResults: o.map(h.Z.getGuild).filter(p.lm),
      analyticsContext: Z,
      categoryId: x
    })
  }, [Z, o, t, x, w, I]);
  let z = i.useCallback(e => n(e, x), [n, x]),
    Y = i.useMemo(() => f ? [o.length, 0] : [o.length], [o.length, f]),
    W = i.useCallback((e, n, i) => {
      switch (e) {
        case 0:
          return (0, r.jsxs)("div", {
            style: {
              paddingLeft: n.left,
              width: n.width - 16
            },
            className: a()(C.heading, {
              [C.headingTopbar]: !R
            }),
            children: [!R && (0, r.jsxs)("div", {
              className: C.headingFilters,
              children: [(0, r.jsx)(E.Z, {
                loadId: t
              }), (0, r.jsx)(y.Z, {
                loadId: t
              })]
            }), A && (0, r.jsx)(O.Z, {
              loadId: t
            })]
          }, i);
        case 1:
          return (0, r.jsx)(c.$jN, {
            className: a()(C.spinner, {
              [C.spinnerWithSidebar]: R
            })
          }, i)
      }
    }, [A, R, t]),
    q = i.useCallback(e => {
      switch (e) {
        case 0:
          let t = R ? 16 : 50;
          return A ? t + 448 : t;
        case 1:
          return 120;
        default:
          throw Error("[getSectionHeight] Failed for section: ".concat(e))
      }
    }, [A, R]),
    K = i.useCallback((e, t) => {
      switch (e) {
        case 0:
          return o[t];
        case 1:
          return "loading";
        default:
          throw Error("[getItemKey] Failed for section: ".concat(e))
      }
    }, [o]),
    Q = i.useCallback(e => {
      switch (e) {
        case 0:
          return 320;
        case 1:
          return 0;
        default:
          throw Error("[getItemHeight] Failed for section: ".concat(e))
      }
    }, []),
    J = i.useCallback(async (e, t, n, r) => {
      var i, a;
      await l(e, t, n, r);
      let s = null == (a = B.current) || null == (i = a.getScrollerState()) ? true : i.scrollTop;
      null != s && g.Z.setState({
        scrollPosition: s
      })
    }, [l]),
    X = i.useCallback((e, t, n, i) => {
      if (0 !== e) return null;
      {
        let e = o[t];
        return (0, r.jsx)("div", {
          style: n,
          children: (0, r.jsx)(v.ZP, {
            guildId: e,
            onClick: async e => await J(e, t, x, N),
            onView: e => z(e)
          })
        }, i)
      }
    }, [o, J, z, x]);
  i.useEffect(() => {
    let e = B.current;
    return () => {
      var t;
      let n = null == e || null == (t = e.getScrollerState()) ? true : t.scrollTop;
      null != n && g.Z.setState({
        scrollPosition: n
      })
    }
  }, []), i.useLayoutEffect(() => {
    let e = g.Z.getField("scrollPosition");
    null != e && setTimeout(() => {
      var t;
      null == (t = B.current) || t.scrollTo({
        to: e,
        animate: false,
        callback: () => {
          g.Z.setState({
            scrollPosition: null
          })
        }
      })
    })
  }, []);
  let $ = i.useMemo(() => (0, s.debounce)(() => {
      var e;
      let t = null == (e = B.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollTop + t.offsetHeight;
      t.scrollHeight - n < 240 && P()
    }, 100, {
      leading: true
    }), [P]),
    ee = R ? S : T;
  return (0, r.jsx)("div", {
    className: C.container,
    ref: F,
    children: (0, r.jsx)(c.GMG, {
      ref: B,
      className: C.masonryList,
      sections: Y,
      columns: k,
      itemGutter: 16,
      padding: ee,
      renderItem: X,
      renderSection: W,
      getSectionHeight: q,
      getItemKey: K,
      getItemHeight: Q,
      chunkSize: 24,
      onScroll: $,
      renderAccessory: e => R ? (0, r.jsx)("div", {
        className: C.sidebar,
        style: {
          height: e
        },
        children: (0, r.jsxs)("div", {
          className: C.sidebarContent,
          children: [(0, r.jsx)("div", {
            className: C.sidebarLanguageSelect,
            children: (0, r.jsx)(y.Z, {
              loadId: t
            })
          }), (0, r.jsx)(b.Z, {
            loadId: t
          })]
        })
      }) : null
    })
  })
}