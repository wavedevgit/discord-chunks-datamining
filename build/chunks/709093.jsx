/** Chunk was on web.js **/
/** chunk id: 709093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk304789 = require("./304789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk493572 = require("./493572.jsx"),
  Chunk756896 = require("./756896.js"),
  Chunk589072 = require("./589072.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk573702 = require("./573702.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk348987 = require("./348987.js"),
  Chunk236078 = require("./236078.js"),
  Chunk278345 = require("./278345.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");

function S(e) {
  let {
    isOneStepCheckout: t,
    headerText: n,
    step: i,
    filteredBreadcrumbs: o
  } = e;
  if (t) return <div className={E.oneStepCheckoutTextWrapper}><s.X6q variant={"heading-md/bold"}>{n}</s.X6q></div>;
  let a = o.length > 1;
  return <div className={E.headerTextWrapper}>{<s.Text variant={"text-lg/semibold"}>{n}</s.Text>}{a && <f.Z activeId={i} breadcrumbs={o} />}</div>
}

function A(e) {
  let {
    isTier2: t
  } = e, n = t ? O : b, i = t ? v : y;
  return <r.Fragment>{<img src={n} alt={""} className={E.bigCloud} />}{<img src={i} alt={""} className={E.mediumCloud} />}{<img src={i} alt={""} className={E.smallCloud} />}</r.Fragment>
}
let N = function(e) {
  var t, n, i;
  let {
    hideCloseButton: f = false,
    hideCloseOnFullScreen: b,
    onClose: y,
    upgradeToPremiumType: O,
    isEligibleForTrial: v = false,
    showTrialBadge: N = false,
    showDiscountBadge: C = false
  } = e, R = (0, s.apv)((0, l.ZP)()), P = O === g.p9.TIER_2, w = (0, d.Fv)(v), D = (0, h.Ng)(), L = null == D || null == (t = D.discount) ? true : t.amount, x = P ? T : I, M = P ? p.Z : _.Z, {
    step: k,
    breadcrumbs: j,
    startedPaymentFlowWithPaymentSourcesRef: U,
    isDisplayingWowMomentConfirmation: G
  } = (0, c.JL)();
  if (null == j || 0 === j.length) return null;
  let B = j.flatMap(e => {
    let t = e.useBreadcrumbLabel(v),
      n = e.sectionHeaderText;
    return null != t ? {
      id: e.id,
      label: t,
      sectionHeaderText: n
    } : []
  });
  if (0 === B.length) return null;
  let Z = (B = B.filter(e => {
      let t = e.id !== u.h8.ADD_PAYMENT_STEPS,
        n = e.id === u.h8.ADD_PAYMENT_STEPS && !U.current;
      return !v || v && (t || n)
    })).find(e => e.id === k),
    F = null != (i = null == Z || null == (n = Z.sectionHeaderText) ? true : n.call(Z)) ? i : null == Z ? true : Z.label,
    V = null != F && null != k,
    H = w && V && k === u.h8.REVIEW,
    Y = P ? "nitro-pink" : "nitro-green";
  return G ? <div className={E.container}><a.$ color={Y} className={E.headerContainer} /></div> : <div className={E.container}>{<a.$ color={Y} className={o()(E.headerContainer, {
        [E.containerBottomPadding]: !V
      })}>{<A isTier2={P} />}{!f && <s.olH data-migration-pending={true} hideOnFullscreen={b} onClick={y} className={E.closeButtonPosition} />}{<img src={x} alt={""} className={H ? E.bigWumpus : E.wumpus} />}{<div className={E.textContainer}><M color={R ? "black" : "white"} className={E.wordmark} /></div>}</a.$>}{(N || C) && <m.Z discountAmount={L} />}{V && <S isOneStepCheckout={w} headerText={F} step={k} filteredBreadcrumbs={B} />}{H && <div className={E.bodyGradientContainer}><div className={E.bodyGradient} /></div>}</div>
}