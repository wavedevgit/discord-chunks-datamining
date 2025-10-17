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
      handleScroll: h
    } = (0, s.z)(f, t),
    {
      setCategoryRef: m,
      handleScrollToCategory: b
    } = (0, C.xV)(f.current),
    [v, E] = l.useState(p && c),
    [x, O] = l.useState(false);
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
    p || E(false)
  }, [p, E]), (0, r.jsx)("div", {
    className: a()(S.pageWrapper, {
      [S.pageWrapperFilter]: p
    }),
    children: (0, r.jsxs)("main", {
      className: a()(S.page, {
        [S.pageFilter]: p
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: S.shopScroll,
        ref: f,
        onScroll: h,
        children: (0, r.jsx)(j, {
          isSmallScreen: x,
          filterBarOpen: v,
          setFilterBarOpen: E,
          tab: t,
          scrollerRef: f,
          sortedCategories: n,
          setCategoryRef: m
        })
      }), v && !x && (0, r.jsx)("div", {
        className: S.divider
      }), v && !x && (0, r.jsx)(o.Ttm, {
        className: S.filterBar,
        children: (0, r.jsx)(_.Z, {})
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
    scrollerRef: C,
    sortedCategories: y,
    setCategoryRef: j
  } = e, k = (0, d.FF)("CollectiblesBrowse"), T = l.useRef(null), L = (0, g.S)(e => e.hasDefaultFilters()), I = (0, u.sp)(), {
    handlePageChange: B,
    currentPage: A
  } = (0, m.h)({
    scrollerRef: C,
    sortedCategories: y
  }), N = l.useCallback(e => {
    c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == I ? true : I.sessionId,
      page_section: null == I ? true : I.pageSection,
      page_category: null == I ? true : I.pageCategory,
      page_index: e,
      page_size: null == I ? true : I.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), B(e)
  }, [I, B]), P = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === T.current || null === P.current || T.current.contains(t) || P.current.contains(t) || (c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == I ? true : I.sessionId,
        page_section: null == I ? true : I.pageSection,
        page_category: null == I ? true : I.pageCategory,
        page_index: null == I ? true : I.pageIndex,
        page_size: null == I ? true : I.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), i(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, i, I]), (0, r.jsx)("div", {
    className: S.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: a()(S.inventory, {
        [S.inventoryFilter]: k
      }),
      children: [k && (0, r.jsxs)("div", {
        className: S.controls,
        children: [(0, r.jsx)("div", {
          className: S.controlsLeftSide,
          children: (0, r.jsx)(p.Z, {})
        }), (0, r.jsxs)("div", {
          className: a()(S.controlsRightSide, {
            [S.controlsRightSideResponsive]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: S.sortBy,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: O.intl.string(O.t.uaX709)
            }), (0, r.jsx)(h.Z, {})]
          }), (0, r.jsx)("div", {
            ref: P,
            children: (0, r.jsx)(o.Button, {
              onClick: () => {
                let e = !n;
                c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == I ? true : I.sessionId,
                  page_section: null == I ? true : I.pageSection,
                  page_category: null == I ? true : I.pageCategory,
                  page_index: null == I ? true : I.pageIndex,
                  page_size: null == I ? true : I.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), i(e)
              },
              variant: "secondary",
              text: O.intl.string(n ? O.t.fYtm6e : O.t.TeTYEx),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: S.filterOverlay,
          ref: T,
          children: (0, r.jsx)(o.Den, {
            className: S.filterOverlayContent,
            children: (0, r.jsx)(_.Z, {})
          })
        })]
      }), k && !L ? (0, r.jsx)(b.Z, {
        scrollerRef: C,
        tab: s
      }, s) : (0, E.RE)(s) ? (0, r.jsx)(v.Z, {
        scrollerRef: C,
        tab: s
      }, s) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: A
        },
        children: (0, r.jsx)(f.Z, {
          sortedCategories: y,
          setCategoryRef: j,
          currentPage: A,
          handlePageChange: N
        })
      })]
    })
  })
}