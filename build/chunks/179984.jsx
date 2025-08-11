/** Chunk was on 75708 **/
/** chunk id: 179984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => F
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk975298 = require("./975298.js"),
  Chunk15640 = require("./15640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk775412 = require("./775412.js"),
  Chunk46062 = require("./46062.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk736519 = require("./736519.js"),
  Chunk784238 = require("./784238.js"),
  Chunk230916 = require("./230916.js"),
  Chunk346497 = require("./346497.js"),
  Chunk382791 = require("./382791.js"),
  Chunk21023 = require("./21023.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk554074 = require("./554074.js"),
  Chunk102655 = require("./102655.js"),
  Chunk768236 = require("./768236.js"),
  Chunk314907 = require("./314907.js"),
  Chunk826701 = require("./826701.js");

function L(e) {
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
let M = () => {
    let e = (0, Chunk346497.W)();
    return <Chunk382791.Cy text={module} className={Chunk554074.bogoPillWithSparkles} colorOptions={Chunk382791.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL} />
  },
  B = () => <div className={Chunk554074.mostPopularPill}><Chunk481060.X6q className={Chunk554074.mostPopularText} variant={"heading-deprecated-12/extrabold"}>{Chunk388032.intl.string(Chunk388032.t["o/oRJC"])}</Chunk481060.X6q></div>,
  U = e => {
    let t, {
        premiumType: n
      } = e,
      r = (0, u.ZP)();
    t = n === A.p9.TIER_0 ? (0, o.wj)(r) ? D : Z : (0, o.wj)(r) ? w : k;
    let s = (0, x.Px)(n);
    return <img src={t} className={R.logo} alt={s} />
  },
  V = e => {
    let {
      label: t,
      column1: n,
      column2: r
    } = e;
    return <tr className={a()(R.headerRow, R.rowBottomBorder, R.topBorderRadius)}>{<th scope={"col"} className={R.headerLabelCell}>{t}</th>}{<th scope={"col"} className={R.headerCell}>{n}</th>}{<th scope={"col"} className={a()(R.headerCell, R.topBorderRadius)}>{r}</th>}</tr>
  },
  G = e => {
    let {
      label: t,
      column1: n,
      column2: r,
      withBottomBorder: s = true,
      withTopBorderRadius: l = false,
      withBottomBorderRadius: o = false,
      buttonsRow: c = false,
      shortRow: d = false
    } = e;
    return <tr className={a()(R.row, {
        [R.wideRow]: c,
        [R.topBorderRadius]: l,
        [R.bottomBorderRadius]: o,
        [R.rowBottomBorder]: s,
        [R.shortRow]: d
      })}>{<th scope={"row"} className={R.labelCell}>{t}</th>}{<td className={a()(R.cell, {
          [R.buttonsCell]: c
        })}>{n}</td>}{<td className={a()(R.cell, {
          [R.topBorderRadius]: l,
          [R.bottomBorderRadius]: o,
          [R.buttonsCell]: c
        })}>{r}</td>}</tr>
  },
  F = e => {
    var t;
    let n, {
        className: s,
        hideCTAs: I = false,
        headingOverride: D,
        hidePill: Z = false,
        selectedPlanColumnClassName: w,
        selectedPlanTier: k = A.p9.TIER_2
      } = e,
      {
        analyticsLocations: F
      } = (0, p.ZP)(m.Z.PREMIUM_MARKETING_PLAN_COMPARISON),
      H = (0, l.e7)([b.Z], () => b.Z.hasFetchedSubscriptions()),
      z = (0, h.V)(A.nS),
      W = (0, u.ZP)(),
      Y = (0, o.ap)(W),
      K = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
      q = (0, x.M5)(K, A.p9.TIER_2),
      X = (0, O.N)(),
      J = null == X || null == (t = X.subscription_trial) ? true : t.sku_id,
      Q = (0, j.rT)(),
      $ = (0, C.Ng)(),
      ee = null != $ && (0, C.Wp)($, A.Si.TIER_2),
      et = (0, T.A)(A.Xh.PREMIUM_MONTH_TIER_2),
      en = "".concat(et, "/").concat((0, x.eP)(A.rV.MONTH)),
      ei = (0, x.CY)(A.Xh.PREMIUM_MONTH_TIER_0),
      er = (0, x.CY)(A.Xh.PREMIUM_MONTH_TIER_2),
      es = (0, g.Z)(),
      ea = (0, y.n)(ei, er, ee, en, es.fractionalState),
      el = (0, _.Vi)(),
      {
        enabled: eo
      } = E.T.useExperiment({
        location: "PlanComparisonTable"
      });
    if (!H || !z) return null;
    let ec = eo ? P.intl.string(P.t.XXENra) : P.intl.string(P.t.ED4UVF),
      ed = {
        label: <d.X6q className={R.__invalid_textColor} variant={"heading-lg/extrabold"}>{ec}</d.X6q>,
        column1: <U premiumType={A.p9.TIER_0} />,
        column2: <U premiumType={A.p9.TIER_2} />
      };
    I ? ea.push({
      label: null,
      column1: null,
      column2: null,
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: false,
      shortRow: true
    }) : ea.push({
      label: null,
      column1: <i.Fragment>{J === A.Si.TIER_2 || el ? <S.Z className={R.button} subscriptionTier={A.Si.TIER_0} showIcon={false} look={c.iL.OUTLINED} color={Y ? c.Tt.BRAND : c.Tt.WHITE} /> : <S.Z className={R.button} subscriptionTier={A.Si.TIER_0} showIcon={false} />}{Q === A.p9.TIER_2 || null != J ? null : <v.Z className={R.button} subscriptionTier={A.Si.TIER_0} />}</i.Fragment>,
      column2: <i.Fragment>{J === A.Si.TIER_0 ? <S.Z className={R.button} subscriptionTier={A.Si.TIER_2} showIcon={false} look={c.iL.OUTLINED} color={Y ? c.Tt.BRAND : c.Tt.WHITE} /> : <S.Z className={R.button} subscriptionTier={A.Si.TIER_2} showIcon={false} hasActivePromotion={el} />}{Q === A.p9.TIER_0 || null != J ? null : <v.Z className={R.button} subscriptionTier={A.Si.TIER_2} />}</i.Fragment>,
      withBottomBorder: false,
      withBottomBorderRadius: true,
      buttonsRow: null == J
    }), n = Z ? null : null != J || null != Q ? <N.Cy text={null != J ? P.intl.string(P.t.IBYG5e) : P.intl.string(P.t.ce1v3d)} className={R.freeTrialPillWithSparkles} colorOptions={J === A.Si.TIER_0 ? Y ? N.VE.PREMIUM_TIER_0_GRADIENT_FILL : N.VE.PREMIUM_TIER_0_WHITE_FILL : Y ? q ? N.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : N.VE.PREMIUM_TIER_2_WHITE_FILL} /> : el ? <M /> : <B />;
    let eu = J === A.Si.TIER_0 || Q === A.p9.TIER_0 || k === A.p9.TIER_0;
    return <p.Gt value={F}><div className={a()(R.root, s)} data-testid={"v2-marketing-page-comparison-table"}>{<d.X6q className={a()(R.titleText, R.__invalid_textColor)} variant={"heading-xxl/extrabold"}>{null != D ? D : P.intl.string(P.t.FIbMh4)}</d.X6q>}{<div className={R.tableWrapper}>{<div className={a()(w, {
              [R.tier0ColumnOuter]: eu,
              [R.tier2ColumnOuter]: !eu
            })}>{!eu && n}</div>}{<table className={R.table}>{<thead><V{...L({}, ed)} /></thead>}{<tbody>{ea.map((e, t) => {
                var n, i;
                return (0, r.createElement)(G, (n = L({}, e), i = i = {
                  key: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                  }
                  return n
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
              })}</tbody>}</table>}</div>}</div></p.Gt>
  }