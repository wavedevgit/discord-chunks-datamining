/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => y
});
var r, i, s = n(200651),
  a = n(192379),
  l = n(512722),
  o = n.n(l),
  c = n(913527),
  A = n.n(c),
  d = n(481060),
  u = n(264451),
  g = n(759178),
  f = n(462087),
  m = n(685201),
  p = n(766434),
  h = n(755930),
  C = n(334820),
  b = n(198139),
  v = n(388032),
  x = n(548317);

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let j = e => {
  let {
    dateUtc: t
  } = e;
  return (0, s.jsx)(d.Text, {
    variant: "text-md/medium",
    color: "interactive-active",
    children: A()(t).utc().format("MMMM YYYY")
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
  } = (0, p.j0)(t), l = null != a ? A()(a).add(15, "days").toISOString() : void 0, o = (0, u.Zo)(l, "MMM D");
  switch (n) {
    case b.x_.OPEN:
      return (0, s.jsxs)(s.Fragment, {
        children: [null != o ? v.NW.formatToPlainString(v.t.I6YOjY, {
          payoutDate: o
        }) : v.NW.string(v.t.G5ATX1), (0, s.jsx)(f.Z, {
          className: x.statusScheduledIcon
        })]
      });
    case b.x_.CANCELED:
      return (0, s.jsxs)(s.Fragment, {
        children: [v.NW.string(v.t["0SrNPz"]), (0, s.jsx)(d.k$p, {
          size: "md",
          color: "currentColor",
          className: x.statusErrorIcon
        })]
      });
    case b.x_.PAYOUT_DEFERRED:
      if ((null == i ? void 0 : i.includes(b.XL.PAYOUT_SEIZED)) === !0) return (0, s.jsxs)(s.Fragment, {
        children: [v.NW.string(v.t["0SrNPz"]), (0, s.jsx)(d.k$p, {
          size: "md",
          color: "currentColor",
          className: x.statusErrorIcon
        })]
      });
      return (0, s.jsxs)(s.Fragment, {
        children: [v.NW.string(v.t.OtZ5k5), (0, s.jsx)(m.Z, {
          className: x.statusDeferredIcon
        })]
      })
  }
  switch (r) {
    case b.jw.MANUAL:
    case b.jw.OPEN:
    case b.jw.PENDING:
    case b.jw.PROCESSING:
    case b.jw.SUBMITTED:
    case b.jw.PENDING_FUNDS:
    case b.jw.CANCELED:
    case b.jw.ERROR:
      return (0, s.jsxs)(s.Fragment, {
        children: [null != o ? v.NW.formatToPlainString(v.t.I6YOjY, {
          payoutDate: o
        }) : v.NW.string(v.t.ubdQTk), (0, s.jsx)(f.Z, {
          className: x.statusScheduledIcon
        })]
      });
    case b.jw.PAID:
      return (0, s.jsxs)(s.Fragment, {
        children: [v.NW.string(v.t.eoSslJ), (0, s.jsx)(d.owK, {
          size: "md",
          color: "currentColor",
          className: x.statusPaidIcon
        })]
      });
    case b.jw.DEFERRED:
    case b.jw.DEFERRED_INTERNAL:
    case b.jw.REJECTED:
    case b.jw.RISK_REVIEW:
      return (0, s.jsxs)(s.Fragment, {
        children: [g.Z.getStatusErrorText(r), (0, s.jsx)(d.k$p, {
          size: "md",
          color: "currentColor",
          className: x.statusErrorIcon
        })]
      })
  }
  return null
}
let I = (0, h.i$)({
    key: "AMOUNT ",
    cellClassName: x.amountColumn,
    renderHeader() {
      let e = (0, s.jsx)(d.ua7, {
        text: v.NW.string(v.t.q3PkLy),
        children: e => (0, s.jsx)(d.d3s, N({
          size: "xs",
          color: "currentColor",
          className: x.amountDisclaimer
        }, e))
      });
      return (0, s.jsxs)(h.qN, {
        children: [v.NW.string(v.t.VodAGR), e]
      })
    },
    getAmount: e => e.amount
  }),
  O = (0, C.rM)([(0, C.Fd)({
    key: "PERIOD",
    cellClassName: x.periodColumn,
    renderHeader: () => (0, s.jsx)(h.qN, {
      children: v.NW.string(v.t.fThnXV)
    }),
    renderContent: e => (0, s.jsx)(j, {
      dateUtc: e.periodStartingAt
    }),
    renderExpandedContent(e, t) {
      o()(null != t, "CellProps should always be provided");
      let {
        ListingIdLabel: n
      } = t;
      return (0, s.jsx)(n, {
        listingId: e.listingId
      })
    }
  }), (0, C.Fd)((r = N({}, I), i = i = {
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
  }), r)), (0, h.wy)({
    key: "STATUS ",
    cellClassName: x.statusColumn,
    renderHeader() {
      let e = (0, s.jsx)(d.ua7, {
        text: v.NW.string(v.t.cIGvZG),
        children: e => (0, s.jsx)(d.d3s, N({
          size: "xs",
          color: "currentColor",
          className: x.statusDisclaimer
        }, e))
      });
      return (0, s.jsxs)(h.qN, {
        children: [v.NW.string(v.t.oypxx8), e]
      })
    },
    renderContent: e => (0, s.jsx)(h.bL, {
      className: x.statusCell,
      children: (0, s.jsx)(E, {
        item: e
      })
    })
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function y(e) {
  let {
    ListingIdLabel: t,
    payoutsByPeriod: n
  } = e, {
    cellProps: r,
    data: i
  } = (0, C.GN)(n, {
    generateExpandedRows: e => Object.keys(e.ppgs).map(t => {
      var n;
      return {
        key: e.key + t,
        listingId: t,
        amount: null === (n = e.ppgs[t]) || void 0 === n ? void 0 : n.amount
      }
    })
  }), l = a.useMemo(() => N({
    ListingIdLabel: t
  }, r), [r, t]);
  return (0, s.jsx)(h.ZP, {
    columns: O,
    data: i,
    cellProps: l
  })
}