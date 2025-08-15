/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function x(e) {
  let {
    isFullScreen: t,
    tab: r,
    sortedCategories: a,
    initialCategoryId: c,
    onUnmount: u
  } = e;
  (0, p.A)();
  let g = (0, d.FF)("CollectiblesBrowse"),
    f = l.useRef(null),
    {
      handleScroll: m
    } = (0, s.z)(f, r),
    {
      setCategoryRef: _,
      handleScrollToCategory: v
    } = (0, b.xV)(f.current),
    [O, C] = l.useState(g),
    [E, y] = l.useState(false);
  return l.useEffect(() => {
    null != c && v(c)
  }, [c, v]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      y(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    g || C(false)
  }, [g, C]), (0, n.jsx)("div", {
    className: i()(S.pageWrapper, {
      [S.pageWrapperFilter]: g
    }),
    children: (0, n.jsxs)("main", {
      className: i()(S.page, {
        [S.pageFilter]: g
      }),
      children: [(0, n.jsx)(o.yWw, {
        className: S.shopScroll,
        ref: f,
        onScroll: m,
        children: (0, n.jsx)(j, {
          isFullScreen: t,
          isSmallScreen: E,
          filterBarOpen: O,
          setFilterBarOpen: C,
          tab: r,
          scrollerRef: f,
          sortedCategories: a,
          setCategoryRef: _
        })
      }), O && !E && (0, n.jsx)("div", {
        className: S.divider
      }), O && !E && (0, n.jsx)(o.Ttm, {
        className: S.filterBar,
        children: (0, n.jsx)(h.Z, {})
      })]
    })
  })
}
let j = e => {
  let {
    isFullScreen: t,
    isSmallScreen: r,
    filterBarOpen: a,
    setFilterBarOpen: s,
    tab: b,
    scrollerRef: x,
    sortedCategories: j,
    setCategoryRef: P
  } = e, T = (0, d.FF)("CollectiblesBrowse"), L = l.useRef(null), k = (0, p.S)(e => e.hasDefaultFilters()), I = (0, u.sp)(), {
    handlePageChange: N,
    currentPage: w
  } = (0, _.h)({
    scrollerRef: x,
    sortedCategories: j
  }), A = l.useCallback(e => {
    c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == I ? true : I.sessionId,
      page_section: null == I ? true : I.pageSection,
      page_category: null == I ? true : I.pageCategory,
      page_index: e,
      page_size: null == I ? true : I.pageSize,
      cta_name: "catalog page ".concat(e),
      page_type: "catalog"
    }), N(e)
  }, [I, N]), B = l.useRef(null);
  return l.useEffect(() => {
    if (!r || !a) return;
    let e = e => {
      let t = e.target;
      null === L.current || null === B.current || L.current.contains(t) || B.current.contains(t) || (c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == I ? true : I.sessionId,
        page_section: null == I ? true : I.pageSection,
        page_category: null == I ? true : I.pageCategory,
        page_index: null == I ? true : I.pageIndex,
        page_size: null == I ? true : I.pageSize,
        cta_name: "filter bar hide outside click",
        page_type: "catalog"
      }), s(false))
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
  }, [r, a, s, I]), (0, n.jsx)("div", {
    className: S.inventoryWrapper,
    children: (0, n.jsxs)("div", {
      className: i()(S.inventory, {
        [S.inventoryFilter]: T,
        [S.pageFullscreen]: t
      }),
      children: [T && (0, n.jsxs)("div", {
        className: S.controls,
        children: [(0, n.jsx)("div", {
          className: S.controlsLeftSide,
          children: (0, n.jsx)(g.Z, {})
        }), (0, n.jsxs)("div", {
          className: i()(S.controlsRightSide, {
            [S.controlsRightSideResponsive]: r
          }),
          children: [(0, n.jsxs)("div", {
            className: S.sortBy,
            children: [(0, n.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: y.intl.string(y.t.uaX709)
            }), (0, n.jsx)(m.Z, {})]
          }), (0, n.jsx)("div", {
            ref: B,
            children: (0, n.jsx)(o.zxk, {
              onClick: () => {
                let e = !a;
                c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: null == I ? true : I.sessionId,
                  page_section: null == I ? true : I.pageSection,
                  page_category: null == I ? true : I.pageCategory,
                  page_index: null == I ? true : I.pageIndex,
                  page_size: null == I ? true : I.pageSize,
                  cta_name: "filter bar ".concat(e ? "show" : "hide"),
                  page_type: "catalog"
                }), s(e)
              },
              variant: "secondary",
              text: y.intl.string(a ? y.t.fYtm6e : y.t.TeTYEx),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), a && r && (0, n.jsx)("div", {
          className: S.filterOverlay,
          ref: L,
          children: (0, n.jsx)(o.Den, {
            className: S.filterOverlayContent,
            children: (0, n.jsx)(h.Z, {})
          })
        })]
      }), T && !k ? (0, n.jsx)(v.Z, {
        isFullScreen: t,
        scrollerRef: x,
        tab: b
      }, b) : (0, C.RE)(b) ? (0, n.jsx)(O.Z, {
        isFullScreen: t,
        scrollerRef: x,
        tab: b
      }, b) : (0, n.jsx)(u.k0, {
        newValue: {
          pageIndex: w
        },
        children: (0, n.jsx)(f.Z, {
          isFullScreen: t,
          sortedCategories: j,
          setCategoryRef: P,
          currentPage: w,
          handlePageChange: A
        })
      })]
    })
  })
}