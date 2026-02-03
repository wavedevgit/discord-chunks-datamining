/** Chunk was on web.js **/
/** chunk id: 112242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk997101 = require("./997101.js"),
  Chunk665260 = require("./665260.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
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
  Chunk79387 = require("./79387.js"),
  Chunk147964 = require("./147964.js"),
  Chunk603349 = require("./603349.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk566980 = require("./566980.js"),
  Chunk938136 = require("./938136.jsx"),
  Chunk319820 = require("./319820.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk342444 = require("./342444.js");

function j(e) {
  let {
    application: t,
    sku: n,
    isEmbeddedIAP: i
  } = e;
  returntrue !== i ? null : (0, r.jsxs)("div", {
    className: M.qY,
    children: [(0, r.jsx)(g.A, {
      game: t
    }), (0, r.jsx)(u.Heading, {
      variant: "heading-lg/bold",
      className: M.nI,
      children: n.name
    })]
  })
}

function k(e) {
  var t, n;
  let {
    hasLegalTermsFlash: a,
    legalTermsNodeRef: g,
    onPaymentSourceChange: k,
    handlePaymentSourceAdd: U
  } = e, {
    application: G,
    purchaseState: F,
    paymentSourceId: V,
    setPaymentSourceId: B,
    setHasAcceptedTerms: H,
    skusById: Y,
    skuPricePreviewsById: W,
    selectedSkuId: K,
    isEmbeddedIAP: z,
    purchaseType: q,
    purchasePreviewError: Z,
    devShelfFetchState: Q,
    hasPaymentSources: X,
    checkoutPaymentSources: J,
    hasCheckoutContextLoaded: $
  } = (0, w.P5)(), {
    isGift: ee,
    giftRecipient: et
  } = (0, N.Pv)(), en = ee && (0, C.Ik)(et), {
    fetched: er,
    hasAlreadyLinked: ei
  } = (0, m.RD)(G), ea = (0, O.n)({
    location: "OneTimePurchaseReview"
  });
  o()(null != K, "Expected selectedSkuId");
  let eo = i.useRef(false);
  i.useEffect(() => {
    if ($ && J.length > 0 && !eo.current) {
      var e;
      eo.current = true, B((null != (e = J.find(e => e.enabled)) ? e : J[0]).id)
    }
  }, [$, J, B]);
  let es = Y[K],
    el = null == es ? true : es.eligiblePaymentGateways,
    ec = W[K],
    eu = null != V ? V : I.B,
    ed = J.length > 0,
    ef = null != ec ? null != (t = ec[eu]) ? t : ed ? ec[I.B] : null : null;
  o()(null != es, "SKU must exist and be fetched."), o()(null != G, "Application must exist.");
  let ep = (0, c.bG)([h.A, S.A], () => S.A.inTestModeForApplication(G.id) || h.A.inDevModeForApplication(G.id), [G.id]),
    e_ = (0, c.bG)([v.A], () => v.A.enabled),
    eh = s.M.EEA_COUNTRIES.has(A.A.ipCountryCodeWithFallback),
    em = F === R.h.PURCHASING || F === R.h.COMPLETED,
    eg = null != (n = J.find(e => e.id === V)) ? n : null,
    eE = null != eg ? eg.type : null,
    ey = null != el && el.length > 0 && (V === I.B || null === eE) && X ? y.f.SELECT_PAYMENT_METHOD : true,
    eb = es.productLine === L.EZt.SOCIAL_LAYER_GAME_ITEM,
    eO = en && !eb;
  return (0, r.jsxs)("div", {
    className: M.Du,
    children: [(0, r.jsx)(y.j, {
      paymentRestrictionBannerType: ey
    }), ep ? (0, r.jsx)(f.A, {
      icon: (0, u.kHD)(T.A),
      iconSize: f.A.Sizes.SMALL,
      color: f.A.Colors.WARNING,
      className: M.QK,
      children: x.intl.string(x.t.OvMyMd)
    }, "TEST_MODE") : null, (0, l.Lt)(G.flags, L.gfo.EMBEDDED) && Q === h.$.ERROR ? (0, r.jsx)(f.A, {
      icon: (0, u.kHD)(T.A),
      iconSize: f.A.Sizes.SMALL,
      color: f.A.Colors.ERROR,
      className: M.QK,
      children: x.intl.string(x.t.tAmECt)
    }, "DEV_SHELF_ERROR") : null, (0, r.jsx)(j, {
      application: G,
      sku: es,
      isEmbeddedIAP: z
    }), eO && (0, r.jsx)(P.A, {
      sku: es
    }), null != et ? (0, r.jsx)(b.Z, {
      giftRecipient: et
    }) : null, $ || null != Z ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.D0$, {
        label: ee ? x.intl.string(x.t.PEjaCx) : x.intl.string(x.t.sail9P),
        children: null != ef ? (0, r.jsx)(D.h, {
          sku: es,
          skuPricePreview: ef,
          application: G
        }) : (0, r.jsx)(D.U, {
          sku: es,
          value: ""
        })
      }), (0, r.jsx)(p.A, {
        label: x.intl.string(x.t["mmDvV+"]),
        paymentSources: J,
        selectedPaymentSourceId: V,
        onChange: k,
        onPaymentSourceAdd: U,
        hidePersonalInformation: e_,
        paymentGatewayRestrictions: el
      })]
    }) : (0, r.jsx)(u.y$y, {
      type: u.y$y.Type.WANDERING_CUBES,
      className: M.fx
    }), (0, r.jsxs)(E.A, {
      isActive: a,
      ref: g,
      children: [(0, r.jsx)(_.A, {
        onChange: H,
        forceShow: true,
        showWithdrawalWaiver: eh,
        disabled: em,
        subscriptionPlan: null,
        finePrintClassname: M.im,
        purchaseType: q,
        isGift: ee,
        finePrint: (0, r.jsx)(d.A, {
          paymentSourceType: eE,
          isEmbeddedIAP: z,
          purchaseType: q,
          productLine: es.productLine,
          isGift: ee,
          applicationName: G.name,
          hasAlreadyLinked: !er || ei
        })
      }), eb && er && !ei && !ee && (0, r.jsx)("div", {
        className: M.lm,
        children: (0, r.jsx)(u.wx6, {
          type: "warning",
          children: x.intl.string(ea ? x.t["3pLGHL"] : x.t["6fBC//"])
        })
      })]
    })]
  })
}