/** Chunk was on 80347 **/
/** chunk id: 318998, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  PremiumSubscriptionPauseModalSelect: () => y,
  cN: () => v
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk539267 = require("./539267.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk384904 = require("./384904.js"),
  Chunk964486 = require("./964486.js"),
  Chunk927578 = require("./927578.js"),
  Chunk615396 = require("./615396.js"),
  Chunk473702 = require("./473702.js"),
  Chunk916974 = require("./916974.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk970032 = require("./970032.js");
async function g(t) {
  let {
    premiumSubscription: a,
    pauseDuration: e,
    onClose: n,
    setHasError: i,
    setIsCancelling: r,
    analyticsLocations: s,
    analyticsLocation: l
  } = t;
  try {
    r(true), i(false), await (0, o.nV)(a, {
      pauseDuration: e
    }, {
      amount: 0,
      currency: a.currency
    }, (0, m.UC)(a.items, a.currency, a.paymentSourceId), s, l), n()
  } catch (t) {
    i(true), r(false)
  }
}

function y() {
  let {
    transitionState: t,
    onClose: a,
    setStep: e,
    setPauseDuration: r,
    pauseDuration: s,
    premiumSubscription: o
  } = (0, f.X)(), m = i.useCallback(t => {
    let {
      value: a
    } = t;
    r(a)
  }, [r]), g = o.status === C.Dmq.PAUSED ? h.intl.string(h.t.Lp9WoG) : h.intl.string(h.t.eSR83U), y = function(t) {
    let a = t.status === C.Dmq.PAUSED ? h.t.o3upfT : h.t.dBXZEm,
      {
        durations: e,
        currentDaysPaused: n
      } = (0, p.Vy)(t),
      i = [];
    for (let t of e) {
      let e = l.V[t];
      i.push({
        name: h.intl.formatToPlainString(a, {
          days: e - n
        }),
        value: e,
        radioItemIconClassName: D.hO
      })
    }
    return i.sort((t, a) => t.value - a.value), i.push({
      name: h.intl.string(h.t.OCPUM6),
      value: 0,
      radioBarClassName: D.CK,
      radioItemIconClassName: D.CK
    }), i
  }(o);
  return (0, d.Ay)(() => {
    y.length < 1 || r(y[0].value)
  }), (0, n.jsx)(u.Modal, {
    transitionState: t,
    title: h.intl.string(h.t["f3nnB/"]),
    subtitle: g,
    onClose: async () => {
      await a()
    },
    actions: [{
      variant: "secondary",
      text: h.intl.string(h.t.h9tkAK),
      onClick: a
    }, {
      variant: "primary",
      disabled: null === s,
      text: h.intl.string(h.t["3PatSz"]),
      onClick: () => {
        0 === s ? e(S.g.WHAT_YOU_LOSE) : e(S.g.PAUSE_CONFIRM)
      }
    }],
    children: (0, n.jsx)(c.$d, {
      "data-migration-pending": true,
      options: y,
      onChange: m,
      value: s
    })
  })
}

function v() {
  let {
    transitionState: t,
    onClose: a,
    pauseDuration: e,
    premiumSubscription: r,
    analyticsLocation: l,
    setStep: c,
    analyticsLocations: o
  } = (0, f.X)(), [d, m] = i.useState(false), [p, y] = i.useState(false);
  if (null == e) return void c(S.g.PAUSE_SELECT);
  let v = null,
    P = [C.Dmq.PAST_DUE, C.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
    x = s()(P).add(e, "days").toDate();
  switch (r.status) {
    case C.Dmq.PAST_DUE:
      v = h.intl.format(h.t["xaS18/"], {
        pauseDuration: e,
        resumeDate: x
      });
      break;
    case C.Dmq.PAUSED:
      v = h.intl.format(h.t.Vur3Fc, {
        resumeDate: x
      });
      break;
    default:
      v = h.intl.format(h.t.W85vFA, {
        pauseDate: P,
        resumeDate: x,
        pauseDuration: e
      })
  }
  return (0, n.jsxs)(u.Modal, {
    title: h.intl.string(h.t.AnMG5x),
    transitionState: t,
    actions: [{
      text: h.intl.string(h.t.h9tkAK),
      variant: "primary",
      onClick: a
    }, {
      text: h.intl.string(h.t["cY+Oob"]),
      variant: "critical-primary",
      disabled: p || null == e,
      onClick: async () => {
        await g({
          premiumSubscription: r,
          pauseDuration: e,
          setIsCancelling: y,
          setHasError: m,
          onClose: a,
          analyticsLocations: o,
          analyticsLocation: l
        })
      }
    }],
    onClose: async () => {
      await a()
    },
    children: [d ? (0, n.jsx)("div", {
      className: D.QK,
      children: (0, n.jsx)(u.wx6, {
        type: "critical",
        children: h.intl.string(h.t["5mlOCW"])
      })
    }) : null, (0, n.jsx)("div", {
      className: D.rf,
      children: v
    })]
  })
}