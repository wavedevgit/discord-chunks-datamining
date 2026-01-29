/** Chunk was on 87557 **/
/** chunk id: 263758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk803306 = require("./803306.js"),
  Chunk272207 = require("./272207.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk556499 = require("./556499.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk815907 = require("./815907.js"),
  Chunk661251 = require("./661251.js");
let j = async () => (await o.Bo.get({
  url: g.Rsh.BILLING_SUBSCRIPTIONS,
  query: {
    include_inactive: true,
    limit: 5
  },
  rejectWithError: false
})).body.map(e => m.A.createFromServer(e)), _ = [{
  id: "nitro-monthly",
  label: "Nitro Monthly",
  value: Chunk788868.gD.PREMIUM_MONTH_TIER_2
}, {
  id: "nitro-yearly",
  label: "Nitro Yearly",
  value: Chunk788868.gD.PREMIUM_YEAR_TIER_2
}, {
  id: "nitro-classic-monthly",
  label: "Nitro Classic Monthly",
  value: Chunk788868.gD.PREMIUM_MONTH_TIER_1
}, {
  id: "nitro-classic-yearly",
  label: "Nitro Classic Yearly",
  value: Chunk788868.gD.PREMIUM_YEAR_TIER_1
}, {
  id: "basic-monthly",
  label: "Basic Monthly",
  value: Chunk788868.gD.PREMIUM_MONTH_TIER_0
}, {
  id: "basic-yearly",
  label: "Basic Yearly",
  value: Chunk788868.gD.PREMIUM_YEAR_TIER_0
}, {
  id: "reverse-trial-1week",
  label: "Reverse Trial 1-week",
  value: Chunk788868.gd
}, {
  id: "reverse-trial-2week",
  label: "Reverse Trial 2-week",
  value: Chunk788868.Uk
}, {
  id: "nitro-squad-monthly",
  label: "Nitro Squad Monthly",
  value: Chunk788868.gD.PREMIUM_GROUP_MONTH
}];

function y() {
  let e = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
    t = (0, s.bG)([p.default], () => p.default.getCurrentUser()),
    [n, r] = l.useState("511651880837840896"),
    [m, f] = l.useState([]),
    [y, A] = l.useState(false),
    C = l.useCallback(async () => {
      try {
        A(true), await (0, d.hP)(), await (0, u.eO)(t.id), f(await j())
      } finally {
        A(false)
      }
    }, [t]);
  l.useEffect(() => {
    C()
  }, [C]);
  let S = l.useMemo(() => m.filter(e => e.status !== g.Dmq.ACTIVE).sort((e, t) => e.id > t.id ? false : 1), [m]),
    O = async () => {
      await o.Bo.post({
        url: "/debug/subscription",
        body: {
          plan_id: n
        },
        rejectWithError: false
      }), await C()
    }, T = async () => {
      await o.Bo.del({
        url: "/debug/subscription",
        rejectWithError: false
      }), await C()
    };
  return (0, a.jsx)(c.IpV, {
    className: v.nd,
    children: (0, a.jsxs)("div", {
      className: b.l$,
      children: [(0, a.jsxs)("div", {
        className: b.dL,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: v.wx,
          children: null != e ? "Active Subscription" : "Subscription Type"
        }), (0, a.jsx)(c.K0, {
          "aria-label": "Refresh",
          icon: c.fNY,
          size: "sm",
          variant: "icon-only",
          disabled: y,
          onClick: C
        })]
      }), (0, a.jsx)("section", {
        className: i()([b.uW, b.Uo]),
        children: null == e && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(c.l6P, {
            label: "Premium Plan",
            hideLabel: true,
            value: n,
            options: _,
            onSelectionChange: r,
            selectionMode: "single",
            fullWidth: true
          }), (0, a.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: "Create Subscription",
            onClick: O
          })]
        })
      }), null != e && (0, a.jsx)(x.A, {
        subscription: e,
        onUpdated: C
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        className: v.wx,
        children: "Bulk Actions"
      }), (0, a.jsx)("section", {
        className: i()([b.uW, b.Uo]),
        children: (0, a.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: "End All Subscriptions",
          onClick: T
        })
      }), S.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: v.wx,
          children: "Previous Subscriptions"
        }), S.map(e => (0, a.jsx)(x.A, {
          subscription: e,
          onUpdated: C
        }, e.id))]
      })]
    })
  })
}