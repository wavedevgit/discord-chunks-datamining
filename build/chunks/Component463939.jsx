/** Chunk was on 29679 **/
/** chunk id: 463939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk406887 = require("./406887.js");

function C(e) {
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
let y = e => {
  let {
    dateUtc: t
  } = e;
  return (0, l.jsx)(g.Text, {
    variant: "text-md/medium",
    color: "interactive-active",
    children: d()(t).utc().format("MMMM YYYY")
  })
};

function N(e) {
  let {
    item: t
  } = e, {
    ppgStatus: n,
    payoutStatus: r,
    ppgDeferralReasons: i,
    periodEndDate: a
  } = (0, b.j0)(t), s = null != a ? d()(a).add(15, "days").toISOString() : true, o = (0, m.Zo)(s, "MMM D");
  switch (n) {
    case _.x_.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? v.intl.formatToPlainString(v.t.I6YOjS, {
          payoutDate: o
        }) : v.intl.string(v.t.G5ATX6), (0, l.jsx)(f.Z, {
          className: O.statusScheduledIcon
        })]
      });
    case _.x_.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t["0SrNPx"]), (0, l.jsx)(g.k$p, {
          size: "md",
          color: "currentColor",
          className: O.statusErrorIcon
        })]
      });
    case _.x_.PAYOUT_DEFERRED:
      if ((null == i ? true : i.includes(_.XL.PAYOUT_SEIZED)) === true) return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t["0SrNPx"]), (0, l.jsx)(g.k$p, {
          size: "md",
          color: "currentColor",
          className: O.statusErrorIcon
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t.OtZ5kz), (0, l.jsx)(h.Z, {
          className: O.statusDeferredIcon
        })]
      })
  }
  switch (r) {
    case _.jw.MANUAL:
    case _.jw.OPEN:
    case _.jw.PENDING:
    case _.jw.PROCESSING:
    case _.jw.SUBMITTED:
    case _.jw.PENDING_FUNDS:
    case _.jw.CANCELED:
    case _.jw.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? v.intl.formatToPlainString(v.t.I6YOjS, {
          payoutDate: o
        }) : v.intl.string(v.t.ubdQTt), (0, l.jsx)(f.Z, {
          className: O.statusScheduledIcon
        })]
      });
    case _.jw.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t.eoSslJ), (0, l.jsx)(g.owK, {
          size: "md",
          color: "currentColor",
          className: O.statusPaidIcon
        })]
      });
    case _.jw.DEFERRED:
    case _.jw.DEFERRED_INTERNAL:
    case _.jw.REJECTED:
    case _.jw.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [p.Z.getStatusErrorText(r), (0, l.jsx)(g.k$p, {
          size: "md",
          color: "currentColor",
          className: O.statusErrorIcon
        })]
      })
  }
  return null
}
let E = (0, Chunk755930.i$)({
    key: "AMOUNT ",
    cellClassName: Chunk406887.amountColumn,
    renderHeader() {
      let e = (0, Chunk951288.jsx)(Chunk28664.u, {
        text: Chunk388032.intl.string(Chunk388032.t.q3PkL5),
        children: (0, Chunk951288.jsx)(Chunk481060.d3s, {
          size: "xs",
          color: "currentColor",
          className: Chunk406887.amountDisclaimer
        })
      });
      return (0, Chunk951288.jsxs)(Chunk755930.qN, {
        children: [Chunk388032.intl.string(Chunk388032.t.VodAGZ), module]
      })
    },
    getAmount: e => e.amount
  }),
  I = (0, Chunk334820.rM)([(0, Chunk334820.Fd)({
    key: "PERIOD",
    cellClassName: Chunk406887.periodColumn,
    renderHeader: () => (0, Chunk951288.jsx)(Chunk755930.qN, {
      children: Chunk388032.intl.string(Chunk388032.t.fThnXa)
    }),
    renderContent: e => (0, l.jsx)(y, {
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
  }), (0, Chunk334820.Fd)((r = C({}, E), i = i = {
    renderContent: E.render,
    renderExpandedContent: (e, t) => E.render(e, t)
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
    cellClassName: Chunk406887.statusColumn,
    renderHeader() {
      let e = (0, Chunk951288.jsx)(Chunk28664.u, {
        text: Chunk388032.intl.string(Chunk388032.t.cIGvZI),
        children: (0, Chunk951288.jsx)(Chunk481060.d3s, {
          size: "xs",
          color: "currentColor",
          className: Chunk406887.statusDisclaimer
        })
      });
      return (0, Chunk951288.jsxs)(Chunk755930.qN, {
        children: [Chunk388032.intl.string(Chunk388032.t.oypxxw), module]
      })
    },
    renderContent: e => (0, l.jsx)(x.bL, {
      className: O.statusCell,
      children: (0, l.jsx)(N, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function S(e) {
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
  }), s = a.useMemo(() => C({
    ListingIdLabel: t
  }, r), [r, t]);
  return (0, l.jsx)(x.ZP, {
    columns: I,
    data: i,
    cellProps: s
  })
}