/** Chunk was on 26526 **/
/** chunk id: 398775, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  PremiumSubscriptionPauseModalSelect: () => C,
  Sz: () => P
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk99945 = require("./99945.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk493773 = require("./493773.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk278900 = require("./278900.js");
async function S(t) {
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
    i(true), r(false), await (0, d.Mg)(e, {
      pauseDuration: n
    }, {
      amount: 0,
      currency: e.currency
    }, (0, O.UX)(e.items, e.currency, e.paymentSourceId), l, o), a()
  } catch (t) {
    r(true), i(false)
  }
}

function C() {
  let {
    transitionState: t,
    onClose: e,
    setStep: n,
    setPauseDuration: i,
    pauseDuration: l,
    premiumSubscription: u
  } = (0, E.a)(), d = r.useCallback(t => {
    let {
      value: e
    } = t;
    i(e)
  }, [i]), O = u.status === p.O0b.PAUSED ? b.intl.string(b.t.Lp9WoG) : b.intl.string(b.t.eSR83U), S = function(t) {
    let e = t.status === p.O0b.PAUSED ? b.t.o3upfT : b.t.dBXZEm,
      {
        durations: n,
        currentDaysPaused: a
      } = (0, f.AT)(t),
      r = [];
    for (let t of n) {
      let n = o.T[t];
      r.push({
        name: b.intl.formatToPlainString(e, {
          days: n - a
        }),
        value: n,
        radioItemIconClassName: y.radioOption
      })
    }
    return r.sort((t, e) => t.value - e.value), r.push({
      name: b.intl.string(b.t.OCPUM6),
      value: 0,
      radioBarClassName: y.cancelText,
      radioItemIconClassName: y.cancelText
    }), r
  }(u);
  return (0, m.ZP)(() => {
    S.length < 1 || i(S[0].value)
  }), (0, a.jsx)(s.Modal, {
    transitionState: t,
    title: b.intl.string(b.t["f3nnB/"]),
    subtitle: O,
    onClose: async () => {
      await e()
    },
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t.h9tkAK),
      onClick: e
    }, {
      variant: "primary",
      disabled: null === l,
      text: b.intl.string(b.t["3PatSz"]),
      onClick: () => {
        0 === l ? n(_.R.WHAT_YOU_LOSE) : n(_.R.PAUSE_CONFIRM)
      }
    }],
    children: (0, a.jsx)(c.Gu, {
      options: S,
      onChange: d,
      value: l
    })
  })
}

function P() {
  let {
    transitionState: t,
    onClose: e,
    pauseDuration: n,
    premiumSubscription: i,
    analyticsLocation: o,
    setStep: c,
    analyticsLocations: d
  } = (0, E.a)(), [m, O] = r.useState(false), [f, C] = r.useState(false);
  if (null == n) return void c(_.R.PAUSE_SELECT);
  let P = null,
    T = [p.O0b.PAST_DUE, p.O0b.PAUSED].includes(i.status) ? i.currentPeriodStart : i.currentPeriodEnd,
    v = l()(T).add(n, "days").toDate();
  switch (i.status) {
    case p.O0b.PAST_DUE:
      P = b.intl.format(b.t["xaS18/"], {
        pauseDuration: n,
        resumeDate: v
      });
      break;
    case p.O0b.PAUSED:
      P = b.intl.format(b.t.Vur3Fc, {
        resumeDate: v
      });
      break;
    default:
      P = b.intl.format(b.t.W85vFA, {
        pauseDate: T,
        resumeDate: v,
        pauseDuration: n
      })
  }
  return (0, a.jsxs)(s.Modal, {
    title: b.intl.string(b.t.AnMG5x),
    transitionState: t,
    actions: [{
      text: b.intl.string(b.t.h9tkAK),
      variant: "primary",
      onClick: e
    }, {
      text: b.intl.string(b.t["cY+Oob"]),
      variant: "critical-primary",
      disabled: f || null == n,
      onClick: async () => {
        await S({
          premiumSubscription: i,
          pauseDuration: n,
          setIsCancelling: C,
          setHasError: O,
          onClose: e,
          analyticsLocations: d,
          analyticsLocation: o
        })
      }
    }],
    onClose: async () => {
      await e()
    },
    children: [m ? (0, a.jsx)(u.Wn, {
      messageType: u.QYI.ERROR,
      className: y.errorBlock,
      children: b.intl.string(b.t["5mlOCW"])
    }) : null, (0, a.jsx)("div", {
      className: y.body,
      children: P
    })]
  })
}