/** Chunk was on 1272 **/
/** chunk id: 273596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
  Chunk857847 = require("./857847.js");
let S = Object.freeze({
    top: 0,
    bottom: 0,
    left: 32,
    right: 202
  }),
  N = Object.freeze({
    top: 0,
    bottom: 0,
    left: 32,
    right: 32
  }),
  T = {
    page: Chunk981631.ZY5.GUILD_DISCOVERY,
    object: Chunk981631.qAy.CARD,
    section: Chunk981631.jXE.DISCOVER_SEARCH
  },
  P = s().throttle(Chunk900849.c6, 1e3, {
    leading: false,
    trailing: true
  });

function j(e) {
  let {
    loadId: t,
    onGuildCardSeen: n,
    onGuildCardClick: l
  } = e, {
    guildIds: s,
    loading: f,
    searchResultsQuery: I,
    loadMore: j,
    searchCategoryId: x
  } = (0, b.f)({
    loadId: t
  }), A = 0 === s.length && !f, Z = i.useContext(d.AnalyticsContext), [w, L] = i.useState((0, m.PM)()), [R, D] = i.useState(true), k = i.useRef(R), [M, U] = i.useState(3), G = i.useRef(M), V = i.useRef(null), B = i.useCallback(e => {
    if (null != e && !A && !f) 336 * (s.length / M) <= e.height && j()
  }, [A, f, s.length, M, j]), H = i.useCallback(e => {
    let t = e.contentRect;
    if (null == t) return;
    let n = t.width;
    n < 1024 && k.current ? (k.current = false, D(false)) : n > 1024 && !k.current && (k.current = true, D(true));
    let r = 1;
    for (n -= 450 * !!R, n -= 280; n > 0;) n -= 264, r += 1;
    r !== G.current && (G.current = r, U(r)), B(t)
  }, [R, B]), F = (0, u.y)(H, [R, B]);
  i.useEffect(() => {
    L((0, m.PM)())
  }, [I]), i.useEffect(() => {
    P({
      loadId: t,
      searchId: w,
      query: I,
      guildResults: s.map(h.Z.getGuild).filter(p.lm),
      analyticsContext: Z,
      categoryId: x
    })
  }, [Z, s, t, x, w, I]);
  let z = i.useCallback(e => n(e, x), [n, x]),
    W = i.useMemo(() => f ? [s.length, 0] : [s.length], [s.length, f]),
    Y = i.useCallback((e, n, i) => {
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
              children: [(0, r.jsx)(O.Z, {
                loadId: t
              }), (0, r.jsx)(y.Z, {
                loadId: t
              })]
            }), A && (0, r.jsx)(E.Z, {
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
    K = i.useCallback(e => {
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
    q = i.useCallback((e, t) => {
      switch (e) {
        case 0:
          return s[t];
        case 1:
          return "loading";
        default:
          throw Error("[getItemKey] Failed for section: ".concat(e))
      }
    }, [s]),
    X = i.useCallback(e => {
      switch (e) {
        case 0:
          return 320;
        case 1:
          return 0;
        default:
          throw Error("[getItemHeight] Failed for section: ".concat(e))
      }
    }, []),
    Q = i.useCallback(async (e, t, n, r) => {
      var i, a;
      await l(e, t, n, r);
      let o = null == (a = V.current) || null == (i = a.getScrollerState()) ? true : i.scrollTop;
      null != o && g.Z.setState({
        scrollPosition: o
      })
    }, [l]),
    J = i.useCallback((e, t, n, i) => {
      if (0 !== e) return null;
      {
        let e = s[t];
        return (0, r.jsx)("div", {
          style: n,
          children: (0, r.jsx)(v.ZP, {
            guildId: e,
            onClick: async e => await Q(e, t, x, T),
            onView: e => z(e)
          })
        }, i)
      }
    }, [s, Q, z, x]);
  i.useEffect(() => {
    let e = V.current;
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
      null == (t = V.current) || t.scrollTo({
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
  let $ = i.useMemo(() => (0, o.debounce)(() => {
      var e;
      let t = null == (e = V.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollTop + t.offsetHeight;
      t.scrollHeight - n < 240 && j()
    }, 100, {
      leading: true
    }), [j]),
    ee = R ? S : N;
  return (0, r.jsx)("div", {
    className: C.container,
    ref: F,
    children: (0, r.jsx)(c.GMG, {
      ref: V,
      className: C.masonryList,
      sections: W,
      columns: M,
      itemGutter: 16,
      padding: ee,
      renderItem: J,
      renderSection: Y,
      getSectionHeight: K,
      getItemKey: q,
      getItemHeight: X,
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
          }), (0, r.jsx)(_.Z, {
            loadId: t
          })]
        })
      }) : null
    })
  })
}