/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
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

function T(e) {
  let {
    isFullScreen: t,
    tab: n,
    sortedCategories: s,
    initialCategoryId: c,
    onUnmount: u
  } = e;
  (0, g.A)();
  let p = (0, d.FF)("CollectiblesBrowse"),
    f = l.useRef(null),
    {
      handleScroll: h
    } = (0, o.z)(f, n),
    {
      setCategoryRef: m,
      handleScrollToCategory: b
    } = (0, C.xV)(f.current),
    [E, S] = l.useState(p),
    [v, x] = l.useState(false);
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
    className: a()(O.pageWrapper, {
      [O.pageWrapperFilter]: p
    }),
    children: (0, r.jsxs)("main", {
      className: a()(O.page, {
        [O.pageFilter]: p
      }),
      children: [(0, r.jsx)(i.yWw, {
        className: O.shopScroll,
        ref: f,
        onScroll: h,
        children: (0, r.jsx)(y, {
          isFullScreen: t,
          isSmallScreen: v,
          filterBarOpen: E,
          setFilterBarOpen: S,
          tab: n,
          scrollerRef: f,
          sortedCategories: s,
          setCategoryRef: m
        })
      }), E && !v && (0, r.jsx)("div", {
        className: O.divider
      }), E && !v && (0, r.jsx)(i.Ttm, {
        className: O.filterBar,
        children: (0, r.jsx)(_.Z, {})
      })]
    })
  })
}
let y = e => {
  let {
    isFullScreen: t,
    isSmallScreen: n,
    filterBarOpen: s,
    setFilterBarOpen: o,
    tab: C,
    scrollerRef: T,
    sortedCategories: y,
    setCategoryRef: L
  } = e, j = (0, d.FF)("CollectiblesBrowse"), k = l.useRef(null), I = (0, g.S)(e => e.hasDefaultFilters()), P = (0, u.sp)(), {
    handlePageChange: N,
    currentPage: B
  } = (0, m.h)({
    scrollerRef: T,
    sortedCategories: y
  }), A = l.useCallback(e => {
    c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == P ? true : P.sessionId,
      page_section: null == P ? true : P.pageSection,
      page_category: null == P ? true : P.pageCategory,
      page_index: e,
      page_size: null == P ? true : P.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), N(e)
  }, [P, N]), R = l.useRef(null);
  return l.useEffect(() => {
    if (!n || !s) return;
    let e = e => {
      let t = e.target;
      null === k.current || null === R.current || k.current.contains(t) || R.current.contains(t) || (c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == P ? true : P.sessionId,
        page_section: null == P ? true : P.pageSection,
        page_category: null == P ? true : P.pageCategory,
        page_index: null == P ? true : P.pageIndex,
        page_size: null == P ? true : P.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), o(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [n, s, o, P]), (0, r.jsx)("div", {
    className: O.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: a()(O.inventory, {
        [O.inventoryFilter]: j,
        [O.pageFullscreen]: t
      }),
      children: [j && (0, r.jsxs)("div", {
        className: O.controls,
        children: [(0, r.jsx)("div", {
          className: O.controlsLeftSide,
          children: (0, r.jsx)(p.Z, {})
        }), (0, r.jsxs)("div", {
          className: a()(O.controlsRightSide, {
            [O.controlsRightSideResponsive]: n
          }),
          children: [(0, r.jsxs)("div", {
            className: O.sortBy,
            children: [(0, r.jsx)(i.Text, {
              variant: "text-md/semibold",
              children: x.intl.string(x.t.uaX709)
            }), (0, r.jsx)(h.Z, {})]
          }), (0, r.jsx)("div", {
            ref: R,
            children: (0, r.jsx)(i.zxk, {
              onClick: () => {
                let e = !s;
                c.default.track(v.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == P ? true : P.sessionId,
                  page_section: null == P ? true : P.pageSection,
                  page_category: null == P ? true : P.pageCategory,
                  page_index: null == P ? true : P.pageIndex,
                  page_size: null == P ? true : P.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), o(e)
              },
              variant: "secondary",
              text: x.intl.string(s ? x.t.fYtm6e : x.t.TeTYEx),
              icon: i.gXV,
              iconPosition: "end"
            })
          })]
        }), s && n && (0, r.jsx)("div", {
          className: O.filterOverlay,
          ref: k,
          children: (0, r.jsx)(i.Den, {
            className: O.filterOverlayContent,
            children: (0, r.jsx)(_.Z, {})
          })
        })]
      }), j && !I ? (0, r.jsx)(b.Z, {
        isFullScreen: t,
        scrollerRef: T,
        tab: C
      }, C) : (0, S.RE)(C) ? (0, r.jsx)(E.Z, {
        isFullScreen: t,
        scrollerRef: T,
        tab: C
      }, C) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: B
        },
        children: (0, r.jsx)(f.Z, {
          isFullScreen: t,
          sortedCategories: y,
          setCategoryRef: L,
          currentPage: B,
          handlePageChange: A
        })
      })]
    })
  })
}