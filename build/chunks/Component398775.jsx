/** Chunk was on 26526 **/
/** chunk id: 398775, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumSubscriptionPauseModalSelect: () => S,
  Sz: () => C
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk99945 = require("./99945.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk355467 = require("./355467.js"),
  Chunk493773 = require("./493773.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk278900 = require("./278900.js");
async function y(t) {
  let {
    premiumSubscription: e,
    pauseDuration: n,
    onClose: a,
    setHasError: r,
    setIsCancelling: i,
    analyticsLocations: l,
    analyticsLocation: o
  } = t;
  try {
    i(true), r(false), await (0, u.Mg)(e, {
      pauseDuration: n
    }, {
      amount: 0,
      currency: e.currency
    }, (0, m.UX)(e.items, e.currency, e.paymentSourceId), l, o), a()
  } catch (t) {
    r(true), i(false)
  }
}

function S() {
  let {
    transitionState: t,
    onClose: e,
    setStep: n,
    setPauseDuration: i,
    pauseDuration: l,
    premiumSubscription: u
  } = (0, _.a)(), m = r.useCallback(t => {
    let {
      value: e
    } = t;
    i(e)
  }, [i]), y = u.status === E.O0b.PAUSED ? p.intl.string(p.t.Lp9WoG) : p.intl.string(p.t.eSR83U), S = function(t) {
    let e = t.status === E.O0b.PAUSED ? p.t.o3upfT : p.t.dBXZEm,
      {
        durations: n,
        currentDaysPaused: a
      } = (0, f.AT)(t),
      r = [];
    for (let t of n) {
      let n = o.T[t];
      r.push({
        name: p.intl.formatToPlainString(e, {
          days: n - a
        }),
        value: n,
        radioItemIconClassName: b.radioOption
      })
    }
    return r.sort((t, e) => t.value - e.value), r.push({
      name: p.intl.string(p.t.OCPUM6),
      value: 0,
      radioBarClassName: b.cancelText,
      radioItemIconClassName: b.cancelText
    }), r
  }(u);
  return (0, d.ZP)(() => {
    S.length < 1 || i(S[0].value)
  }), (0, a.jsx)(s.Modal, {
    transitionState: t,
    title: p.intl.string(p.t["f3nnB/"]),
    subtitle: y,
    onClose: async () => {
      await e()
    },
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t.h9tkAK),
      onClick: e
    }, {
      variant: "primary",
      disabled: null === l,
      text: p.intl.string(p.t["3PatSz"]),
      onClick: () => {
        0 === l ? n(O.R.WHAT_YOU_LOSE) : n(O.R.PAUSE_CONFIRM)
      }
    }],
    children: (0, a.jsx)(c.Gu, {
      "data-migration-pending": true,
      options: S,
      onChange: m,
      value: l
    })
  })
}

function C() {
  let {
    transitionState: t,
    onClose: e,
    pauseDuration: n,
    premiumSubscription: i,
    analyticsLocation: o,
    setStep: c,
    analyticsLocations: u
  } = (0, _.a)(), [d, m] = r.useState(false), [f, S] = r.useState(false);
  if (null == n) return void c(O.R.PAUSE_SELECT);
  let C = null,
    P = [E.O0b.PAST_DUE, E.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
    v = l()(P).add(n, "days").toDate();
  switch (i.status) {
    case E.O0b.PAST_DUE:
      C = p.intl.format(p.t["xaS18/"], {
        pauseDuration: n,
        resumeDate: v
      });
      break;
    case E.O0b.PAUSED:
      C = p.intl.format(p.t.Vur3Fc, {
        resumeDate: v
      });
      break;
    default:
      C = p.intl.format(p.t.W85vFA, {
        pauseDate: P,
        resumeDate: v,
        pauseDuration: n
      })
  }
  return (0, a.jsxs)(s.Modal, {
    title: p.intl.string(p.t.AnMG5x),
    transitionState: t,
    actions: [{
      text: p.intl.string(p.t.h9tkAK),
      variant: "primary",
      onClick: e
    }, {
      text: p.intl.string(p.t["cY+Oob"]),
      variant: "critical-primary",
      disabled: f || null == n,
      onClick: async () => {
        await y({
          premiumSubscription: i,
          pauseDuration: n,
          setIsCancelling: S,
          setHasError: m,
          onClose: e,
          analyticsLocations: u,
          analyticsLocation: o
        })
      }
    }],
    onClose: async () => {
      await e()
    },
    children: [d ? (0, a.jsx)("div", {
      className: b.errorBlock,
      children: (0, a.jsx)(s.M14, {
        type: "critical",
        children: p.intl.string(p.t["5mlOCW"])
      })
    }) : null, (0, a.jsx)("div", {
      className: b.body,
      children: C
    })]
  })
}