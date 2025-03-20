/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => L,
  av: () => B,
  bL: () => I,
  kA: () => O
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(913527),
  o = n.n(l),
  A = n(442837),
  c = n(481060),
  d = n(167533),
  u = n(766434),
  g = n(937615),
  f = n(289393),
  m = n(264451),
  p = n(759178),
  h = n(462087),
  C = n(685201),
  b = n(981631),
  v = n(198139),
  x = n(388032),
  N = n(379866);

function j(e) {
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
let E = (e, t, n, i) => {
    let s = null != i ? o()(i).add(15, "days").toISOString() : void 0,
      a = (0, m.Zo)(s, "MMM D");
    switch (e) {
      case v.x_.OPEN:
        return (0, r.jsxs)(r.Fragment, {
          children: [null != a ? x.NW.formatToPlainString(x.t.I6YOjY, {
            payoutDate: a
          }) : x.NW.string(x.t.G5ATX1), (0, r.jsx)(h.Z, {
            className: N.statusScheduledIcon
          })]
        });
      case v.x_.CANCELED:
        return (0, r.jsxs)(r.Fragment, {
          children: [x.NW.string(x.t["0SrNPz"]), (0, r.jsx)(c.k$p, {
            size: "md",
            color: "currentColor",
            className: N.statusErrorIcon
          })]
        });
      case v.x_.PAYOUT_DEFERRED:
        if ((null == n ? void 0 : n.includes(v.XL.PAYOUT_SEIZED)) === !0) return (0, r.jsxs)(r.Fragment, {
          children: [x.NW.string(x.t["0SrNPz"]), (0, r.jsx)(c.k$p, {
            size: "md",
            color: "currentColor",
            className: N.statusErrorIcon
          })]
        });
        return (0, r.jsxs)(r.Fragment, {
          children: [x.NW.string(x.t.OtZ5k5), (0, r.jsx)(C.Z, {
            className: N.statusDeferredIcon
          })]
        })
    }
    switch (t) {
      case v.jw.MANUAL:
      case v.jw.OPEN:
      case v.jw.PENDING:
      case v.jw.PROCESSING:
      case v.jw.SUBMITTED:
      case v.jw.PENDING_FUNDS:
      case v.jw.CANCELED:
      case v.jw.ERROR:
        return (0, r.jsxs)(r.Fragment, {
          children: [null != a ? x.NW.formatToPlainString(x.t.I6YOjY, {
            payoutDate: a
          }) : x.NW.string(x.t.ubdQTk), (0, r.jsx)(h.Z, {
            className: N.statusScheduledIcon
          })]
        });
      case v.jw.PAID:
        return (0, r.jsxs)(r.Fragment, {
          children: [x.NW.string(x.t.eoSslJ), (0, r.jsx)(c.owK, {
            size: "md",
            color: "currentColor",
            className: N.statusPaidIcon
          })]
        });
      case v.jw.DEFERRED:
      case v.jw.DEFERRED_INTERNAL:
      case v.jw.REJECTED:
      case v.jw.RISK_REVIEW:
        return (0, r.jsxs)(r.Fragment, {
          children: [p.Z.getStatusErrorText(t), (0, r.jsx)(c.k$p, {
            size: "md",
            color: "currentColor",
            className: N.statusErrorIcon
          })]
        })
    }
    return null
  },
  I = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(N.cell, n),
      children: t
    })
  },
  O = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: N.cell,
      children: (0, g.T4)(null != t ? t : 0, b.pKx.USD)
    })
  },
  y = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(I, {
      className: N.statusCell,
      children: null != t ? t : "-"
    })
  },
  w = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(I, {
      className: N.periodCell,
      children: o()(t).utc().format("MMMM YYYY")
    })
  },
  P = e => {
    var t;
    let {
      listingId: n
    } = e, i = (0, A.e7)([f.Z], () => f.Z.getSubscriptionListing(n)), s = null !== (t = null == i ? void 0 : i.name) && void 0 !== t ? t : "[".concat(x.NW.string(x.t["4tEmXV"]), "]");
    return (0, r.jsx)(I, {
      children: s
    })
  },
  B = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(I, {
      className: N.subscribersCell,
      children: [null != t ? t : "-", " ", (0, r.jsx)(c.tBG, {
        size: "md",
        color: "currentColor",
        className: N.subscribersIcon,
        "aria-hidden": !0
      })]
    })
  },
  D = () => {
    let e = (0, r.jsx)(c.ua7, {
      text: x.NW.string(x.t.q3PkLy),
      children: e => (0, r.jsx)(c.d3s, j({
        size: "xs",
        color: "currentColor",
        className: N.amountDisclaimer
      }, e))
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [x.NW.string(x.t["/MWnxs"]), " ", e]
    })
  },
  T = () => {
    let e = (0, r.jsx)(c.ua7, {
      text: x.NW.string(x.t.cIGvZG),
      children: e => (0, r.jsx)(c.d3s, j({
        size: "xs",
        color: "currentColor",
        className: N.statusDisclaimer
      }, e))
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [x.NW.string(x.t.oypxx8), " ", e]
    })
  },
  S = [{
    key: "dropdown",
    cellClassName: N.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: n,
        onToggleExpandRow: i
      } = t, s = n.has(e.key);
      return (0, r.jsx)(c.P3F, {
        className: a()(N.cell, N.toggleExpandCell),
        onClick: () => i(e.key),
        children: (0, r.jsx)(c.Fbu, {
          size: "md",
          color: "currentColor",
          className: a()(N.caretIcon, {
            [N.caretDownIcon]: s
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: N.periodColumn,
    renderHeader: () => x.NW.string(x.t.fThnXV),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(w, {
        children: e.periodStartingAt
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) i.push((0, r.jsx)(P, {
          listingId: t
        }, t));
      return i
    }
  }, {
    key: "amount",
    cellClassName: a()(N.amountColumn, N.cellAlignRight),
    renderHeader: () => (0, r.jsx)(D, {}),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(O, {
        children: e.amount
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) {
          let n = e.ppgs[t];
          i.push((0, r.jsx)(O, {
            children: null == n ? void 0 : n.amount
          }, t))
        }
      return i
    }
  }, {
    key: "status",
    cellClassName: a()(N.statusColumn, N.cellAlignRight),
    renderHeader: () => (0, r.jsx)(T, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: n,
        ppgDeferralReasons: i,
        periodEndDate: s
      } = (0, u.j0)(e);
      return (0, r.jsx)(y, {
        children: E(t, n, i, s)
      })
    }
  }],
  L = e => {
    let {
      payoutsByPeriod: t
    } = e, [n, s] = i.useState(new Set);
    return (0, r.jsx)("div", {
      className: N.tableContainer,
      children: (0, r.jsx)(d.Z, {
        columns: S,
        data: t,
        className: N.table,
        rowClassName: N.row,
        headerClassName: N.header,
        cellProps: {
          onToggleExpandRow: e => {
            s(t => {
              let n = new Set(t);
              return n.has(e) ? n.delete(e) : n.add(e), n
            })
          },
          expandedRows: n
        }
      })
    })
  }