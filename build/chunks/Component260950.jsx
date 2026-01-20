/** Chunk was on 22979 **/
/** chunk id: 260950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk232567 = require("./232567.js"),
  Chunk255078 = require("./255078.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk759027 = require("./759027.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk68428 = require("./68428.js"),
  Chunk663618 = require("./663618.js");
let j = async () => (await o.tn.get({
  url: b.ANM.BILLING_SUBSCRIPTIONS,
  query: {
    include_inactive: true,
    limit: 5
  },
  rejectWithError: false
})).body.map(e => m.Z.createFromServer(e)), y = [{
  id: "nitro-monthly",
  label: "Nitro Monthly",
  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2
}, {
  id: "nitro-yearly",
  label: "Nitro Yearly",
  value: Chunk474936.Xh.PREMIUM_YEAR_TIER_2
}, {
  id: "nitro-classic-monthly",
  label: "Nitro Classic Monthly",
  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1
}, {
  id: "nitro-classic-yearly",
  label: "Nitro Classic Yearly",
  value: Chunk474936.Xh.PREMIUM_YEAR_TIER_1
}, {
  id: "basic-monthly",
  label: "Basic Monthly",
  value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0
}, {
  id: "basic-yearly",
  label: "Basic Yearly",
  value: Chunk474936.Xh.PREMIUM_YEAR_TIER_0
}, {
  id: "reverse-trial-1week",
  label: "Reverse Trial 1-week",
  value: Chunk474936.dO
}, {
  id: "reverse-trial-2week",
  label: "Reverse Trial 2-week",
  value: Chunk474936.xT
}, {
  id: "nitro-squad-monthly",
  label: "Nitro Squad Monthly",
  value: Chunk474936.Xh.PREMIUM_GROUP_MONTH
}];

function C() {
  let e = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()),
    t = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
    [n, i] = r.useState("511651880837840896"),
    [m, x] = r.useState([]),
    [C, _] = r.useState(false),
    S = r.useCallback(async () => {
      try {
        _(true), await (0, d.jg)(), await (0, u.In)(t.id), x(await j())
      } finally {
        _(false)
      }
    }, [t]);
  r.useEffect(() => {
    S()
  }, [S]);
  let E = r.useMemo(() => m.filter(e => e.status !== b.O0b.ACTIVE).sort((e, t) => e.id > t.id ? false : 1), [m]),
    T = async () => {
      await o.tn.post({
        url: "/debug/subscription",
        body: {
          plan_id: n
        },
        rejectWithError: false
      }), await S()
    }, O = async () => {
      await o.tn.del({
        url: "/debug/subscription",
        rejectWithError: false
      }), await S()
    };
  return (0, a.jsx)(c.zJl, {
    className: v.panel,
    children: (0, a.jsxs)("div", {
      className: g.panelInner,
      children: [(0, a.jsxs)("div", {
        className: g.headerWrapper,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: null != e ? "Active Subscription" : "Subscription Type"
        }), (0, a.jsx)(c.hU, {
          "aria-label": "Refresh",
          icon: c.DuK,
          size: "sm",
          variant: "icon-only",
          disabled: C,
          onClick: S
        })]
      }), (0, a.jsx)("section", {
        className: l()([g.section, g.buttons]),
        children: null == e && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.PhF, {
            label: "Premium Plan",
            hideLabel: true,
            value: n,
            options: y,
            onSelectionChange: i,
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: "Create Subscription",
            onClick: T
          })]
        })
      }), null != e && (0, a.jsx)(f.Z, {
        subscription: e,
        onUpdated: S
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        className: v.header,
        children: "Bulk Actions"
      }), (0, a.jsx)("section", {
        className: l()([g.section, g.buttons]),
        children: (0, a.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: "End All Subscriptions",
          onClick: O
        })
      }), E.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: v.header,
          children: "Previous Subscriptions"
        }), E.map(e => (0, a.jsx)(f.Z, {
          subscription: e,
          onUpdated: S
        }, e.id))]
      })]
    })
  })
}