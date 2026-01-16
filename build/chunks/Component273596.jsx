/** Chunk was on 1272 **/
/** chunk id: 273596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk318204 = require("./318204.js");
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
  j = s().throttle(Chunk900849.c6, 1e3, {
    leading: false,
    trailing: true
  });

function x(e) {
  let {
    loadId: t,
    onGuildCardSeen: n,
    onGuildCardClick: l
  } = e, {
    guildIds: s,
    loading: f,
    searchResultsQuery: y,
    loadMore: x,
    searchCategoryId: P
  } = (0, b.f)({
    loadId: t
  }), A = 0 === s.length && !f, Z = i.useContext(d.AnalyticsContext), [w, L] = i.useState((0, m.PM)()), [R, D] = i.useState(true), M = i.useRef(R), [k, U] = i.useState(3), G = i.useRef(k), H = i.useRef(null), B = i.useCallback(e => {
    if (null != e && !A && !f) 336 * (s.length / k) <= e.height && x()
  }, [A, f, s.length, k, x]), V = i.useCallback(e => {
    let t = e.contentRect;
    if (null == t) return;
    let n = t.width;
    n < 1024 && M.current ? (M.current = false, D(false)) : n > 1024 && !M.current && (M.current = true, D(true));
    let r = 1;
    for (n -= 450 * !!R, n -= 280; n > 0;) n -= 264, r += 1;
    r !== G.current && (G.current = r, U(r)), B(t)
  }, [R, B]), F = (0, u.y)(V, [R, B]);
  i.useEffect(() => {
    L((0, m.PM)())
  }, [y]), i.useEffect(() => {
    j({
      loadId: t,
      searchId: w,
      query: y,
      guildResults: s.map(g.Z.getGuild).filter(p.lm),
      analyticsContext: Z,
      categoryId: P
    })
  }, [Z, s, t, P, w, y]);
  let z = i.useCallback(e => n(e, P), [n, P]),
    Y = i.useMemo(() => f ? [s.length, 0] : [s.length], [s.length, f]),
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
              }), (0, r.jsx)(v.Z, {
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
      let o = null == (a = H.current) || null == (i = a.getScrollerState()) ? true : i.scrollTop;
      null != o && h.Z.setState({
        scrollPosition: o
      })
    }, [l]),
    X = i.useCallback((e, t, n, i) => {
      if (0 !== e) return null;
      {
        let e = s[t];
        return (0, r.jsx)("div", {
          style: n,
          children: (0, r.jsx)(I.ZP, {
            guildId: e,
            onClick: async e => await J(e, t, P, N),
            onView: e => z(e)
          })
        }, i)
      }
    }, [s, J, z, P]);
  i.useEffect(() => {
    let e = H.current;
    return () => {
      var t;
      let n = null == e || null == (t = e.getScrollerState()) ? true : t.scrollTop;
      null != n && h.Z.setState({
        scrollPosition: n
      })
    }
  }, []), i.useLayoutEffect(() => {
    let e = h.Z.getField("scrollPosition");
    null != e && setTimeout(() => {
      var t;
      null == (t = H.current) || t.scrollTo({
        to: e,
        animate: false,
        callback: () => {
          h.Z.setState({
            scrollPosition: null
          })
        }
      })
    })
  }, []);
  let $ = i.useMemo(() => (0, o.debounce)(() => {
      var e;
      let t = null == (e = H.current) ? true : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollTop + t.offsetHeight;
      t.scrollHeight - n < 240 && x()
    }, 100, {
      leading: true
    }), [x]),
    ee = R ? S : T;
  return (0, r.jsx)("div", {
    className: C.container,
    ref: F,
    children: (0, r.jsx)(c.GMG, {
      ref: H,
      className: C.masonryList,
      sections: Y,
      columns: k,
      itemGutter: 16,
      padding: ee,
      renderItem: X,
      renderSection: W,
      getSectionHeight: K,
      getItemKey: q,
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
            children: (0, r.jsx)(v.Z, {
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