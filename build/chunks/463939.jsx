/** Chunk was on 22988 **/
/** chunk id: 463939, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk264451 = require("./264451.js"),
  Chunk759178 = require("./759178.js"),
  Chunk462087 = require("./462087.jsx"),
  Chunk685201 = require("./685201.js"),
  Chunk766434 = require("./766434.js"),
  Chunk755930 = require("./755930.js"),
  Chunk334820 = require("./334820.jsx"),
  Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk282427 = require("./282427.js");

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
  return <u.Text variant={"text-md/medium"} color={"interactive-active"}>{d()(t).utc().format("MMMM YYYY")}</u.Text>
};

function C(e) {
  let {
    item: t
  } = e, {
    ppgStatus: n,
    payoutStatus: r,
    ppgDeferralReasons: i,
    periodEndDate: a
  } = (0, f.j0)(t), s = null != a ? d()(a).add(15, "days").toISOString() : true, o = (0, m.Zo)(s, "MMM D");
  switch (n) {
    case j.x_.OPEN:
      return <l.Fragment>{null != o ? v.intl.formatToPlainString(v.t.I6YOjY, {
          payoutDate: o
        }) : v.intl.string(v.t.G5ATX1)}{<p.Z className={_.statusScheduledIcon} />}</l.Fragment>;
    case j.x_.CANCELED:
      return <l.Fragment>{v.intl.string(v.t["0SrNPz"])}{<u.k$p size={"md"} color={"currentColor"} className={_.statusErrorIcon} />}</l.Fragment>;
    case j.x_.PAYOUT_DEFERRED:
      if ((null == i ? true : i.includes(j.XL.PAYOUT_SEIZED)) === true) return <l.Fragment>{v.intl.string(v.t["0SrNPz"])}{<u.k$p size={"md"} color={"currentColor"} className={_.statusErrorIcon} />}</l.Fragment>;
      return <l.Fragment>{v.intl.string(v.t.OtZ5k5)}{<h.Z className={_.statusDeferredIcon} />}</l.Fragment>
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
      return <l.Fragment>{null != o ? v.intl.formatToPlainString(v.t.I6YOjY, {
          payoutDate: o
        }) : v.intl.string(v.t.ubdQTk)}{<p.Z className={_.statusScheduledIcon} />}</l.Fragment>;
    case j.jw.PAID:
      return <l.Fragment>{v.intl.string(v.t.eoSslJ)}{<u.owK size={"md"} color={"currentColor"} className={_.statusPaidIcon} />}</l.Fragment>;
    case j.jw.DEFERRED:
    case j.jw.DEFERRED_INTERNAL:
    case j.jw.REJECTED:
    case j.jw.RISK_REVIEW:
      return <l.Fragment>{g.Z.getStatusErrorText(r)}{<u.k$p size={"md"} color={"currentColor"} className={_.statusErrorIcon} />}</l.Fragment>
  }
  return null
}
let N = (0, Chunk755930.i$)({
    key: "AMOUNT ",
    cellClassName: Chunk282427.amountColumn,
    renderHeader() {
      let e = <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.q3PkLy)}>{e => (0, l.jsx)(u.d3s, O({
          size: "xs",
          color: "currentColor",
          className: _.amountDisclaimer
        }, e))}</Chunk481060.ua7>;
      return <Chunk755930.qN>{Chunk388032.intl.string(Chunk388032.t.VodAGR)}{module}</Chunk755930.qN>
    },
    getAmount: e => e.amount
  }),
  I = (0, Chunk334820.rM)([(0, Chunk334820.Fd)({
    key: "PERIOD",
    cellClassName: Chunk282427.periodColumn,
    renderHeader: () => <Chunk755930.qN>{Chunk388032.intl.string(Chunk388032.t.fThnXV)}</Chunk755930.qN>,
    renderContent: e => <y dateUtc={e.periodStartingAt} />,
    renderExpandedContent(e, t) {
      o()(null != t, "CellProps should always be provided");
      let {
        ListingIdLabel: n
      } = t;
      return <n listingId={e.listingId} />
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
    cellClassName: Chunk282427.statusColumn,
    renderHeader() {
      let e = <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.cIGvZG)}>{e => (0, l.jsx)(u.d3s, O({
          size: "xs",
          color: "currentColor",
          className: _.statusDisclaimer
        }, e))}</Chunk481060.ua7>;
      return <Chunk755930.qN>{Chunk388032.intl.string(Chunk388032.t.oypxx8)}{module}</Chunk755930.qN>
    },
    renderContent: e => <b.bL className={_.statusCell}><C item={e} /></b.bL>
  })], {
    expandableToggleColumnKey: "DROPDOWN"
  });

function E(e) {
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
  }), s = a.useMemo(() => O({
    ListingIdLabel: t
  }, r), [r, t]);
  return <b.ZP columns={I} data={i} cellProps={s} />
}