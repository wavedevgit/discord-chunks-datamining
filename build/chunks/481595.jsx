/** Chunk was on web.js **/
/** chunk id: 481595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk609194 = require("./609194.js"),
  Chunk275850 = require("./275850.jsx"),
  Chunk672971 = require("./672971.js"),
  Chunk115130 = require("./115130.js"),
  Chunk925329 = require("./925329.js"),
  Chunk314182 = require("./314182.jsx"),
  Chunk396955 = require("./396955.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk855775 = require("./855775.js"),
  Chunk695103 = require("./695103.js"),
  Chunk4912 = require("./4912.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk45572 = require("./45572.js"),
  Chunk435020 = require("./435020.js"),
  Chunk119226 = require("./119226.jsx"),
  Chunk982204 = require("./982204.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk718578 = require("./718578.js");

function j(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: i
  } = e;
  returntrue !== i ? null : <div className={k.skuHeading}>{<m.Z game={t} />}{<c.X6q variant={"heading-lg/bold"} className={k.skuHeadingText}>{n.name}</c.X6q>}</div>
}

function U(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: o,
    handlePaymentSourceAdd: m
  } = e, {
    application: U,
    purchaseState: G,
    paymentSources: B,
    paymentSourceId: Z,
    setHasAcceptedTerms: F,
    skusById: V,
    skuPricePreviewsById: H,
    selectedSkuId: Y,
    isEmbeddedIAP: W,
    purchaseType: K,
    purchasePreviewError: z,
    devShelfFetchState: q,
    setPurchasePreviewError: X,
    hasPaymentSources: Q
  } = (0, R.JL)(), {
    isGift: J,
    giftRecipient: $
  } = (0, C.wD)(), ee = J && (0, N.pO)($), {
    defaultPaymentSourceId: et,
    hasFetchedPaymentSources: en
  } = (0, l.cj)([v.Z], () => ({
    defaultPaymentSourceId: v.Z.defaultPaymentSourceId,
    hasFetchedPaymentSources: v.Z.hasFetchedPaymentSources
  }));
  a()(null != Y, "Expected selectedSkuId");
  let er = V[Y],
    ei = null == er ? true : er.eligiblePaymentGateways,
    eo = H[Y],
    ea = null != Z ? Z : I.c,
    es = null != eo ? eo[ea] : null;
  a()(null != er, "SKU must exist and be fetched."), a()(null != U, "Application must exist.");
  let el = (0, l.e7)([h.Z, T.Z], () => T.Z.inTestModeForApplication(U.id) || h.Z.inDevModeForApplication(U.id), [U.id]),
    ec = (0, l.e7)([y.Z], () => y.Z.enabled),
    eu = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
    ed = G === P.A.PURCHASING || G === P.A.COMPLETED,
    ef = (0, w.m)(B, Z),
    e_ = null != ef ? ef.type : null;
  i.useEffect(() => {
    en && Z === et && et !== I.c && null == es && (0, u.x2)(er.applicationId, er.id, et, {
      isGift: J
    }).then(() => {
      X(null)
    }).catch(e => {
      X(e)
    })
  }, [et, en, Z, er.applicationId, er.id, es, X, J]);
  let ep = null != ei && ei.length > 0 && (Z === I.c || null === e_) && Q ? E.w.SELECT_PAYMENT_METHOD : true;
  return <div className={k.stepBody}>{<E.Y paymentRestrictionBannerType={ep} />}{el ? <f.Z icon={(0, c.GSL)(S.Z)} iconSize={f.Z.Sizes.SMALL} color={f.Z.Colors.WARNING} className={k.errorBlock}>{M.intl.string(M.t.OvMyMT)}</f.Z> : null}{(0, A.yE)(U.flags, x.udG.EMBEDDED) && q === h.O.ERROR ? <f.Z icon={(0, c.GSL)(S.Z)} iconSize={f.Z.Sizes.SMALL} color={f.Z.Colors.ERROR} className={k.errorBlock}>{M.intl.string(M.t.tAmECg)}</f.Z> : null}{<j application={U} sku={er} isEmbeddedIAP={W} />}{ee && <D.Z sku={er} />}{null != $ ? <b.s giftRecipient={$} /> : null}{<c.vwX tag={c.RB0.H5}>{J ? M.intl.string(M.t.PEjaCw) : M.intl.string(M.t.sail9P)}</c.vwX>}{null != es ? <L.B sku={er} skuPricePreview={es} /> : null == z ? <c.$jN type={c.$jN.Type.WANDERING_CUBES} className={k.invoiceSpinner} /> : <L.E sku={er} value={""} />}{<div className={k.paymentSourceWrapper}>{<c.vwX tag={c.RB0.H5}>{M.intl.string(M.t.mmDvV1)}</c.vwX>}{<_.ZP paymentSources={Object.values(B)} selectedPaymentSourceId={Z} onChange={o} onPaymentSourceAdd={m} hidePersonalInformation={ec} paymentGatewayRestrictions={ei} />}</div>}{<g.Z isActive={t} ref={n}><p.Z onChange={F} forceShow={true} showWithdrawalWaiver={eu} disabled={ed} subscriptionPlan={null} finePrintClassname={k.fineprint} purchaseType={K} isGift={J} checkboxLabel={er.productLine === x.POd.COLLECTIBLES ? M.intl.format(M.t["1EdAlZ"], {
          paidURL: x.EYA.PAID_TERMS
        }) : true} finePrint={(0, r.jsx)(d.Z, {
          paymentSourceType: e_,
          isEmbeddedIAP: W,
          purchaseType: K,
          productLine: er.productLine,
          isGift: J
        })} /></g.Z>}</div>
}