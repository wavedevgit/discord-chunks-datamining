/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk702486 = require("./702486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk870289 = require("./870289.js"),
  Chunk501431 = require("./501431.js"),
  Chunk888302 = require("./888302.jsx"),
  Chunk193227 = require("./193227.jsx"),
  Chunk426171 = require("./426171.js"),
  Chunk845796 = require("./845796.jsx"),
  Chunk841875 = require("./841875.jsx"),
  Chunk312030 = require("./312030.js"),
  Chunk795343 = require("./795343.jsx"),
  Chunk763891 = require("./763891.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452785 = require("./452785.js");

function y(e) {
  let {
    tab: t,
    sortedCategories: n,
    initialCategoryId: i,
    showFilterInitially: c = true,
    onUnmount: u
  } = e;
  (0, g.A)();
  let p = (0, d.FF)("CollectiblesBrowse"),
    f = l.useRef(null),
    {
      handleScroll: C
    } = (0, s.z)(f, t),
    {
      setCategoryRef: _,
      handleScrollToCategory: b
    } = (0, h.xV)(f.current),
    [v, x] = l.useState(p && c),
    [E, S] = l.useState(false);
  return l.useEffect(() => {
    null != i && b(i)
  }, [i, b]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      S(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    p || x(false)
  }, [p, x]), (0, r.jsx)("div", {
    className: a()(O.pageWrapper, {
      [O.pageWrapperFilter]: p
    }),
    children: (0, r.jsxs)("main", {
      className: a()(O.page, {
        [O.pageFilter]: p
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: O.shopScroll,
        ref: f,
        onScroll: C,
        children: (0, r.jsx)(j, {
          isSmallScreen: E,
          filterBarOpen: v,
          setFilterBarOpen: x,
          tab: t,
          scrollerRef: f,
          sortedCategories: n,
          setCategoryRef: _
        })
      }), v && !E && (0, r.jsx)("div", {
        className: O.divider
      }), v && !E && (0, r.jsx)(o.Ttm, {
        className: O.filterBar,
        children: (0, r.jsx)(m.Z, {})
      })]
    })
  })
}
let j = e => {
  let {
    isSmallScreen: t,
    filterBarOpen: n,
    setFilterBarOpen: i,
    tab: s,
    scrollerRef: h,
    sortedCategories: y,
    setCategoryRef: j
  } = e, k = (0, d.FF)("CollectiblesBrowse"), I = l.useRef(null), T = (0, g.S)(e => e.hasDefaultFilters()), L = (0, u.sp)(), {
    handlePageChange: B,
    currentPage: P
  } = (0, _.h)(h), A = l.useCallback(e => {
    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == L ? true : L.sessionId,
      page_section: null == L ? true : L.pageSection,
      page_category: null == L ? true : L.pageCategory,
      page_index: e,
      page_size: null == L ? true : L.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), B(e)
  }, [L, B]), N = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === I.current || null === N.current || I.current.contains(t) || N.current.contains(t) || (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        page_section: null == L ? true : L.pageSection,
        page_category: null == L ? true : L.pageCategory,
        page_index: null == L ? true : L.pageIndex,
        page_size: null == L ? true : L.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), i(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, i, L]), (0, r.jsx)("div", {
    className: O.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: a()(O.inventory, {
        [O.inventoryFilter]: k
      }),
      children: [k && (0, r.jsxs)("div", {
        className: O.controls,
        children: [(0, r.jsx)("div", {
          className: O.controlsLeftSide,
          children: (0, r.jsx)(p.Z, {})
        }), (0, r.jsxs)("div", {
          className: a()(O.controlsRightSide, {
            [O.controlsRightSideResponsive]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: O.sortBy,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: S.intl.string(S.t.uaX705)
            }), (0, r.jsx)(C.Z, {})]
          }), (0, r.jsx)("div", {
            ref: N,
            children: (0, r.jsx)(o.Button, {
              onClick: () => {
                let e = !n;
                c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == L ? true : L.sessionId,
                  page_section: null == L ? true : L.pageSection,
                  page_category: null == L ? true : L.pageCategory,
                  page_index: null == L ? true : L.pageIndex,
                  page_size: null == L ? true : L.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), i(e)
              },
              variant: "secondary",
              text: S.intl.string(n ? S.t.fYtm6f : S.t["TeTYE+"]),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: O.filterOverlay,
          ref: I,
          children: (0, r.jsx)(o.Den, {
            className: O.filterOverlayContent,
            children: (0, r.jsx)(m.Z, {})
          })
        })]
      }), k && !T ? (0, r.jsx)(b.Z, {
        scrollerRef: h,
        tab: s
      }, s) : (0, x.RE)(s) ? (0, r.jsx)(v.Z, {
        scrollerRef: h,
        tab: s
      }, s) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: P
        },
        children: (0, r.jsx)(f.Z, {
          sortedCategories: y,
          setCategoryRef: j,
          currentPage: P,
          handlePageChange: A
        })
      })]
    })
  })
}