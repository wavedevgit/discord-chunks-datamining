/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  (0, p.A)();
  let g = (0, d.FF)("CollectiblesBrowse"),
    f = l.useRef(null),
    {
      handleScroll: m
    } = (0, s.z)(f, t),
    {
      setCategoryRef: _,
      handleScrollToCategory: b
    } = (0, h.xV)(f.current),
    [v, x] = l.useState(g && c),
    [E, O] = l.useState(false);
  return l.useEffect(() => {
    null != i && b(i)
  }, [i, b]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      O(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    g || x(false)
  }, [g, x]), (0, r.jsx)("div", {
    className: a()(S.pageWrapper, {
      [S.pageWrapperFilter]: g
    }),
    children: (0, r.jsxs)("main", {
      className: a()(S.page, {
        [S.pageFilter]: g
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: S.shopScroll,
        ref: f,
        onScroll: m,
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
        className: S.divider
      }), v && !E && (0, r.jsx)(o.Ttm, {
        className: S.filterBar,
        children: (0, r.jsx)(C.Z, {})
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
  } = e, k = (0, d.FF)("CollectiblesBrowse"), I = l.useRef(null), T = (0, p.S)(e => e.hasDefaultFilters()), L = (0, u.sp)(), {
    handlePageChange: B,
    currentPage: P
  } = (0, _.h)(h), N = l.useCallback(e => {
    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == L ? true : L.sessionId,
      page_section: null == L ? true : L.pageSection,
      page_category: null == L ? true : L.pageCategory,
      page_index: e,
      page_size: null == L ? true : L.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), B(e)
  }, [L, B]), A = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === I.current || null === A.current || I.current.contains(t) || A.current.contains(t) || (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    className: S.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: a()(S.inventory, {
        [S.inventoryFilter]: k
      }),
      children: [k && (0, r.jsxs)("div", {
        className: S.controls,
        children: [(0, r.jsx)("div", {
          className: S.controlsLeftSide,
          children: (0, r.jsx)(g.Z, {})
        }), (0, r.jsxs)("div", {
          className: a()(S.controlsRightSide, {
            [S.controlsRightSideResponsive]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: S.sortBy,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: O.intl.string(O.t.uaX705)
            }), (0, r.jsx)(m.Z, {})]
          }), (0, r.jsx)("div", {
            ref: A,
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
              text: O.intl.string(n ? O.t.fYtm6f : O.t["TeTYE+"]),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: S.filterOverlay,
          ref: I,
          children: (0, r.jsx)(o.Den, {
            className: S.filterOverlayContent,
            children: (0, r.jsx)(C.Z, {})
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
          handlePageChange: N
        })
      })]
    })
  })
}