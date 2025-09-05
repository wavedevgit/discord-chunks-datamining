/** Chunk was on 81709 **/
/** chunk id: 398775, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Sz: () => N,
  of: () => b
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
  Chunk257818 = require("./257818.js");
async function C(t) {
  let {
    premiumSubscription: e,
    pauseDuration: n,
    onClose: i,
    setHasError: a,
    setIsCancelling: r,
    analyticsLocations: s,
    analyticsLocation: l
  } = t;
  try {
    r(true), a(false), await (0, d.Mg)(e, {
      pauseDuration: n
    }, {
      amount: 0,
      currency: e.currency
    }, (0, _.UX)(e.items, e.currency, e.paymentSourceId), s, l), i()
  } catch (t) {
    a(true), r(false)
  }
}

function b(t) {
  let {
    premiumType: e,
    onClose: n,
    pauseDuration: r,
    setPauseDuration: s,
    footer: o,
    premiumSubscription: d
  } = t, p = a.useCallback(t => {
    let {
      value: e
    } = t;
    s(e)
  }, [s]), x = d.status === j.O0b.PAUSED ? E.intl.string(E.t.Lp9WoK) : E.intl.string(E.t.eSR83d), _ = function(t) {
    let e = t.status === j.O0b.PAUSED ? E.t.o3upfX : E.t.dBXZEh,
      {
        durations: n,
        currentDaysPaused: i
      } = (0, y.AT)(t),
      a = [];
    for (let t of n) {
      let n = l.T[t];
      a.push({
        name: E.intl.formatToPlainString(e, {
          days: n - i
        }),
        value: n,
        radioItemIconClassName: g.radioOption
      })
    }
    return a.sort((t, e) => t.value - e.value), a.push({
      name: E.intl.string(E.t.OCPUMz),
      value: 0,
      radioBarClassName: g.cancelText,
      radioItemIconClassName: g.cancelText
    }), a
  }(d);
  return (0, m.ZP)(() => {
    _.length < 1 || s(_[0].value)
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.Z, {
      premiumType: e,
      onClose: n
    }), (0, i.jsx)(u.xBx, {
      separator: false,
      children: (0, i.jsxs)("div", {
        className: g.__invalid_header,
        children: [(0, i.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          className: g.__invalid_modalHeader,
          children: E.intl.string(E.t.f3nnBw)
        }), (0, i.jsx)(u.X6q, {
          variant: "heading-sm/medium",
          className: g.subtitle,
          children: x
        })]
      })
    }), (0, i.jsx)(u.hzk, {
      className: g.body,
      children: (0, i.jsx)(c.Gu, {
        options: _,
        onChange: p,
        value: r
      })
    }), (0, i.jsx)(u.mzw, {
      justify: f.Z.Justify.START,
      children: o
    })]
  })
}

function N(t) {
  let {
    premiumSubscription: e,
    premiumType: n,
    onClose: r,
    pauseDuration: l,
    analyticsLocation: d
  } = t, [m, _] = a.useState(false), {
    analyticsLocations: y
  } = (0, x.ZP)(), [b, N] = a.useState(false), O = (0, p.ZP)(), P = null, I = null, T = [j.O0b.PAST_DUE, j.O0b.PAUSED].includes(e.status) ? e.currentPeriodStart : e.currentPeriodEnd, R = s()(T).add(l, "days").toDate();
  switch (e.status) {
    case j.O0b.PAST_DUE:
      I = E.intl.format(E.t["xaS18/"], {
        pauseDuration: l,
        resumeDate: R
      });
      break;
    case j.O0b.PAUSED:
      I = E.intl.format(E.t.Vur3FR, {
        resumeDate: R
      });
      break;
    default:
      I = E.intl.format(E.t.W85vFB, {
        pauseDate: T,
        resumeDate: R,
        pauseDuration: l
      })
  }
  return P = (0, i.jsx)("div", {
    className: g.body,
    children: I
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.Z, {
      premiumType: n,
      onClose: r
    }), (0, i.jsx)(u.xBx, {
      separator: false,
      children: (0, i.jsx)("div", {
        className: g.__invalid_header,
        children: (0, i.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          className: g.__invalid_modalHeader,
          children: E.intl.string(E.t["AnMG5+"])
        })
      })
    }), (0, i.jsxs)(u.hzk, {
      className: g.body,
      children: [m ? (0, i.jsx)(u.kzN, {
        className: g.errorBlock,
        children: E.intl.string(E.t["5mlOCQ"])
      }) : null, P]
    }), (0, i.jsx)(u.mzw, {
      justify: f.Z.Justify.START,
      children: (0, i.jsxs)("div", {
        className: g.whatYouLoseButtonContainer,
        children: [(0, i.jsx)(u.zxk, {
          variant: "critical-primary",
          text: E.intl.string(E.t["cY+Ooa"]),
          disabled: b || null == l,
          onClick: async () => {
            await C({
              premiumSubscription: e,
              pauseDuration: l,
              setIsCancelling: N,
              setHasError: _,
              onClose: r,
              analyticsLocations: y,
              analyticsLocation: d
            })
          }
        }), (0, i.jsx)(c.zx, {
          look: c.zx.Looks.LINK,
          color: (0, o.wj)(O) ? c.zx.Colors.WHITE : c.zx.Colors.PRIMARY,
          onClick: r,
          children: E.intl.string(E.t.h9tkAA)
        })]
      })
    })]
  })
}