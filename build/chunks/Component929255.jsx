/** Chunk was on 45620 **/
/** chunk id: 929255, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk95368 = require("./95368.js");

function x(e) {
  let {
    isFullScreen: t,
    tab: n,
    sortedCategories: a,
    initialCategoryId: c,
    onUnmount: u
  } = e;
  (0, p.A)();
  let g = (0, d.FF)("CollectiblesBrowse"),
    f = l.useRef(null),
    {
      handleScroll: h
    } = (0, s.z)(f, n),
    {
      setCategoryRef: _,
      handleScrollToCategory: v
    } = (0, b.xV)(f.current),
    [O, C] = l.useState(g),
    [E, S] = l.useState(false);
  return l.useEffect(() => {
    null != c && v(c)
  }, [c, v]), l.useEffect(() => () => {
    null != u && u()
  }, []), l.useEffect(() => {
    let e = () => {
      S(window.innerWidth < 1400)
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, []), l.useEffect(() => {
    g || C(false)
  }, [g, C]), (0, r.jsx)("div", {
    className: i()(y.pageWrapper, {
      [y.pageWrapperFilter]: g
    }),
    children: (0, r.jsxs)("main", {
      className: i()(y.page, {
        [y.pageFilter]: g
      }),
      children: [(0, r.jsx)(o.yWw, {
        className: y.shopScroll,
        ref: f,
        onScroll: h,
        children: (0, r.jsx)(j, {
          isFullScreen: t,
          isSmallScreen: E,
          filterBarOpen: O,
          setFilterBarOpen: C,
          tab: n,
          scrollerRef: f,
          sortedCategories: a,
          setCategoryRef: _
        })
      }), O && !E && (0, r.jsx)("div", {
        className: y.divider
      }), O && !E && (0, r.jsx)(o.Ttm, {
        className: y.filterBar,
        children: (0, r.jsx)(m.Z, {})
      })]
    })
  })
}
let j = e => {
  let {
    isFullScreen: t,
    isSmallScreen: n,
    filterBarOpen: a,
    setFilterBarOpen: s,
    tab: b,
    scrollerRef: x,
    sortedCategories: j,
    setCategoryRef: T
  } = e, P = (0, d.FF)("CollectiblesBrowse"), L = l.useRef(null), k = (0, p.S)(e => e.hasDefaultFilters()), I = (0, u.sp)(), {
    handlePageChange: N,
    currentPage: A
  } = (0, _.h)({
    scrollerRef: x,
    sortedCategories: j
  }), w = l.useCallback(e => {
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
    if (!n || !a) return;
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
  }, [n, a, s, I]), (0, r.jsx)("div", {
    className: y.inventoryWrapper,
    children: (0, r.jsxs)("div", {
      className: i()(y.inventory, {
        [y.inventoryFilter]: P,
        [y.pageFullscreen]: t
      }),
      children: [P && (0, r.jsxs)("div", {
        className: y.controls,
        children: [(0, r.jsx)("div", {
          className: y.controlsLeftSide,
          children: (0, r.jsx)(g.Z, {})
        }), (0, r.jsxs)("div", {
          className: i()(y.controlsRightSide, {
            [y.controlsRightSideResponsive]: n
          }),
          children: [(0, r.jsxs)("div", {
            className: y.sortBy,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              children: S.intl.string(S.t.uaX709)
            }), (0, r.jsx)(h.Z, {})]
          }), (0, r.jsx)("div", {
            ref: B,
            children: (0, r.jsx)(o.zxk, {
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
              text: S.intl.string(a ? S.t.fYtm6e : S.t.TeTYEx),
              icon: o.gXV,
              iconPosition: "end"
            })
          })]
        }), a && n && (0, r.jsx)("div", {
          className: y.filterOverlay,
          ref: L,
          children: (0, r.jsx)(o.Den, {
            className: y.filterOverlayContent,
            children: (0, r.jsx)(m.Z, {})
          })
        })]
      }), P && !k ? (0, r.jsx)(v.Z, {
        isFullScreen: t,
        scrollerRef: x,
        tab: b
      }, b) : (0, C.RE)(b) ? (0, r.jsx)(O.Z, {
        isFullScreen: t,
        scrollerRef: x,
        tab: b
      }, b) : (0, r.jsx)(u.k0, {
        newValue: {
          pageIndex: A
        },
        children: (0, r.jsx)(f.Z, {
          isFullScreen: t,
          sortedCategories: j,
          setCategoryRef: T,
          currentPage: A,
          handlePageChange: w
        })
      })]
    })
  })
}