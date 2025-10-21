/** Chunk was on 64982 **/
/** chunk id: 67152, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => R,
  av: () => T,
  bL: () => y,
  kA: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk698128 = require("./698128.js");
let y = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(O.cell, n),
      children: t
    })
  },
  E = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: O.cell,
      children: (0, p.T4)(null != t ? t : 0, v.pKx.USD)
    })
  },
  N = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(y, {
      className: O.statusCell,
      children: null != t ? t : "-"
    })
  },
  I = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(y, {
      className: O.periodCell,
      children: o()(t).utc().format("MMMM YYYY")
    })
  },
  S = e => {
    var t;
    let {
      listingId: n
    } = e, i = (0, c.e7)([f.Z], () => f.Z.getSubscriptionListing(n)), l = null != (t = null == i ? true : i.name) ? t : "[".concat(C.intl.string(C.t["4tEmXR"]), "]");
    return (0, r.jsx)(y, {
      children: l
    })
  },
  T = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(y, {
      className: O.subscribersCell,
      children: [null != t ? t : "-", " ", (0, r.jsx)(u.tBG, {
        size: "md",
        color: "currentColor",
        className: O.subscribersIcon,
        "aria-hidden": true
      })]
    })
  },
  P = () => {
    let e = (0, Chunk951288.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t.q3PkL5),
      children: (0, Chunk951288.jsx)(Chunk481060.d3s, {
        size: "xs",
        color: "currentColor",
        className: Chunk698128.amountDisclaimer
      })
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [Chunk388032.intl.string(Chunk388032.t["/MWnxs"]), " ", module]
    })
  },
  w = () => {
    let e = (0, Chunk951288.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t.cIGvZI),
      children: (0, Chunk951288.jsx)(Chunk481060.d3s, {
        size: "xs",
        color: "currentColor",
        className: Chunk698128.statusDisclaimer
      })
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [Chunk388032.intl.string(Chunk388032.t.oypxxw), " ", module]
    })
  },
  Z = [{
    key: "dropdown",
    cellClassName: Chunk698128.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: n,
        onToggleExpandRow: i
      } = t, l = n.has(e.key);
      return (0, r.jsx)(u.P3F, {
        className: a()(O.cell, O.toggleExpandCell),
        onClick: () => i(e.key),
        children: (0, r.jsx)(u.Fbu, {
          size: "md",
          color: "currentColor",
          className: a()(O.caretIcon, {
            [O.caretDownIcon]: l
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: Chunk698128.periodColumn,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.fThnXa),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(I, {
        children: e.periodStartingAt
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) i.push((0, r.jsx)(S, {
          listingId: t
        }, t));
      return i
    }
  }, {
    key: "amount",
    cellClassName: a()(Chunk698128.amountColumn, Chunk698128.cellAlignRight),
    renderHeader: () => (0, Chunk951288.jsx)(P, {}),
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
    cellClassName: a()(Chunk698128.statusColumn, Chunk698128.cellAlignRight),
    renderHeader: () => (0, Chunk951288.jsx)(w, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: n,
        ppgDeferralReasons: i,
        periodEndDate: l
      } = (0, m.j0)(e);
      return (0, r.jsx)(N, {
        children: ((e, t, n, i) => {
          let l = null != i ? o()(i).add(15, "days").toISOString() : true,
            a = (0, h.Zo)(l, "MMM D");
          switch (e) {
            case _.x_.OPEN:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != a ? C.intl.formatToPlainString(C.t.I6YOjS, {
                  payoutDate: a
                }) : C.intl.string(C.t.G5ATX6), (0, r.jsx)(x.Z, {
                  className: O.statusScheduledIcon
                })]
              });
            case _.x_.CANCELED:
              return (0, r.jsxs)(r.Fragment, {
                children: [C.intl.string(C.t["0SrNPx"]), (0, r.jsx)(u.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusErrorIcon
                })]
              });
            case _.x_.PAYOUT_DEFERRED:
              if ((null == n ? true : n.includes(_.XL.PAYOUT_SEIZED)) === true) return (0, r.jsxs)(r.Fragment, {
                children: [C.intl.string(C.t["0SrNPx"]), (0, r.jsx)(u.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusErrorIcon
                })]
              });
              return (0, r.jsxs)(r.Fragment, {
                children: [C.intl.string(C.t.OtZ5kz), (0, r.jsx)(j.Z, {
                  className: O.statusDeferredIcon
                })]
              })
          }
          switch (t) {
            case _.jw.MANUAL:
            case _.jw.OPEN:
            case _.jw.PENDING:
            case _.jw.PROCESSING:
            case _.jw.SUBMITTED:
            case _.jw.PENDING_FUNDS:
            case _.jw.CANCELED:
            case _.jw.ERROR:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != a ? C.intl.formatToPlainString(C.t.I6YOjS, {
                  payoutDate: a
                }) : C.intl.string(C.t.ubdQTt), (0, r.jsx)(x.Z, {
                  className: O.statusScheduledIcon
                })]
              });
            case _.jw.PAID:
              return (0, r.jsxs)(r.Fragment, {
                children: [C.intl.string(C.t.eoSslJ), (0, r.jsx)(u.owK, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusPaidIcon
                })]
              });
            case _.jw.DEFERRED:
            case _.jw.DEFERRED_INTERNAL:
            case _.jw.REJECTED:
            case _.jw.RISK_REVIEW:
              return (0, r.jsxs)(r.Fragment, {
                children: [b.Z.getStatusErrorText(t), (0, r.jsx)(u.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusErrorIcon
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
      className: O.tableContainer,
      children: (0, r.jsx)(g.Z, {
        columns: Z,
        data: t,
        className: O.table,
        rowClassName: O.row,
        headerClassName: O.header,
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