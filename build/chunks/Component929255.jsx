/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function _(e) {
  let {
    tab: t,
    sortedCategories: n,
    initialCategoryId: a,
    showFilterInitially: s = true,
    onUnmount: c
  } = e;
  (0, d.A)();
  let u = l.useRef(null),
    {
      handleScroll: f
    } = (0, o.z)(u, t),
    {
      setCategoryRef: g,
      handleScrollToCategory: p
    } = (0, b.xV)(u.current),
    [h, C] = l.useState(s),
    [E, v] = l.useState(false);
  return l.useEffect(() => {
    null != a && p(a)
  }, [a, p]), l.useEffect(() => () => {
    null != c && c()
  }, []), l.useEffect(() => {
    let e = () => {
      v(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), (0, r.jsx)("div", {
    className: O.pageWrapper,
    children: (0, r.jsxs)("main", {
      className: O.page,
      children: [(0, r.jsx)(i.yWw, {
        className: O.shopScroll,
        ref: u,
        onScroll: f,
        children: (0, r.jsx)(y, {
          isSmallScreen: E,
          filterBarOpen: h,
          setFilterBarOpen: C,
          tab: t,
          scrollerRef: u,
          sortedCategories: n,
          setCategoryRef: g,
          initialCategoryId: a
        })
      }), h && !E && (0, r.jsx)("div", {
        className: O.divider
      }), h && !E && (0, r.jsx)(i.Ttm, {
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
    tab: o,
    scrollerRef: b,
    sortedCategories: _,
    setCategoryRef: y,
    initialCategoryId: j
  } = e, k = l.useRef(null), T = (0, d.S)(e => e.hasDefaultFilters()), I = (0, u.sp)(), {
    handlePageChange: L,
    currentPage: A
  } = (0, h.h)(b), B = l.useCallback(e => {
    c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == I ? true : I.sessionId,
      page_section: null == I ? true : I.pageSection,
      page_category: null == I ? true : I.pageCategory,
      page_index: e,
      page_size: null == I ? true : I.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), L(e)
  }, [I, L]), N = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === k.current || null === N.current || k.current.contains(t) || N.current.contains(t) || (c.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == I ? true : I.sessionId,
        page_section: null == I ? true : I.pageSection,
        page_category: null == I ? true : I.pageCategory,
        page_index: null == I ? true : I.pageIndex,
        page_size: null == I ? true : I.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), a(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, a, I]), (0, r.jsx)("div", {
    className: O.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: O.inventory,
      children: [(0, r.jsxs)("div", {
        className: O.controls,
        children: [(0, r.jsx)("div", {
          className: O.controlsLeftSide,
          children: (0, r.jsx)(f.Z, {})
        }), (0, r.jsxs)("div", {
          className: s()(O.controlsRightSide, {
            [O.controlsRightSideResponsive]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: O.sortBy,
            children: [(0, r.jsx)(i.Text, {
              variant: "text-md/semibold",
              children: S.intl.string(S.t.uaX705)
            }), (0, r.jsx)(p.Z, {})]
          }), (0, r.jsx)("div", {
            ref: N,
            children: (0, r.jsx)(i.Button, {
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
                }), a(e)
              },
              variant: "secondary",
              text: S.intl.string(n ? S.t.fYtm6f : S.t["TeTYE+"]),
              icon: i.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: O.filterOverlay,
          ref: k,
          children: (0, r.jsx)(i.Den, {
            className: O.filterOverlayContent,
            children: (0, r.jsx)(m.Z, {})
          })
        })]
      }), T ? (0, v.RE)(o) ? (0, r.jsx)(E.Z, {
        scrollerRef: b,
        tab: o
      }, o) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: A
        },
        children: (0, r.jsx)(g.Z, {
          sortedCategories: _,
          setCategoryRef: y,
          currentPage: A,
          handlePageChange: B,
          initialCategoryId: j
        })
      }) : (0, r.jsx)(C.Z, {
        scrollerRef: b,
        tab: o
      }, o)]
    })
  })
}