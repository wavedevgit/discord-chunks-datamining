/** Chunk was on 75708 **/
/** chunk id: 8231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk15640 = require("./15640.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk230916 = require("./230916.js"),
  Chunk694338 = require("./694338.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk528880 = require("./528880.js"),
  Chunk102655 = require("./102655.js"),
  Chunk768236 = require("./768236.js"),
  Chunk314907 = require("./314907.js"),
  Chunk826701 = require("./826701.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = () => <div className={Chunk528880.comparisonTablePill}><Chunk481060.X6q className={Chunk528880.mostPopularText} variant={"text-xs/bold"}>{Chunk388032.intl.string(Chunk388032.t.TR2B4e)}</Chunk481060.X6q></div>,
  A = () => <div className={Chunk528880.comparisonTablePill}><Chunk481060.X6q className={Chunk528880.mostPopularText} variant={"heading-deprecated-12/extrabold"}>{Chunk388032.intl.string(Chunk388032.t.IBYG5e)}</Chunk481060.X6q></div>,
  P = e => {
    let {
      text: t,
      badge: n,
      variant: r
    } = e;
    return <c.Text color={"none"} variant={null != r ? r : "text-md/medium"} className={C.rowLabelText}>{t}{null != n && <i.Fragment>{" "}{n}</i.Fragment>}</c.Text>
  },
  R = e => {
    let {
      isIncluded: t,
      isTier0: n
    } = e;
    return t ? <i.Fragment>{<c.dz2 size={"md"} color={"currentColor"} className={n ? C.basicCheckMark : C.premiumCheckMark} aria-hidden={true} />}{<c.nn4>{E.intl.string(E.t["tq+6t7"])}</c.nn4>}</i.Fragment> : <i.Fragment>{<c.Dio size={"md"} color={"currentColor"} className={C.closeIcon} aria-hidden={true} />}{<c.nn4>{E.intl.string(E.t.l4qZrq)}</c.nn4>}</i.Fragment>
  },
  D = e => {
    let {
      label: t,
      tier0ColumnData: n,
      tier2ColumnData: r,
      withBottomMargin: s
    } = e;
    return <tr className={a()(C.row, C.rowBottomBorder, {
        [C.bottomMargin]: s
      })}>{<th scope={"row"} className={C.labelCell}><P text={t} /></th>}{<td className={C.cell}>{null != n.text ? (0, i.jsx)(P, {
          text: n.text
        }) : (0, i.jsx)(R, {
          isIncluded: !!n.includes,
          isTier0: true
        })}</td>}{<td className={C.cell}>{null != r.text ? (0, i.jsx)(P, {
          text: r.text
        }) : (0, i.jsx)(R, {
          isIncluded: !!r.includes
        })}</td>}</tr>
  },
  Z = e => {
    let {
      title: t,
      rows: n
    } = e;
    return <i.Fragment>{<tr className={C.row}>{<th scope={"row"} className={C.labelCell}><P text={t} variant={"text-lg/bold"} /></th>}{<td />}{<td />}</tr>}{n.map((e, t) => <D{...N(I({}, e), {
        withBottomMargin: t === n.length - 1
      })} />)}</i.Fragment>
  },
  w = e => {
    let t, {
        premiumType: n
      } = e,
      r = (0, d.ZP)();
    t = n === j.p9.TIER_0 ? (0, o.wj)(r) ? O : v : (0, o.wj)(r) ? S : T;
    let s = (0, h.Px)(n);
    return <img src={t} className={C.logo} alt={s} />
  },
  k = () => <thead><tr className={a()(Chunk528880.headerRow, Chunk528880.topBorderRadius)}>{<th scope={"col"} className={Chunk528880.headerLabelCell}><Chunk481060.X6q className={Chunk528880.__invalid_textColor} variant={"heading-xl/semibold"}>{Chunk388032.intl.string(Chunk388032.t.XXENra)}</Chunk481060.X6q></th>}{<th scope={"col"} className={Chunk528880.headerCell}><w premiumType={Chunk474936.p9.TIER_0} /></th>}{<th scope={"col"} className={a()(Chunk528880.headerCell, Chunk528880.topBorderRadius)}><w premiumType={Chunk474936.p9.TIER_2} /></th>}</tr></thead>,
  L = e => {
    let {
      tier0MonthlyPrice: t,
      tier2MonthlyPrice: n,
      shouldUseDiscountPrice: r,
      tier2DiscountedPriceString: s
    } = e;
    return <tr className={a()(C.row, C.rowBottomBorder, C.bottomMargin)}>{<th scope={"row"} className={C.labelCell}><P text={E.intl.string(E.t["09yRKy"])} variant={"text-lg/bold"} /></th>}{<td className={C.cell}><P text={h.ZP.formatPriceString(t, j.rV.MONTH)} /></td>}{<td className={C.cell}><P text={r ? s : h.ZP.formatPriceString(n, j.rV.MONTH)} /></td>}</tr>
  },
  M = e => {
    var t;
    let n, {
        className: s,
        hidePill: o = false,
        selectedPlanColumnClassName: c,
        selectedPlanTier: d = j.p9.TIER_2
      } = e,
      {
        analyticsLocations: E
      } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      O = (0, l.e7)([g.Z], () => g.Z.hasFetchedSubscriptions()),
      v = (0, p.V)(j.nS),
      S = (0, b.N)(),
      T = null == S || null == (t = S.subscription_trial) ? true : t.sku_id,
      P = (0, f.Ng)(),
      R = null != P && (0, f.Wp)(P, j.Si.TIER_2),
      D = (0, x.A)(j.Xh.PREMIUM_MONTH_TIER_2),
      w = "".concat(D, "/").concat((0, h.eP)(j.rV.MONTH)),
      M = (0, h.CY)(j.Xh.PREMIUM_MONTH_TIER_0),
      B = (0, h.CY)(j.Xh.PREMIUM_MONTH_TIER_2),
      U = (0, _.e)();
    if (!O || !v) return null;
    n = o ? null : null != S ? <A /> : <y />;
    let V = T === j.Si.TIER_0 || d === j.p9.TIER_0;
    return <m.Gt value={E}><div className={a()(C.root, s)} data-testid={"application-home-marketing-page-comparison-table"}><div className={C.tableWrapper}>{<div className={a()(c, {
              [C.tier0ColumnPosition]: V,
              [C.tier2ColumnPosition]: !V
            })}>{!V && n}{<div className={a()({
                [C.tier0ColumnOuter]: V,
                [C.tier2ColumnOuter]: !V
              })} />}</div>}{<table className={C.table}>{<k />}{<tbody>{<L tier0MonthlyPrice={M} tier2MonthlyPrice={B} shouldUseDiscountPrice={R} tier2DiscountedPriceString={w} />}{U.map(e => (0, r.createElement)(Z, N(I({}, e), {
                key: e.id
              })))}</tbody>}</table>}</div></div></m.Gt>
  }