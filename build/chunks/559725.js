/** Chunk was on web.js **/
/** chunk id: 559725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cp: () => g,
  eI: () => p
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk987032 = require("./987032.js"),
  Chunk559407 = require("./559407.jsx"),
  Chunk122289 = require("./122289.js"),
  Chunk439041 = require("./439041.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function f() {
  return await Chunk544891.tn.get({
    url: Chunk981631.ANM.BILLING_ADYEN_PAYMENT_METHODS,
    oldFormErrors: true,
    rejectWithError: false
  })
}
async function p() {
  try {
    let {
      enabledPaymentTypes: e
    } = Chunk987032.ZP.getCurrentConfig({
      location: "40c266_2"
    }, {
      autoTrackExposure: false
    });
    if (!module.includes(Chunk981631.HeQ.CASH_APP)) return;
    let t = await f(),
      {
        default: r
      } = await Promise.all([require.e("50448"), require.e("23357")]).then(require.bind(require, 175145)),
      o = await Chunk544891({
        environment: Chunk981631.Ai1.ADYEN.KEY.startsWith("live_") ? "live" : "test",
        clientKey: Chunk981631.Ai1.ADYEN.KEY,
        analytics: {
          enabled: false
        },
        paymentMethodsResponse: exports.body
      });
    Chunk570140.Z.dispatch({
      type: "ADYEN_CREATE_CLIENT_SUCCESS",
      client: Chunk355467
    }), _(Chunk355467)
  } catch (e) {
    (0, Chunk122289.q2)(module), Chunk570140.Z.dispatch({
      type: "ADYEN_CREATE_CLIENT_FAIL"
    })
  }
}

function _(e) {
  if (null != c.Z.cashAppPayComponent) {
    h(), m();
    return
  }
  let t = e.create("cashapp", {
    showPayButton: false,
    enableStoreDetails: false,
    storePaymentMethod: true,
    setStatusAutomatically: false,
    onSubmit: e => {
      let {
        data: t,
        isValid: n
      } = e;
      if (n) i.Z.dispatch({
        type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS",
        data: t
      });
      else throw (0, o.SQ)("Cash App Pay setup attempt is not valid.")
    },
    onError: e => {
      let t, n = true;
      if ("CANCEL" !== e.name) {
        switch (e.message) {
          case "Payment declined by CashAppPay":
            n = false;
            break;
          case "Something went wrong during customerRequest creation":
            n = false, t = d.intl.string(d.t.TJ8dDB)
        }(0, o.SQ)(e.message, n, t)
      }
    }
  }).mount("#".concat(s.F));
  i.Z.dispatch({
    type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
    component: t
  })
}

function m() {
  var e;
  if (null == Chunk439041.Z.cashAppPayComponent) throw Error("Adyen CashAppPay component must be created before mounting.");
  null == (e = Chunk439041.Z.cashAppPayComponent) || module.mount("#".concat(Chunk559407.F))
}

function h() {
  var e;
  null == (e = Chunk439041.Z.cashAppPayComponent) || module.unmount()
}

function g() {
  let e = Chunk439041.Z.cashAppPayComponent;
  if (null == module) throw Error("Adyen CashAppPay component must be created before submitting.");
  module.submit()
}