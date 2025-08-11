/** Chunk was on 93886 **/
/** chunk id: 260950, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk232567 = require("./232567.js"),
  Chunk255078 = require("./255078.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk246992 = require("./246992.js"),
  Chunk759027 = require("./759027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk546147 = require("./546147.js"),
  Chunk616257 = require("./616257.js");
let y = async () => (await Chunk544891.tn.get({
  url: Chunk981631.ANM.BILLING_SUBSCRIPTIONS,
  query: {
    include_inactive: true,
    limit: 5
  },
  rejectWithError: false
})).body.map(e => x.Z.createFromServer(e)), C = [{
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

function N() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [a, l] = Chunk73800.useState("511651880837840896"),
    [x, j] = Chunk73800.useState([]),
    [N, O] = Chunk73800.useState(false),
    T = Chunk73800.useCallback(async () => {
      try {
        O(true), await (0, Chunk355467.jg)(), await (0, Chunk232567.In)(exports.id), Chunk474936(await y())
      } finally {
        O(false)
      }
    }, [exports]);
  Chunk73800.useEffect(() => {
    T()
  }, [T]);
  let E = Chunk73800.useMemo(() => Chunk255078.filter(e => e.status !== v.O0b.ACTIVE).sort((e, t) => e.id > t.id ? false : 1), [Chunk255078]),
    S = async () => {
      await Chunk544891.tn.post({
        url: "/debug/subscription",
        body: {
          plan_id: require
        },
        rejectWithError: false
      }), await T()
    }, P = async () => {
      await Chunk544891.tn.del({
        url: "/debug/subscription",
        rejectWithError: false
      }), await T()
    };
  return <Chunk481060.zJl className={Chunk616257.panel}><div className={Chunk546147.panelInner}>{<div className={Chunk546147.headerWrapper}>{<Chunk481060.X6q variant={"heading-lg/semibold"} className={Chunk616257.header}>{null != module ? "Active Subscription" : "Subscription Type"}</Chunk481060.X6q>}{<Chunk755721.zx disabled={N} look={Chunk755721.zx.Looks.BLANK} size={Chunk755721.zx.Sizes.ICON} onClick={T}><span title={"Refresh"}><Chunk481060.DuK size={"xs"} color={"currentColor"} /></span></Chunk755721.zx>}</div>}{<section className={i()([Chunk546147.section, Chunk546147.buttons])}>{null == module && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [(0, Chunk255367.jsx)(Chunk481060.PhF, {
            serialize: e => e,
            isSelected: e => e === a,
            options: C,
            select: Chunk120356,
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Create Subscription",
            onClick: S
          })]
        })}</section>}{null != module && <Chunk759027.Z subscription={module} onUpdated={T} />}{<Chunk481060.X6q variant={"heading-lg/semibold"} className={Chunk616257.header}>{"Bulk Actions"}</Chunk481060.X6q>}{<section className={i()([Chunk546147.section, Chunk546147.buttons])}><Chunk481060.zxk variant={"primary"} size={"sm"} text={"End All Subscriptions"} onClick={P} /></section>}{E.length > 0 && <Chunk255367.Fragment>{<Chunk481060.X6q variant={"heading-lg/semibold"} className={Chunk616257.header}>{"Previous Subscriptions"}</Chunk481060.X6q>}{E.map(e => <f.Z subscription={e} onUpdated={T} />)}</Chunk255367.Fragment>}</div></Chunk481060.zJl>
}