/** Chunk was on web.js **/
/** chunk id: 998678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KP: () => ev,
  Y: () => eO
}), require("./896048.js"), require("./457529.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk493405 = require("./493405.js"),
  Chunk391048 = require("./391048.js"),
  Chunk73079 = require("./73079.jsx"),
  Chunk15373 = require("./15373.jsx"),
  Chunk229403 = require("./229403.jsx"),
  Chunk959391 = require("./959391.jsx"),
  Chunk891197 = require("./891197.jsx"),
  Chunk202626 = require("./202626.jsx"),
  Chunk893234 = require("./893234.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk550238 = require("./550238.js"),
  Chunk648335 = require("./648335.js"),
  Chunk6332 = require("./6332.jsx"),
  Chunk182533 = require("./182533.jsx"),
  Chunk211528 = require("./211528.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk69494 = require("./69494.jsx"),
  Chunk19311 = require("./19311.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk617745 = require("./617745.jsx"),
  Chunk869177 = require("./869177.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk615405 = require("./615405.js"),
  Chunk825755 = require("./825755.js"),
  Chunk153084 = require("./153084.js"),
  Chunk295405 = require("./295405.js"),
  Chunk293700 = require("./293700.js"),
  Chunk67480 = require("./67480.js"),
  Chunk723702 = require("./723702.js"),
  Chunk71532 = require("./71532.js"),
  Chunk427262 = require("./427262.js"),
  Chunk251913 = require("./251913.js"),
  Chunk68231 = require("./68231.js"),
  Chunk632638 = require("./632638.jsx"),
  Chunk218075 = require("./218075.jsx"),
  Chunk682449 = require("./682449.js"),
  Chunk490581 = require("./490581.js"),
  Chunk168984 = require("./168984.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk240452 = require("./240452.js"),
  Chunk676032 = require("./676032.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ea(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ei(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function eo(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = es(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function es(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let el = new Chunk626584.A("AddPaymentStep.tsx"),
  ec = {
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  },
  eu = {
    email: "",
    name: "",
    country: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: ""
  };

function ed(e) {
  let {
    paymentSourceTypeRestrictions: t
  } = e, n = null != t && t.length > 0 ? q.f.ADD_NEW_PAYMENT_METHOD : true;
  return (0, r.jsxs)("div", {
    className: ee.rf,
    children: [(0, r.jsx)(q.j, {
      paymentRestrictionBannerType: n
    }), (0, r.jsx)(_.A, er({}, e))]
  })
}

function ef(e) {
  let {
    onCardInfoChange: t
  } = e, n = (0, l.bG)([k.A], () => k.A.error);
  return (0, r.jsx)("div", {
    className: ee.rf,
    children: (0, r.jsx)(y.A, {
      billingError: n,
      onCardInfoChange: t
    })
  })
}

function ep() {
  return (0, r.jsx)("div", {
    className: ee.rf,
    children: (0, r.jsx)(h.A, {})
  })
}

function e_() {
  return (0, r.jsx)("div", {
    className: ee.rf,
    children: (0, r.jsx)(m.A, {})
  })
}

function eh() {
  return (0, r.jsx)("div", {
    className: ee.rf,
    children: (0, r.jsx)(X.A, {})
  })
}

function em() {
  let e = (0, l.bG)([j.A], () => j.A.isBusy),
    t = (0, l.bG)([k.A], () => k.A.stripePaymentMethod);
  return (0, r.jsx)(b.y, {
    className: ee.rf,
    stripePaymentMethod: t,
    submitting: e
  })
}

function eg(e) {
  let {
    billingAddressInfo: t,
    onBillingAddressChange: n,
    paymentSourceType: i
  } = e, a = (0, l.bG)([k.A], () => k.A.error);
  return (0, r.jsx)("div", {
    className: ee.rf,
    children: (0, r.jsx)(g.n, {
      billingAddressInfo: t,
      billingError: a,
      onBillingAddressChange: n,
      paymentSourceType: i
    })
  })
}

function eE() {
  return (0, r.jsx)(E.N, {
    className: ee.rf
  })
}

function ey(e) {
  return () => (null != k.A.error && (0, p.ET)(), e())
}

function eb(e) {
  let {
    onPrimary: t,
    onBack: n
  } = e, i = eo(e, ["onPrimary", "onBack"]), a = t;
  null != t && (a = ey(t));
  let o = n;
  return null != n && (o = ey(n)), (0, r.jsx)(P.A, ea(er({}, i), {
    onPrimary: a,
    onBack: o
  }))
}

function eO(e) {
  var t;
  let n, o, u, _, {
      paymentModalArgs: h,
      initialStep: m,
      prependSteps: g,
      appendSteps: E,
      onReturn: y,
      onComplete: b,
      onStepChange: O,
      breadcrumpSteps: C,
      currentBreadcrumpStep: j,
      header: U,
      analyticsData: F,
      analyticsLocation: W,
      hideBreadcrumbs: q = false,
      usePaymentModalStep: X = false,
      isEligibleForTrial: en = false,
      allowDesktopRedirectPurchase: ei = false,
      toastContent: eo,
      continueSessionToInitialStep: es,
      overwriteSubscriptionPaymentSource: ec = false
    } = e,
    {
      stripe: eu,
      contextMetadata: ey,
      activitySessionId: eO,
      paymentElementsEnabled: ev
    } = (0, N.P5)(),
    eA = i.useMemo(() => {
      let e = m === w.pn.PAYMENT_TYPE || m === w.pn.PAYMENT_ELEMENT;
      return ev && e ? ei ? w.pn.AWAITING_BROWSER_CHECKOUT : w.pn.PAYMENT_ELEMENT : m
    }, [ev, m, ei]),
    eI = i.useMemo(() => (0, Y.Gn)(), []),
    {
      CREDIT_CARD_STEPS: eS,
      PAYPAL_STEPS: eT,
      IDEAL_STEPS: eC,
      PAYMENT_REQUEST_STEPS: eN,
      VENMO_STEPS: ew,
      ADD_PAYMENT_STEPS: eR,
      PRZELEWY24_STEPS: eP,
      EPS_STEPS: eD,
      CASH_APP_STEPS: eL,
      PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ex
    } = (0, K.kh)({
      prependSteps: g,
      appendSteps: E,
      paymentElementsEnabled: ev
    });

  function eM(e) {
    switch (e) {
      case w.pn.CREDIT_CARD_INFORMATION:
        return eS;
      case w.pn.CASH_APP_INFORMATION:
        return eL;
      default:
        return {
          steps: [w.pn.ADD_PAYMENT_STEPS]
        }
    }
  }
  let [ej, ek] = i.useState(eA), [eU, eG] = i.useState(null), [eF, eV] = i.useState(eM(eA)), eB = (0, l.bG)([k.A], () => k.A.redirectedPaymentSourceId), eH = (0, l.bG)([Q.A], () => Q.A.cashAppPayComponent), eY = {
    completeSteps: tu,
    setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
  }, eW = i.useRef(eY);
  i.useEffect(() => {
    eW.current = eY
  }), i.useEffect(() => {
    let {
      completeSteps: e,
      setIsSubmittingCurrentStep: t
    } = eW.current;
    (async () => {
      if (null == eB) return;
      await (0, d.$o)();
      let n = G.A.getPaymentSource(eB);
      null != n && (e(n), t(false), k.A.clearRedirectedPaymentSourceId())
    })()
  }, [eB]);
  let eK = i.useCallback(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    eG(null), ek(e), t && O({
      currentStep: ej,
      toStep: e
    })
  }, [ej, O]);

  function ez(e) {
    (0, c.showToast)((0, c.createToast)(true !== eo ? eo : $.intl.string($.t["VJPg+l"]), c.ToastType.SUCCESS, {
      position: c.ToastPosition.BOTTOM
    })), b(ej, e), eK(eA, false)
  }
  let [eq, eZ] = i.useState(null), {
    setPaymentSourceId: eQ,
    creditCardState: eX,
    setCreditCardState: eJ,
    tokenState: e$,
    setTokenState: e0,
    isSubmittingCurrentStep: e1,
    billingAddressState: e2,
    setBillingAddressState: e3,
    setIsSubmittingCurrentStep: e6,
    hasRedirectURL: e4,
    setHasRedirectURL: e5,
    braintreeEmail: e7,
    braintreeNonce: e8,
    venmoUsername: e9,
    adyenPaymentData: te,
    isAuthenticating: tt,
    epsBankState: tn,
    setEpsBankState: tr,
    p24BankState: ti,
    setP24BankState: ta,
    selectedSkuId: to
  } = h, ts = null != to ? to : "", tl = (0, l.bG)([V.A], () => V.A.get(ts), [ts]), tc = null == tl || null == (t = tl.eligiblePaymentGateways) ? true : t.map(e => e.valueOf());

  function tu(e) {
    eQ(e.id), ez(e)
  }
  let td = !(0, B.isDesktop)() || ei ? ["googlePay", "applePay"] : [],
    [tf, tp] = i.useState(false),
    t_ = i.useRef(null),
    th = () => {
      null != t_.current && t_.current.show()
    },
    {
      shouldRenderPaymentElement: tm,
      paymentElementReady: tg,
      paymentElementSelectedType: tE,
      handlePaymentElementStep: ty,
      onBackFromPaymentElement: tb,
      combinedStripeElementsRef: tO,
      lastConfirmedSetupIntentRef: tv,
      stripePaymentElementProps: tA,
      stripeAddressElementProps: tI,
      addressElementKey: tS,
      remountAddressElement: tT
    } = (0, T.Lw)({
      step: ej,
      continueSessionToInitialStep: es,
      paymentElementsEnabled: ev,
      handleStepChange: eK,
      logger: el,
      shouldLogOnChangeEvents: eI || false,
      onBillingAddressChange: (e, t) => {
        e3({
          info: er({}, e2.info, e),
          isValid: t
        })
      }
    }),
    tC = i.useCallback((e, t) => ev && null != t && (0, A.PE)(e) ? () => ty(e) : () => eK(w.pn.PAYMENT_TYPE), [ev, ty, eK]);
  switch (ej) {
    case w.pn.ATTEMPT_GOOGLE_PAY:
    case w.pn.ATTEMPT_APPLE_PAY:
    case w.pn.PAYMENT_TYPE:
      let tN = (e, t) => {
          switch (e) {
            case J.he.CARD:
              ei ? eK(w.pn.AWAITING_BROWSER_CHECKOUT) : (eV(eS), eK(w.pn.CREDIT_CARD_INFORMATION));
              break;
            case J.he.PAYPAL:
              eV(eT), eK(w.pn.PAYPAL_INFORMATION);
              break;
            case J.he.VENMO:
              eV(ew), eK(w.pn.VENMO_INFORMATION);
              break;
            case J.he.PAYMENT_REQUEST:
              ei && "googlePay" === t ? eK(w.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : ei && "applePay" === t ? eK(w.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eV(eN), eK(w.pn.PAYMENT_REQUEST_INFORMATION));
              break;
            case J.he.PRZELEWY24:
              eV(eP), eK(w.pn.PRZELEWY24_INFORMATION);
              break;
            case J.he.EPS:
              eV(eD), eK(w.pn.EPS_INFORMATION);
              break;
            case J.he.IDEAL:
              eV(eC), eK(w.pn.IDEAL_INFORMATION);
              break;
            case J.he.CASH_APP:
              eV(eL), eK(w.pn.CASH_APP_INFORMATION);
              break;
            case J.he.GIROPAY:
            case J.he.PAYSAFE_CARD:
            case J.he.GCASH:
            case J.he.GRABPAY_MY:
            case J.he.MOMO_WALLET:
            case J.he.KAKAOPAY:
            case J.he.GOPAY_WALLET:
            case J.he.BANCONTACT:
              eV({
                steps: [...g, ...K.GC, ...E],
                methodType: e
              }), eK(w.pn.ADDRESS)
          }
          null != k.A.error && (0, p.ET)()
        },
        tw = (e, t) => {
          e3(e => ea(er({}, e), {
            info: t
          })), eV(eN), tu(e)
        };
      const tR = () => {
        eV(eR), eK(w.pn.PAYMENT_TYPE)
      };
      let tP = async (e, t) => {
        if ((0, p.mf)(e), null == e) return void tR();
        eZ(e);
        let {
          billingAddressInfo: n
        } = (0, H.uK)(e), r = v.V.every(e => {
          let t = n[e];
          return null != t && "" !== t
        });
        if ((null == n.name || "" === n.name) && null != t && (n.name = t), e3({
            isValid: r,
            info: n
          }), !r) return void eK(w.pn.ADDRESS);
        try {
          let t = await (0, d.Tv)(e, n, W);
          tw(t, n)
        } catch (e) {
          tR()
        }
      };
      if (ej === w.pn.ATTEMPT_GOOGLE_PAY || ej === w.pn.ATTEMPT_APPLE_PAY) {
        let e = $.intl.string(ej === w.pn.ATTEMPT_APPLE_PAY ? $.t.czhXDv : $.t.Zj2xQ0),
          t = $.intl.string(ej === w.pn.ATTEMPT_APPLE_PAY ? $.t.WoXvJL : $.t.wnVVr0);
        n = (0, r.jsx)(x.V, {
          onChooseType: tN,
          paymentRequestWallet: ej === w.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
          onStripePaymentMethodReceived: tP,
          onPaymentRequestFailure: () => {
            tN(J.he.CARD), eG(e)
          },
          onValidPaymentRequest: () => tp(true),
          paymentRequestRef: t_
        }), o = (0, r.jsx)(eb, {
          onBack: () => eK(w.pn.PAYMENT_TYPE),
          primaryCTA: P.A.CTAType.CONTINUE,
          primaryText: t,
          onPrimary: () => th(),
          primaryDisabled: !tf
        });
        break
      }
      n = (0, r.jsx)(ed, {
        onChooseType: tN,
        onStripePaymentMethodReceived: tP,
        paymentRequestWallets: td,
        isEligibleForTrial: en,
        paymentRequestPaymentContext: {
          contextMetadata: ey,
          activitySessionId: eO
        },
        paymentSourceTypeRestrictions: tc
      }), o = (0, r.jsx)(eb, {
        onBack: y
      });
      break;
    case w.pn.PAYMENT_ELEMENT:
      if (!ev) throw (0, d.ne)("Payment Elements not enabled, invalid step", true);
      let tD = async () => {
        e6(true);
        try {
          if (null == tE || !(0, A.PE)(tE)) throw (0, d.ne)("Valid Payment Element source type not found", true);
          let {
            steps: e,
            methodType: t
          } = ex[tE];
          if (eV({
              steps: e,
              methodType: t === J.he.UNKNOWN ? tE : t
            }), tE === J.he.PAYMENT_REQUEST) {
            let e = tO.current,
              {
                paymentMethod: t
              } = await (0, d.YB)(eu, e),
              {
                billingAddressInfo: n
              } = (0, H.uK)(t);
            e3(e => ea(er({}, e), {
              info: n
            })), tT(), eK(w.pn.ADDRESS)
          } else {
            let e = (0, A.eI)(tE);
            null != e ? eK(e) : eK(w.pn.ADDRESS)
          }
        } catch (t) {
          var e;
          el.error("Error on submitting Payment Element step: ", null != (e = t.message) ? e : JSON.stringify(t))
        } finally {
          e6(false)
        }
      };
      n = null, o = (0, r.jsx)(eb, {
        onBack: () => {
          tb(), null == y || y()
        },
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: $.intl.string($.t.PDTjLN),
        primarySubmitting: e1,
        primaryDisabled: !tg,
        onPrimary: tD
      });
      break;
    case w.pn.CREDIT_CARD_INFORMATION:
      let tL = async e => {
        e6(true);
        try {
          let t = await (0, d.YJ)(eu, e);
          e0({
            token: t
          }), eK(w.pn.ADDRESS)
        } catch (e) {
          var t;
          el.error(null != (t = e.message) ? t : JSON.stringify(e))
        } finally {
          e6(false)
        }
      };
      n = (0, r.jsx)(ef, {
        onCardInfoChange: (e, t) => {
          eJ({
            info: e,
            isValid: t
          }), e3(t => ea(er({}, t), {
            info: ea(er({}, t.info), {
              name: e.name
            })
          }))
        }
      });
      let tx = !eX.isValid,
        tM = () => {
          eK(w.pn.PAYMENT_TYPE)
        };
      o = (0, r.jsx)(a.ElementsConsumer, {
        children: e => {
          let {
            elements: t
          } = e;
          return (0, r.jsx)(eb, {
            onBack: tM,
            primaryCTA: P.A.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: $.intl.string($.t.PDTjLN),
            primarySubmitting: e1,
            primaryDisabled: tx,
            onPrimary: () => tL(t)
          })
        }
      });
      break;
    case w.pn.AWAITING_BROWSER_CHECKOUT:
    case w.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
    case w.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
      let tj = () => {
          eV(eS), eK(ev ? w.pn.PAYMENT_ELEMENT : w.pn.CREDIT_CARD_INFORMATION)
        },
        tk = () => {
          ev ? (tb(), null == y || y()) : (eV(eR), eK(w.pn.PAYMENT_TYPE))
        };
      n = (0, r.jsx)("div", {
        className: ee.rf,
        children: (0, r.jsx)(L.t, {
          step: ej,
          onPurchaseComplete: () => b(ej),
          onHandoffFailure: tj
        })
      }), o = (0, r.jsx)(L.q, {
        onPrimaryClick: tj,
        onBackClick: tk
      });
      break;
    case w.pn.EPS_INFORMATION:
      n = (0, r.jsx)(S.A, {
        type: J.he.EPS,
        onAccountHolderNameChange: e => e3({
          info: ea(er({}, e2.info), {
            name: e
          }),
          isValid: e2.isValid
        }),
        onEPSBankChange: e => tr(e),
        epsBankValue: tn,
        billingAddressInfo: e2.info
      });
      let tU = tC(J.he.EPS, tE);
      o = (0, r.jsx)(eb, {
        onBack: tU,
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: $.intl.string($.t.PDTjLN),
        primaryDisabled: true === tn || "" === tn || "" === e2.info.name,
        onPrimary: () => eK(w.pn.ADDRESS)
      });
      break;
    case w.pn.IDEAL_INFORMATION:
      n = (0, r.jsx)(I.A, {
        type: J.he.IDEAL,
        onAccountHolderNameChange: e => e3({
          info: ea(er({}, e2.info), {
            name: e
          }),
          isValid: e2.isValid
        }),
        billingAddressInfo: e2.info
      }), o = (0, r.jsx)(eb, {
        onBack: () => eK(w.pn.PAYMENT_TYPE),
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: $.intl.string($.t.PDTjLN),
        primaryDisabled: "" === e2.info.name,
        onPrimary: () => eK(w.pn.ADDRESS)
      });
      break;
    case w.pn.PRZELEWY24_INFORMATION:
      n = (0, r.jsx)(S.A, {
        type: J.he.PRZELEWY24,
        onNameChange: e => e3({
          info: ea(er({}, e2.info), {
            name: e
          }),
          isValid: e2.isValid
        }),
        onEmailChange: e => e3({
          info: ea(er({}, e2.info), {
            email: e
          }),
          isValid: e2.isValid
        }),
        onP24BankChange: e => {
          ta(e)
        },
        p24BankValue: ti,
        billingAddressInfo: e2.info
      });
      let tG = tC(J.he.PRZELEWY24, tE);
      o = (0, r.jsx)(eb, {
        onBack: tG,
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: $.intl.string($.t.PDTjLN),
        primaryDisabled: true === e2.info.name || "" === e2.info.name || true === e2.info.email || "" === e2.info.email || true === ti || "" === ti,
        onPrimary: () => eK(w.pn.ADDRESS)
      });
      break;
    case w.pn.PAYPAL_INFORMATION:
      let tF = 0 !== e7.length && null != e8;
      n = (0, r.jsx)(ep, {});
      let tV = tC(J.he.PAYPAL, tE);
      o = (0, r.jsx)(eb, {
        onBack: tV,
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: tF ? $.intl.string($.t.PDTjLN) : $.intl.string($.t.Djzd7L),
        onPrimary: () => tF ? eK(w.pn.ADDRESS) : (0, f.$e)()
      });
      break;
    case w.pn.VENMO_INFORMATION:
      let tB = 0 !== e9.length && null != e8;
      n = (0, r.jsx)(e_, {});
      let tH = tC(J.he.VENMO, tE);
      o = (0, r.jsx)(eb, {
        onBack: tH,
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: tB ? $.intl.string($.t.PDTjLN) : $.intl.string($.t["4KoTLM"]),
        onPrimary: () => tB ? eK(w.pn.ADDRESS) : (0, f.jR)()
      });
      break;
    case w.pn.PAYMENT_REQUEST_INFORMATION:
      n = (0, r.jsx)(em, {}), o = (0, r.jsx)(eb, {
        onBack: () => eK(w.pn.PAYMENT_TYPE)
      });
      break;
    case w.pn.CASH_APP_INFORMATION:
      let tY = null != te,
        tW = null != eH;
      n = (0, r.jsx)(eh, {});
      let tK = tC(J.he.CASH_APP, tE);
      o = (0, r.jsx)(eb, {
        onBack: tK,
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: tY ? $.intl.string($.t.PDTjLN) : $.intl.string($.t["9ALP8w"]),
        onPrimary: () => tY ? eK(w.pn.ADDRESS) : (0, Z.uy)(),
        primaryDisabled: !tW
      });
      break;
    case w.pn.ADDRESS:
      let tz = ev && null != tE,
        tq = async () => {
          e6(true);
          let e = tz ? tE : eF.methodType,
            t = [eu, tO.current, {
              billingAddress: e2.info,
              paymentSourceType: null != e ? e : J.he.UNKNOWN,
              lastConfirmedSetupIntentRef: tv
            }, W];
          switch (e) {
            case J.he.PAYMENT_REQUEST:
              if (tz) {
                try {
                  let e = await (0, d.im)(...t);
                  tu(e)
                } catch (e) {
                  e6(false), el.warn("Error confirming Payment Element source for Payment Request: ", e)
                }
                break
              }
              if (null == eq) throw tR(), (0, d.i0)("Missing paymentRequestPaymentMethod");
              tu(await (0, d.Tv)(eq, e2.info, W));
              break;
            case J.he.CARD:
              try {
                let e = tz ? await (0, d.im)(...t) : await (0, d.u6)(eu, e$.token, e2.info, W);
                tu(e)
              } catch (e) {}
              break;
            case J.he.VENMO:
            case J.he.PAYPAL:
              try {
                s()(null != e8, "Missing braintreeNonce");
                let e = await (0, d.u1)(e8, e2.info, W);
                tu(e)
              } catch (e) {}
              break;
            case J.he.EPS:
              try {
                let e = await (0, d.Z9)(eu, tn, e2.info, W);
                tu(e)
              } catch (e) {
                el.warn(e)
              }
              break;
            case J.he.IDEAL:
              try {
                let e = tz ? await (0, d.im)(...t) : await (0, d.EB)(eu, e2.info, W);
                tu(e)
              } catch (e) {
                el.warn(e)
              }
              break;
            case J.he.PRZELEWY24:
              try {
                if (true === ti) throw (0, d.i0)("Bank required for Przelewy24");
                let e = await (0, d.TD)(eu, {
                  p24Bank: ti
                }, e2.info, W);
                tu(e)
              } catch (e) {}
              break;
            case J.he.PAYSAFE_CARD:
            case J.he.GRABPAY_MY:
              try {
                let t = await (0, d.A8)(e2.info, e, W);
                tu(t)
              } catch (e) {}
              break;
            case J.he.GCASH:
            case J.he.MOMO_WALLET:
            case J.he.KAKAOPAY:
            case J.he.GOPAY_WALLET:
              try {
                let {
                  redirectConfirmation: t
                } = await (0, d.$M)(e2.info, e, W);
                e5(t)
              } catch (e) {}
              break;
            case J.he.GIROPAY:
            case J.he.BANCONTACT:
              try {
                let t = await (0, d.bw)(eu, e2.info, e, W);
                tu(t)
              } catch (e) {}
              break;
            case J.he.CASH_APP:
              try {
                s()(null != te, "Missing adyenPaymentData");
                let {
                  paymentSource: t
                } = await (0, d.$M)(e2.info, e, W, te, ec);
                s()(null != t, "Cash App Pay Payment Source missing"), tu(t)
              } catch (e) {}
              break;
            default:
              throw Error("unknown step not handled")
          }
          e4 || e6(false)
        };
      switch (eF.methodType) {
        case J.he.CARD:
          _ = w.pn.CREDIT_CARD_INFORMATION, u = J.he.CARD;
          break;
        case J.he.PAYPAL:
          _ = w.pn.PAYPAL_INFORMATION, u = J.he.PAYPAL;
          break;
        case J.he.VENMO:
          _ = w.pn.VENMO_INFORMATION, u = J.he.VENMO;
          break;
        case J.he.GIROPAY:
          _ = w.pn.PAYMENT_TYPE, u = J.he.GIROPAY;
          break;
        case J.he.PAYSAFE_CARD:
        case J.he.GCASH:
        case J.he.GRABPAY_MY:
        case J.he.MOMO_WALLET:
        case J.he.KAKAOPAY:
        case J.he.GOPAY_WALLET:
        case J.he.BANCONTACT:
          _ = w.pn.PAYMENT_TYPE, u = eF.methodType;
          break;
        case J.he.EPS:
          _ = w.pn.EPS_INFORMATION, u = J.he.EPS;
          break;
        case J.he.IDEAL:
          _ = w.pn.IDEAL_INFORMATION, u = J.he.IDEAL;
          break;
        case J.he.PRZELEWY24:
          _ = w.pn.PRZELEWY24_INFORMATION, u = J.he.PRZELEWY24;
          break;
        case J.he.CASH_APP:
          _ = w.pn.CASH_APP_INFORMATION, u = J.he.CASH_APP;
          break;
        default:
          _ = w.pn.PAYMENT_TYPE, u = J.he.CARD
      }
      tz && (_ = w.pn.PAYMENT_ELEMENT), n = tz ? null : (0, r.jsx)(eg, {
        billingAddressInfo: e2.info,
        onBillingAddressChange: (e, t) => {
          e3({
            info: er({}, e2.info, e),
            isValid: t
          })
        },
        paymentSourceType: u
      }), o = (0, r.jsx)(eb, {
        onBack: () => eK(_),
        primaryCTA: P.A.CTAType.CONTINUE,
        primaryText: $.intl.string($.t.PDTjLN),
        primarySubmitting: e1,
        primaryDisabled: !e2.isValid || tt,
        onPrimary: tq
      });
      break;
    case w.pn.AWAITING_AUTHENTICATION:
      n = (0, r.jsx)(eE, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(ej))
  }
  let tZ = ev && tm,
    tQ = tZ ? "combined_stripe_elements" : true,
    tX = (0, r.jsxs)(c.YC2, {
      className: et.C9,
      staticClassName: et.a2,
      animatedNodeClassName: et.L2,
      fillParent: true,
      overrideKey: tQ,
      step: ej,
      steps: eF.steps,
      sideMargin: 20,
      children: [null != eU && (0, r.jsx)("div", {
        className: ee.Ns,
        children: (0, r.jsx)(c.wx6, {
          type: "info",
          children: eU
        })
      }), tZ && (0, r.jsx)(T.e4, {
        step: ej,
        analyticsContext: null != F ? {
          activitySessionId: eO,
          contextMetadata: ey,
          analyticsData: F
        } : true,
        paymentElementSelectedType: tE,
        elementsRef: tO,
        stripePaymentElementProps: tA,
        stripeAddressElementProps: tI,
        addressElementKey: tS,
        billingAddressInfo: e2.info,
        onSetupError: () => {
          tb(), eK(w.pn.PAYMENT_TYPE)
        }
      }), n]
    }),
    tJ = ej === w.pn.PAYMENT_TYPE && 0 === g.length ? null : o;
  return X ? (0, r.jsxs)(r.Fragment, {
    children: [en && (0, r.jsx)(R.A, {
      className: ee.At,
      isEligibleForTrial: en
    }), (0, r.jsxs)(D.dZ, {
      children: [(0, r.jsx)(M.A, {
        className: ee._8
      }), tX]
    }), (0, r.jsx)(D.UX, {
      children: tJ
    })]
  }) : (0, r.jsx)(z.A, {
    steps: null != C ? C : eF.steps,
    currentStep: null != j ? j : ej,
    overrideKey: tQ,
    paymentError: h.paymentError,
    header: U,
    hideBreadcrumbs: q,
    body: tX,
    footer: tJ
  })
}

function ev(e) {
  let {
    defaultPaymentSourceId: t,
    paymentSources: n,
    hasFetchedPaymentSources: r
  } = (0, l.cf)([G.A], () => ({
    defaultPaymentSourceId: true !== e ? e : G.A.defaultPaymentSourceId,
    paymentSources: G.A.paymentSources,
    hasFetchedPaymentSources: G.A.hasFetchedPaymentSources
  }));
  (0, O.Ay)(() => {
    null == Q.A.cashAppPayComponent && (0, Z.UU)(), (0, f.UU)(), r || (0, d.$o)()
  });
  let [a, o] = i.useState(t);
  null != t && null == a && o(t);
  let [s, c] = i.useState(() => ({
    info: ec,
    isValid: false
  })), [_, h] = i.useState(() => ({
    info: eu,
    isValid: false
  })), [m, g] = i.useState(""), [E, y] = i.useState(""), [b, v] = i.useState(() => ({
    token: null
  })), [A, I, S, T, C] = (0, l.yK)([k.A], () => [k.A.braintreeEmail, k.A.braintreeNonce, k.A.error, k.A.venmoUsername, k.A.adyenPaymentData]), [N, w] = (0, l.yK)([U.A], () => [U.A.error, U.A.isAwaitingAuthentication]);
  i.useEffect(() => {
    let e = e => {
      let {
        billingAddress: t
      } = e;
      h({
        info: t,
        isValid: t.country.length > 0
      })
    };
    return u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
      u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, p.ET)()
    }
  }, []);
  let [R, P] = i.useState(false), [D, L] = i.useState(false), [x, M] = i.useState(null), j = i.useRef(null), V = (0, l.bG)([U.A], () => U.A.isAwaitingAuthentication), [B, H] = (0, l.yK)([F.A], () => [F.A.purchaseTokenAuthState, F.A.purchaseTokenHash]);
  return i.useEffect(() => {
    null != x && null != j.current && j.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [x]), {
    paymentSources: n,
    paymentSourceId: a,
    hasFetchedPaymentSources: r,
    setPaymentSourceId: o,
    creditCardState: s,
    setCreditCardState: c,
    tokenState: b,
    setTokenState: v,
    billingAddressState: _,
    setBillingAddressState: h,
    isSubmittingCurrentStep: R,
    setIsSubmittingCurrentStep: P,
    hasRedirectURL: D,
    setHasRedirectURL: L,
    braintreeEmail: A,
    braintreeNonce: I,
    venmoUsername: T,
    adyenPaymentData: C,
    paymentError: null != N ? N : S,
    paymentAuthenticationState: w ? W.oc.PENDING : null != N ? W.oc.ERROR : W.oc.NONE,
    purchaseError: x,
    setPurchaseError: M,
    purchaseErrorBlockRef: j,
    isAuthenticating: V,
    purchaseTokenAuthState: B,
    purchaseTokenHash: H,
    epsBankState: E,
    setEpsBankState: y,
    p24BankState: m,
    setP24BankState: g
  }
}