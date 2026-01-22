/** Chunk was on 59275 **/
/** chunk id: 737630, original params: e,t,l (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => H
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk417597 = require("./417597.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk944791 = require("./944791.js"),
  Chunk444927 = require("./444927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk697454 = require("./697454.js"),
  Chunk611924 = require("./611924.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk161918 = require("./161918.jsx"),
  Chunk790297 = require("./790297.js"),
  Chunk841702 = require("./841702.js"),
  Chunk716633 = require("./716633.js"),
  Chunk621653 = require("./621653.js"),
  Chunk983545 = require("./983545.js"),
  Chunk365491 = require("./365491.js"),
  Chunk530971 = require("./530971.jsx"),
  Chunk177366 = require("./177366.js"),
  Chunk155486 = require("./155486.jsx"),
  Chunk278576 = require("./278576.js"),
  Chunk870308 = require("./870308.js"),
  Chunk938191 = require("./938191.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk157884 = require("./157884.js"),
  Chunk816917 = require("./816917.js");
let M = e => {
    let {
      children: t,
      shouldAddEventListener: l,
      onClose: n
    } = e, s = (0, c.useHasAnyModalOpen)();
    return r.useEffect(() => {
      if (!l || s) return;
      let e = e => {
        e.key === D.N$.Escape && n()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [l, s, n]), t
  },
  H = function(e) {
    let {
      tab: t = R.G2.HOME
    } = e;
    (0, p.P)(g.a), (0, O.g)();
    let l = (0, f.A)((0, i.A)()),
      s = (0, o.bG)([h.default], () => h.default.getCurrentUser());
    (0, m.pE)();
    let c = (0, k.y)("CollectiblesShop"),
      {
        onClose: D
      } = (0, I.tR)(),
      {
        currentTab: H,
        hasFilters: G
      } = (0, y.v)(),
      F = r.useMemo(() => t === R.G2.HOME && H && G() ? H : t, [t, H, G]),
      {
        categories: U,
        refreshCategories: z
      } = (0, S.Ay)({
        logPerf: true
      }, {
        sessionId: l,
        tab: F
      }),
      V = (0, C.x)(U),
      [K, W] = r.useState(),
      Y = (0, o.bG)([v.A], () => {
        var e;
        return null == (e = v.A.getCategory(K)) ? true : e.name
      }),
      [q, Z] = r.useState();
    (0, L.XU)();
    let X = r.useCallback((e, t) => {
        Z(e), W(t)
      }, []),
      {
        selectedTab: J,
        transitionState: Q,
        transitionToTab: $
      } = (0, _.o)(F);
    (0, x.uS)(l, J, Y, Q, q), (0, x.N0)(J, s);
    let {
      dismissShopButtonDC: ee
    } = (0, N.A)();
    r.useEffect(() => {
      ee()
    }, [ee]), r.useEffect(() => {
      (0, d.I)(P.BVt.COLLECTIBLES_SHOP)
    }, []);
    let et = r.useRef(null),
      el = r.useRef(null);
    (0, u.tjt)(et), r.useEffect(() => {
      var e;
      null == (e = el.current) || e.focus()
    }, []);
    let {
      analyticsLocations: en
    } = (0, x.lC)(J);
    return (0, n.jsx)(b.f5, {
      value: en,
      children: (0, n.jsx)(E.R9, {
        newValue: {
          sessionId: l,
          pageCategory: Y,
          pageSize: R.l5
        },
        children: (0, n.jsx)(A.iM, {
          tab: J,
          children: (0, n.jsx)(M, {
            onClose: D,
            shouldAddEventListener: false,
            children: (0, n.jsxs)("div", {
              className: a()(w.bx, {
                [B.T3]: c
              }),
              ref: el,
              tabIndex: false,
              children: [(0, n.jsx)(T.G, {
                handleTransition: $,
                selectedTab: J
              }), (0, n.jsx)("div", {
                className: a()(w.td, {
                  [w.RK]: Q === R.Pf.VISIBLE,
                  [w.in]: Q === R.Pf.IN,
                  [w.FD]: Q === R.Pf.OUT
                }),
                children: (0, n.jsx)(j.A, {
                  tab: J,
                  refreshCategories: z,
                  transitionToTab: $,
                  transitionState: Q,
                  sortedCategories: V,
                  updateAnalyticsState: X
                })
              })]
            })
          })
        })
      })
    })
  }