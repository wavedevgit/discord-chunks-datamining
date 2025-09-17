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
    sortedCategories: a,
    initialCategoryId: c,
    onUnmount: u
  } = e;
  (0, g.A)();
  let p = (0, d.FF)("CollectiblesBrowse"),
    f = l.useRef(null),
    {
      handleScroll: h
    } = (0, i.z)(f, n),
    {
      setCategoryRef: C,
      handleScrollToCategory: b
    } = (0, m.xV)(f.current),
    [E, S] = l.useState(p),
    [O, x] = l.useState(false);
  return l.useEffect(() => {
    null != c && b(c)
  }, [c, b]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      x(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    p || S(false)
  }, [p, S]), (0, r.jsx)("div", {
    className: s()(v.pageWrapper, {
      [v.pageWrapperFilter]: p
    }),
    children: (0, r.jsxs)("main", {
      className: s()(v.page, {
        [v.pageFilter]: p
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: v.shopScroll,
        ref: f,
        onScroll: h,
        children: (0, r.jsx)(T, {
          isFullScreen: t,
          isSmallScreen: O,
          filterBarOpen: E,
          setFilterBarOpen: S,
          tab: n,
          scrollerRef: f,
          sortedCategories: a,
          setCategoryRef: C
        })
      }), E && !O && (0, r.jsx)("div", {
        className: v.divider
      }), E && !O && (0, r.jsx)(o.Ttm, {
        className: v.filterBar,
        children: (0, r.jsx)(_.Z, {})
      })]
    })
  })
}
let T = e => {
  let {
    isFullScreen: t,
    isSmallScreen: n,
    filterBarOpen: a,
    setFilterBarOpen: i,
    tab: m,
    scrollerRef: y,
    sortedCategories: T,
    setCategoryRef: L
  } = e, j = (0, d.FF)("CollectiblesBrowse"), k = l.useRef(null), I = (0, g.S)(e => e.hasDefaultFilters()), B = (0, u.sp)(), {
    handlePageChange: N,
    currentPage: P
  } = (0, C.h)({
    scrollerRef: y,
    sortedCategories: T
  }), A = l.useCallback(e => {
    c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    if (!n || !a) return;
    let e = e => {
      let t = e.target;
      null === k.current || null === R.current || k.current.contains(t) || R.current.contains(t) || (c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
  }, [n, a, i, B]), (0, r.jsx)("div", {
    className: v.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: s()(v.inventory, {
        [v.inventoryFilter]: j,
        [v.pageFullscreen]: t
      }),
      children: [j && (0, r.jsxs)("div", {
        className: v.controls,
        children: [(0, r.jsx)("div", {
          className: v.controlsLeftSide,
          children: (0, r.jsx)(p.Z, {})
        }), (0, r.jsxs)("div", {
          className: s()(v.controlsRightSide, {
            [v.controlsRightSideResponsive]: n
          }),
          children: [(0, r.jsxs)("div", {
            className: v.sortBy,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: x.intl.string(x.t.uaX709)
            }), (0, r.jsx)(h.Z, {})]
          }), (0, r.jsx)("div", {
            ref: R,
            children: (0, r.jsx)(o.zxk, {
              onClick: () => {
                let e = !a;
                c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
              text: x.intl.string(a ? x.t.fYtm6e : x.t.TeTYEx),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), a && n && (0, r.jsx)("div", {
          className: v.filterOverlay,
          ref: k,
          children: (0, r.jsx)(o.Den, {
            className: v.filterOverlayContent,
            children: (0, r.jsx)(_.Z, {})
          })
        })]
      }), j && !I ? (0, r.jsx)(b.Z, {
        isFullScreen: t,
        scrollerRef: y,
        tab: m
      }, m) : (0, S.RE)(m) ? (0, r.jsx)(E.Z, {
        isFullScreen: t,
        scrollerRef: y,
        tab: m
      }, m) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: P
        },
        children: (0, r.jsx)(f.Z, {
          isFullScreen: t,
          sortedCategories: T,
          setCategoryRef: L,
          currentPage: P,
          handlePageChange: A
        })
      })]
    })
  })
}