/** Chunk was on 9536 **/
/** chunk id: 67152, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => R,
  av: () => T,
  bL: () => N,
  kA: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk167533 = require("./167533.jsx"),
  Chunk766434 = require("./766434.js"),
  Chunk937615 = require("./937615.js"),
  Chunk289393 = require("./289393.js"),
  Chunk264451 = require("./264451.js"),
  Chunk759178 = require("./759178.js"),
  Chunk462087 = require("./462087.jsx"),
  Chunk685201 = require("./685201.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729124 = require("./729124.js");
let N = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(C.cell, n),
      children: t
    })
  },
  E = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: C.cell,
      children: (0, m.T4)(null != t ? t : 0, v.pKx.USD)
    })
  },
  I = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(N, {
      className: C.statusCell,
      children: null != t ? t : "-"
    })
  },
  S = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(N, {
      className: C.periodCell,
      children: o()(t).utc().format("MMMM YYYY")
    })
  },
  _ = e => {
    var t;
    let {
      listingId: n
    } = e, i = (0, c.e7)([b.Z], () => b.Z.getSubscriptionListing(n)), l = null != (t = null == i ? true : i.name) ? t : "[".concat(y.intl.string(y.t["4tEmXR"]), "]");
    return (0, r.jsx)(N, {
      children: l
    })
  },
  T = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(N, {
      className: C.subscribersCell,
      children: [null != t ? t : "-", " ", (0, r.jsx)(u.tBG, {
        size: "md",
        color: "currentColor",
        className: C.subscribersIcon,
        "aria-hidden": true
      })]
    })
  },
  P = () => {
    let e = (0, r.jsx)(d.u, {
      text: y.intl.string(y.t.q3PkL5),
      children: (0, r.jsx)(u.d3s, {
        size: "xs",
        color: "currentColor",
        className: C.amountDisclaimer
      })
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [y.intl.string(y.t["/MWnxs"]), " ", e]
    })
  },
  w = () => {
    let e = (0, r.jsx)(d.u, {
      text: y.intl.string(y.t.cIGvZI),
      children: (0, r.jsx)(u.d3s, {
        size: "xs",
        color: "currentColor",
        className: C.statusDisclaimer
      })
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [y.intl.string(y.t.oypxxw), " ", e]
    })
  },
  Z = [{
    key: "dropdown",
    cellClassName: Chunk729124.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: n,
        onToggleExpandRow: i
      } = t, l = n.has(e.key);
      return (0, r.jsx)(u.P3F, {
        className: a()(C.cell, C.toggleExpandCell),
        onClick: () => i(e.key),
        children: (0, r.jsx)(u.Fbu, {
          size: "md",
          color: "currentColor",
          className: a()(C.caretIcon, {
            [C.caretDownIcon]: l
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: Chunk729124.periodColumn,
    renderHeader: () => y.intl.string(y.t.fThnXa),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(S, {
        children: e.periodStartingAt
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) i.push((0, r.jsx)(_, {
          listingId: t
        }, t));
      return i
    }
  }, {
    key: "amount",
    cellClassName: a()(Chunk729124.amountColumn, Chunk729124.cellAlignRight),
    renderHeader: () => (0, r.jsx)(P, {}),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(E, {
        children: e.amount
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) {
          let n = e.ppgs[t];
          i.push((0, r.jsx)(E, {
            children: null == n ? true : n.amount
          }, t))
        }
      return i
    }
  }, {
    key: "status",
    cellClassName: a()(Chunk729124.statusColumn, Chunk729124.cellAlignRight),
    renderHeader: () => (0, r.jsx)(w, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: n,
        ppgDeferralReasons: i,
        periodEndDate: l
      } = (0, f.j0)(e);
      return (0, r.jsx)(I, {
        children: ((e, t, n, i) => {
          let l = null != i ? o()(i).add(15, "days").toISOString() : true,
            a = (0, p.Zo)(l, "MMM D");
          switch (e) {
            case O.x_.OPEN:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != a ? y.intl.formatToPlainString(y.t.I6YOjS, {
                  payoutDate: a
                }) : y.intl.string(y.t.G5ATX6), (0, r.jsx)(x.Z, {
                  className: C.statusScheduledIcon
                })]
              });
            case O.x_.CANCELED:
              return (0, r.jsxs)(r.Fragment, {
                children: [y.intl.string(y.t["0SrNPx"]), (0, r.jsx)(u.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: C.statusErrorIcon
                })]
              });
            case O.x_.PAYOUT_DEFERRED:
              if ((null == n ? true : n.includes(O.XL.PAYOUT_SEIZED)) === true) return (0, r.jsxs)(r.Fragment, {
                children: [y.intl.string(y.t["0SrNPx"]), (0, r.jsx)(u.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: C.statusErrorIcon
                })]
              });
              return (0, r.jsxs)(r.Fragment, {
                children: [y.intl.string(y.t.OtZ5kz), (0, r.jsx)(j.Z, {
                  className: C.statusDeferredIcon
                })]
              })
          }
          switch (t) {
            case O.jw.MANUAL:
            case O.jw.OPEN:
            case O.jw.PENDING:
            case O.jw.PROCESSING:
            case O.jw.SUBMITTED:
            case O.jw.PENDING_FUNDS:
            case O.jw.CANCELED:
            case O.jw.ERROR:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != a ? y.intl.formatToPlainString(y.t.I6YOjS, {
                  payoutDate: a
                }) : y.intl.string(y.t.ubdQTt), (0, r.jsx)(x.Z, {
                  className: C.statusScheduledIcon
                })]
              });
            case O.jw.PAID:
              return (0, r.jsxs)(r.Fragment, {
                children: [y.intl.string(y.t.eoSslJ), (0, r.jsx)(u.owK, {
                  size: "md",
                  color: "currentColor",
                  className: C.statusPaidIcon
                })]
              });
            case O.jw.DEFERRED:
            case O.jw.DEFERRED_INTERNAL:
            case O.jw.REJECTED:
            case O.jw.RISK_REVIEW:
              return (0, r.jsxs)(r.Fragment, {
                children: [h.Z.getStatusErrorText(t), (0, r.jsx)(u.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: C.statusErrorIcon
                })]
              })
          }
          return null
        })(t, n, i, l)
      })
    }
  }],
  R = e => {
    let {
      payoutsByPeriod: t
    } = e, [n, l] = i.useState(new Set);
    return (0, r.jsx)("div", {
      className: C.tableContainer,
      children: (0, r.jsx)(g.Z, {
        columns: Z,
        data: t,
        className: C.table,
        rowClassName: C.row,
        headerClassName: C.header,
        cellProps: {
          onToggleExpandRow: e => {
            l(t => {
              let n = new Set(t);
              return n.has(e) ? n.delete(e) : n.add(e), n
            })
          },
          expandedRows: n
        }
      })
    })
  }