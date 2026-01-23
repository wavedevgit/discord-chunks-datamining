/** Chunk was on web.js **/
/** chunk id: 112242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk997101 = require("./997101.js"),
  Chunk665260 = require("./665260.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830382 = require("./830382.js"),
  Chunk821891 = require("./821891.jsx"),
  Chunk102741 = require("./102741.jsx"),
  Chunk637141 = require("./637141.jsx"),
  Chunk953689 = require("./953689.jsx"),
  Chunk10716 = require("./10716.js"),
  Chunk362490 = require("./362490.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk778307 = require("./778307.jsx"),
  Chunk218075 = require("./218075.jsx"),
  Chunk285719 = require("./285719.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk615405 = require("./615405.js"),
  Chunk295405 = require("./295405.js"),
  Chunk79387 = require("./79387.js"),
  Chunk147964 = require("./147964.js"),
  Chunk603349 = require("./603349.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk566980 = require("./566980.js"),
  Chunk216641 = require("./216641.js"),
  Chunk938136 = require("./938136.jsx"),
  Chunk319820 = require("./319820.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk342444 = require("./342444.js");

function U(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: i
  } = e;
  returntrue !== i ? null : (0, r.jsxs)("div", {
    className: k.qY,
    children: [(0, r.jsx)(E.A, {
      game: t
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: k.nI,
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
    purchaseState: V,
    paymentSources: F,
    paymentSourceId: B,
    setHasAcceptedTerms: H,
    skusById: Y,
    skuPricePreviewsById: W,
    selectedSkuId: K,
    isEmbeddedIAP: z,
    purchaseType: q,
    purchasePreviewError: X,
    devShelfFetchState: Z,
    setPurchasePreviewError: Q,
    hasPaymentSources: $
  } = (0, w.P5)(), {
    isGift: J,
    giftRecipient: ee
  } = (0, R.Pv)(), et = J && (0, N.Ik)(ee), {
    fetched: en,
    hasAlreadyLinked: er
  } = (0, g.RD)(G), {
    defaultPaymentSourceId: ei,
    hasFetchedPaymentSources: ea
  } = (0, c.cf)([I.A], () => ({
    defaultPaymentSourceId: I.A.defaultPaymentSourceId,
    hasFetchedPaymentSources: I.A.hasFetchedPaymentSources
  }));
  s()(null != K, "Expected selectedSkuId");
  let es = Y[K],
    eo = null == es ? true : es.eligiblePaymentGateways,
    el = W[K],
    ec = null != B ? B : S.B,
    eu = null != el ? el[ec] : null;
  s()(null != es, "SKU must exist and be fetched."), s()(null != G, "Application must exist.");
  let ed = (0, c.bG)([m.A, T.A], () => T.A.inTestModeForApplication(G.id) || m.A.inDevModeForApplication(G.id), [G.id]),
    ef = (0, c.bG)([v.A], () => v.A.enabled),
    ep = o.M.EEA_COUNTRIES.has(A.A.ipCountryCodeWithFallback),
    e_ = V === P.h.PURCHASING || V === P.h.COMPLETED,
    eh = (0, D.W)(F, B),
    em = null != eh ? eh.type : null;
  i.useEffect(() => {
    ea && B === ei && ei !== S.B && null == eu && (0, d.QX)(es.applicationId, es.id, ei, {
      isGift: J
    }).then(() => {
      Q(null)
    }).catch(e => {
      Q(e)
    })
  }, [ei, ea, B, es.applicationId, es.id, eu, Q, J]);
  let eg = null != eo && eo.length > 0 && (B === S.B || null === em) && $ ? b.f.SELECT_PAYMENT_METHOD : true,
    eE = es.productLine === j.EZt.SOCIAL_LAYER_GAME_ITEM,
    ey = et && !eE;
  return (0, r.jsxs)("div", {
    className: k.Du,
    children: [(0, r.jsx)(b.j, {
      paymentRestrictionBannerType: eg
    }), ed ? (0, r.jsx)(p.A, {
      icon: (0, u.kHD)(C.A),
      iconSize: p.A.Sizes.SMALL,
      color: p.A.Colors.WARNING,
      className: k.QK,
      children: M.intl.string(M.t.OvMyMd)
    }, "TEST_MODE") : null, (0, l.Lt)(G.flags, j.gfo.EMBEDDED) && Z === m.$.ERROR ? (0, r.jsx)(p.A, {
      icon: (0, u.kHD)(C.A),
      iconSize: p.A.Sizes.SMALL,
      color: p.A.Colors.ERROR,
      className: k.QK,
      children: M.intl.string(M.t.tAmECt)
    }, "DEV_SHELF_ERROR") : null, (0, r.jsx)(U, {
      application: G,
      sku: es,
      isEmbeddedIAP: z
    }), ey && (0, r.jsx)(x.A, {
      sku: es
    }), null != ee ? (0, r.jsx)(O.Z, {
      giftRecipient: ee
    }) : null, (0, r.jsx)(u.D0$, {
      label: J ? M.intl.string(M.t.PEjaCx) : M.intl.string(M.t.sail9P),
      children: null != eu ? (0, r.jsx)(L.h, {
        sku: es,
        skuPricePreview: eu,
        application: G
      }) : null == X ? (0, r.jsx)(u.y$y, {
        type: u.y$y.Type.WANDERING_CUBES,
        className: k.fx
      }) : (0, r.jsx)(L.U, {
        sku: es,
        value: ""
      })
    }), (0, r.jsx)(_.Ay, {
      label: M.intl.string(M.t["mmDvV+"]),
      paymentSources: Object.values(F),
      selectedPaymentSourceId: B,
      onChange: a,
      onPaymentSourceAdd: E,
      hidePersonalInformation: ef,
      paymentGatewayRestrictions: eo
    }), (0, r.jsxs)(y.A, {
      isActive: t,
      ref: n,
      children: [(0, r.jsx)(h.A, {
        onChange: H,
        forceShow: true,
        showWithdrawalWaiver: ep,
        disabled: e_,
        subscriptionPlan: null,
        finePrintClassname: k.im,
        purchaseType: q,
        isGift: J,
        finePrint: (0, r.jsx)(f.A, {
          paymentSourceType: em,
          isEmbeddedIAP: z,
          purchaseType: q,
          productLine: es.productLine,
          isGift: J,
          applicationName: G.name,
          hasAlreadyLinked: !en || er
        })
      }), eE && en && !er && !J && (0, r.jsx)("div", {
        className: k.lm,
        children: (0, r.jsx)(u.wx6, {
          type: "warning",
          children: M.intl.string(M.t["6fBC//"])
        })
      })]
    })]
  })
}