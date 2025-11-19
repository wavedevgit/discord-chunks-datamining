/** Chunk was on web.js **/
/** chunk id: 481595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk742280 = require("./742280.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk609194 = require("./609194.jsx"),
  Chunk275850 = require("./275850.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk115130 = require("./115130.js"),
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
  Chunk630388 = require("./630388.js"),
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

function k(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: i
  } = e;
  returntrue !== i ? null : (0, r.jsxs)("div", {
    className: j.skuHeading,
    children: [(0, r.jsx)(m.Z, {
      game: t
    }), (0, r.jsx)(c.Heading, {
      variant: "heading-lg/bold",
      className: j.skuHeadingText,
      children: n.name
    })]
  })
}

function U(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: a,
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
  } = (0, N.wD)(), ee = J && (0, C.pO)($), {
    defaultPaymentSourceId: et,
    hasFetchedPaymentSources: en
  } = (0, l.cj)([v.Z], () => ({
    defaultPaymentSourceId: v.Z.defaultPaymentSourceId,
    hasFetchedPaymentSources: v.Z.hasFetchedPaymentSources
  }));
  o()(null != Y, "Expected selectedSkuId");
  let er = V[Y],
    ei = null == er ? true : er.eligiblePaymentGateways,
    ea = H[Y],
    eo = null != Z ? Z : I.c,
    es = null != ea ? ea[eo] : null;
  o()(null != er, "SKU must exist and be fetched."), o()(null != U, "Application must exist.");
  let el = (0, l.e7)([h.Z, T.Z], () => T.Z.inTestModeForApplication(U.id) || h.Z.inDevModeForApplication(U.id), [U.id]),
    ec = (0, l.e7)([y.Z], () => y.Z.enabled),
    eu = s.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
    ed = G === P.A.PURCHASING || G === P.A.COMPLETED,
    ef = (0, D.m)(B, Z),
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
  let ep = null != ei && ei.length > 0 && (Z === I.c || null === e_) && Q ? E.w.SELECT_PAYMENT_METHOD : true,
    eh = er.productLine === x.POd.SOCIAL_LAYER_GAME_ITEM,
    em = ee && !eh;
  return (0, r.jsxs)("div", {
    className: j.stepBody,
    children: [(0, r.jsx)(E.Y, {
      paymentRestrictionBannerType: ep
    }), el ? (0, r.jsx)(f.Z, {
      icon: (0, c.GSL)(S.Z),
      iconSize: f.Z.Sizes.SMALL,
      color: f.Z.Colors.WARNING,
      className: j.errorBlock,
      children: M.intl.string(M.t.OvMyMd)
    }, "TEST_MODE") : null, (0, A.yE)(U.flags, x.udG.EMBEDDED) && q === h.O.ERROR ? (0, r.jsx)(f.Z, {
      icon: (0, c.GSL)(S.Z),
      iconSize: f.Z.Sizes.SMALL,
      color: f.Z.Colors.ERROR,
      className: j.errorBlock,
      children: M.intl.string(M.t.tAmECt)
    }, "DEV_SHELF_ERROR") : null, (0, r.jsx)(k, {
      application: U,
      sku: er,
      isEmbeddedIAP: W
    }), em && (0, r.jsx)(w.Z, {
      sku: er
    }), null != $ ? (0, r.jsx)(b.s, {
      giftRecipient: $
    }) : null, (0, r.jsx)(c.gNt, {
      label: J ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
      children: null != es ? (0, r.jsx)(L.B, {
        sku: er,
        skuPricePreview: es,
        application: U
      }) : null == z ? (0, r.jsx)(c.$jN, {
        type: c.$jN.Type.WANDERING_CUBES,
        className: j.invoiceSpinner
      }) : (0, r.jsx)(L.E, {
        sku: er,
        value: ""
      })
    }), (0, r.jsx)(_.ZP, {
      label: M.intl.string(M.t["mmDvV+"]),
      paymentSources: Object.values(B),
      selectedPaymentSourceId: Z,
      onChange: a,
      onPaymentSourceAdd: m,
      hidePersonalInformation: ec,
      paymentGatewayRestrictions: ei
    }), (0, r.jsxs)(g.Z, {
      isActive: t,
      ref: n,
      children: [(0, r.jsx)(p.Z, {
        onChange: F,
        forceShow: true,
        showWithdrawalWaiver: eu,
        disabled: ed,
        subscriptionPlan: null,
        finePrintClassname: j.fineprint,
        purchaseType: K,
        isGift: J,
        finePrint: (0, r.jsx)(d.Z, {
          paymentSourceType: e_,
          isEmbeddedIAP: W,
          purchaseType: K,
          productLine: er.productLine,
          isGift: J,
          applicationName: U.name
        })
      }), eh && (0, r.jsx)("div", {
        className: j.socialLayerGameItemDisclaimer,
        children: (0, r.jsx)(c.M14, {
          type: "warning",
          children: M.intl.string(M.t["6fBC//"])
        })
      })]
    })]
  })
}