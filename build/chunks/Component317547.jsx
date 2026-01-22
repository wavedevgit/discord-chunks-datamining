/** Chunk was on 47841 **/
/** chunk id: 317547, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => R,
  Kh: () => N,
  MD: () => I,
  fh: () => E
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk596719 = require("./596719.jsx"),
  Chunk105917 = require("./105917.js"),
  Chunk580630 = require("./580630.js"),
  Chunk636194 = require("./636194.js"),
  Chunk971630 = require("./971630.js"),
  Chunk942117 = require("./942117.js"),
  Chunk487552 = require("./487552.jsx"),
  Chunk311237 = require("./311237.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk311750 = require("./311750.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk921503 = require("./921503.js");
let E = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: s()(A.Hn, n),
      children: t
    })
  },
  N = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: A.Hn,
      children: (0, b.$g)(null != t ? t : 0, O.Yri.USD)
    })
  },
  _ = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(E, {
      className: A.fo,
      children: null != t ? t : "-"
    })
  },
  S = e => {
    let {
      children: t
    } = e;
    return (0, r.jsx)(E, {
      className: A.wJ,
      children: c()(t).utc().format("MMMM YYYY")
    })
  },
  T = e => {
    var t;
    let {
      listingId: n
    } = e, i = (0, o.bG)([m.A], () => m.A.getSubscriptionListing(n)), l = null != (t = null == i ? true : i.name) ? t : "[".concat(v.intl.string(v.t["4tEmXR"]), "]");
    return (0, r.jsx)(E, {
      children: l
    })
  },
  I = e => {
    let {
      children: t
    } = e;
    return (0, r.jsxs)(E, {
      className: A.u4,
      children: [null != t ? t : "-", " ", (0, r.jsx)(u.nys, {
        size: "md",
        color: "currentColor",
        className: A.BK,
        "aria-hidden": true
      })]
    })
  },
  C = () => {
    let e = (0, r.jsx)(d.m, {
      text: v.intl.string(v.t.q3PkL5),
      children: (0, r.jsx)(u.mir, {
        size: "xs",
        color: "currentColor",
        className: A.EU
      })
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [v.intl.string(v.t["/MWnxs"]), " ", e]
    })
  },
  P = () => {
    let e = (0, r.jsx)(d.m, {
      text: v.intl.string(v.t.cIGvZI),
      children: (0, r.jsx)(u.mir, {
        size: "xs",
        color: "currentColor",
        className: A.Cg
      })
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [v.intl.string(v.t.oypxxw), " ", e]
    })
  },
  w = [{
    key: "dropdown",
    cellClassName: Chunk921503.pR,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: n,
        onToggleExpandRow: i
      } = t, l = n.has(e.key);
      return (0, r.jsx)(u.DUT, {
        className: s()(A.Hn, A.nn),
        onClick: () => i(e.key),
        children: (0, r.jsx)(u._BQ, {
          size: "md",
          color: "currentColor",
          className: s()(A.Rq, {
            [A.jH]: l
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: Chunk921503.Ii,
    renderHeader: () => v.intl.string(v.t.fThnXa),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [(0, r.jsx)(S, {
        children: e.periodStartingAt
      }, e.key)];
      if (n.has(e.key))
        for (let t in e.ppgs) i.push((0, r.jsx)(T, {
          listingId: t
        }, t));
      return i
    }
  }, {
    key: "amount",
    cellClassName: s()(Chunk921503.Fh, Chunk921503.WI),
    renderHeader: () => (0, r.jsx)(C, {}),
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
    cellClassName: s()(Chunk921503.xG, Chunk921503.WI),
    renderHeader: () => (0, r.jsx)(P, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: n,
        ppgDeferralReasons: i,
        periodEndDate: l
      } = (0, g.Rs)(e);
      return (0, r.jsx)(_, {
        children: ((e, t, n, i) => {
          let l = null != i ? c()(i).add(15, "days").toISOString() : true,
            s = (0, p.T4)(l, "MMM D");
          switch (e) {
            case y.U1.OPEN:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != s ? v.intl.formatToPlainString(v.t.I6YOjS, {
                  payoutDate: s
                }) : v.intl.string(v.t.G5ATX6), (0, r.jsx)(h.A, {
                  className: A.$A
                })]
              });
            case y.U1.CANCELED:
              return (0, r.jsxs)(r.Fragment, {
                children: [v.intl.string(v.t["0SrNPx"]), (0, r.jsx)(u.aXh, {
                  size: "md",
                  color: "currentColor",
                  className: A.u5
                })]
              });
            case y.U1.PAYOUT_DEFERRED:
              if ((null == n ? true : n.includes(y.MC.PAYOUT_SEIZED)) === true) return (0, r.jsxs)(r.Fragment, {
                children: [v.intl.string(v.t["0SrNPx"]), (0, r.jsx)(u.aXh, {
                  size: "md",
                  color: "currentColor",
                  className: A.u5
                })]
              });
              return (0, r.jsxs)(r.Fragment, {
                children: [v.intl.string(v.t.OtZ5kz), (0, r.jsx)(j.A, {
                  className: A.tK
                })]
              })
          }
          switch (t) {
            case y.bp.MANUAL:
            case y.bp.OPEN:
            case y.bp.PENDING:
            case y.bp.PROCESSING:
            case y.bp.SUBMITTED:
            case y.bp.PENDING_FUNDS:
            case y.bp.CANCELED:
            case y.bp.ERROR:
              return (0, r.jsxs)(r.Fragment, {
                children: [null != s ? v.intl.formatToPlainString(v.t.I6YOjS, {
                  payoutDate: s
                }) : v.intl.string(v.t.ubdQTt), (0, r.jsx)(h.A, {
                  className: A.$A
                })]
              });
            case y.bp.PAID:
              return (0, r.jsxs)(r.Fragment, {
                children: [v.intl.string(v.t.eoSslJ), (0, r.jsx)(u.yr3, {
                  size: "md",
                  color: "currentColor",
                  className: A.Ql
                })]
              });
            case y.bp.DEFERRED:
            case y.bp.DEFERRED_INTERNAL:
            case y.bp.REJECTED:
            case y.bp.RISK_REVIEW:
              return (0, r.jsxs)(r.Fragment, {
                children: [x.A.getStatusErrorText(t), (0, r.jsx)(u.aXh, {
                  size: "md",
                  color: "currentColor",
                  className: A.u5
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
      className: A.CZ,
      children: (0, r.jsx)(f.A, {
        columns: w,
        data: t,
        className: A.tp,
        rowClassName: A.nM,
        headerClassName: A.wx,
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