/** Chunk was on web.js **/
/** chunk id: 112242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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
  Chunk938289 = require("./938289.js"),
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

function G(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: i
  } = e;
  returntrue !== i ? null : (0, r.jsxs)("div", {
    className: U.qY,
    children: [(0, r.jsx)(E.A, {
      game: t
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: U.nI,
      children: n.name
    })]
  })
}

function V(e) {
  let {
    hasLegalTermsFlash: t,
    legalTermsNodeRef: n,
    onPaymentSourceChange: a,
    handlePaymentSourceAdd: E
  } = e, {
    application: V,
    purchaseState: F,
    paymentSources: B,
    paymentSourceId: H,
    setHasAcceptedTerms: Y,
    skusById: W,
    skuPricePreviewsById: K,
    selectedSkuId: z,
    isEmbeddedIAP: q,
    purchaseType: Z,
    purchasePreviewError: Q,
    devShelfFetchState: X,
    setPurchasePreviewError: J,
    hasPaymentSources: $
  } = (0, P.P5)(), {
    isGift: ee,
    giftRecipient: et
  } = (0, R.Pv)(), en = ee && (0, w.Ik)(et), {
    fetched: er,
    hasAlreadyLinked: ei
  } = (0, g.RD)(V), ea = (0, v.n)({
    location: "OneTimePurchaseReview"
  }), {
    defaultPaymentSourceId: eo,
    hasFetchedPaymentSources: es
  } = (0, c.cf)([S.A], () => ({
    defaultPaymentSourceId: S.A.defaultPaymentSourceId,
    hasFetchedPaymentSources: S.A.hasFetchedPaymentSources
  }));
  o()(null != z, "Expected selectedSkuId");
  let el = W[z],
    ec = null == el ? true : el.eligiblePaymentGateways,
    eu = K[z],
    ed = null != H ? H : T.B,
    ef = null != eu ? eu[ed] : null;
  o()(null != el, "SKU must exist and be fetched."), o()(null != V, "Application must exist.");
  let ep = (0, c.bG)([m.A, C.A], () => C.A.inTestModeForApplication(V.id) || m.A.inDevModeForApplication(V.id), [V.id]),
    e_ = (0, c.bG)([A.A], () => A.A.enabled),
    eh = s.M.EEA_COUNTRIES.has(I.A.ipCountryCodeWithFallback),
    em = F === D.h.PURCHASING || F === D.h.COMPLETED,
    eg = (0, L.W)(B, H),
    eE = null != eg ? eg.type : null;
  i.useEffect(() => {
    es && H === eo && eo !== T.B && null == ef && (0, d.QX)(el.applicationId, el.id, eo, {
      isGift: ee
    }).then(() => {
      J(null)
    }).catch(e => {
      J(e)
    })
  }, [eo, es, H, el.applicationId, el.id, ef, J, ee]);
  let ey = null != ec && ec.length > 0 && (H === T.B || null === eE) && $ ? b.f.SELECT_PAYMENT_METHOD : true,
    eb = el.productLine === j.EZt.SOCIAL_LAYER_GAME_ITEM,
    eO = en && !eb;
  return (0, r.jsxs)("div", {
    className: U.Du,
    children: [(0, r.jsx)(b.j, {
      paymentRestrictionBannerType: ey
    }), ep ? (0, r.jsx)(p.A, {
      icon: (0, u.kHD)(N.A),
      iconSize: p.A.Sizes.SMALL,
      color: p.A.Colors.WARNING,
      className: U.QK,
      children: k.intl.string(k.t.OvMyMd)
    }, "TEST_MODE") : null, (0, l.Lt)(V.flags, j.gfo.EMBEDDED) && X === m.$.ERROR ? (0, r.jsx)(p.A, {
      icon: (0, u.kHD)(N.A),
      iconSize: p.A.Sizes.SMALL,
      color: p.A.Colors.ERROR,
      className: U.QK,
      children: k.intl.string(k.t.tAmECt)
    }, "DEV_SHELF_ERROR") : null, (0, r.jsx)(G, {
      application: V,
      sku: el,
      isEmbeddedIAP: q
    }), eO && (0, r.jsx)(x.A, {
      sku: el
    }), null != et ? (0, r.jsx)(O.Z, {
      giftRecipient: et
    }) : null, (0, r.jsx)(u.D0$, {
      label: ee ? k.intl.string(k.t.PEjaCx) : k.intl.string(k.t.sail9P),
      children: null != ef ? (0, r.jsx)(M.h, {
        sku: el,
        skuPricePreview: ef,
        application: V
      }) : null == Q ? (0, r.jsx)(u.y$y, {
        type: u.y$y.Type.WANDERING_CUBES,
        className: U.fx
      }) : (0, r.jsx)(M.U, {
        sku: el,
        value: ""
      })
    }), (0, r.jsx)(_.A, {
      label: k.intl.string(k.t["mmDvV+"]),
      paymentSources: Object.values(B),
      selectedPaymentSourceId: H,
      onChange: a,
      onPaymentSourceAdd: E,
      hidePersonalInformation: e_,
      paymentGatewayRestrictions: ec
    }), (0, r.jsxs)(y.A, {
      isActive: t,
      ref: n,
      children: [(0, r.jsx)(h.A, {
        onChange: Y,
        forceShow: true,
        showWithdrawalWaiver: eh,
        disabled: em,
        subscriptionPlan: null,
        finePrintClassname: U.im,
        purchaseType: Z,
        isGift: ee,
        finePrint: (0, r.jsx)(f.A, {
          paymentSourceType: eE,
          isEmbeddedIAP: q,
          purchaseType: Z,
          productLine: el.productLine,
          isGift: ee,
          applicationName: V.name,
          hasAlreadyLinked: !er || ei
        })
      }), eb && er && !ei && !ee && (0, r.jsx)("div", {
        className: U.lm,
        children: (0, r.jsx)(u.wx6, {
          type: "warning",
          children: k.intl.string(ea ? k.t["3pLGHL"] : k.t["6fBC//"])
        })
      })]
    })]
  })
}