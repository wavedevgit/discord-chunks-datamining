/** Chunk was on 27087 **/
/** chunk id: 67152, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => D,
  av: () => T,
  bL: () => C,
  kA: () => N
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
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
  Chunk896519 = require("./896519.js");

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
let C = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(O.cell, n),
      children: t
    })
  },
  N = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: O.cell,
      children: (0, g.T4)(null != t ? t : 0, j.pKx.USD)
    })
  },
  E = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(C, {
      className: O.statusCell,
      children: null != t ? t : "-"
    })
  },
  I = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(C, {
      className: O.periodCell,
      children: o()(t).utc().format("MMMM YYYY")
    })
  },
  S = e => {
    var t;
    let {
      listingId: n
    } = e, i = (0, c.e7)([p.Z], () => p.Z.getSubscriptionListing(n)), l = null != (t = null == i ? true : i.name) ? t : "[".concat(_.intl.string(_.t["4tEmXV"]), "]");
    return (0, r.jsx)(C, {
      children: l
    })
  },
  T = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(C, {
      className: O.subscribersCell,
      children: [null != t ? t : "-", " ", (0, r.jsx)(d.tBG, {
        size: "md",
        color: "currentColor",
        className: O.subscribersIcon,
        "aria-hidden": true
      })]
    })
  },
  P = () => {
    let e = (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.q3PkLy),
      children: e => (0, r.jsx)(d.d3s, y({
        size: "xs",
        color: "currentColor",
        className: O.amountDisclaimer
      }, e))
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [Chunk388032.intl.string(Chunk388032.t["/MWnxs"]), " ", module]
    })
  },
  w = () => {
    let e = (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.cIGvZG),
      children: e => (0, r.jsx)(d.d3s, y({
        size: "xs",
        color: "currentColor",
        className: O.statusDisclaimer
      }, e))
    });
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [Chunk388032.intl.string(Chunk388032.t.oypxx8), " ", module]
    })
  },
  R = [{
    key: "dropdown",
    cellClassName: Chunk896519.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: n,
        onToggleExpandRow: i
      } = t, l = n.has(e.key);
      return (0, r.jsx)(d.P3F, {
        className: s()(O.cell, O.toggleExpandCell),
        onClick: () => i(e.key),
        children: (0, r.jsx)(d.Fbu, {
          size: "md",
          color: "currentColor",
          className: s()(O.caretIcon, {
            [O.caretDownIcon]: l
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: Chunk896519.periodColumn,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.fThnXV),
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
    cellClassName: s()(Chunk896519.amountColumn, Chunk896519.cellAlignRight),
    renderHeader: () => (0, Chunk951288.jsx)(P, {}),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(N, {
        children: e.amount
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) {
          let n = e.ppgs[t];
          i.push((0, r.jsx)(N, {
            children: null == n ? true : n.amount
          }, t))
        }
      return i
    }
  }, {
    key: "status",
    cellClassName: s()(Chunk896519.statusColumn, Chunk896519.cellAlignRight),
    renderHeader: () => (0, Chunk951288.jsx)(w, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: n,
        ppgDeferralReasons: i,
        periodEndDate: l
      } = (0, m.j0)(e);
      return (0, r.jsx)(E, {
        children: ((e, t, n, i) => {
          let l = null != i ? o()(i).add(15, "days").toISOString() : true,
            s = (0, f.Zo)(l, "MMM D");
          switch (e) {
            case v.x_.OPEN:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != s ? _.intl.formatToPlainString(_.t.I6YOjY, {
                  payoutDate: s
                }) : _.intl.string(_.t.G5ATX1), (0, r.jsx)(x.Z, {
                  className: O.statusScheduledIcon
                })]
              });
            case v.x_.CANCELED:
              return (0, r.jsxs)(r.Fragment, {
                children: [_.intl.string(_.t["0SrNPz"]), (0, r.jsx)(d.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusErrorIcon
                })]
              });
            case v.x_.PAYOUT_DEFERRED:
              if ((null == n ? true : n.includes(v.XL.PAYOUT_SEIZED)) === true) return (0, r.jsxs)(r.Fragment, {
                children: [_.intl.string(_.t["0SrNPz"]), (0, r.jsx)(d.k$p, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusErrorIcon
                })]
              });
              return (0, r.jsxs)(r.Fragment, {
                children: [_.intl.string(_.t.OtZ5k5), (0, r.jsx)(b.Z, {
                  className: O.statusDeferredIcon
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
                children: [null != s ? _.intl.formatToPlainString(_.t.I6YOjY, {
                  payoutDate: s
                }) : _.intl.string(_.t.ubdQTk), (0, r.jsx)(x.Z, {
                  className: O.statusScheduledIcon
                })]
              });
            case v.jw.PAID:
              return (0, r.jsxs)(r.Fragment, {
                children: [_.intl.string(_.t.eoSslJ), (0, r.jsx)(d.owK, {
                  size: "md",
                  color: "currentColor",
                  className: O.statusPaidIcon
                })]
              });
            case v.jw.DEFERRED:
            case v.jw.DEFERRED_INTERNAL:
            case v.jw.REJECTED:
            case v.jw.RISK_REVIEW:
              return (0, r.jsxs)(r.Fragment, {
                children: [h.Z.getStatusErrorText(t), (0, r.jsx)(d.k$p, {
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
  D = e => {
    let {
      payoutsByPeriod: t
    } = e, [n, l] = i.useState(new Set);
    return (0, r.jsx)("div", {
      className: O.tableContainer,
      children: (0, r.jsx)(u.Z, {
        columns: R,
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