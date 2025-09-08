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
  let f = (0, d.FF)("CollectiblesBrowse"),
    p = l.useRef(null),
    {
      handleScroll: h
    } = (0, i.z)(p, n),
    {
      setCategoryRef: b,
      handleScrollToCategory: C
    } = (0, m.xV)(p.current),
    [E, S] = l.useState(f),
    [O, v] = l.useState(false);
  return l.useEffect(() => {
    null != c && C(c)
  }, [c, C]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      v(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    f || S(false)
  }, [f, S]), (0, r.jsx)("div", {
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
        onScroll: h,
        children: (0, r.jsx)(T, {
          isFullScreen: t,
          isSmallScreen: O,
          filterBarOpen: E,
          setFilterBarOpen: S,
          tab: n,
          scrollerRef: p,
          sortedCategories: a,
          setCategoryRef: b
        })
      }), E && !O && (0, r.jsx)("div", {
        className: x.divider
      }), E && !O && (0, r.jsx)(o.Ttm, {
        className: x.filterBar,
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
  } = e, j = (0, d.FF)("CollectiblesBrowse"), k = l.useRef(null), B = (0, g.S)(e => e.hasDefaultFilters()), I = (0, u.sp)(), {
    handlePageChange: N,
    currentPage: A
  } = (0, b.h)({
    scrollerRef: y,
    sortedCategories: T
  }), P = l.useCallback(e => {
    c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == I ? true : I.sessionId,
      page_section: null == I ? true : I.pageSection,
      page_category: null == I ? true : I.pageCategory,
      page_index: e,
      page_size: null == I ? true : I.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), N(e)
  }, [I, N]), R = l.useRef(null);
  return l.useEffect(() => {
    if (!n || !a) return;
    let e = e => {
      let t = e.target;
      null === k.current || null === R.current || k.current.contains(t) || R.current.contains(t) || (c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
  }, [n, a, i, I]), (0, r.jsx)("div", {
    className: x.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: s()(x.inventory, {
        [x.inventoryFilter]: j,
        [x.pageFullscreen]: t
      }),
      children: [j && (0, r.jsxs)("div", {
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
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: v.intl.string(v.t.uaX709)
            }), (0, r.jsx)(h.Z, {})]
          }), (0, r.jsx)("div", {
            ref: R,
            children: (0, r.jsx)(o.zxk, {
              onClick: () => {
                let e = !a;
                c.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
              text: v.intl.string(a ? v.t.fYtm6e : v.t.TeTYEx),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), a && n && (0, r.jsx)("div", {
          className: x.filterOverlay,
          ref: k,
          children: (0, r.jsx)(o.Den, {
            className: x.filterOverlayContent,
            children: (0, r.jsx)(_.Z, {})
          })
        })]
      }), j && !B ? (0, r.jsx)(C.Z, {
        isFullScreen: t,
        scrollerRef: y,
        tab: m
      }, m) : (0, S.RE)(m) ? (0, r.jsx)(E.Z, {
        isFullScreen: t,
        scrollerRef: y,
        tab: m
      }, m) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: A
        },
        children: (0, r.jsx)(p.Z, {
          isFullScreen: t,
          sortedCategories: T,
          setCategoryRef: L,
          currentPage: A,
          handlePageChange: P
        })
      })]
    })
  })
}