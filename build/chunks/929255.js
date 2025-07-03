/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => O
}), n(388685);
var r = n(255367),
  l = n(73800),
  i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(381585),
  c = n(870289),
  u = n(501431),
  d = n(193227),
  p = n(845796),
  g = n(841875),
  f = n(312030),
  h = n(795343),
  b = n(763891),
  m = n(215023),
  _ = n(388032),
  C = n(484920);

function O(e) {
  let {
    isFullScreen: t,
    scrollerRef: n,
    tab: i,
    sortedCategories: O,
    setCategoryRef: v
  } = e, {
    handlePageChange: E,
    currentPage: S
  } = (0, f.h)({
    scrollerRef: n,
    sortedCategories: O
  });
  (0, u.Ab)();
  let x = (0, c.F)("CollectiblesBrowse"),
    [y, T] = l.useState(x);
  l.useEffect(() => {
    x || T(!1)
  }, [x, T]);
  let j = (0, u.S0)(e => e.hasFilters());
  return (0, r.jsx)("div", {
    className: o()(C.pageWrapper, {
      [C.pageWrapperFilter]: x
    }),
    children: (0, r.jsxs)("main", {
      className: o()(C.page, {
        [C.pageFilter]: x
      }),
      children: [(0, r.jsxs)("div", {
        className: o()(C.inventory, {
          [C.inventoryNoFilter]: !x,
          [C.pageFullscreen]: t
        }),
        children: [x && (0, r.jsxs)("div", {
          className: C.controls,
          children: [(0, r.jsx)(p.ZP, {}), (0, r.jsx)(a.zxk, {
            onClick: () => T(e => !e),
            look: a.iLD.OUTLINED,
            color: a.Ttl.PRIMARY,
            children: (0, r.jsxs)("div", {
              className: C.filterButton,
              children: [_.intl.string(y ? _.t.fYtm6e : _.t.TeTYEx), (0, r.jsx)(a.gXV, {
                size: "xs",
                color: "var(--button-outline-primary-text)"
              })]
            })
          })]
        }), x && j ? (0, r.jsx)(h.Z, {
          isFullScreen: t,
          scrollerRef: n,
          tab: i
        }, i) : (0, m.RE)(i) ? (0, r.jsx)(b.Z, {
          isFullScreen: t,
          scrollerRef: n,
          tab: i
        }, i) : (0, r.jsx)(s.k0, {
          newValue: {
            pageIndex: S
          },
          children: (0, r.jsx)(d.Z, {
            isFullScreen: t,
            sortedCategories: O,
            setCategoryRef: v,
            currentPage: S,
            handlePageChange: E
          })
        })]
      }), y && (0, r.jsx)("aside", {
        className: C.filterBar,
        children: (0, r.jsx)(g.Z, {})
      })]
    })
  })
}