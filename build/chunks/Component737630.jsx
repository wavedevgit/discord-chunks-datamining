/** Chunk was on 59275 **/
/** chunk id: 737630, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => F
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
  Chunk545746 = require("./545746.js"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk161918 = require("./161918.jsx"),
  Chunk790297 = require("./790297.js"),
  Chunk338769 = require("./338769.js"),
  Chunk841702 = require("./841702.js"),
  Chunk716633 = require("./716633.js"),
  Chunk621653 = require("./621653.js"),
  Chunk983545 = require("./983545.js"),
  Chunk365491 = require("./365491.js"),
  Chunk530971 = require("./530971.jsx"),
  Chunk177366 = require("./177366.js"),
  Chunk155486 = require("./155486.jsx"),
  Chunk278576 = require("./278576.js"),
  Chunk120286 = require("./120286.jsx"),
  Chunk870308 = require("./870308.js"),
  Chunk938191 = require("./938191.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk157884 = require("./157884.js"),
  Chunk816917 = require("./816917.js");
let U = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, s = (0, c.useHasAnyModalOpen)();
    return l.useEffect(() => {
      if (!n || s) return;
      let e = e => {
        e.key === M.N$.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, s, r]), t
  },
  F = function(e) {
    let {
      tab: t = w.G2.HOME
    } = e;
    (0, p.P)(m.a), (0, y.g)();
    let n = (0, g.A)((0, i.A)()),
      s = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    (0, b.pE)();
    let c = (0, B.y)("CollectiblesShop"),
      {
        onClose: M
      } = (0, N.tR)(),
      {
        currentTab: F,
        hasFilters: V
      } = (0, L.v)(),
      z = l.useMemo(() => t === w.G2.HOME && F && V() ? F : t, [t, F, V]),
      {
        categories: K,
        refreshCategories: W
      } = (0, x.Ay)({
        logPerf: true
      }, {
        sessionId: n,
        tab: z
      }),
      Y = (0, O.x)(K),
      [q, Z] = l.useState(),
      X = (0, o.bG)([v.A], () => {
        var e;
        return null == (e = v.A.getCategory(q)) ? true : e.name
      }),
      [J, Q] = l.useState();
    (0, I.XU)();
    let $ = l.useCallback((e, t) => {
        Q(e), Z(t)
      }, []),
      {
        selectedTab: ee,
        transitionState: et,
        transitionToTab: en
      } = (0, j.o)(z);
    (0, A.uS)(n, ee, X, et, J), (0, A.N0)(ee, s);
    let {
      dismissShopButtonDC: er
    } = (0, P.A)();
    l.useEffect(() => {
      er()
    }, [er]), l.useEffect(() => {
      (0, d.I)(D.BVt.COLLECTIBLES_SHOP)
    }, []), (0, h.A)({
      ignoreCacheTTL: true
    });
    let el = l.useRef(null),
      es = l.useRef(null);
    (0, u.tjt)(el), l.useEffect(() => {
      var e;
      null == (e = es.current) || e.focus()
    }, []);
    let {
      analyticsLocations: ea
    } = (0, A.lC)(ee), ei = (0, S.V)(ee, "collectibles_shop");
    return (0, r.jsx)(f.f5, {
      value: ea,
      children: (0, r.jsx)(E.R9, {
        newValue: {
          sessionId: n,
          pageCategory: X,
          pageSize: w.l5
        },
        children: (0, r.jsx)(C.iM, {
          tab: ee,
          children: (0, r.jsx)(U, {
            onClose: M,
            shouldAddEventListener: false,
            children: (0, r.jsxs)("div", {
              className: a()(H.bx, {
                [G.T3]: c
              }),
              ref: es,
              tabIndex: false,
              children: [(0, r.jsx)(k.G, {
                handleTransition: en,
                selectedTab: ee
              }), null != ei && ei.type === S.Z.COUNTDOWN && (0, r.jsx)(R.k, {
                message: ei.message,
                onClick: () => en(w.G2.HOME),
                variant: "pink",
                countdownEndDate: ei.countdownEndDate
              }), (0, r.jsx)("div", {
                className: a()(H.td, {
                  [H.RK]: et === w.Pf.VISIBLE,
                  [H.in]: et === w.Pf.IN,
                  [H.FD]: et === w.Pf.OUT
                }),
                children: (0, r.jsx)(T.A, {
                  tab: ee,
                  refreshCategories: W,
                  transitionToTab: en,
                  transitionState: et,
                  sortedCategories: Y,
                  updateAnalyticsState: $
                })
              })]
            })
          })
        })
      })
    })
  }