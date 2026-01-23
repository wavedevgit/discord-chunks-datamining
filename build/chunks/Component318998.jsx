/** Chunk was on 80347 **/
/** chunk id: 318998, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  PremiumSubscriptionPauseModalSelect: () => f,
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

function f() {
  let {
    transitionState: t,
    onClose: a,
    setStep: e,
    setPauseDuration: r,
    pauseDuration: s,
    premiumSubscription: o
  } = (0, C.X)(), m = i.useCallback(t => {
    let {
      value: a
    } = t;
    r(a)
  }, [r]), g = o.status === h.Dmq.PAUSED ? D.intl.string(D.t.Lp9WoG) : D.intl.string(D.t.eSR83U), f = function(t) {
    let a = t.status === h.Dmq.PAUSED ? D.t.o3upfT : D.t.dBXZEm,
      {
        durations: e,
        currentDaysPaused: n
      } = (0, p.Vy)(t),
      i = [];
    for (let t of e) {
      let e = l.V[t];
      i.push({
        name: D.intl.formatToPlainString(a, {
          days: e - n
        }),
        value: e,
        radioItemIconClassName: y.hO
      })
    }
    return i.sort((t, a) => t.value - a.value), i.push({
      name: D.intl.string(D.t.OCPUM6),
      value: 0,
      radioBarClassName: y.CK,
      radioItemIconClassName: y.CK
    }), i
  }(o);
  return (0, d.Ay)(() => {
    f.length < 1 || r(f[0].value)
  }), (0, n.jsx)(c.Modal, {
    transitionState: t,
    title: D.intl.string(D.t["f3nnB/"]),
    subtitle: g,
    onClose: async () => {
      await a()
    },
    actions: [{
      variant: "secondary",
      text: D.intl.string(D.t.h9tkAK),
      onClick: a
    }, {
      variant: "primary",
      disabled: null === s,
      text: D.intl.string(D.t["3PatSz"]),
      onClick: () => {
        0 === s ? e(S.g.WHAT_YOU_LOSE) : e(S.g.PAUSE_CONFIRM)
      }
    }],
    children: (0, n.jsx)(u.$d, {
      "data-migration-pending": true,
      options: f,
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
    setStep: u,
    analyticsLocations: o
  } = (0, C.X)(), [d, m] = i.useState(false), [p, f] = i.useState(false);
  if (null == e) return void u(S.g.PAUSE_SELECT);
  let v = null,
    x = [h.Dmq.PAST_DUE, h.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
    P = s()(x).add(e, "days").toDate();
  switch (r.status) {
    case h.Dmq.PAST_DUE:
      v = D.intl.format(D.t["xaS18/"], {
        pauseDuration: e,
        resumeDate: P
      });
      break;
    case h.Dmq.PAUSED:
      v = D.intl.format(D.t.Vur3Fc, {
        resumeDate: P
      });
      break;
    default:
      v = D.intl.format(D.t.W85vFA, {
        pauseDate: x,
        resumeDate: P,
        pauseDuration: e
      })
  }
  return (0, n.jsxs)(c.Modal, {
    title: D.intl.string(D.t.AnMG5x),
    transitionState: t,
    actions: [{
      text: D.intl.string(D.t.h9tkAK),
      variant: "primary",
      onClick: a
    }, {
      text: D.intl.string(D.t["cY+Oob"]),
      variant: "critical-primary",
      disabled: p || null == e,
      onClick: async () => {
        await g({
          premiumSubscription: r,
          pauseDuration: e,
          setIsCancelling: f,
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
      className: y.QK,
      children: (0, n.jsx)(c.wx6, {
        type: "critical",
        children: D.intl.string(D.t["5mlOCW"])
      })
    }) : null, (0, n.jsx)("div", {
      className: y.rf,
      children: v
    })]
  })
}