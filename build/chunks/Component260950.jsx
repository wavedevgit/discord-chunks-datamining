/** Chunk was on 88282 **/
/** chunk id: 260950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk711322 = require("./711322.js"),
  Chunk451429 = require("./451429.js");
let y = async () => (await Chunk544891.tn.get({
  url: Chunk981631.ANM.BILLING_SUBSCRIPTIONS,
  query: {
    include_inactive: true,
    limit: 5
  },
  rejectWithError: false
})).body.map(e => p.Z.createFromServer(e)), C = [{
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
}];

function S() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [n, r] = Chunk473749.useState("511651880837840896"),
    [p, v] = Chunk473749.useState([]),
    [S, E] = Chunk473749.useState(false),
    O = Chunk473749.useCallback(async () => {
      try {
        E(true), await (0, Chunk355467.jg)(), await (0, Chunk232567.In)(exports.id), Chunk474936(await y())
      } finally {
        E(false)
      }
    }, [exports]);
  Chunk473749.useEffect(() => {
    O()
  }, [O]);
  let N = Chunk473749.useMemo(() => Chunk255078.filter(e => e.status !== b.O0b.ACTIVE).sort((e, t) => e.id > t.id ? false : 1), [Chunk255078]),
    T = async () => {
      await Chunk544891.tn.post({
        url: "/debug/subscription",
        body: {
          plan_id: require
        },
        rejectWithError: false
      }), await O()
    }, P = async () => {
      await Chunk544891.tn.del({
        url: "/debug/subscription",
        rejectWithError: false
      }), await O()
    };
  return (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk711322.panelInner,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk711322.headerWrapper,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          className: Chunk451429.header,
          children: null != module ? "Active Subscription" : "Subscription Type"
        }), (0, Chunk54381.jsx)(Chunk481060.hU, {
          "aria-label": "Refresh",
          icon: Chunk481060.DuK,
          size: "sm",
          variant: "icon-only",
          disabled: S,
          onClick: O
        })]
      }), (0, Chunk54381.jsx)("section", {
        className: i()([Chunk711322.section, Chunk711322.buttons]),
        children: null == module && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(Chunk199849.B6, {
            serialize: e => e,
            isSelected: e => e === n,
            options: C,
            select: Chunk120356,
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: "Create Subscription",
            onClick: T
          })]
        })
      }), null != module && (0, Chunk54381.jsx)(Chunk759027.Z, {
        subscription: module,
        onUpdated: O
      }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        className: Chunk451429.header,
        children: "Bulk Actions"
      }), (0, Chunk54381.jsx)("section", {
        className: i()([Chunk711322.section, Chunk711322.buttons]),
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "End All Subscriptions",
          onClick: P
        })
      }), N.length > 0 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          className: Chunk451429.header,
          children: "Previous Subscriptions"
        }), N.map(e => (0, a.jsx)(g.Z, {
          subscription: e,
          onUpdated: O
        }, e.id))]
      })]
    })
  })
}