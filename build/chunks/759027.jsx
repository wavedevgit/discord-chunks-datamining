/** Chunk was on 93886 **/
/** chunk id: 759027, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk55935 = require("./55935.js"),
  Chunk709054 = require("./709054.js"),
  Chunk246992 = require("./246992.js"),
  Chunk923576 = require("./923576.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk546147 = require("./546147.js"),
  Chunk909291 = require("./909291.js");
let j = {
    [Chunk981631.O0b.UNPAID]: "Unpaid",
    [Chunk981631.O0b.ACTIVE]: "Active",
    [Chunk981631.O0b.PAST_DUE]: "Past Due",
    [Chunk981631.O0b.CANCELED]: "Canceled",
    [Chunk981631.O0b.ENDED]: "Ended",
    [Chunk981631.O0b.ACCOUNT_HOLD]: "Account Hold",
    [Chunk981631.O0b.BILLING_RETRY]: "Billing Retry",
    [Chunk981631.O0b.PAUSED]: "Paused",
    [Chunk981631.O0b.PAUSE_PENDING]: "Pause Pending"
  },
  g = {
    [Chunk362786.Id.UNKNOWN]: "Unknown",
    [Chunk362786.Id.ADMIN]: "Admin",
    [Chunk362786.Id.USER]: "User",
    [Chunk362786.Id.FRACTIONAL_PREMIUM]: "Fractional Premium",
    [Chunk362786.Id.DEFERRED_START]: "Deferred Start"
  },
  _ = [{
    label: "Unpaid",
    value: Chunk981631.O0b.UNPAID
  }, {
    label: "Active",
    value: Chunk981631.O0b.ACTIVE
  }, {
    label: "Past Due",
    value: Chunk981631.O0b.PAST_DUE
  }, {
    label: "Canceled",
    value: Chunk981631.O0b.CANCELED
  }, {
    label: "Ended",
    value: Chunk981631.O0b.ENDED
  }, {
    label: "Account Hold",
    value: Chunk981631.O0b.ACCOUNT_HOLD
  }, {
    label: "Billing Retry",
    value: Chunk981631.O0b.BILLING_RETRY
  }, {
    label: "Paused",
    value: Chunk981631.O0b.PAUSED
  }, {
    label: "Pause Pending",
    value: Chunk981631.O0b.PAUSE_PENDING
  }];

function y(e) {
  var t, a, l, p, y, C, N;
  let {
    subscription: O,
    onUpdated: T
  } = e, [E, S] = r.useState(false), [P, w] = r.useState(false), [I, k] = r.useState(false), [R, Z] = r.useState(false), [A, D] = r.useState(null), L = e => (null == e && (e = O.status), e in j) ? j[e] : "Unknown status ".concat(e), B = e => {
    let t = new Date(e);
    return u.default.fromTimestamp(t.getTime())
  }, M = async e => {
    let {
      status: t = O.status,
      premiumStreakStart: a,
      endedAt: n
    } = e, r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = a[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      subscription_status: t
    }, null != a ? {
      premium_streak_started_at: B(a)
    } : null, null != n ? {
      ended_at: B(n)
    } : null);
    await s.tn.patch({
      url: "/debug/subscriptions/".concat(O.id),
      body: r,
      rejectWithError: false
    }), T()
  }, F = async () => {
    try {
      await s.tn.post({
        url: "/debug/subscriptions/".concat(O.id, "/transition"),
        body: {
          target_datetime: new Date().toISOString(),
          payment_type: 0,
          transition: 2,
          send_reminder_email: false
        },
        rejectWithError: false
      })
    } catch (e) {
      D(e.body.message)
    }
    T()
  }, U = (null == (t = b.GP[O.planIdFromItems]) ? true : t.premiumType) === b.p9.TIER_0, z = null == (a = O.metadata) ? true : a.ended_at, G = null != z ? new Date(z).toISOString().substring(0, 10) : "", V = O.hasActiveTrial, H = (null == (l = O.metadata) ? true : l.active_discount_id) != null;
  return <div className={i()(f.card, U ? f.gradientWrapperTier0 : f.gradientWrapperTier2)}>{V && <o.P3F className={v.badge}><o.Text variant={"eyebrow"} color={"always-white"}>{"Has Trial"}</o.Text></o.P3F>}{H && <o.P3F className={v.badge}><o.Text variant={"eyebrow"} color={"always-white"}>{"Has Active Discount"}</o.Text></o.P3F>}{<div className={v.subscriptionTextContainer}>{<o.Text variant={"text-md/normal"}>{"Type: "}{(() => {
          let e = O.planIdFromItems;
          return null == e ? "No plan id" : e in b.GP ? b.GP[e].name : "Unknown plan id ".concat(e)
        })()}{" "}</o.Text>}{<o.Text variant={"text-md/normal"}>{"ID: "}{O.id}{" "}</o.Text>}{O.status !== h.O0b.ACTIVE && <o.Text variant={"text-md/normal"}>{"Dates: "}{(0, d.vc)(O.createdAt, "LL")}{" - "}{(0, d.vc)(O.currentPeriodEnd, "LL")}</o.Text>}{<o.Text variant={"text-md/normal"}>{"Status: "}{L()}</o.Text>}{O.status === h.O0b.PAUSED && <n.Fragment>{<o.Text variant={"text-md/normal"}>{"Pause Reason: "}{O.pauseReason in g ? g[O.pauseReason] : "Unknown pause reason ".concat(O.pauseReason)}</o.Text>}{null != O.pauseEndsAt && <o.Text variant={"text-md/normal"}>{"Pause Ends At: "}{(0, d.vc)(O.pauseEndsAt, "LL")}</o.Text>}</n.Fragment>}</div>}{V && <div className={v.collapsablePane}>{<o.P3F onClick={() => {
          k(!I)
        }} className={v.collapsablePaneHeader}>{<div><o.Text variant={"text-md/bold"}>{"Trial Info"}</o.Text></div>}{<c.Z direction={I ? c.Z.Directions.UP : c.Z.Directions.DOWN} />}</o.P3F>}{I && <ul className={v.collapsiblePaneList}>{<li>{<o.Text variant={"text-md/bold"}>{"trial_id"}</o.Text>}{<o.Text variant={"text-sm/normal"}>{O.trialId}</o.Text>}</li>}{<li>{<o.Text variant={"text-md/bold"}>{"trial_ends_at"}</o.Text>}{<o.Text variant={"text-sm/normal"}>{null != O.trialEndsAt ? (0, d.vc)(O.trialEndsAt, "LL") : "N/A"}</o.Text>}</li>}</ul>}</div>}{H && <div className={v.collapsablePane}>{<o.P3F onClick={() => {
          Z(!R)
        }} className={v.collapsablePaneHeader}>{<div><o.Text variant={"text-md/bold"}>{"Active Discount Info"}</o.Text></div>}{<c.Z direction={R ? c.Z.Directions.UP : c.Z.Directions.DOWN} />}</o.P3F>}{R && <ul className={v.collapsiblePaneList}>{<li>{<o.Text variant={"text-md/bold"}>{"active_discount_id"}</o.Text>}{<o.Text variant={"text-sm/normal"}>{null == (p = O.metadata) ? true : p.active_discount_id}</o.Text>}</li>}{<li>{<o.Text variant={"text-md/bold"}>{"active_discount_expires_at"}</o.Text>}{<o.Text variant={"text-sm/normal"}>{(null == (y = O.metadata) ? true : y.active_discount_expires_at) != null ? (0, d.vc)(new Date(null == (C = O.metadata) ? true : C.active_discount_expires_at), "LL") : "N/A"}</o.Text>}</li>}</ul>}</div>}{null != O.metadata && <div className={v.collapsablePane}>{<o.P3F onClick={() => {
          S(!E)
        }} className={v.collapsablePaneHeader}>{<div><o.Text variant={"text-md/bold"}>{"Metadata"}</o.Text></div>}{<c.Z direction={E ? c.Z.Directions.UP : c.Z.Directions.DOWN} />}</o.P3F>}{E && <ul className={v.collapsiblePaneList}>{Object.entries(O.metadata).map(e => {
          let [t, a] = e;
          return (0, n.jsxs)("li", {
            children: [(0, n.jsx)(o.Text, {
              variant: "text-md/bold",
              children: t
            }), (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: a
            })]
          }, t)
        })}</ul>}</div>}{<div className={v.collapsablePane}>{<o.P3F onClick={() => {
          w(!P)
        }} className={v.collapsablePaneHeader}>{<div><o.Text variant={"text-md/bold"}>{"Modifications"}</o.Text></div>}{<c.Z direction={P ? c.Z.Directions.UP : c.Z.Directions.DOWN} />}</o.P3F>}{P && <n.Fragment>{<o.hjN title={"Status"} tag={o.RB0.H3} className={v.formSection}><o.PhF serialize={e => L(e)} isSelected={e => e === O.status} options={_} select={e => M({
              status: e
            })} popoutLayerContext={m.O$} /></o.hjN>}{<o.hjN title={"Renew"} tag={o.RB0.H3} className={v.formSection}>{<o.zxk variant={"primary"} size={"sm"} text={"Renew Subscription"} onClick={e => F()} />}{null !== A && <o.kzN className={v.error} onDismiss={() => D(null)}>{A}</o.kzN>}</o.hjN>}{<o.hjN title={"Premium Streak Start Date"} tag={o.RB0.H3} className={v.formSection}>{<input type={"date"} value={null == (N = O.premiumSince) ? true : N.toISOString().substring(0, 10)} onChange={e => M({
              premiumStreakStart: e.target.value
            })} style={{
              marginBottom: "8px"
            }} />}{<x.Z />}</o.hjN>}{<o.hjN title={"Metadata Ended At Date"} tag={o.RB0.H3} className={v.formSection}><input type={"date"} value={G} onChange={e => M({
              endedAt: e.target.value
            })} /></o.hjN>}</n.Fragment>}</div>}</div>
}