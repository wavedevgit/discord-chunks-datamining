/** Chunk was on 59275 **/
/** chunk id: 737630, original params: e,t,l (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => U
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
let G = e => {
    let {
      children: t,
      shouldAddEventListener: l,
      onClose: n
    } = e, s = (0, c.useHasAnyModalOpen)();
    return r.useEffect(() => {
      if (!l || s) return;
      let e = e => {
        e.key === B.N$.Escape && n()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [l, s, n]), t
  },
  U = function(e) {
    let {
      tab: t = D.G2.HOME
    } = e;
    (0, m.P)(g.a), (0, _.g)();
    let l = (0, f.A)((0, i.A)()),
      s = (0, o.bG)([h.default], () => h.default.getCurrentUser());
    (0, p.pE)();
    let c = (0, P.y)("CollectiblesShop"),
      {
        onClose: B
      } = (0, N.tR)(),
      {
        currentTab: U,
        hasFilters: F
      } = (0, j.v)(),
      z = r.useMemo(() => t === D.G2.HOME && U && F() ? U : t, [t, U, F]),
      {
        categories: V,
        refreshCategories: K
      } = (0, C.Ay)({
        logPerf: true
      }, {
        sessionId: l,
        tab: z
      }),
      W = (0, O.x)(V),
      [Y, q] = r.useState(),
      Z = (0, o.bG)([v.A], () => {
        var e;
        return null == (e = v.A.getCategory(Y)) ? true : e.name
      }),
      [X, J] = r.useState();
    (0, T.XU)();
    let Q = r.useCallback((e, t) => {
        J(e), q(t)
      }, []),
      {
        selectedTab: $,
        transitionState: ee,
        transitionToTab: et
      } = (0, y.o)(z);
    (0, x.uS)(l, $, Z, ee, X), (0, x.N0)($, s);
    let {
      dismissShopButtonDC: el
    } = (0, R.A)();
    r.useEffect(() => {
      el()
    }, [el]), r.useEffect(() => {
      (0, d.I)(w.BVt.COLLECTIBLES_SHOP)
    }, []);
    let en = r.useRef(null),
      er = r.useRef(null);
    (0, u.tjt)(en), r.useEffect(() => {
      var e;
      null == (e = er.current) || e.focus()
    }, []);
    let {
      analyticsLocations: es
    } = (0, x.lC)($), ea = (0, S.V)($, "collectibles_shop");
    return (0, n.jsx)(b.f5, {
      value: es,
      children: (0, n.jsx)(E.R9, {
        newValue: {
          sessionId: l,
          pageCategory: Z,
          pageSize: D.l5
        },
        children: (0, n.jsx)(A.iM, {
          tab: $,
          children: (0, n.jsx)(G, {
            onClose: B,
            shouldAddEventListener: false,
            children: (0, n.jsxs)("div", {
              className: a()(M.bx, {
                [H.T3]: c
              }),
              ref: er,
              tabIndex: false,
              children: [(0, n.jsx)(I.G, {
                handleTransition: et,
                selectedTab: $
              }), null != ea && ea.type === S.Z.COUNTDOWN && (0, n.jsx)(k.k, {
                message: ea.message,
                onClick: () => et(D.G2.HOME),
                variant: "pink",
                countdownEndDate: ea.countdownEndDate
              }), (0, n.jsx)("div", {
                className: a()(M.td, {
                  [M.RK]: ee === D.Pf.VISIBLE,
                  [M.in]: ee === D.Pf.IN,
                  [M.FD]: ee === D.Pf.OUT
                }),
                children: (0, n.jsx)(L.A, {
                  tab: $,
                  refreshCategories: K,
                  transitionToTab: et,
                  transitionState: ee,
                  sortedCategories: W,
                  updateAnalyticsState: Q
                })
              })]
            })
          })
        })
      })
    })
  }