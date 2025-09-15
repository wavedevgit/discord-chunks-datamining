/** Chunk was on web.js **/
/** chunk id: 3409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  fL: () => ew,
  vP: () => eP
}), require("./836215.js"), require("./388685.js"), require("./49124.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk873115 = require("./873115.js"),
  Chunk159351 = require("./159351.js"),
  Chunk801937 = require("./801937.jsx"),
  Chunk282164 = require("./282164.jsx"),
  Chunk915271 = require("./915271.jsx"),
  Chunk228666 = require("./228666.jsx"),
  Chunk723484 = require("./723484.jsx"),
  Chunk122192 = require("./122192.jsx"),
  Chunk296214 = require("./296214.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk561448 = require("./561448.js"),
  Chunk445239 = require("./445239.jsx"),
  Chunk870630 = require("./870630.jsx"),
  Chunk483454 = require("./483454.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk51499 = require("./51499.jsx"),
  Chunk586585 = require("./586585.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk35248 = require("./35248.jsx"),
  Chunk439021 = require("./439021.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk351402 = require("./351402.js"),
  Chunk975060 = require("./975060.js"),
  Chunk505649 = require("./505649.js"),
  Chunk853872 = require("./853872.js"),
  Chunk882712 = require("./882712.js"),
  Chunk55563 = require("./55563.js"),
  Chunk358085 = require("./358085.js"),
  Chunk622999 = require("./622999.js"),
  Chunk51144 = require("./51144.js"),
  Chunk176919 = require("./176919.js"),
  Chunk185139 = require("./185139.jsx"),
  Chunk396955 = require("./396955.jsx"),
  Chunk559725 = require("./559725.js"),
  Chunk439041 = require("./439041.js"),
  Chunk850228 = require("./850228.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750441 = require("./750441.js"),
  Chunk987954 = require("./987954.js");

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : en(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ei(e, t) {
  if (null == e) return {};
  var n, r, i = ea(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ea(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let eo = new Chunk710845.Z("AddPaymentStep.tsx"),
  es = [Chunk409813.h8.PAYMENT_TYPE],
  el = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.CREDIT_CARD_INFORMATION, Chunk409813.h8.ADDRESS],
  ec = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.PAYPAL_INFORMATION, Chunk409813.h8.ADDRESS],
  eu = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.VENMO_INFORMATION, Chunk409813.h8.ADDRESS],
  ed = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.PRZELEWY24_INFORMATION, Chunk409813.h8.ADDRESS],
  ef = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.EPS_INFORMATION, Chunk409813.h8.ADDRESS],
  e_ = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.IDEAL_INFORMATION, Chunk409813.h8.ADDRESS],
  ep = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.CASH_APP_INFORMATION, Chunk409813.h8.ADDRESS],
  eh = [Chunk409813.h8.PAYMENT_TYPE, Chunk409813.h8.ADDRESS],
  em = (e, t, n) => {
    if (t === X.He.CARD) return e.map(e => e === N.h8.CREDIT_CARD_INFORMATION ? N.h8.PAYMENT_ELEMENT : e);
    if (t === X.He.UNKNOWN || (0, v.qH)(t, n)) {
      let t = e.indexOf(N.h8.PAYMENT_TYPE);
      return e.toSpliced(t + 1, 0, N.h8.PAYMENT_ELEMENT)
    }
    return e
  },
  eg = (e, t) => {
    let {
      prependSteps: n,
      appendSteps: r,
      paymentElementsEnabled: i,
      userIsStaff: a
    } = t;
    return e.map(e => {
      let {
        baseSteps: t,
        methodType: o
      } = e, s = [...n, ...t, ...r];
      return {
        steps: i ? em(s, o, a) : s,
        methodType: o
      }
    })
  },
  eE = {
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvc: ""
  },
  eb = {
    email: "",
    name: "",
    country: "",
    line1: "",
    line2: "",
    city: "",
    postalCode: "",
    state: ""
  };

function ey(e) {
  let {
    paymentSourceTypeRestrictions: t
  } = e, n = null != t && t.length > 0 ? W.w.ADD_NEW_PAYMENT_METHOD : true;
  return (0, r.jsxs)("div", {
    className: J.body,
    children: [(0, r.jsx)(W.Y, {
      paymentRestrictionBannerType: n
    }), (0, r.jsx)(p.Z, et({}, e))]
  })
}

function eO(e) {
  let {
    onCardInfoChange: t,
    infoNotice: n
  } = e, i = (0, l.e7)([M.Z], () => M.Z.error);
  return (0, r.jsxs)("div", {
    className: J.body,
    children: [null != n && (0, r.jsx)(c.kzN, {
      className: J.infoNotice,
      backgroundColor: c.mTc.BACKGROUND_TERTIARY,
      children: n
    }), (0, r.jsx)(b.j, {
      billingError: i,
      onCardInfoChange: t
    })]
  })
}

function ev() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk750441.body,
    children: (0, Chunk951288.jsx)(Chunk282164.Z, {})
  })
}

function eI() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk750441.body,
    children: (0, Chunk951288.jsx)(Chunk915271.Z, {})
  })
}

function eT() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk750441.body,
    children: (0, Chunk951288.jsx)(Chunk850228.Z, {})
  })
}

function eS() {
  let e = (0, Chunk442837.e7)([Chunk351402.Z], () => Chunk351402.Z.isBusy),
    t = (0, Chunk442837.e7)([Chunk975060.Z], () => Chunk975060.Z.stripePaymentMethod);
  return (0, Chunk951288.jsx)(Chunk296214.k, {
    className: Chunk750441.body,
    stripePaymentMethod: exports,
    submitting: module
  })
}

function eA(e) {
  let {
    billingAddressInfo: t,
    onBillingAddressChange: n,
    paymentSourceType: i
  } = e, a = (0, l.e7)([M.Z], () => M.Z.error);
  return (0, r.jsx)("div", {
    className: J.body,
    children: (0, r.jsx)(g.P, {
      billingAddressInfo: t,
      billingError: a,
      onBillingAddressChange: n,
      paymentSourceType: i
    })
  })
}

function eC() {
  return (0, Chunk951288.jsx)(Chunk723484.F, {
    className: Chunk750441.body
  })
}

function eN(e) {
  return () => (null != M.Z.error && (0, _.fw)(), e())
}

function eR(e) {
  let {
    onPrimary: t,
    onBack: n
  } = e, i = ei(e, ["onPrimary", "onBack"]), a = t;
  null != t && (a = eN(t));
  let o = n;
  return null != n && (o = eN(n)), (0, r.jsx)(P.Z, er(et({}, i), {
    onPrimary: a,
    onBack: o
  }))
}

function eP(e) {
  var t;
  let n, o, u, p, {
      paymentModalArgs: h,
      initialStep: m,
      prependSteps: g,
      appendSteps: E,
      onReturn: b,
      onComplete: y,
      onStepChange: O,
      breadcrumpSteps: A,
      currentBreadcrumpStep: j,
      header: k,
      analyticsData: G,
      analyticsLocation: H,
      hideBreadcrumbs: W = false,
      usePaymentModalStep: q = false,
      isEligibleForTrial: ee = false,
      allowDesktopRedirectPurchase: en = false,
      toastContent: ei,
      continueSessionToInitialStep: ea,
      overwriteSubscriptionPaymentSource: em = false
    } = e,
    {
      stripe: eE,
      contextMetadata: eb,
      activitySessionId: eN,
      paymentElementsEnabled: eP
    } = (0, C.JL)(),
    ew = i.useMemo(() => (0, V.vP)(), []),
    [eD, ex, eL, ej] = i.useMemo(() => eg([{
      baseSteps: el,
      methodType: X.He.CARD
    }, {
      baseSteps: ec,
      methodType: X.He.PAYPAL
    }, {
      baseSteps: e_,
      methodType: X.He.IDEAL
    }, {
      baseSteps: eh,
      methodType: X.He.UNKNOWN
    }], {
      prependSteps: g,
      appendSteps: E,
      paymentElementsEnabled: eP,
      userIsStaff: ew
    }), [g, E, eP, ew]),
    eM = i.useMemo(() => ({
      [X.He.CARD]: eD,
      [X.He.PAYPAL]: ex,
      [X.He.IDEAL]: eL,
      [X.He.GOPAY_WALLET]: ej,
      [X.He.KAKAOPAY]: ej
    }), [eD, ex, eL, ej]),
    ek = {
      steps: [...g, ...es, ...E],
      methodType: X.He.PAYMENT_REQUEST
    },
    eU = {
      steps: [...g, ...eu, ...E],
      methodType: X.He.VENMO
    },
    eG = {
      steps: [...g, ...es, ...E]
    },
    eB = {
      steps: [...g, ...ed, ...E],
      methodType: X.He.PRZELEWY24
    },
    eZ = {
      steps: [...g, ...ef, ...E],
      methodType: X.He.EPS
    },
    eF = {
      steps: [...g, ...ep, ...E],
      methodType: X.He.CASH_APP
    };

  function eV(e) {
    switch (e) {
      case N.h8.CREDIT_CARD_INFORMATION:
        return eD;
      case N.h8.CASH_APP_INFORMATION:
        return eF;
      default:
        return {
          steps: [N.h8.ADD_PAYMENT_STEPS]
        }
    }
  }
  let [eH, eY] = i.useState(m), [eW, eK] = i.useState(null), [ez, eq] = i.useState(eV(m)), eX = (0, l.e7)([M.Z], () => M.Z.redirectedPaymentSourceId), eQ = (0, l.e7)([z.Z], () => z.Z.cashAppPayComponent), eJ = {
    completeSteps: tm,
    setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
  }, e$ = i.useRef(eJ);
  i.useEffect(() => {
    e$.current = eJ
  }), i.useEffect(() => {
    let {
      completeSteps: e,
      setIsSubmittingCurrentStep: t
    } = e$.current;
    (async () => {
      if (null == eX) return;
      await (0, d.tZ)();
      let n = U.Z.getPaymentSource(eX);
      null != n && (e(n), t(false))
    })()
  }, [eX]);
  let e0 = i.useCallback(function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    eK(null), eY(e), t && O({
      currentStep: eH,
      toStep: e
    })
  }, [eH, O]);

  function e1(e) {
    (0, c.showToast)((0, c.createToast)(true !== ei ? ei : Q.intl.string(Q.t["VJPg+v"]), c.ToastType.SUCCESS, {
      position: c.ToastPosition.BOTTOM
    })), y(eH, e), e0(m, false)
  }
  let {
    setPaymentSourceId: e2,
    creditCardState: e3,
    setCreditCardState: e4,
    tokenState: e8,
    setTokenState: e5,
    isSubmittingCurrentStep: e6,
    billingAddressState: e7,
    setBillingAddressState: e9,
    setIsSubmittingCurrentStep: te,
    hasRedirectURL: tt,
    setHasRedirectURL: tn,
    braintreeEmail: tr,
    braintreeNonce: ti,
    venmoUsername: ta,
    adyenPaymentData: to,
    isAuthenticating: ts,
    epsBankState: tl,
    setEpsBankState: tc,
    p24BankState: tu,
    setP24BankState: td,
    selectedSkuId: tf
  } = h, t_ = null != tf ? tf : "", tp = (0, l.e7)([B.Z], () => B.Z.get(t_), [t_]), th = null == tp || null == (t = tp.eligiblePaymentGateways) ? true : t.map(e => e.valueOf());

  function tm(e) {
    e2(e.id), e1(e)
  }
  let tg = !(0, Z.isDesktop)() || en ? ["googlePay", "applePay"] : [],
    [tE, tb] = i.useState(false),
    ty = i.useRef(null),
    tO = () => {
      null != ty.current && ty.current.show()
    },
    {
      shouldRenderPaymentElement: tv,
      paymentElementReady: tI,
      paymentElementSelectedType: tT,
      handlePaymentElementStep: tS,
      onBackPaymentElement: tA,
      combinedStripeElementsRef: tC,
      stripePaymentElementProps: tN,
      stripeAddressElementProps: tR
    } = (0, S.M)({
      step: eH,
      continueSessionToInitialStep: ea,
      paymentElementsEnabled: eP,
      handleStepChange: e0,
      logger: eo,
      shouldLogOnChangeEvents: ew || false,
      onBillingAddressChange: (e, t) => {
        e9({
          info: et({}, e7.info, e),
          isValid: t
        })
      }
    });
  switch (eH) {
    case N.h8.ATTEMPT_GOOGLE_PAY:
    case N.h8.ATTEMPT_APPLE_PAY:
    case N.h8.PAYMENT_TYPE:
      let tP = (e, t) => {
          let n = eP && (0, v.qH)(e, ew) && !en ? () => tS(e) : e0;
          switch (e) {
            case X.He.CARD:
              en ? n(N.h8.AWAITING_BROWSER_CHECKOUT) : (eq(eD), n(N.h8.CREDIT_CARD_INFORMATION));
              break;
            case X.He.PAYPAL:
              eq(ex), n(N.h8.PAYPAL_INFORMATION);
              break;
            case X.He.VENMO:
              eq(eU), n(N.h8.VENMO_INFORMATION);
              break;
            case X.He.PAYMENT_REQUEST:
              en && "googlePay" === t ? n(N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : en && "applePay" === t ? n(N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eq(ek), n(N.h8.PAYMENT_REQUEST_INFORMATION));
              break;
            case X.He.PRZELEWY24:
              eq(eB), n(N.h8.PRZELEWY24_INFORMATION);
              break;
            case X.He.EPS:
              eq(eZ), n(N.h8.EPS_INFORMATION);
              break;
            case X.He.IDEAL:
              eq(eL), n(N.h8.IDEAL_INFORMATION);
              break;
            case X.He.CASH_APP:
              eq(eF), n(N.h8.CASH_APP_INFORMATION);
              break;
            case X.He.GIROPAY:
            case X.He.PAYSAFE_CARD:
            case X.He.GCASH:
            case X.He.GRABPAY_MY:
            case X.He.MOMO_WALLET:
            case X.He.KAKAOPAY:
            case X.He.GOPAY_WALLET:
            case X.He.BANCONTACT:
              eq({
                steps: [...g, ...eh, ...E],
                methodType: e
              }), n(N.h8.ADDRESS)
          }
          null != M.Z.error && (0, _.fw)()
        },
        tw = (e, t) => {
          e9(e => er(et({}, e), {
            info: t
          })), eq(ek), tm(e)
        },
        tD = () => {
          eq(eG), e0(N.h8.PAYMENT_TYPE)
        },
        tx = async e => {
          if ((0, _.Xt)(e), null == e) return void tD();
          try {
            let t = await (0, d.i6)(e, true, H),
              {
                billingAddressInfo: n
              } = (0, F.az)(e);
            tw(t, n)
          } catch (e) {}
        };
      if (eH === N.h8.ATTEMPT_GOOGLE_PAY || eH === N.h8.ATTEMPT_APPLE_PAY) {
        let e = Q.intl.string(eH === N.h8.ATTEMPT_APPLE_PAY ? Q.t.czhXDg : Q.t.Zj2xQ0),
          t = Q.intl.string(eH === N.h8.ATTEMPT_APPLE_PAY ? Q.t.WoXvJC : Q.t.wnVVr6);
        n = (0, r.jsx)(x.t, {
          onChooseType: tP,
          paymentRequestWallet: eH === N.h8.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
          onStripePaymentMethodReceived: tx,
          onPaymentRequestFailure: () => {
            tP(X.He.CARD), eK(e)
          },
          onValidPaymentRequest: () => tb(true),
          paymentRequestRef: ty
        }), o = (0, r.jsx)(eR, {
          onBack: () => e0(N.h8.PAYMENT_TYPE),
          primaryCTA: P.Z.CTAType.CONTINUE,
          primaryText: t,
          onPrimary: () => tO(),
          primaryDisabled: !tE
        });
        break
      }
      n = (0, r.jsx)(ey, {
        onChooseType: tP,
        onStripePaymentMethodReceived: tx,
        paymentRequestWallets: tg,
        isEligibleForTrial: ee,
        paymentRequestPaymentContext: {
          contextMetadata: eb,
          activitySessionId: eN
        },
        paymentSourceTypeRestrictions: th
      }), o = (0, r.jsx)(eR, {
        onBack: b
      });
      break;
    case N.h8.PAYMENT_ELEMENT:
      if (!eP) throw (0, d.PP)("Payment Elements not enabled, invalid step", true);
      let tL = () => {
        te(true);
        try {
          if (null == tT || !(0, v.qH)(tT, ew)) throw (0, d.PP)("Valid Payment Element source type not found", true);
          let {
            steps: e,
            methodType: t
          } = eM[tT];
          eq({
            steps: e,
            methodType: t === X.He.UNKNOWN ? tT : t
          }), tT === X.He.PAYPAL ? e0(N.h8.PAYPAL_INFORMATION) : e0(N.h8.ADDRESS)
        } catch (t) {
          var e;
          eo.error(null != (e = t.message) ? e : JSON.stringify(t))
        } finally {
          te(false)
        }
      };
      n = null, o = (0, r.jsx)(eR, {
        onBack: tA,
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: Q.intl.string(Q.t.PDTjLC),
        primarySubmitting: e6,
        primaryDisabled: !tI,
        onPrimary: tL
      });
      break;
    case N.h8.CREDIT_CARD_INFORMATION:
      let tj = async e => {
        te(true);
        try {
          let t = await (0, d.qv)(eE, e);
          e5({
            token: t
          }), e0(N.h8.ADDRESS)
        } catch (e) {
          var t;
          eo.error(null != (t = e.message) ? t : JSON.stringify(e))
        } finally {
          te(false)
        }
      };
      n = eP ? null : (0, r.jsx)(eO, {
        infoNotice: eW,
        onCardInfoChange: (e, t) => {
          e4({
            info: e,
            isValid: t
          }), e9(t => er(et({}, t), {
            info: er(et({}, t.info), {
              name: e.name
            })
          }))
        }
      });
      let tM = eP ? !tI : !e3.isValid,
        tk = () => {
          e0(N.h8.PAYMENT_TYPE)
        };
      o = (0, r.jsx)(a.ElementsConsumer, {
        children: e => {
          let {
            elements: t
          } = e;
          return (0, r.jsx)(eR, {
            onBack: tk,
            primaryCTA: P.Z.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: Q.intl.string(Q.t.PDTjLC),
            primarySubmitting: e6,
            primaryDisabled: tM,
            onPrimary: () => tj(t)
          })
        }
      });
      break;
    case N.h8.AWAITING_BROWSER_CHECKOUT:
    case N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
    case N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
      n = (0, r.jsx)("div", {
        className: J.body,
        children: (0, r.jsx)(D.M, {
          step: eH,
          onPurchaseComplete: () => y(eH),
          onHandoffFailure: () => {
            eq(eD), e0(N.h8.CREDIT_CARD_INFORMATION)
          }
        })
      }), o = (0, r.jsx)(D.a, {
        onPrimaryClick: () => {
          eq(eD), e0(N.h8.CREDIT_CARD_INFORMATION)
        },
        onBackClick: () => {
          eq(eG), e0(N.h8.PAYMENT_TYPE)
        }
      });
      break;
    case N.h8.EPS_INFORMATION:
      n = (0, r.jsx)(T.Z, {
        type: X.He.EPS,
        onAccountHolderNameChange: e => e9({
          info: er(et({}, e7.info), {
            name: e
          }),
          isValid: e7.isValid
        }),
        onEPSBankChange: e => tc(e),
        epsBankValue: tl,
        billingAddressInfo: e7.info
      }), o = (0, r.jsx)(eR, {
        onBack: () => e0(N.h8.PAYMENT_TYPE),
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: Q.intl.string(Q.t.PDTjLC),
        primaryDisabled: true === tl || "" === tl || "" === e7.info.name,
        onPrimary: () => e0(N.h8.ADDRESS)
      });
      break;
    case N.h8.IDEAL_INFORMATION:
      n = (0, r.jsx)(I.Z, {
        type: X.He.IDEAL,
        onAccountHolderNameChange: e => e9({
          info: er(et({}, e7.info), {
            name: e
          }),
          isValid: e7.isValid
        }),
        billingAddressInfo: e7.info
      }), o = (0, r.jsx)(eR, {
        onBack: () => e0(N.h8.PAYMENT_TYPE),
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: Q.intl.string(Q.t.PDTjLC),
        primaryDisabled: "" === e7.info.name,
        onPrimary: () => e0(N.h8.ADDRESS)
      });
      break;
    case N.h8.PRZELEWY24_INFORMATION:
      n = (0, r.jsx)(T.Z, {
        type: X.He.PRZELEWY24,
        onNameChange: e => e9({
          info: er(et({}, e7.info), {
            name: e
          }),
          isValid: e7.isValid
        }),
        onEmailChange: e => e9({
          info: er(et({}, e7.info), {
            email: e
          }),
          isValid: e7.isValid
        }),
        onP24BankChange: e => {
          td(e)
        },
        p24BankValue: tu,
        billingAddressInfo: e7.info
      }), o = (0, r.jsx)(eR, {
        onBack: () => e0(N.h8.PAYMENT_TYPE),
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: Q.intl.string(Q.t.PDTjLC),
        primaryDisabled: true === e7.info.name || "" === e7.info.name || true === e7.info.email || "" === e7.info.email || true === tu || "" === tu,
        onPrimary: () => e0(N.h8.ADDRESS)
      });
      break;
    case N.h8.PAYPAL_INFORMATION:
      let tU = 0 !== tr.length && null != ti;
      n = (0, r.jsx)(ev, {});
      let tG = eP ? () => tS(X.He.PAYPAL) : () => e0(N.h8.PAYMENT_TYPE);
      o = (0, r.jsx)(eR, {
        onBack: tG,
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: tU ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t.Djzd7O),
        onPrimary: () => tU ? e0(N.h8.ADDRESS) : (0, f.i0)()
      });
      break;
    case N.h8.VENMO_INFORMATION:
      let tB = 0 !== ta.length && null != ti;
      n = (0, r.jsx)(eI, {}), o = (0, r.jsx)(eR, {
        onBack: () => e0(N.h8.PAYMENT_TYPE),
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: tB ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t["4KoTLC"]),
        onPrimary: () => tB ? e0(N.h8.ADDRESS) : (0, f.og)()
      });
      break;
    case N.h8.PAYMENT_REQUEST_INFORMATION:
      n = (0, r.jsx)(eS, {}), o = (0, r.jsx)(eR, {
        onBack: () => e0(N.h8.PAYMENT_TYPE)
      });
      break;
    case N.h8.CASH_APP_INFORMATION:
      let tZ = null != to,
        tF = null != eQ;
      n = (0, r.jsx)(eT, {}), o = (0, r.jsx)(eR, {
        onBack: () => e0(N.h8.PAYMENT_TYPE),
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: tZ ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t["9ALP8/"]),
        onPrimary: () => tZ ? e0(N.h8.ADDRESS) : (0, K.cp)(),
        primaryDisabled: !tF
      });
      break;
    case N.h8.ADDRESS:
      let tV = async () => {
        te(true);
        let e = eP && null != tT,
          t = e ? tT : ez.methodType;
        switch (t) {
          case X.He.CARD:
            try {
              let t = e ? await (0, d.Q5)(eE, e7.info, X.He.CARD, tC.current, H) : await (0, d.f0)(eE, e8.token, e7.info, H);
              tm(t)
            } catch (e) {}
            break;
          case X.He.VENMO:
          case X.He.PAYPAL:
            try {
              s()(null != ti, "Missing braintreeNonce");
              let e = await (0, d.lP)(ti, e7.info, H);
              tm(e)
            } catch (e) {}
            break;
          case X.He.EPS:
            try {
              let e = await (0, d.YQ)(eE, tl, e7.info, H);
              tm(e)
            } catch (e) {
              eo.warn(e)
            }
            break;
          case X.He.IDEAL:
            try {
              let t = e ? await (0, d.Q5)(eE, e7.info, X.He.IDEAL, tC.current, H) : await (0, d.aN)(eE, e7.info, H);
              tm(t)
            } catch (e) {
              eo.warn(e)
            }
            break;
          case X.He.PRZELEWY24:
            try {
              if (true === tu) throw (0, d.SQ)("Bank required for Przelewy24");
              let e = await (0, d.pF)(eE, {
                p24Bank: tu
              }, e7.info, H);
              tm(e)
            } catch (e) {}
            break;
          case X.He.PAYSAFE_CARD:
          case X.He.GRABPAY_MY:
            try {
              let e = await (0, d.sF)(e7.info, t, H);
              tm(e)
            } catch (e) {}
            break;
          case X.He.GCASH:
          case X.He.MOMO_WALLET:
          case X.He.KAKAOPAY:
          case X.He.GOPAY_WALLET:
            try {
              let {
                redirectConfirmation: e
              } = await (0, d.Dk)(e7.info, t, H);
              tn(e)
            } catch (e) {}
            break;
          case X.He.GIROPAY:
          case X.He.BANCONTACT:
            try {
              let e = await (0, d.GV)(eE, e7.info, t, H);
              tm(e)
            } catch (e) {}
            break;
          case X.He.CASH_APP:
            try {
              s()(null != to, "Missing adyenPaymentData");
              let {
                paymentSource: e
              } = await (0, d.Dk)(e7.info, t, H, to, em);
              s()(null != e, "Cash App Pay Payment Source missing"), tm(e)
            } catch (e) {}
            break;
          default:
            throw Error("unknown step not handled")
        }
        tt || te(false)
      };
      switch (ez.methodType) {
        case X.He.CARD:
          p = N.h8.CREDIT_CARD_INFORMATION, u = X.He.CARD;
          break;
        case X.He.PAYPAL:
          p = N.h8.PAYPAL_INFORMATION, u = X.He.PAYPAL;
          break;
        case X.He.VENMO:
          p = N.h8.VENMO_INFORMATION, u = X.He.VENMO;
          break;
        case X.He.GIROPAY:
          p = N.h8.PAYMENT_TYPE, u = X.He.GIROPAY;
          break;
        case X.He.PAYSAFE_CARD:
        case X.He.GCASH:
        case X.He.GRABPAY_MY:
        case X.He.MOMO_WALLET:
        case X.He.KAKAOPAY:
        case X.He.GOPAY_WALLET:
        case X.He.BANCONTACT:
          p = N.h8.PAYMENT_TYPE, u = ez.methodType;
          break;
        case X.He.EPS:
          p = N.h8.EPS_INFORMATION, u = X.He.EPS;
          break;
        case X.He.IDEAL:
          p = N.h8.IDEAL_INFORMATION, u = X.He.IDEAL;
          break;
        case X.He.PRZELEWY24:
          p = N.h8.PRZELEWY24_INFORMATION, u = X.He.PRZELEWY24;
          break;
        case X.He.CASH_APP:
          p = N.h8.CASH_APP_INFORMATION, u = X.He.CASH_APP;
          break;
        default:
          p = N.h8.PAYMENT_TYPE, u = X.He.CARD
      }
      eP && null != tT && (p = N.h8.PAYMENT_ELEMENT), n = eP ? null : (0, r.jsx)(eA, {
        billingAddressInfo: e7.info,
        onBillingAddressChange: (e, t) => {
          e9({
            info: et({}, e7.info, e),
            isValid: t
          })
        },
        paymentSourceType: u
      }), o = (0, r.jsx)(eR, {
        onBack: () => e0(p),
        primaryCTA: P.Z.CTAType.CONTINUE,
        primaryText: Q.intl.string(Q.t.PDTjLC),
        primarySubmitting: e6,
        primaryDisabled: !e7.isValid || ts,
        onPrimary: tV
      });
      break;
    case N.h8.AWAITING_AUTHENTICATION:
      n = (0, r.jsx)(eC, {});
      break;
    default:
      throw Error("Unexpected step: ".concat(eH))
  }
  let tH = eP && tv,
    tY = tH ? "combined_stripe_elements" : true,
    tW = (0, r.jsxs)(c.qBt, {
      className: $.sequencer,
      staticClassName: $.sequencerStatic,
      animatedNodeClassName: $.sequencerAnimatedNode,
      fillParent: true,
      overrideKey: tY,
      step: eH,
      steps: ez.steps,
      sideMargin: 20,
      children: [tH && (0, r.jsx)(S.h, {
        step: eH,
        analyticsContext: null != G ? {
          activitySessionId: eN,
          contextMetadata: eb,
          analyticsData: G
        } : true,
        paymentElementSelectedType: tT,
        originalPaymentType: ez.methodType,
        elementsRef: tC,
        stripePaymentElementProps: tN,
        stripeAddressElementProps: tR,
        billingAddressInfo: e7.info,
        onSetupError: tA
      }), n]
    }),
    tK = eH === N.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
  return q ? (0, r.jsxs)(r.Fragment, {
    children: [ee && (0, r.jsx)(R.Z, {
      className: J.paymentModalBreadcrumbs,
      isEligibleForTrial: ee
    }), (0, r.jsxs)(w.C3, {
      children: [(0, r.jsx)(L.Z, {
        className: J.paymentModalError
      }), tW]
    }), (0, r.jsx)(w.O3, {
      children: tK
    })]
  }) : (0, r.jsx)(Y.Z, {
    steps: null != A ? A : ez.steps,
    currentStep: null != j ? j : eH,
    overrideKey: tY,
    paymentError: h.paymentError,
    header: k,
    hideBreadcrumbs: W,
    body: tW,
    footer: tK
  })
}

function ew(e) {
  let {
    defaultPaymentSourceId: t,
    paymentSources: n,
    hasFetchedPaymentSources: r
  } = (0, l.cj)([U.Z], () => ({
    defaultPaymentSourceId: true !== e ? e : U.Z.defaultPaymentSourceId,
    paymentSources: U.Z.paymentSources,
    hasFetchedPaymentSources: U.Z.hasFetchedPaymentSources
  }));
  (0, O.ZP)(() => {
    null == z.Z.cashAppPayComponent && (0, K.eI)(), (0, f.eI)(), r || (0, d.tZ)()
  });
  let [a, o] = i.useState(t);
  null != t && null == a && o(t);
  let [s, c] = i.useState(() => ({
    info: eE,
    isValid: false
  })), [p, h] = i.useState(() => ({
    info: eb,
    isValid: false
  })), [m, g] = i.useState(""), [E, b] = i.useState(""), [y, v] = i.useState(() => ({
    token: null
  })), [I, T, S, A, C] = (0, l.Wu)([M.Z], () => [M.Z.braintreeEmail, M.Z.braintreeNonce, M.Z.error, M.Z.venmoUsername, M.Z.adyenPaymentData]), [N, R] = (0, l.Wu)([k.Z], () => [k.Z.error, k.Z.isAwaitingAuthentication]);
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
    return u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
      u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, _.fw)()
    }
  }, []);
  let [P, w] = i.useState(false), [D, x] = i.useState(false), [L, j] = i.useState(null), B = i.useRef(null), Z = (0, l.e7)([k.Z], () => k.Z.isAwaitingAuthentication), [F, V] = (0, l.Wu)([G.Z], () => [G.Z.purchaseTokenAuthState, G.Z.purchaseTokenHash]);
  return i.useEffect(() => {
    null != L && null != B.current && B.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [L]), {
    paymentSources: n,
    paymentSourceId: a,
    hasFetchedPaymentSources: r,
    setPaymentSourceId: o,
    creditCardState: s,
    setCreditCardState: c,
    tokenState: y,
    setTokenState: v,
    billingAddressState: p,
    setBillingAddressState: h,
    isSubmittingCurrentStep: P,
    setIsSubmittingCurrentStep: w,
    hasRedirectURL: D,
    setHasRedirectURL: x,
    braintreeEmail: I,
    braintreeNonce: T,
    venmoUsername: A,
    adyenPaymentData: C,
    paymentError: null != N ? N : S,
    paymentAuthenticationState: R ? H.wr.PENDING : null != N ? H.wr.ERROR : H.wr.NONE,
    purchaseError: L,
    setPurchaseError: j,
    purchaseErrorBlockRef: B,
    isAuthenticating: Z,
    purchaseTokenAuthState: F,
    purchaseTokenHash: V,
    epsBankState: E,
    setEpsBankState: b,
    p24BankState: m,
    setP24BankState: g
  }
}