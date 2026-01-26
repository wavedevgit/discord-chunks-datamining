/** Chunk was on 39048 **/
/** chunk id: 495063, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
});
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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
let A = e => {
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
    periodEndDate: s
  } = (0, b.Rs)(t), a = null != s ? d()(s).add(15, "days").toISOString() : true, o = (0, m.T4)(a, "MMM D");
  switch (n) {
    case _.U1.OPEN:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? O.intl.formatToPlainString(O.t.I6YOjS, {
          payoutDate: o
        }) : O.intl.string(O.t.G5ATX6), (0, l.jsx)(f.A, {
          className: v.$A
        })]
      });
    case _.U1.CANCELED:
      return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t["0SrNPx"]), (0, l.jsx)(g.aXh, {
          size: "md",
          color: "currentColor",
          className: v.u5
        })]
      });
    case _.U1.PAYOUT_DEFERRED:
      if ((null == i ? true : i.includes(_.MC.PAYOUT_SEIZED)) === true) return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t["0SrNPx"]), (0, l.jsx)(g.aXh, {
          size: "md",
          color: "currentColor",
          className: v.u5
        })]
      });
      return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t.OtZ5kz), (0, l.jsx)(h.A, {
          className: v.tK
        })]
      })
  }
  switch (r) {
    case _.bp.MANUAL:
    case _.bp.OPEN:
    case _.bp.PENDING:
    case _.bp.PROCESSING:
    case _.bp.SUBMITTED:
    case _.bp.PENDING_FUNDS:
    case _.bp.CANCELED:
    case _.bp.ERROR:
      return (0, l.jsxs)(l.Fragment, {
        children: [null != o ? O.intl.formatToPlainString(O.t.I6YOjS, {
          payoutDate: o
        }) : O.intl.string(O.t.ubdQTt), (0, l.jsx)(f.A, {
          className: v.$A
        })]
      });
    case _.bp.PAID:
      return (0, l.jsxs)(l.Fragment, {
        children: [O.intl.string(O.t.eoSslJ), (0, l.jsx)(g.yr3, {
          size: "md",
          color: "currentColor",
          className: v.Ql
        })]
      });
    case _.bp.DEFERRED:
    case _.bp.DEFERRED_INTERNAL:
    case _.bp.REJECTED:
    case _.bp.RISK_REVIEW:
      return (0, l.jsxs)(l.Fragment, {
        children: [p.A.getStatusErrorText(r), (0, l.jsx)(g.aXh, {
          size: "md",
          color: "currentColor",
          className: v.u5
        })]
      })
  }
  return null
}
let N = (0, Chunk242564.CU)({
    key: "AMOUNT ",
    cellClassName: Chunk473711.Fh,
    renderHeader() {
      let e = (0, l.jsx)(u.m, {
        text: O.intl.string(O.t.q3PkL5),
        children: (0, l.jsx)(g.mir, {
          size: "xs",
          color: "currentColor",
          className: v.EU
        })
      });
      return (0, l.jsxs)(x.A3, {
        children: [O.intl.string(O.t.VodAGZ), e]
      })
    },
    getAmount: e => e.amount
  }),
  S = (0, Chunk476719.gE)([(0, Chunk476719.N7)({
    key: "PERIOD",
    cellClassName: Chunk473711.Ii,
    renderHeader: () => (0, l.jsx)(x.A3, {
      children: O.intl.string(O.t.fThnXa)
    }),
    renderContent: e => (0, l.jsx)(A, {
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
  }), (0, Chunk476719.N7)((r = y({}, N), i = i = {
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
  }), r)), (0, Chunk242564.HA)({
    key: "STATUS ",
    cellClassName: Chunk473711.xG,
    renderHeader() {
      let e = (0, l.jsx)(u.m, {
        text: O.intl.string(O.t.cIGvZI),
        children: (0, l.jsx)(g.mir, {
          size: "xs",
          color: "currentColor",
          className: v.Cg
        })
      });
      return (0, l.jsxs)(x.A3, {
        children: [O.intl.string(O.t.oypxxw), e]
      })
    },
    renderContent: e => (0, l.jsx)(x.fh, {
      className: v.fo,
      children: (0, l.jsx)(E, {
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
  } = (0, j.vL)(n, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
      var n;
      return {
        key: e.key + t,
        listingId: t,
        amount: null == (n = e.ppgs[t]) ? true : n.amount
      }
    })
  }), a = s.useMemo(() => y({
    ListingIdLabel: t
  }, r), [r, t]);
  return (0, l.jsx)(x.Ay, {
    columns: S,
    data: i,
    cellProps: a
  })
}