/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    isFullScreen: t,
    tab: n,
    sortedCategories: i,
    initialCategoryId: c,
    onUnmount: u
  } = e;
  (0, g.A)();
  let f = (0, d.FF)("CollectiblesBrowse"),
    p = l.useRef(null),
    {
      handleScroll: h
    } = (0, o.z)(p, n),
    {
      setCategoryRef: m,
      handleScrollToCategory: b
    } = (0, C.xV)(p.current),
    [E, v] = l.useState(f),
    [S, O] = l.useState(false);
  return l.useEffect(() => {
    null != c && b(c)
  }, [c, b]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      O(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    f || v(false)
  }, [f, v]), (0, r.jsx)("div", {
    className: s()(x.pageWrapper, {
      [x.pageWrapperFilter]: f
    }),
    children: (0, r.jsxs)("main", {
      className: s()(x.page, {
        [x.pageFilter]: f
      }),
      children: [(0, r.jsx)(a.yWw, {
        className: x.shopScroll,
        ref: p,
        onScroll: h,
        children: (0, r.jsx)(j, {
          isFullScreen: t,
          isSmallScreen: S,
          filterBarOpen: E,
          setFilterBarOpen: v,
          tab: n,
          scrollerRef: p,
          sortedCategories: i,
          setCategoryRef: m
        })
      }), E && !S && (0, r.jsx)("div", {
        className: x.divider
      }), E && !S && (0, r.jsx)(a.Ttm, {
        className: x.filterBar,
        children: (0, r.jsx)(_.Z, {})
      })]
    })
  })
}
let j = e => {
  let {
    isFullScreen: t,
    isSmallScreen: n,
    filterBarOpen: i,
    setFilterBarOpen: o,
    tab: C,
    scrollerRef: y,
    sortedCategories: j,
    setCategoryRef: T
  } = e, L = (0, d.FF)("CollectiblesBrowse"), k = l.useRef(null), I = (0, g.S)(e => e.hasDefaultFilters()), B = (0, u.sp)(), {
    handlePageChange: P,
    currentPage: N
  } = (0, m.h)({
    scrollerRef: y,
    sortedCategories: j
  }), A = l.useCallback(e => {
    c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == B ? true : B.sessionId,
      page_section: null == B ? true : B.pageSection,
      page_category: null == B ? true : B.pageCategory,
      page_index: e,
      page_size: null == B ? true : B.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), P(e)
  }, [B, P]), R = l.useRef(null);
  return l.useEffect(() => {
    if (!n || !i) return;
    let e = e => {
      let t = e.target;
      null === k.current || null === R.current || k.current.contains(t) || R.current.contains(t) || (c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == B ? true : B.sessionId,
        page_section: null == B ? true : B.pageSection,
        page_category: null == B ? true : B.pageCategory,
        page_index: null == B ? true : B.pageIndex,
        page_size: null == B ? true : B.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), o(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [n, i, o, B]), (0, r.jsx)("div", {
    className: x.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: s()(x.inventory, {
        [x.inventoryFilter]: L,
        [x.pageFullscreen]: t
      }),
      children: [L && (0, r.jsxs)("div", {
        className: x.controls,
        children: [(0, r.jsx)("div", {
          className: x.controlsLeftSide,
          children: (0, r.jsx)(f.Z, {})
        }), (0, r.jsxs)("div", {
          className: s()(x.controlsRightSide, {
            [x.controlsRightSideResponsive]: n
          }),
          children: [(0, r.jsxs)("div", {
            className: x.sortBy,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/semibold",
              children: O.intl.string(O.t.uaX709)
            }), (0, r.jsx)(h.Z, {})]
          }), (0, r.jsx)("div", {
            ref: R,
            children: (0, r.jsx)(a.Button, {
              onClick: () => {
                let e = !i;
                c.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == B ? true : B.sessionId,
                  page_section: null == B ? true : B.pageSection,
                  page_category: null == B ? true : B.pageCategory,
                  page_index: null == B ? true : B.pageIndex,
                  page_size: null == B ? true : B.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), o(e)
              },
              variant: "secondary",
              text: O.intl.string(i ? O.t.fYtm6e : O.t.TeTYEx),
              icon: a.gXV,
              iconPosition: "end"
            })
          })]
        }), i && n && (0, r.jsx)("div", {
          className: x.filterOverlay,
          ref: k,
          children: (0, r.jsx)(a.Den, {
            className: x.filterOverlayContent,
            children: (0, r.jsx)(_.Z, {})
          })
        })]
      }), L && !I ? (0, r.jsx)(b.Z, {
        isFullScreen: t,
        scrollerRef: y,
        tab: C
      }, C) : (0, v.RE)(C) ? (0, r.jsx)(E.Z, {
        isFullScreen: t,
        scrollerRef: y,
        tab: C
      }, C) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: N
        },
        children: (0, r.jsx)(p.Z, {
          isFullScreen: t,
          sortedCategories: j,
          setCategoryRef: T,
          currentPage: N,
          handlePageChange: A
        })
      })]
    })
  })
}