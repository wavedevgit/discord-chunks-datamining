/** Chunk was on 47841 **/
/** chunk id: 495063, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => T
});
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk971630 = require("./971630.js"),
  Chunk942117 = require("./942117.js"),
  Chunk487552 = require("./487552.jsx"),
  Chunk311237 = require("./311237.jsx"),
  Chunk105917 = require("./105917.js"),
  Chunk242564 = require("./242564.jsx"),
  Chunk476719 = require("./476719.jsx"),
  Chunk311750 = require("./311750.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473711 = require("./473711.js");

function A(e) {
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
let E = e => {
  let {
    dateUtc: t
  } = e;
  return (0, l.jsx)(f.Text, {
    variant: "text-md/medium",
    color: "interactive-text-active",
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
    periodEndDate: s
  } = (0, x.Rs)(t), a = null != s ? d()(s).add(15, "days").toISOString() : true, c = (0, g.T4)(a, "MMM D");
  switch (n) {
    case O.U1.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != c ? y.intl.formatToPlainString(y.t.I6YOjS, {
          payoutDate: c
        }) : y.intl.string(y.t.G5ATX6), (0, l.jsx)(m.A, {
          className: v.$A
        })]
      });
    case O.U1.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [y.intl.string(y.t["0SrNPx"]), (0, l.jsx)(f.aXh, {
          size: "md",
          color: "currentColor",
          className: v.u5
        })]
      });
    case O.U1.PAYOUT_DEFERRED:
      if ((null == i ? true : i.includes(O.MC.PAYOUT_SEIZED)) === true) return (0, l.jsxs)(l.Fragment, {
        children: [y.intl.string(y.t["0SrNPx"]), (0, l.jsx)(f.aXh, {
          size: "md",
          color: "currentColor",
          className: v.u5
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [y.intl.string(y.t.OtZ5kz), (0, l.jsx)(p.A, {
          className: v.tK
        })]
      })
  }
  switch (r) {
    case O.bp.MANUAL:
    case O.bp.OPEN:
    case O.bp.PENDING:
    case O.bp.PROCESSING:
    case O.bp.SUBMITTED:
    case O.bp.PENDING_FUNDS:
    case O.bp.CANCELED:
    case O.bp.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != c ? y.intl.formatToPlainString(y.t.I6YOjS, {
          payoutDate: c
        }) : y.intl.string(y.t.ubdQTt), (0, l.jsx)(m.A, {
          className: v.$A
        })]
      });
    case O.bp.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [y.intl.string(y.t.eoSslJ), (0, l.jsx)(f.yr3, {
          size: "md",
          color: "currentColor",
          className: v.Ql
        })]
      });
    case O.bp.DEFERRED:
    case O.bp.DEFERRED_INTERNAL:
    case O.bp.REJECTED:
    case O.bp.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [b.A.getStatusErrorText(r), (0, l.jsx)(f.aXh, {
          size: "md",
          color: "currentColor",
          className: v.u5
        })]
      })
  }
  return null
}
let _ = (0, Chunk242564.CU)({
    key: "AMOUNT ",
    cellClassName: Chunk473711.Fh,
    renderHeader() {
      let e = (0, l.jsx)(u.m, {
        text: y.intl.string(y.t.q3PkL5),
        children: (0, l.jsx)(f.mir, {
          size: "xs",
          color: "currentColor",
          className: v.EU
        })
      });
      return (0, l.jsxs)(h.A3, {
        children: [y.intl.string(y.t.VodAGZ), e]
      })
    },
    getAmount: e => e.amount
  }),
  S = (0, Chunk476719.gE)([(0, Chunk476719.N7)({
    key: "PERIOD",
    cellClassName: Chunk473711.Ii,
    renderHeader: () => (0, l.jsx)(h.A3, {
      children: y.intl.string(y.t.fThnXa)
    }),
    renderContent: e => (0, l.jsx)(E, {
      dateUtc: e.periodStartingAt
    }),
    renderExpandedContent(e, t) {
      c()(null != t, "CellProps should always be provided");
      let {
        ListingIdLabel: n
      } = t;
      return (0, l.jsx)(n, {
        listingId: e.listingId
      })
    }
  }), (0, Chunk476719.N7)((r = A({}, _), i = i = {
    renderContent: _.render,
    renderExpandedContent: (e, t) => _.render(e, t)
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
  }), r)), (0, Chunk242564.HA)({
    key: "STATUS ",
    cellClassName: Chunk473711.xG,
    renderHeader() {
      let e = (0, l.jsx)(u.m, {
        text: y.intl.string(y.t.cIGvZI),
        children: (0, l.jsx)(f.mir, {
          size: "xs",
          color: "currentColor",
          className: v.Cg
        })
      });
      return (0, l.jsxs)(h.A3, {
        children: [y.intl.string(y.t.oypxxw), e]
      })
    },
    renderContent: e => (0, l.jsx)(h.fh, {
      className: v.fo,
      children: (0, l.jsx)(N, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function T(e) {
  let {
    ListingIdLabel: t,
    payoutsByPeriod: n
  } = e, {
    cellProps: r,
    data: i
  } = (0, j.vL)(n, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
      var n;
      return {
        key: e.key + t,
        listingId: t,
        amount: null == (n = e.ppgs[t]) ? true : n.amount
      }
    })
  }), a = s.useMemo(() => A({
    ListingIdLabel: t
  }, r), [r, t]);
  return (0, l.jsx)(h.Ay, {
    columns: S,
    data: i,
    cellProps: a
  })
}