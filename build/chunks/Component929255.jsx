/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk702486 = require("./702486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
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
  Chunk785614 = require("./785614.js");

function x(e) {
  let {
    tab: t,
    sortedCategories: n,
    initialCategoryId: a,
    showFilterInitially: o = true,
    onUnmount: c
  } = e;
  (0, d.A)();
  let u = l.useRef(null),
    {
      handleScroll: f
    } = (0, i.z)(u, t),
    {
      setCategoryRef: g,
      handleScrollToCategory: b
    } = (0, p.xV)(u.current),
    [C, h] = l.useState(o),
    [v, E] = l.useState(false);
  return l.useEffect(() => {
    null != a && b(a)
  }, [a, b]), l.useEffect(() => () => {
    null != c && c()
  }, []), l.useEffect(() => {
    let e = () => {
      E(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), (0, r.jsx)("div", {
    className: O.pageWrapper,
    children: (0, r.jsxs)("main", {
      className: O.page,
      children: [(0, r.jsx)(s.yWw, {
        className: O.shopScroll,
        ref: u,
        onScroll: f,
        children: (0, r.jsx)(y, {
          isSmallScreen: v,
          filterBarOpen: C,
          setFilterBarOpen: h,
          tab: t,
          scrollerRef: u,
          sortedCategories: n,
          setCategoryRef: g,
          initialCategoryId: a
        })
      }), C && !v && (0, r.jsx)("div", {
        className: O.divider
      }), C && !v && (0, r.jsx)(s.Ttm, {
        className: O.filterBar,
        children: (0, r.jsx)(m.Z, {})
      })]
    })
  })
}
let y = e => {
  let {
    isSmallScreen: t,
    filterBarOpen: n,
    setFilterBarOpen: a,
    tab: i,
    scrollerRef: p,
    sortedCategories: x,
    setCategoryRef: y,
    initialCategoryId: j
  } = e, k = l.useRef(null), T = (0, d.S)(e => e.hasDefaultFilters()), L = (0, u.sp)(), {
    handlePageChange: I,
    currentPage: B
  } = (0, C.h)(p), A = l.useCallback(e => {
    c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == L ? true : L.sessionId,
      page_section: null == L ? true : L.pageSection,
      page_category: null == L ? true : L.pageCategory,
      page_index: e,
      page_size: null == L ? true : L.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), I(e)
  }, [L, I]), N = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === k.current || null === N.current || k.current.contains(t) || N.current.contains(t) || (c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        page_section: null == L ? true : L.pageSection,
        page_category: null == L ? true : L.pageCategory,
        page_index: null == L ? true : L.pageIndex,
        page_size: null == L ? true : L.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), a(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, a, L]), (0, r.jsx)("div", {
    className: O.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: O.inventory,
      children: [(0, r.jsxs)("div", {
        className: O.controls,
        children: [(0, r.jsx)("div", {
          className: O.controlsLeftSide,
          children: (0, r.jsx)(f.Z, {})
        }), (0, r.jsxs)("div", {
          className: o()(O.controlsRightSide, {
            [O.controlsRightSideResponsive]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: O.sortBy,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/semibold",
              children: _.intl.string(_.t.uaX705)
            }), (0, r.jsx)(b.Z, {})]
          }), (0, r.jsx)("div", {
            ref: N,
            children: (0, r.jsx)(s.Button, {
              onClick: () => {
                let e = !n;
                c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == L ? true : L.sessionId,
                  page_section: null == L ? true : L.pageSection,
                  page_category: null == L ? true : L.pageCategory,
                  page_index: null == L ? true : L.pageIndex,
                  page_size: null == L ? true : L.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), a(e)
              },
              variant: "secondary",
              text: _.intl.string(n ? _.t.fYtm6f : _.t["TeTYE+"]),
              icon: s.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: O.filterOverlay,
          ref: k,
          children: (0, r.jsx)(s.Den, {
            className: O.filterOverlayContent,
            children: (0, r.jsx)(m.Z, {})
          })
        })]
      }), T ? (0, E.RE)(i) ? (0, r.jsx)(v.Z, {
        scrollerRef: p,
        tab: i
      }, i) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: B
        },
        children: (0, r.jsx)(g.Z, {
          sortedCategories: x,
          setCategoryRef: y,
          currentPage: B,
          handlePageChange: A,
          initialCategoryId: j
        })
      }) : (0, r.jsx)(h.Z, {
        scrollerRef: p,
        tab: i
      }, i)]
    })
  })
}