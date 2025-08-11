/** Chunk was on 22988 **/
/** chunk id: 67152, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => D,
  av: () => P,
  bL: () => N,
  kA: () => I
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk167533 = require("./167533.js"),
  Chunk766434 = require("./766434.js"),
  Chunk937615 = require("./937615.js"),
  Chunk289393 = require("./289393.js"),
  Chunk264451 = require("./264451.js"),
  Chunk759178 = require("./759178.js"),
  Chunk462087 = require("./462087.js"),
  Chunk685201 = require("./685201.js"),
  Chunk981631 = require("./981631.js"),
  Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.js"),
  Chunk769570 = require("./769570.js");

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
let C = (e, t, n, i) => {
    let l = null != i ? o()(i).add(15, "days").toISOString() : true,
      a = (0, h.Zo)(l, "MMM D");
    switch (e) {
      case v.x_.OPEN:
        return <r.Fragment>{null != a ? _.intl.formatToPlainString(_.t.I6YOjY, {
            payoutDate: a
          }) : _.intl.string(_.t.G5ATX1)}{<b.Z className={O.statusScheduledIcon} />}</r.Fragment>;
      case v.x_.CANCELED:
        return <r.Fragment>{_.intl.string(_.t["0SrNPz"])}{<d.k$p size={"md"} color={"currentColor"} className={O.statusErrorIcon} />}</r.Fragment>;
      case v.x_.PAYOUT_DEFERRED:
        if ((null == n ? true : n.includes(v.XL.PAYOUT_SEIZED)) === true) return <r.Fragment>{_.intl.string(_.t["0SrNPz"])}{<d.k$p size={"md"} color={"currentColor"} className={O.statusErrorIcon} />}</r.Fragment>;
        return <r.Fragment>{_.intl.string(_.t.OtZ5k5)}{<x.Z className={O.statusDeferredIcon} />}</r.Fragment>
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
        return <r.Fragment>{null != a ? _.intl.formatToPlainString(_.t.I6YOjY, {
            payoutDate: a
          }) : _.intl.string(_.t.ubdQTk)}{<b.Z className={O.statusScheduledIcon} />}</r.Fragment>;
      case v.jw.PAID:
        return <r.Fragment>{_.intl.string(_.t.eoSslJ)}{<d.owK size={"md"} color={"currentColor"} className={O.statusPaidIcon} />}</r.Fragment>;
      case v.jw.DEFERRED:
      case v.jw.DEFERRED_INTERNAL:
      case v.jw.REJECTED:
      case v.jw.RISK_REVIEW:
        return <r.Fragment>{f.Z.getStatusErrorText(t)}{<d.k$p size={"md"} color={"currentColor"} className={O.statusErrorIcon} />}</r.Fragment>
    }
    return null
  },
  N = e => {
    let {
      children: t,
      className: n
    } = e;
    return <div className={a()(O.cell, n)}>{t}</div>
  },
  I = e => {
    let {
      children: t
    } = e;
    return <div className={O.cell}>{(0, g.T4)(null != t ? t : 0, j.pKx.USD)}</div>
  },
  E = e => {
    let {
      children: t
    } = e;
    return <N className={O.statusCell}>{null != t ? t : "-"}</N>
  },
  S = e => {
    let {
      children: t
    } = e;
    return <N className={O.periodCell}>{o()(t).utc().format("MMMM YYYY")}</N>
  },
  T = e => {
    var t;
    let {
      listingId: n
    } = e, i = (0, c.e7)([p.Z], () => p.Z.getSubscriptionListing(n)), l = null != (t = null == i ? true : i.name) ? t : "[".concat(_.intl.string(_.t["4tEmXV"]), "]");
    return <N>{l}</N>
  },
  P = e => {
    let {
      children: t
    } = e;
    return <N className={O.subscribersCell}>{null != t ? t : "-"}{" "}{<d.tBG size={"md"} color={"currentColor"} className={O.subscribersIcon} aria-hidden={true} />}</N>
  },
  w = () => {
    let e = <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.q3PkLy)}>{e => (0, r.jsx)(d.d3s, y({
        size: "xs",
        color: "currentColor",
        className: O.amountDisclaimer
      }, e))}</Chunk481060.ua7>;
    return <Chunk255367.Fragment>{Chunk388032.intl.string(Chunk388032.t["/MWnxs"])}{" "}{module}</Chunk255367.Fragment>
  },
  R = () => {
    let e = <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.cIGvZG)}>{e => (0, r.jsx)(d.d3s, y({
        size: "xs",
        color: "currentColor",
        className: O.statusDisclaimer
      }, e))}</Chunk481060.ua7>;
    return <Chunk255367.Fragment>{Chunk388032.intl.string(Chunk388032.t.oypxx8)}{" "}{module}</Chunk255367.Fragment>
  },
  Z = [{
    key: "dropdown",
    cellClassName: Chunk769570.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: n,
        onToggleExpandRow: i
      } = t, l = n.has(e.key);
      return <d.P3F className={a()(O.cell, O.toggleExpandCell)} onClick={() => i(e.key)}><d.Fbu size={"md"} color={"currentColor"} className={a()(O.caretIcon, {
            [O.caretDownIcon]: l
          })} /></d.P3F>
    }
  }, {
    key: "period",
    cellClassName: Chunk769570.periodColumn,
    renderHeader: () => Chunk388032.intl.string(Chunk388032.t.fThnXV),
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [<S>{e.periodStartingAt}</S>];
      if (n.has(e.key))
        for (let t in e.ppgs) i.push(<T listingId={t} />);
      return i
    }
  }, {
    key: "amount",
    cellClassName: a()(Chunk769570.amountColumn, Chunk769570.cellAlignRight),
    renderHeader: () => <w />,
    render(e, t) {
      let {
        expandedRows: n
      } = t, i = [<I>{e.amount}</I>];
      if (n.has(e.key))
        for (let t in e.ppgs) {
          let n = e.ppgs[t];
          i.push(<I>{null == n ? true : n.amount}</I>)
        }
      return i
    }
  }, {
    key: "status",
    cellClassName: a()(Chunk769570.statusColumn, Chunk769570.cellAlignRight),
    renderHeader: () => <R />,
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: n,
        ppgDeferralReasons: i,
        periodEndDate: l
      } = (0, m.j0)(e);
      return <E>{C(t, n, i, l)}</E>
    }
  }],
  D = e => {
    let {
      payoutsByPeriod: t
    } = e, [n, l] = i.useState(new Set);
    return <div className={O.tableContainer}><u.Z columns={Z} data={t} className={O.table} rowClassName={O.row} headerClassName={O.header} cellProps={{
          onToggleExpandRow: e => {
            l(t => {
              let n = new Set(t);
              return n.has(e) ? n.delete(e) : n.add(e), n
            })
          },
          expandedRows: n
        }} /></div>
  }