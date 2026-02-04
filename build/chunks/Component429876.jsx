/** Chunk was on 59275 **/
/** chunk id: 429876, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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

function x(e) {
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
    [b, _] = l.useState(a),
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
    className: S.VM,
    children: (0, r.jsxs)("main", {
      className: S.MY,
      children: [(0, r.jsx)(i.GtU, {
        className: S.OW,
        ref: u,
        onScroll: g,
        children: (0, r.jsx)(O, {
          isSmallScreen: E,
          filterBarOpen: b,
          setFilterBarOpen: _,
          tab: t,
          scrollerRef: u,
          sortedCategories: n,
          setCategoryRef: f,
          initialCategoryId: s
        })
      }), b && !E && (0, r.jsx)("div", {
        className: S.yF
      }), b && !E && (0, r.jsx)(i.HOs, {
        className: S.kT,
        children: (0, r.jsx)(h.A, {})
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
    sortedCategories: x,
    setCategoryRef: O,
    initialCategoryId: y
  } = e, j = l.useRef(null), L = (0, d.v)(e => e.hasDefaultFilters()), T = (0, u.uM)(), {
    handlePageChange: I,
    currentPage: k
  } = (0, b.Z)(m), N = l.useCallback(e => {
    c.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == T ? true : T.sessionId,
      page_section: null == T ? true : T.pageSection,
      page_category: null == T ? true : T.pageCategory,
      page_index: e,
      page_size: null == T ? true : T.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), I(e)
  }, [T, I]), R = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === j.current || null === R.current || j.current.contains(t) || R.current.contains(t) || (c.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == T ? true : T.sessionId,
        page_section: null == T ? true : T.pageSection,
        page_category: null == T ? true : T.pageCategory,
        page_index: null == T ? true : T.pageIndex,
        page_size: null == T ? true : T.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), s(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, s, T]), (0, r.jsx)("div", {
    className: S.en,
    children: (0, r.jsxs)("div", {
      className: S.pf,
      children: [(0, r.jsxs)("div", {
        className: S.ne,
        children: [(0, r.jsx)("div", {
          className: S.lQ,
          children: (0, r.jsx)(g.A, {})
        }), (0, r.jsxs)("div", {
          className: a()(S.wR, {
            [S.Im]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: S.Ul,
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
                  collectibles_shop_session_id: null == T ? true : T.sessionId,
                  page_section: null == T ? true : T.pageSection,
                  page_category: null == T ? true : T.pageCategory,
                  page_index: null == T ? true : T.pageIndex,
                  page_size: null == T ? true : T.pageSize,
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
          className: S.Dh,
          ref: j,
          children: (0, r.jsx)(i.T7Y, {
            className: S.Qo,
            children: (0, r.jsx)(h.A, {})
          })
        })]
      }), L ? (0, v.dF)(o) ? (0, r.jsx)(E.A, {
        scrollerRef: m,
        tab: o
      }, o) : (0, r.jsx)(u.R9, {
        newValue: {
          pageIndex: k
        },
        children: (0, r.jsx)(f.A, {
          sortedCategories: x,
          setCategoryRef: O,
          currentPage: k,
          handlePageChange: N,
          initialCategoryId: y
        })
      }) : (0, r.jsx)(_.A, {
        scrollerRef: m,
        tab: o
      }, o)]
    })
  })
}