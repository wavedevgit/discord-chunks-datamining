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
  Chunk524995 = require("./524995.js"),
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
    className: k.skuHeading,
    children: [(0, r.jsx)(E.Z, {
      game: t
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: k.skuHeadingText,
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
    purchaseState: Z,
    paymentSources: B,
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
  } = (0, R.JL)(), {
    isGift: $,
    giftRecipient: ee
  } = (0, P.wD)(), et = $ && (0, N.pO)(ee), {
    fetched: en,
    hasAlreadyLinked: er
  } = (0, g.F)(G), {
    defaultPaymentSourceId: ei,
    hasFetchedPaymentSources: ea
  } = (0, c.cj)([I.Z], () => ({
    defaultPaymentSourceId: I.Z.defaultPaymentSourceId,
    hasFetchedPaymentSources: I.Z.hasFetchedPaymentSources
  }));
  o()(null != W, "Expected selectedSkuId");
  let eo = H[W],
    es = null == eo ? true : eo.eligiblePaymentGateways,
    el = Y[W],
    ec = null != F ? F : T.c,
    eu = null != el ? el[ec] : null;
  o()(null != eo, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
  let ed = (0, c.e7)([h.Z, A.Z], () => A.Z.inTestModeForApplication(G.id) || h.Z.inDevModeForApplication(G.id), [G.id]),
    ef = (0, c.e7)([v.Z], () => v.Z.enabled),
    ep = s.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback),
    e_ = Z === w.A.PURCHASING || Z === w.A.COMPLETED,
    em = (0, D.m)(B, F),
    eh = null != em ? em.type : null;
  i.useEffect(() => {
    ea && F === ei && ei !== T.c && null == eu && (0, d.x2)(eo.applicationId, eo.id, ei, {
      isGift: $
    }).then(() => {
      Q(null)
    }).catch(e => {
      Q(e)
    })
  }, [ei, ea, F, eo.applicationId, eo.id, eu, Q, $]);
  let eg = null != es && es.length > 0 && (F === T.c || null === eh) && J ? y.w.SELECT_PAYMENT_METHOD : true,
    eE = eo.productLine === j.POd.SOCIAL_LAYER_GAME_ITEM,
    eb = et && !eE;
  return (0, r.jsxs)("div", {
    className: k.stepBody,
    children: [(0, r.jsx)(y.Y, {
      paymentRestrictionBannerType: eg
    }), ed ? (0, r.jsx)(p.Z, {
      icon: (0, u.GSL)(C.Z),
      iconSize: p.Z.Sizes.SMALL,
      color: p.Z.Colors.WARNING,
      className: k.errorBlock,
      children: M.intl.string(M.t.OvMyMd)
    }, "TEST_MODE") : null, (0, l.yE)(G.flags, j.udG.EMBEDDED) && X === h.O.ERROR ? (0, r.jsx)(p.Z, {
      icon: (0, u.GSL)(C.Z),
      iconSize: p.Z.Sizes.SMALL,
      color: p.Z.Colors.ERROR,
      className: k.errorBlock,
      children: M.intl.string(M.t.tAmECt)
    }, "DEV_SHELF_ERROR") : null, (0, r.jsx)(U, {
      application: G,
      sku: eo,
      isEmbeddedIAP: K
    }), eb && (0, r.jsx)(x.Z, {
      sku: eo
    }), null != ee ? (0, r.jsx)(O.s, {
      giftRecipient: ee
    }) : null, (0, r.jsx)(u.gNt, {
      label: $ ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
      children: null != eu ? (0, r.jsx)(L.B, {
        sku: eo,
        skuPricePreview: eu,
        application: G
      }) : null == q ? (0, r.jsx)(u.$jN, {
        type: u.$jN.Type.WANDERING_CUBES,
        className: k.invoiceSpinner
      }) : (0, r.jsx)(L.E, {
        sku: eo,
        value: ""
      })
    }), (0, r.jsx)(_.ZP, {
      label: M.intl.string(M.t["mmDvV+"]),
      paymentSources: Object.values(B),
      selectedPaymentSourceId: F,
      onChange: a,
      onPaymentSourceAdd: E,
      hidePersonalInformation: ef,
      paymentGatewayRestrictions: es
    }), (0, r.jsxs)(b.Z, {
      isActive: t,
      ref: n,
      children: [(0, r.jsx)(m.Z, {
        onChange: V,
        forceShow: true,
        showWithdrawalWaiver: ep,
        disabled: e_,
        subscriptionPlan: null,
        finePrintClassname: k.fineprint,
        purchaseType: z,
        isGift: $,
        finePrint: (0, r.jsx)(f.Z, {
          paymentSourceType: eh,
          isEmbeddedIAP: K,
          purchaseType: z,
          productLine: eo.productLine,
          isGift: $,
          applicationName: G.name,
          hasAlreadyLinked: !en || er
        })
      }), eE && en && !er && !$ && (0, r.jsx)("div", {
        className: k.socialLayerGameItemDisclaimer,
        children: (0, r.jsx)(u.M14, {
          type: "warning",
          children: M.intl.string(M.t["6fBC//"])
        })
      })]
    })]
  })
}