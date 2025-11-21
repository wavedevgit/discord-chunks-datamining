/** Chunk was on web.js **/
/** chunk id: 481595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk95015 = require("./95015.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk609194 = require("./609194.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk115130 = require("./115130.js"),
  Chunk535139 = require("./535139.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk314182 = require("./314182.jsx"),
  Chunk396955 = require("./396955.jsx"),
  Chunk251660 = require("./251660.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk855775 = require("./855775.js"),
  Chunk695103 = require("./695103.js"),
  Chunk4912 = require("./4912.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk45572 = require("./45572.js"),
  Chunk435020 = require("./435020.js"),
  Chunk119226 = require("./119226.jsx"),
  Chunk982204 = require("./982204.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk416439 = require("./416439.js");

function U(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: i
  } = e;
  returntrue !== i ? null : (0, r.jsxs)("div", {
    className: j.skuHeading,
    children: [(0, r.jsx)(E.Z, {
      game: t
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: j.skuHeadingText,
      children: n.name
    })]
  })
}

function G(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: a,
    handlePaymentSourceAdd: E
  } = e, {
    application: G,
    purchaseState: B,
    paymentSources: Z,
    paymentSourceId: F,
    setHasAcceptedTerms: V,
    skusById: H,
    skuPricePreviewsById: Y,
    selectedSkuId: W,
    isEmbeddedIAP: K,
    purchaseType: z,
    purchasePreviewError: q,
    devShelfFetchState: X,
    setPurchasePreviewError: Q,
    hasPaymentSources: J
  } = (0, P.JL)(), {
    isGift: $,
    giftRecipient: ee
  } = (0, R.wD)(), et = $ && (0, N.pO)(ee), {
    fetched: en,
    hasAlreadyLinked: er
  } = (0, g.F)(G), {
    defaultPaymentSourceId: ei,
    hasFetchedPaymentSources: ea
  } = (0, c.cj)([T.Z], () => ({
    defaultPaymentSourceId: T.Z.defaultPaymentSourceId,
    hasFetchedPaymentSources: T.Z.hasFetchedPaymentSources
  }));
  o()(null != W, "Expected selectedSkuId");
  let eo = H[W],
    es = null == eo ? true : eo.eligiblePaymentGateways,
    el = Y[W],
    ec = null != F ? F : S.c,
    eu = null != el ? el[ec] : null;
  o()(null != eo, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
  let ed = (0, c.e7)([m.Z, A.Z], () => A.Z.inTestModeForApplication(G.id) || m.Z.inDevModeForApplication(G.id), [G.id]),
    ef = (0, c.e7)([v.Z], () => v.Z.enabled),
    e_ = s.M.EEA_COUNTRIES.has(I.Z.ipCountryCodeWithFallback),
    ep = B === D.A.PURCHASING || B === D.A.COMPLETED,
    eh = (0, w.m)(Z, F),
    em = null != eh ? eh.type : null;
  i.useEffect(() => {
    ea && F === ei && ei !== S.c && null == eu && (0, d.x2)(eo.applicationId, eo.id, ei, {
      isGift: $
    }).then(() => {
      Q(null)
    }).catch(e => {
      Q(e)
    })
  }, [ei, ea, F, eo.applicationId, eo.id, eu, Q, $]);
  let eg = null != es && es.length > 0 && (F === S.c || null === em) && J ? y.w.SELECT_PAYMENT_METHOD : true,
    eE = eo.productLine === M.POd.SOCIAL_LAYER_GAME_ITEM,
    eb = et && !eE;
  return (0, r.jsxs)("div", {
    className: j.stepBody,
    children: [(0, r.jsx)(y.Y, {
      paymentRestrictionBannerType: eg
    }), ed ? (0, r.jsx)(_.Z, {
      icon: (0, u.GSL)(C.Z),
      iconSize: _.Z.Sizes.SMALL,
      color: _.Z.Colors.WARNING,
      className: j.errorBlock,
      children: k.intl.string(k.t.OvMyMd)
    }, "TEST_MODE") : null, (0, l.yE)(G.flags, M.udG.EMBEDDED) && X === m.O.ERROR ? (0, r.jsx)(_.Z, {
      icon: (0, u.GSL)(C.Z),
      iconSize: _.Z.Sizes.SMALL,
      color: _.Z.Colors.ERROR,
      className: j.errorBlock,
      children: k.intl.string(k.t.tAmECt)
    }, "DEV_SHELF_ERROR") : null, (0, r.jsx)(U, {
      application: G,
      sku: eo,
      isEmbeddedIAP: K
    }), eb && (0, r.jsx)(L.Z, {
      sku: eo
    }), null != ee ? (0, r.jsx)(O.s, {
      giftRecipient: ee
    }) : null, (0, r.jsx)(u.gNt, {
      label: $ ? k.intl.string(k.t.PEjaCx) : k.intl.string(k.t.sail9P),
      children: null != eu ? (0, r.jsx)(x.B, {
        sku: eo,
        skuPricePreview: eu,
        application: G
      }) : null == q ? (0, r.jsx)(u.$jN, {
        type: u.$jN.Type.WANDERING_CUBES,
        className: j.invoiceSpinner
      }) : (0, r.jsx)(x.E, {
        sku: eo,
        value: ""
      })
    }), (0, r.jsx)(p.ZP, {
      label: k.intl.string(k.t["mmDvV+"]),
      paymentSources: Object.values(Z),
      selectedPaymentSourceId: F,
      onChange: a,
      onPaymentSourceAdd: E,
      hidePersonalInformation: ef,
      paymentGatewayRestrictions: es
    }), (0, r.jsxs)(b.Z, {
      isActive: t,
      ref: n,
      children: [(0, r.jsx)(h.Z, {
        onChange: V,
        forceShow: true,
        showWithdrawalWaiver: e_,
        disabled: ep,
        subscriptionPlan: null,
        finePrintClassname: j.fineprint,
        purchaseType: z,
        isGift: $,
        finePrint: (0, r.jsx)(f.Z, {
          paymentSourceType: em,
          isEmbeddedIAP: K,
          purchaseType: z,
          productLine: eo.productLine,
          isGift: $,
          applicationName: G.name,
          hasAlreadyLinked: !en || er
        })
      }), eE && en && !er && !$ && (0, r.jsx)("div", {
        className: j.socialLayerGameItemDisclaimer,
        children: (0, r.jsx)(u.M14, {
          type: "warning",
          children: k.intl.string(k.t["6fBC//"])
        })
      })]
    })]
  })
}