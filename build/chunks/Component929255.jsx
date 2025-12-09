/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  let f = (0, d.FF)("CollectiblesBrowse"),
    p = l.useRef(null),
    {
      handleScroll: C
    } = (0, a.z)(p, t),
    {
      setCategoryRef: _,
      handleScrollToCategory: b
    } = (0, m.xV)(p.current),
    [E, v] = l.useState(f && c),
    [S, x] = l.useState(false);
  return l.useEffect(() => {
    null != i && b(i)
  }, [i, b]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      x(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    f || v(false)
  }, [f, v]), (0, r.jsx)("div", {
    className: s()(O.pageWrapper, {
      [O.pageWrapperFilter]: f
    }),
    children: (0, r.jsxs)("main", {
      className: s()(O.page, {
        [O.pageFilter]: f
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: O.shopScroll,
        ref: p,
        onScroll: C,
        children: (0, r.jsx)(k, {
          isSmallScreen: S,
          filterBarOpen: E,
          setFilterBarOpen: v,
          tab: t,
          scrollerRef: p,
          sortedCategories: n,
          setCategoryRef: _,
          initialCategoryId: i
        })
      }), E && !S && (0, r.jsx)("div", {
        className: O.divider
      }), E && !S && (0, r.jsx)(o.Ttm, {
        className: O.filterBar,
        children: (0, r.jsx)(h.Z, {})
      })]
    })
  })
}
let k = e => {
  let {
    isSmallScreen: t,
    filterBarOpen: n,
    setFilterBarOpen: i,
    tab: a,
    scrollerRef: m,
    sortedCategories: y,
    setCategoryRef: k,
    initialCategoryId: T
  } = e, j = (0, d.FF)("CollectiblesBrowse"), I = l.useRef(null), L = (0, g.S)(e => e.hasDefaultFilters()), B = (0, u.sp)(), {
    handlePageChange: N,
    currentPage: A
  } = (0, _.h)(m), P = l.useCallback(e => {
    c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == B ? true : B.sessionId,
      page_section: null == B ? true : B.pageSection,
      page_category: null == B ? true : B.pageCategory,
      page_index: e,
      page_size: null == B ? true : B.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), N(e)
  }, [B, N]), R = l.useRef(null);
  return l.useEffect(() => {
    if (!t || !n) return;
    let e = e => {
      let t = e.target;
      null === I.current || null === R.current || I.current.contains(t) || R.current.contains(t) || (c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == B ? true : B.sessionId,
        page_section: null == B ? true : B.pageSection,
        page_category: null == B ? true : B.pageCategory,
        page_index: null == B ? true : B.pageIndex,
        page_size: null == B ? true : B.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), i(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [t, n, i, B]), (0, r.jsx)("div", {
    className: O.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: s()(O.inventory, {
        [O.inventoryFilter]: j
      }),
      children: [j && (0, r.jsxs)("div", {
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
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: x.intl.string(x.t.uaX705)
            }), (0, r.jsx)(C.Z, {})]
          }), (0, r.jsx)("div", {
            ref: R,
            children: (0, r.jsx)(o.Button, {
              onClick: () => {
                let e = !n;
                c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == B ? true : B.sessionId,
                  page_section: null == B ? true : B.pageSection,
                  page_category: null == B ? true : B.pageCategory,
                  page_index: null == B ? true : B.pageIndex,
                  page_size: null == B ? true : B.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), i(e)
              },
              variant: "secondary",
              text: x.intl.string(n ? x.t.fYtm6f : x.t["TeTYE+"]),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: O.filterOverlay,
          ref: I,
          children: (0, r.jsx)(o.Den, {
            className: O.filterOverlayContent,
            children: (0, r.jsx)(h.Z, {})
          })
        })]
      }), j && !L ? (0, r.jsx)(b.Z, {
        scrollerRef: m,
        tab: a
      }, a) : (0, v.RE)(a) ? (0, r.jsx)(E.Z, {
        scrollerRef: m,
        tab: a
      }, a) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: A
        },
        children: (0, r.jsx)(p.Z, {
          sortedCategories: y,
          setCategoryRef: k,
          currentPage: A,
          handlePageChange: P,
          initialCategoryId: T
        })
      })]
    })
  })
}