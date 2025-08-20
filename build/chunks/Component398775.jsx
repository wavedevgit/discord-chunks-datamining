/** Chunk was on 81709 **/
/** chunk id: 398775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Sz: () => N,
  of: () => j
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk99945 = require("./99945.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk798769 = require("./798769.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353680 = require("./353680.js");
async function E(e) {
  let {
    premiumSubscription: t,
    pauseDuration: n,
    onClose: i,
    setHasError: r,
    setIsCancelling: a,
    analyticsLocations: s,
    analyticsLocation: o
  } = e;
  try {
    a(true), r(false), await (0, d.Mg)(t, {
      pauseDuration: n
    }, {
      amount: 0,
      currency: t.currency
    }, (0, x.UX)(t.items, t.currency, t.paymentSourceId), s, o), i()
  } catch (e) {
    r(true), a(false)
  }
}

function j(e) {
  let {
    premiumType: t,
    onClose: n,
    pauseDuration: a,
    setPauseDuration: s,
    footer: l,
    premiumSubscription: c
  } = e, d = r.useCallback(e => {
    let {
      value: t
    } = e;
    s(t)
  }, [s]), p = c.status === h.O0b.PAUSED ? C.intl.string(C.t.Lp9WoK) : C.intl.string(C.t.eSR83d), _ = function(e) {
    let t = e.status === h.O0b.PAUSED ? C.t.o3upfX : C.t.dBXZEh,
      {
        durations: n,
        currentDaysPaused: i
      } = (0, b.AT)(e),
      r = [];
    for (let e of n) {
      let n = o.T[e];
      r.push({
        name: C.intl.formatToPlainString(t, {
          days: n - i
        }),
        value: n,
        radioItemIconClassName: g.radioOption
      })
    }
    return r.sort((e, t) => e.value - t.value), r.push({
      name: C.intl.string(C.t.OCPUMz),
      value: 0,
      radioBarClassName: g.cancelText,
      radioItemIconClassName: g.cancelText
    }), r
  }(c);
  return (0, m.ZP)(() => {
    _.length < 1 || s(_[0].value)
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(y.Z, {
      premiumType: t,
      onClose: n
    }), (0, i.jsx)(u.xBx, {
      separator: false,
      children: (0, i.jsxs)("div", {
        className: g.__invalid_header,
        children: [(0, i.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          className: g.__invalid_modalHeader,
          children: C.intl.string(C.t.f3nnBw)
        }), (0, i.jsx)(u.X6q, {
          variant: "heading-sm/medium",
          className: g.subtitle,
          children: p
        })]
      })
    }), (0, i.jsx)(u.hzk, {
      className: g.body,
      children: (0, i.jsx)(u.FXm, {
        options: _,
        onChange: d,
        value: a
      })
    }), (0, i.jsx)(u.mzw, {
      justify: f.Z.Justify.START,
      children: l
    })]
  })
}

function N(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: a,
    pauseDuration: o,
    analyticsLocation: d
  } = e, [m, x] = r.useState(false), {
    analyticsLocations: b
  } = (0, _.ZP)(), [j, N] = r.useState(false), I = (0, p.ZP)(), v = null, O = null, P = [h.O0b.PAST_DUE, h.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, T = s()(P).add(o, "days").toDate();
  switch (t.status) {
    case h.O0b.PAST_DUE:
      O = C.intl.format(C.t["xaS18/"], {
        pauseDuration: o,
        resumeDate: T
      });
      break;
    case h.O0b.PAUSED:
      O = C.intl.format(C.t.Vur3FR, {
        resumeDate: T
      });
      break;
    default:
      O = C.intl.format(C.t.W85vFB, {
        pauseDate: P,
        resumeDate: T,
        pauseDuration: o
      })
  }
  return v = (0, i.jsx)("div", {
    className: g.body,
    children: O
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(y.Z, {
      premiumType: n,
      onClose: a
    }), (0, i.jsx)(u.xBx, {
      separator: false,
      children: (0, i.jsx)("div", {
        className: g.__invalid_header,
        children: (0, i.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          className: g.__invalid_modalHeader,
          children: C.intl.string(C.t["AnMG5+"])
        })
      })
    }), (0, i.jsxs)(u.hzk, {
      className: g.body,
      children: [m ? (0, i.jsx)(u.kzN, {
        className: g.errorBlock,
        children: C.intl.string(C.t["5mlOCQ"])
      }) : null, v]
    }), (0, i.jsx)(u.mzw, {
      justify: f.Z.Justify.START,
      children: (0, i.jsxs)("div", {
        className: g.whatYouLoseButtonContainer,
        children: [(0, i.jsx)(u.zxk, {
          variant: "critical-primary",
          text: C.intl.string(C.t["cY+Ooa"]),
          disabled: j || null == o,
          onClick: async () => {
            await E({
              premiumSubscription: t,
              pauseDuration: o,
              setIsCancelling: N,
              setHasError: x,
              onClose: a,
              analyticsLocations: b,
              analyticsLocation: d
            })
          }
        }), (0, i.jsx)(c.zx, {
          look: c.zx.Looks.LINK,
          color: (0, l.wj)(I) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
          onClick: a,
          children: C.intl.string(C.t.h9tkAA)
        })]
      })
    })]
  })
}