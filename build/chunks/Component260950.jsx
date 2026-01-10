/** Chunk was on 84249 **/
/** chunk id: 260950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk232567 = require("./232567.js"),
  Chunk255078 = require("./255078.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk246992 = require("./246992.js"),
  Chunk759027 = require("./759027.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk68428 = require("./68428.js"),
  Chunk663618 = require("./663618.js");
let C = async () => (await o.tn.get({
  url: g.ANM.BILLING_SUBSCRIPTIONS,
  query: {
    include_inactive: true,
    limit: 5
  },
  rejectWithError: false
})).body.map(e => p.Z.createFromServer(e)), _ = [{
  label: "Nitro Monthly",
  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2
}, {
  label: "Nitro Yearly",
  value: Chunk474936.Xh.PREMIUM_YEAR_TIER_2
}, {
  label: "Nitro Classic Monthly",
  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1
}, {
  label: "Nitro Classic Yearly",
  value: Chunk474936.Xh.PREMIUM_YEAR_TIER_1
}, {
  label: "Basic Monthly",
  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0
}, {
  label: "Basic Yearly",
  value: Chunk474936.Xh.PREMIUM_YEAR_TIER_0
}, {
  label: "Reverse Trial 1-week",
  value: Chunk474936.dO
}, {
  label: "Reverse Trial 2-week",
  value: Chunk474936.xT
}, {
  label: "Nitro Squad Monthly",
  value: Chunk474936.Xh.PREMIUM_GROUP_MONTH
}];

function S() {
  let e = (0, s.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()),
    t = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
    [n, i] = r.useState("511651880837840896"),
    [p, v] = r.useState([]),
    [S, E] = r.useState(false),
    T = r.useCallback(async () => {
      try {
        E(true), await (0, u.jg)(), await (0, m.In)(t.id), v(await C())
      } finally {
        E(false)
      }
    }, [t]);
  r.useEffect(() => {
    T()
  }, [T]);
  let O = r.useMemo(() => p.filter(e => e.status !== g.O0b.ACTIVE).sort((e, t) => e.id > t.id ? false : 1), [p]),
    N = async () => {
      await o.tn.post({
        url: "/debug/subscription",
        body: {
          plan_id: n
        },
        rejectWithError: false
      }), await T()
    }, P = async () => {
      await o.tn.del({
        url: "/debug/subscription",
        rejectWithError: false
      }), await T()
    };
  return (0, a.jsx)(d.zJl, {
    className: y.panel,
    children: (0, a.jsxs)("div", {
      className: j.panelInner,
      children: [(0, a.jsxs)("div", {
        className: j.headerWrapper,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: y.header,
          children: null != e ? "Active Subscription" : "Subscription Type"
        }), (0, a.jsx)(d.hU, {
          "aria-label": "Refresh",
          icon: d.DuK,
          size: "sm",
          variant: "icon-only",
          disabled: S,
          onClick: T
        })]
      }), (0, a.jsx)("section", {
        className: l()([j.section, j.buttons]),
        children: null == e && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.B6, {
            serialize: e => e,
            isSelected: e => e === n,
            options: _,
            select: i,
            popoutLayerContext: x.O$
          }), (0, a.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: "Create Subscription",
            onClick: N
          })]
        })
      }), null != e && (0, a.jsx)(b.Z, {
        subscription: e,
        onUpdated: T
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        className: y.header,
        children: "Bulk Actions"
      }), (0, a.jsx)("section", {
        className: l()([j.section, j.buttons]),
        children: (0, a.jsx)(d.Button, {
          variant: "primary",
          size: "sm",
          text: "End All Subscriptions",
          onClick: P
        })
      }), O.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          className: y.header,
          children: "Previous Subscriptions"
        }), O.map(e => (0, a.jsx)(b.Z, {
          subscription: e,
          onUpdated: T
        }, e.id))]
      })]
    })
  })
}