/** Chunk was on 59275 **/
/** chunk id: 737630, original params: e,t,n (module,exports,require) **/
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
  Chunk157884 = require("./157884.js");
let G = e => {
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
  U = function(e) {
    let {
      tab: t = w.G2.HOME
    } = e;
    (0, f.P)(m.a), (0, y.g)();
    let n = (0, g.A)((0, i.A)()),
      s = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    (0, h.pE)();
    let c = (0, B.yB)("CollectiblesShop"),
      {
        onClose: M
      } = (0, N.tR)(),
      {
        currentTab: U,
        hasFilters: F
      } = (0, L.v)(),
      V = l.useMemo(() => t === w.G2.HOME && U && F() ? U : t, [t, U, F]),
      {
        categories: z,
        refreshCategories: K
      } = (0, S.Ay)({
        logPerf: true
      }, {
        sessionId: n,
        tab: V
      }),
      W = (0, O.x)(z),
      [Y, q] = l.useState(),
      Z = (0, o.bG)([v.A], () => {
        var e;
        return null == (e = v.A.getCategory(Y)) ? true : e.name
      }),
      [X, J] = l.useState();
    (0, I.XU)();
    let Q = l.useCallback((e, t) => {
        J(e), q(t)
      }, []),
      {
        selectedTab: $,
        transitionState: ee,
        transitionToTab: et
      } = (0, j.o)(V);
    (0, A.uS)(n, $, Z, ee, X), (0, A.N0)($, s);
    let {
      dismissShopButtonDC: en
    } = (0, P.A)();
    l.useEffect(() => {
      en()
    }, [en]), l.useEffect(() => {
      (0, d.I)(D.BVt.COLLECTIBLES_SHOP)
    }, []), (0, b.A)({
      ignoreCacheTTL: true
    });
    let er = l.useRef(null),
      el = l.useRef(null);
    (0, u.tjt)(er), l.useEffect(() => {
      var e;
      null == (e = el.current) || e.focus()
    }, []), (0, B.gB)();
    let {
      analyticsLocations: es
    } = (0, A.lC)($), ea = (0, x.V)($, "collectibles_shop");
    return (0, r.jsx)(p.f5, {
      value: es,
      children: (0, r.jsx)(E.R9, {
        newValue: {
          sessionId: n,
          pageCategory: Z,
          pageSize: w.l5
        },
        children: (0, r.jsx)(C.iM, {
          tab: $,
          children: (0, r.jsx)(G, {
            onClose: M,
            shouldAddEventListener: false,
            children: (0, r.jsxs)("div", {
              className: a()(H.bx, {
                [B.jP]: c
              }),
              ref: el,
              tabIndex: false,
              children: [(0, r.jsx)(k.G, {
                handleTransition: et,
                selectedTab: $
              }), null != ea && ea.type === x.Z.COUNTDOWN && (0, r.jsx)(R.k, {
                message: ea.message,
                onClick: () => et(w.G2.HOME),
                variant: "pink",
                countdownEndDate: ea.countdownEndDate
              }), (0, r.jsx)("div", {
                className: a()(H.td, {
                  [H.RK]: ee === w.Pf.VISIBLE,
                  [H.in]: ee === w.Pf.IN,
                  [H.FD]: ee === w.Pf.OUT
                }),
                children: (0, r.jsx)(T.A, {
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