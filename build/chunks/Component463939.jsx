/** Chunk was on 27087 **/
/** chunk id: 463939, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
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

function O(e) {
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
  return (0, l.jsx)(u.Text, {
    variant: "text-md/medium",
    color: "interactive-active",
    children: d()(t).utc().format("MMMM YYYY")
  })
};

function C(e) {
  let {
    item: t
  } = e, {
    ppgStatus: n,
    payoutStatus: r,
    ppgDeferralReasons: i,
    periodEndDate: s
  } = (0, h.j0)(t), a = null != s ? d()(s).add(15, "days").toISOString() : true, o = (0, m.Zo)(a, "MMM D");
  switch (n) {
    case j.x_.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? v.intl.formatToPlainString(v.t.I6YOjY, {
          payoutDate: o
        }) : v.intl.string(v.t.G5ATX1), (0, l.jsx)(p.Z, {
          className: _.statusScheduledIcon
        })]
      });
    case j.x_.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t["0SrNPz"]), (0, l.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: _.statusErrorIcon
        })]
      });
    case j.x_.PAYOUT_DEFERRED:
      if ((null == i ? true : i.includes(j.XL.PAYOUT_SEIZED)) === true) return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t["0SrNPz"]), (0, l.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: _.statusErrorIcon
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t.OtZ5k5), (0, l.jsx)(f.Z, {
          className: _.statusDeferredIcon
        })]
      })
  }
  switch (r) {
    case j.jw.MANUAL:
    case j.jw.OPEN:
    case j.jw.PENDING:
    case j.jw.PROCESSING:
    case j.jw.SUBMITTED:
    case j.jw.PENDING_FUNDS:
    case j.jw.CANCELED:
    case j.jw.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? v.intl.formatToPlainString(v.t.I6YOjY, {
          payoutDate: o
        }) : v.intl.string(v.t.ubdQTk), (0, l.jsx)(p.Z, {
          className: _.statusScheduledIcon
        })]
      });
    case j.jw.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [v.intl.string(v.t.eoSslJ), (0, l.jsx)(u.owK, {
          size: "md",
          color: "currentColor",
          className: _.statusPaidIcon
        })]
      });
    case j.jw.DEFERRED:
    case j.jw.DEFERRED_INTERNAL:
    case j.jw.REJECTED:
    case j.jw.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [g.Z.getStatusErrorText(r), (0, l.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: _.statusErrorIcon
        })]
      })
  }
  return null
}
let N = (0, Chunk755930.i$)({
    key: "AMOUNT ",
    cellClassName: Chunk406887.amountColumn,
    renderHeader() {
      let e = (0, Chunk951288.jsx)(Chunk481060.ua7, {
        text: Chunk388032.intl.string(Chunk388032.t.q3PkLy),
        children: e => (0, l.jsx)(u.d3s, O({
          size: "xs",
          color: "currentColor",
          className: _.amountDisclaimer
        }, e))
      });
      return (0, Chunk951288.jsxs)(Chunk755930.qN, {
        children: [Chunk388032.intl.string(Chunk388032.t.VodAGR), module]
      })
    },
    getAmount: e => e.amount
  }),
  E = (0, Chunk334820.rM)([(0, Chunk334820.Fd)({
    key: "PERIOD",
    cellClassName: Chunk406887.periodColumn,
    renderHeader: () => (0, Chunk951288.jsx)(Chunk755930.qN, {
      children: Chunk388032.intl.string(Chunk388032.t.fThnXV)
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
  }), (0, Chunk334820.Fd)((r = O({}, N), i = i = {
    renderContent: N.render,
    renderExpandedContent: (e, t) => N.render(e, t)
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
      let e = (0, Chunk951288.jsx)(Chunk481060.ua7, {
        text: Chunk388032.intl.string(Chunk388032.t.cIGvZG),
        children: e => (0, l.jsx)(u.d3s, O({
          size: "xs",
          color: "currentColor",
          className: _.statusDisclaimer
        }, e))
      });
      return (0, Chunk951288.jsxs)(Chunk755930.qN, {
        children: [Chunk388032.intl.string(Chunk388032.t.oypxx8), module]
      })
    },
    renderContent: e => (0, l.jsx)(b.bL, {
      className: _.statusCell,
      children: (0, l.jsx)(C, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function I(e) {
  let {
    ListingIdLabel: t,
    payoutsByPeriod: n
  } = e, {
    cellProps: r,
    data: i
  } = (0, x.GN)(n, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
      var n;
      return {
        key: e.key + t,
        listingId: t,
        amount: null == (n = e.ppgs[t]) ? true : n.amount
      }
    })
  }), a = s.useMemo(() => O({
    ListingIdLabel: t
  }, r), [r, t]);
  return (0, l.jsx)(b.ZP, {
    columns: E,
    data: i,
    cellProps: a
  })
}