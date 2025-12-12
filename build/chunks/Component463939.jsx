/** Chunk was on 9536 **/
/** chunk id: 463939, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk264451 = require("./264451.js"),
  Chunk759178 = require("./759178.js"),
  Chunk462087 = require("./462087.jsx"),
  Chunk685201 = require("./685201.jsx"),
  Chunk766434 = require("./766434.js"),
  Chunk755930 = require("./755930.jsx"),
  Chunk334820 = require("./334820.jsx"),
  Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk502525 = require("./502525.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let N = e => {
  let {
    dateUtc: t
  } = e;
  return (0, l.jsx)(g.Text, {
    variant: "text-md/medium",
    color: "interactive-text-active",
    children: d()(t).utc().format("MMMM YYYY")
  })
};

function E(e) {
  let {
    item: t
  } = e, {
    ppgStatus: n,
    payoutStatus: r,
    ppgDeferralReasons: i,
    periodEndDate: a
  } = (0, h.j0)(t), s = null != a ? d()(a).add(15, "days").toISOString() : true, o = (0, f.Zo)(s, "MMM D");
  switch (n) {
    case v.x_.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? O.intl.formatToPlainString(O.t.I6YOjS, {
          payoutDate: o
        }) : O.intl.string(O.t.G5ATX6), (0, l.jsx)(b.Z, {
          className: C.statusScheduledIcon
        })]
      });
    case v.x_.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t["0SrNPx"]), (0, l.jsx)(g.k$p, {
          size: "md",
          color: "currentColor",
          className: C.statusErrorIcon
        })]
      });
    case v.x_.PAYOUT_DEFERRED:
      if ((null == i ? true : i.includes(v.XL.PAYOUT_SEIZED)) === true) return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t["0SrNPx"]), (0, l.jsx)(g.k$p, {
          size: "md",
          color: "currentColor",
          className: C.statusErrorIcon
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t.OtZ5kz), (0, l.jsx)(p.Z, {
          className: C.statusDeferredIcon
        })]
      })
  }
  switch (r) {
    case v.jw.MANUAL:
    case v.jw.OPEN:
    case v.jw.PENDING:
    case v.jw.PROCESSING:
    case v.jw.SUBMITTED:
    case v.jw.PENDING_FUNDS:
    case v.jw.CANCELED:
    case v.jw.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? O.intl.formatToPlainString(O.t.I6YOjS, {
          payoutDate: o
        }) : O.intl.string(O.t.ubdQTt), (0, l.jsx)(b.Z, {
          className: C.statusScheduledIcon
        })]
      });
    case v.jw.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t.eoSslJ), (0, l.jsx)(g.owK, {
          size: "md",
          color: "currentColor",
          className: C.statusPaidIcon
        })]
      });
    case v.jw.DEFERRED:
    case v.jw.DEFERRED_INTERNAL:
    case v.jw.REJECTED:
    case v.jw.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [m.Z.getStatusErrorText(r), (0, l.jsx)(g.k$p, {
          size: "md",
          color: "currentColor",
          className: C.statusErrorIcon
        })]
      })
  }
  return null
}
let I = (0, Chunk755930.i$)({
    key: "AMOUNT ",
    cellClassName: Chunk502525.amountColumn,
    renderHeader() {
      let e = (0, Chunk54381.jsx)(Chunk28664.u, {
        text: Chunk388032.intl.string(Chunk388032.t.q3PkL5),
        children: (0, Chunk54381.jsx)(Chunk481060.d3s, {
          size: "xs",
          color: "currentColor",
          className: Chunk502525.amountDisclaimer
        })
      });
      return (0, Chunk54381.jsxs)(Chunk755930.qN, {
        children: [Chunk388032.intl.string(Chunk388032.t.VodAGZ), module]
      })
    },
    getAmount: e => e.amount
  }),
  S = (0, Chunk334820.rM)([(0, Chunk334820.Fd)({
    key: "PERIOD",
    cellClassName: Chunk502525.periodColumn,
    renderHeader: () => (0, Chunk54381.jsx)(Chunk755930.qN, {
      children: Chunk388032.intl.string(Chunk388032.t.fThnXa)
    }),
    renderContent: e => (0, l.jsx)(N, {
      dateUtc: e.periodStartingAt
    }),
    renderExpandedContent(e, t) {
      o()(null != t, "CellProps should always be provided");
      let {
        ListingIdLabel: n
      } = t;
      return (0, l.jsx)(n, {
        listingId: e.listingId
      })
    }
  }), (0, Chunk334820.Fd)((r = y({}, I), i = i = {
    renderContent: I.render,
    renderExpandedContent: (e, t) => I.render(e, t)
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
  }), r)), (0, Chunk755930.wy)({
    key: "STATUS ",
    cellClassName: Chunk502525.statusColumn,
    renderHeader() {
      let e = (0, Chunk54381.jsx)(Chunk28664.u, {
        text: Chunk388032.intl.string(Chunk388032.t.cIGvZI),
        children: (0, Chunk54381.jsx)(Chunk481060.d3s, {
          size: "xs",
          color: "currentColor",
          className: Chunk502525.statusDisclaimer
        })
      });
      return (0, Chunk54381.jsxs)(Chunk755930.qN, {
        children: [Chunk388032.intl.string(Chunk388032.t.oypxxw), module]
      })
    },
    renderContent: e => (0, l.jsx)(x.bL, {
      className: C.statusCell,
      children: (0, l.jsx)(E, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function _(e) {
  let {
    ListingIdLabel: t,
    payoutsByPeriod: n
  } = e, {
    cellProps: r,
    data: i
  } = (0, j.GN)(n, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
      var n;
      return {
        key: e.key + t,
        listingId: t,
        amount: null == (n = e.ppgs[t]) ? true : n.amount
      }
    })
  }), s = a.useMemo(() => y({
    ListingIdLabel: t
  }, r), [r, t]);
  return (0, l.jsx)(x.ZP, {
    columns: S,
    data: i,
    cellProps: s
  })
}