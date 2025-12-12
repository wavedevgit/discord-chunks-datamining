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
  Chunk353680 = require("./353680.js");
async function b(t) {
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
    }, (0, m.UX)(e.items, e.currency, e.paymentSourceId), l, o), a()
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
  } = (0, Chunk594135.a)(), d = Chunk473749.useCallback(t => {
    let {
      value: e
    } = t;
    i(e)
  }, [Chunk913527]), m = Chunk481060.status === Chunk981631.O0b.PAUSED ? Chunk388032.intl.string(Chunk388032.t.Lp9WoG) : Chunk388032.intl.string(Chunk388032.t.eSR83U), b = function(t) {
    let e = t.status === p.O0b.PAUSED ? y.t.o3upfT : y.t.dBXZEm,
      {
        durations: n,
        currentDaysPaused: a
      } = (0, O.AT)(t),
      r = [];
    for (let t of n) {
      let n = o.T[t];
      r.push({
        name: y.intl.formatToPlainString(e, {
          days: n - a
        }),
        value: n,
        radioItemIconClassName: S.radioOption
      })
    }
    return r.sort((t, e) => t.value - e.value), r.push({
      name: y.intl.string(y.t.OCPUM6),
      value: 0,
      radioBarClassName: S.cancelText,
      radioItemIconClassName: S.cancelText
    }), r
  }(Chunk481060);
  return (0, Chunk493773.ZP)(() => {
    b.length < 1 || Chunk913527(b[0].value)
  }), (0, Chunk54381.jsx)(Chunk793030.Modal, {
    transitionState: module,
    title: Chunk388032.intl.string(Chunk388032.t["f3nnB/"]),
    subtitle: Chunk74538,
    onClose: async () => {
      await exports()
    },
    actions: [{
      variant: "secondary",
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      onClick: exports
    }, {
      variant: "primary",
      disabled: null === l,
      text: Chunk388032.intl.string(Chunk388032.t["3PatSz"]),
      onClick: () => {
        0 === l ? require(Chunk45474.R.WHAT_YOU_LOSE) : require(Chunk45474.R.PAUSE_CONFIRM)
      }
    }],
    children: (0, Chunk54381.jsx)(Chunk755721.Gu, {
      options: b,
      onChange: Chunk355467,
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
  } = (0, Chunk594135.a)(), [_, m] = Chunk473749.useState(false), [O, C] = Chunk473749.useState(false);
  if (null == require) return void Chunk755721(Chunk45474.R.PAUSE_SELECT);
  let P = null,
    T = [Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.PAUSED].includes(Chunk913527.status) ? Chunk913527.currentPeriodStart : Chunk913527.currentPeriodEnd,
    v = l()(T).add(require, "days").toDate();
  switch (Chunk913527.status) {
    case Chunk981631.O0b.PAST_DUE:
      P = Chunk388032.intl.format(Chunk388032.t["xaS18/"], {
        pauseDuration: require,
        resumeDate: v
      });
      break;
    case Chunk981631.O0b.PAUSED:
      P = Chunk388032.intl.format(Chunk388032.t.Vur3Fc, {
        resumeDate: v
      });
      break;
    default:
      P = Chunk388032.intl.format(Chunk388032.t.W85vFA, {
        pauseDate: T,
        resumeDate: v,
        pauseDuration: require
      })
  }
  return (0, Chunk54381.jsxs)(Chunk793030.Modal, {
    title: Chunk388032.intl.string(Chunk388032.t.AnMG5x),
    transitionState: module,
    actions: [{
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      variant: "primary",
      onClick: exports
    }, {
      text: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
      variant: "critical-primary",
      disabled: Chunk296848 || null == require,
      onClick: async () => {
        await b({
          premiumSubscription: Chunk913527,
          pauseDuration: require,
          setIsCancelling: C,
          setHasError: Chunk74538,
          onClose: exports,
          analyticsLocations: Chunk355467,
          analyticsLocation: Chunk99945
        })
      }
    }],
    onClose: async () => {
      await exports()
    },
    children: [Chunk493773 ? (0, Chunk54381.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.ERROR,
      className: Chunk353680.errorBlock,
      children: Chunk388032.intl.string(Chunk388032.t["5mlOCW"])
    }) : null, (0, Chunk54381.jsx)("div", {
      className: Chunk353680.body,
      children: P
    })]
  })
}