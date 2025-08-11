/** Chunk was on 75708 **/
/** chunk id: 229269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => v
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk245364 = require("./245364.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk680018 = require("./680018.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk801937 = require("./801937.js"),
  Chunk502109 = require("./502109.js"),
  Chunk241209 = require("./241209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk586585 = require("./586585.js"),
  Chunk439021 = require("./439021.js"),
  Chunk450272 = require("./450272.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk296576 = require("./296576.js"),
  Chunk423931 = require("./423931.js");

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v() {
  return <Chunk563132.PaymentContextProvider stepConfigs={[]} skuIDs={[]} activeSubscription={null}><div>{<Chunk481060.Text variant={"text-md/normal"} color={"text-feedback-info"} className={Chunk296576.labelSpacing}>{"Payment-method-specific components and views may not appear for you unless your browser is supported for that payment method and they have been configured on your browser."}</Chunk481060.Text>}{<S />}{<A />}{<L />}</div></Chunk563132.PaymentContextProvider>
}

function S() {
  return <Chunk450272.$0>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Payment Request Components - Google Pay"}</Chunk481060.X6q>}{<Chunk450272.E_ label={"Google Pay - Default View"}><T paymentRequestWallet={"googlePay"} /></Chunk450272.E_>}{<Chunk450272.E_ label={"Google Pay - Connector View"}><T paymentRequestWallet={"googlePay"} renderConnectorView={true} /></Chunk450272.E_>}{<Chunk450272.E_ label={"Google Pay - Add Payment Step Body Connector View"}><N paymentRequestWallet={"googlePay"} /></Chunk450272.E_>}{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Payment Request Components - Apple Pay"}</Chunk481060.X6q>}{<Chunk450272.E_ label={"Apple Pay - Default View"}><T paymentRequestWallet={"applePay"} /></Chunk450272.E_>}{<Chunk450272.E_ label={"Apple Pay - Connector View"}><T renderConnectorView={true} paymentRequestWallet={"applePay"} /></Chunk450272.E_>}{<Chunk450272.E_ label={"Apple Pay - Add Payment Step Body Connector View"}><N paymentRequestWallet={"applePay"} /></Chunk450272.E_>}</Chunk450272.$0>
}

function T(e) {
  let t = r.useRef(null),
    n = {
      paymentLabel: _.intl.string(_.t.ZURqX1),
      paymentRequestRef: t,
      onStripePaymentMethodReceived: () => {},
      onPaymentRequestFailure: () => {},
      onValidPaymentRequest: () => {},
      onChooseType: () => {},
      loadingComponent: <d.$jN style={{
          marginTop: 16
        }} type={d.RAz.PULSING_ELLIPSIS} />
    };
  return e.renderStepBody ? <f.t{...C({}, n, e)} /> : "applePay" === e.paymentRequestWallet ? <m.Ch{...C({}, n, e)} /> : <m.Tr{...C({}, n, e)} />
}

function I(e) {
  let {
    children: t,
    footer: n,
    className: r
  } = e;
  return <div className={l()(E.root, E.focusLock, E.small, E.rootWithShadow, j.modal, r)} aria-label={_.intl.string(_.t.eQ2bLi)}><form className={j.form} onSubmit={e => {
        e.preventDefault()
      }}>{<d.hzk className={j.scrollerContent}>{t}</d.hzk>}{n}</form></div>
}

function N(e) {
  let {
    paymentRequestWallet: t
  } = e, n = r.useRef(null), [s, a] = r.useState(false), l = () => {
    null != n.current && n.current.show()
  };
  return <I footer={(0, i.jsx)(h.Z, {
      primaryCTA: h.Z.CTAType.CONTINUE,
      primaryText: _.intl.string("applePay" === t ? _.t.WoXvJC : _.t.wnVVr6),
      primaryDisabled: !s,
      onPrimary: () => l(),
      onBack: () => {}
    })}><T renderConnectorView={true} renderStepBody={true} paymentRequestWallet={t} paymentRequestRef={n} onValidPaymentRequest={() => a(true)} /></I>
}

function y(e) {
  let {
    children: t
  } = e;
  return <I className={j.choosePaymentTypeModal}><div className={j.choosePaymentTypeContainer}>{t}</div></I>
}

function A() {
  let e = {
    onChooseType: () => {},
    onStripePaymentMethodReceived: e => {
      console.log("onStripePaymentMethodReceived called: ", e)
    },
    isEligibleForTrial: false
  };
  return <Chunk450272.$0>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Choose Payment Source Type Component"}</Chunk481060.X6q>}{<Chunk450272.E_ label={"All Payment Request Wallets Enabled"}><y><Chunk801937.Z{...O(C({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: ["googlePay", "applePay"]
        })} /></y></Chunk450272.E_>}{<Chunk450272.E_ label={"No Payment Wallets Enabled"}><y><Chunk801937.Z{...O(C({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: []
        })} /></y></Chunk450272.E_>}{<Chunk450272.E_ label={"Is Eligible for Trial"}><y><Chunk801937.Z{...O(C({}, module), {
          isEligibleForTrial: true,
          onChooseType: () => {},
          paymentRequestWallets: []
        })} /></y></Chunk450272.E_>}{<Chunk450272.E_ label={"Only Stripe Card Enabled"}><y><Chunk801937.Z{...O(C({}, module), {
          onChooseType: () => {},
          paymentRequestWallets: [],
          paymentSourceTypeRestrictions: [Chunk231338.He.CARD.valueOf()]
        })} /></y></Chunk450272.E_>}</Chunk450272.$0>
}
let P = {
    DEFAULT: "Express Checkout Element - Default (No Config)",
    GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
    APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
    APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
    CONFIGURABLE: "Express Checkout Element - Configurable"
  },
  R = {
    GPAY_FILTERED: {
      wallets: {
        googlePay: "always",
        applePay: "never"
      }
    },
    APPLE_PAY_FILTERED: {
      wallets: {
        googlePay: "never",
        applePay: "always"
      }
    },
    APPLE_AND_GPAY_DISABLED: {
      wallets: {
        googlePay: "never",
        applePay: "never"
      }
    }
  },
  D = {
    appearance: {
      theme: "flat",
      variables: {
        spacingUnit: "12px",
        borderRadius: "36px"
      }
    }
  },
  Z = {
    buttonType: {
      googlePay: "pay",
      applePay: "book"
    },
    buttonTheme: {
      applePay: "black",
      googlePay: "white"
    },
    buttonHeight: 40
  },
  w = e => true !== e ? JSON.stringify(e, null, 2) : "undefined";

function k() {
  let [e, t] = Chunk73800.useState(w(D)), [n, a] = Chunk73800.useState(D), [l, u] = Chunk73800.useState(w(Z)), [m, g] = Chunk73800.useState(Z), [h, f] = Chunk73800.useState(null), [x, _] = Chunk73800.useState(<Chunk450272.DS errorLabel={P.CONFIGURABLE} elementOptions={D}><Chunk245364.ExpressCheckoutElement onConfirm={e => {
        console.log("ExpressCheckoutElement onConfirm event: ", e)
      }} options={Z} /></Chunk450272.DS>);
  return <div>{<Chunk481060.Text variant={"text-md/normal"} className={Chunk296576.labelSpacing}>{"Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element."}{<br />}{<br />}{"Start by changing the `borderRadius` or `buttonHeight` as a test!"}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-md/normal"} className={Chunk296576.labelSpacing}>{<b>{"elements.options:"}</b>}{<br />}{<Chunk450272.lD href={"https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632"} />}</Chunk481060.Text>}{<Chunk755721.iS className={Chunk296576.textarea} placeholder={"Stripe Elements Container Options"} showCharacterCount={true} value={module} onChange={exports} />}{<Chunk481060.Text variant={"text-md/normal"} className={Chunk296576.labelSpacing}>{<b>{"expressCheckoutElement.options:"}</b>}{<br />}{<Chunk450272.lD href={"https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314"} />}{<br />}{<Chunk450272.lD href={"https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element"} />}</Chunk481060.Text>}{<Chunk755721.iS className={Chunk296576.textarea} placeholder={"Stripe Express Checkout Element Options"} showCharacterCount={true} value={l} onChange={Chunk801937} />}{null != Chunk586585 && <Chunk481060.Text variant={"text-md/normal"} color={"text-danger"}>{Chunk586585}</Chunk481060.Text>}{<div data-button-hoisted-classname-wrapper={true} className={Chunk296576.applyChangesButton}><Chunk680018.z variant={"primary"} size={"sm"} text={"Apply Changes"} onClick={() => {
          try {
            let t = JSON.parse(module),
              n = JSON.parse(l);
            Chunk388032(null), Chunk388032((0, Chunk255367.jsxs)(Chunk255367.Fragment, {
              children: [(0, Chunk255367.jsxs)(Chunk481060.Text, {
                variant: "text-md/normal",
                className: Chunk296576.labelSpacing,
                children: ["Element updated at: ", new Date().toString()]
              }), (0, Chunk255367.jsx)(Chunk450272.DS, {
                errorLabel: P.CONFIGURABLE,
                elementOptions: exports,
                children: (0, Chunk255367.jsx)(Chunk245364.ExpressCheckoutElement, {
                  onConfirm: e => {
                    console.log("ExpressCheckoutElement onConfirm event: ", e)
                  },
                  options: require
                })
              })]
            })), Chunk120356(exports), Chunk563132(require), Chunk439021(null)
          } catch (e) {
            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", module), Chunk439021("Error parsing JSON. Check console for more information.")
          }
        }} /></div>}{<Chunk481060.Text variant={"text-md/normal"} className={Chunk296576.labelSpacing}>{"Current Element Options:"}</Chunk481060.Text>}{<Chunk241209.Z className={Chunk296576.markdown}>{"".concat("``", " ").concat(w(require), " ").concat("``")}</Chunk241209.Z>}{<Chunk481060.Text variant={"text-md/normal"} className={Chunk296576.labelSpacing}>{"Current Express Checkout Element Options:"}</Chunk481060.Text>}{<Chunk241209.Z className={Chunk296576.markdown}>{"".concat("``", " ").concat(w(Chunk502109), " ").concat("``")}</Chunk241209.Z>}{Chunk231338}</div>
}

function L() {
  return <Chunk450272.$0>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Stripe Express Checkout Buttons"}</Chunk481060.X6q>}{<Chunk450272.E_ label={P.DEFAULT}><div><Chunk450272.DS errorLabel={P.DEFAULT}><Chunk245364.ExpressCheckoutElement onConfirm={e => {
              console.log("ExpressCheckoutElement onConfirm event: ", e)
            }} options={{}} /></Chunk450272.DS></div></Chunk450272.E_>}{["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map(e => {
      let t = P[e];
      return <b.E_ label={t}><div>{<d.Text variant={"text-md/normal"} className={j.labelSpacing}>{"expressCheckoutElement.options:"}</d.Text>}{<p.Z className={j.markdown}>{"".concat("``").concat(w(R[e]), " ").concat("``")}</p.Z>}{<b.DS errorLabel={t}><s.ExpressCheckoutElement onConfirm={e => {
                console.log("ExpressCheckoutElement onConfirm event: ", e)
              }} options={R[e]} /></b.DS>}</div></b.E_>
    })}{<Chunk450272.E_ label={P.CONFIGURABLE}><k /></Chunk450272.E_>}</Chunk450272.$0>
}