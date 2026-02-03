/** Chunk was on 59275 **/
/** chunk id: 429876, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk564322 = require("./564322.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk365491 = require("./365491.js"),
  Chunk549367 = require("./549367.jsx"),
  Chunk976742 = require("./976742.jsx"),
  Chunk177366 = require("./177366.js"),
  Chunk212602 = require("./212602.jsx"),
  Chunk662166 = require("./662166.jsx"),
  Chunk919610 = require("./919610.js"),
  Chunk685533 = require("./685533.jsx"),
  Chunk773591 = require("./773591.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk356365 = require("./356365.js");

function S(e) {
  let {
    tab: t,
    sortedCategories: n,
    initialCategoryId: s,
    showFilterInitially: a = true,
    onUnmount: c
  } = e;
  (0, d.S)();
  let u = l.useRef(null),
    {
      handleScroll: g
    } = (0, o.X)(u, t),
    {
      setCategoryRef: f,
      handleScrollToCategory: p
    } = (0, m.k0)(u.current),
    [b, h] = l.useState(a),
    [E, v] = l.useState(false);
  return l.useEffect(() => {
    null != s && p(s)
  }, [s, p]), l.useEffect(() => () => {
    null != c && c()
  }, []), l.useEffect(() => {
    let e = () => {
      v(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), (0, r.jsx)("div", {
    className: x.VM,
    children: (0, r.jsxs)("main", {
      className: x.MY,
      children: [(0, r.jsx)(i.GtU, {
        className: x.OW,
        ref: u,
        onScroll: g,
        children: (0, r.jsx)(O, {
          isSmallScreen: E,
          filterBarOpen: b,
          setFilterBarOpen: h,
          tab: t,
          scrollerRef: u,
          sortedCategories: n,
          setCategoryRef: f,
          initialCategoryId: s
        })
      }), b && !E && (0, r.jsx)("div", {
        className: x.yF
      }), b && !E && (0, r.jsx)(i.HOs, {
        className: x.kT,
        children: (0, r.jsx)(_.A, {})
      })]
    })
  })
}
let O = e => {
  let {
    isSmallScreen: t,
    filterBarOpen: n,
    setFilterBarOpen: s,
    tab: o,
    scrollerRef: m,
    sortedCategories: S,
    setCategoryRef: O,
    initialCategoryId: y
  } = e, j = l.useRef(null), T = (0, d.v)(e => e.hasDefaultFilters()), L = (0, u.uM)(), {
    handlePageChange: I,
    currentPage: k
  } = (0, b.Z)(m), N = l.useCallback(e => {
    c.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == L ? true : L.sessionId,
      page_section: null == L ? true : L.pageSection,
      page_category: null == L ? true : L.pageCategory,
      page_index: e,
      page_size: null == L ? true : L.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), I(e)
  }, [L, I]), R = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === j.current || null === R.current || j.current.contains(t) || R.current.contains(t) || (c.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        page_section: null == L ? true : L.pageSection,
        page_category: null == L ? true : L.pageCategory,
        page_index: null == L ? true : L.pageIndex,
        page_size: null == L ? true : L.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), s(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, s, L]), (0, r.jsx)("div", {
    className: x.en,
    children: (0, r.jsxs)("div", {
      className: x.pf,
      children: [(0, r.jsxs)("div", {
        className: x.ne,
        children: [(0, r.jsx)("div", {
          className: x.lQ,
          children: (0, r.jsx)(g.A, {})
        }), (0, r.jsxs)("div", {
          className: a()(x.wR, {
            [x.Im]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: x.Ul,
            children: [(0, r.jsx)(i.Text, {
              variant: "text-md/semibold",
              children: A.intl.string(A.t.uaX705)
            }), (0, r.jsx)(p.A, {})]
          }), (0, r.jsx)("div", {
            ref: R,
            children: (0, r.jsx)(i.Button, {
              onClick: () => {
                let e = !n;
                c.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == L ? true : L.sessionId,
                  page_section: null == L ? true : L.pageSection,
                  page_category: null == L ? true : L.pageCategory,
                  page_index: null == L ? true : L.pageIndex,
                  page_size: null == L ? true : L.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), s(e)
              },
              variant: "secondary",
              text: A.intl.string(n ? A.t.fYtm6f : A.t["TeTYE+"]),
              icon: i.RgP,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: x.Dh,
          ref: j,
          children: (0, r.jsx)(i.T7Y, {
            className: x.Qo,
            children: (0, r.jsx)(_.A, {})
          })
        })]
      }), T ? (0, v.dF)(o) ? (0, r.jsx)(E.A, {
        scrollerRef: m,
        tab: o
      }, o) : (0, r.jsx)(u.R9, {
        newValue: {
          pageIndex: k
        },
        children: (0, r.jsx)(f.A, {
          sortedCategories: S,
          setCategoryRef: O,
          currentPage: k,
          handlePageChange: N,
          initialCategoryId: y
        })
      }) : (0, r.jsx)(h.A, {
        scrollerRef: m,
        tab: o
      }, o)]
    })
  })
}