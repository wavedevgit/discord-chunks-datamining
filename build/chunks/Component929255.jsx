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
    [v, E] = l.useState(f && c),
    [S, O] = l.useState(false);
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
    f || E(false)
  }, [f, E]), (0, r.jsx)("div", {
    className: s()(x.pageWrapper, {
      [x.pageWrapperFilter]: f
    }),
    children: (0, r.jsxs)("main", {
      className: s()(x.page, {
        [x.pageFilter]: f
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: x.shopScroll,
        ref: p,
        onScroll: C,
        children: (0, r.jsx)(j, {
          isSmallScreen: S,
          filterBarOpen: v,
          setFilterBarOpen: E,
          tab: t,
          scrollerRef: p,
          sortedCategories: n,
          setCategoryRef: _,
          initialCategoryId: i
        })
      }), v && !S && (0, r.jsx)("div", {
        className: x.divider
      }), v && !S && (0, r.jsx)(o.Ttm, {
        className: x.filterBar,
        children: (0, r.jsx)(h.Z, {})
      })]
    })
  })
}
let j = e => {
  let {
    isSmallScreen: t,
    filterBarOpen: n,
    setFilterBarOpen: i,
    tab: a,
    scrollerRef: m,
    sortedCategories: y,
    setCategoryRef: j,
    initialCategoryId: k
  } = e, T = (0, d.FF)("CollectiblesBrowse"), I = l.useRef(null), L = (0, g.S)(e => e.hasDefaultFilters()), B = (0, u.sp)(), {
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
    className: x.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: s()(x.inventory, {
        [x.inventoryFilter]: T
      }),
      children: [T && (0, r.jsxs)("div", {
        className: x.controls,
        children: [(0, r.jsx)("div", {
          className: x.controlsLeftSide,
          children: (0, r.jsx)(f.Z, {})
        }), (0, r.jsxs)("div", {
          className: s()(x.controlsRightSide, {
            [x.controlsRightSideResponsive]: t
          }),
          children: [(0, r.jsxs)("div", {
            className: x.sortBy,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: O.intl.string(O.t.uaX705)
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
              text: O.intl.string(n ? O.t.fYtm6f : O.t["TeTYE+"]),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), n && t && (0, r.jsx)("div", {
          className: x.filterOverlay,
          ref: I,
          children: (0, r.jsx)(o.Den, {
            className: x.filterOverlayContent,
            children: (0, r.jsx)(h.Z, {})
          })
        })]
      }), T && !L ? (0, r.jsx)(b.Z, {
        scrollerRef: m,
        tab: a
      }, a) : (0, E.RE)(a) ? (0, r.jsx)(v.Z, {
        scrollerRef: m,
        tab: a
      }, a) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: A
        },
        children: (0, r.jsx)(p.Z, {
          sortedCategories: y,
          setCategoryRef: j,
          currentPage: A,
          handlePageChange: P,
          initialCategoryId: k
        })
      })]
    })
  })
}