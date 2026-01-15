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
  return await r.tn.get({
    url: u.ANM.BILLING_ADYEN_PAYMENT_METHODS,
    oldFormErrors: true,
    rejectWithError: false
  })
}
async function p() {
  try {
    let {
      enabledPaymentTypes: e
    } = o.ZP.getCurrentConfig({
      location: "40c266_2"
    }, {
      autoTrackExposure: false
    });
    if (!e.includes(u.HeQ.CASH_APP)) return;
    let t = await f(),
      {
        default: r
      } = await Promise.all([n.e("50448"), n.e("23357")]).then(n.bind(n, 175145)),
      a = await r({
        environment: u.Ai1.ADYEN.KEY.startsWith("live_") ? "live" : "test",
        clientKey: u.Ai1.ADYEN.KEY,
        analytics: {
          enabled: false
        },
        paymentMethodsResponse: t.body
      });
    i.Z.dispatch({
      type: "ADYEN_CREATE_CLIENT_SUCCESS",
      client: a
    }), _(a)
  } catch (e) {
    (0, l.q2)(e), i.Z.dispatch({
      type: "ADYEN_CREATE_CLIENT_FAIL"
    })
  }
}

function _(e) {
  if (null != c.Z.cashAppPayComponent) {
    m(), h();
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
      else throw (0, a.SQ)("Cash App Pay setup attempt is not valid.")
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
        }(0, a.SQ)(e.message, n, t)
      }
    }
  }).mount("#".concat(s.F));
  i.Z.dispatch({
    type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
    component: t
  })
}

function h() {
  var e;
  if (null == c.Z.cashAppPayComponent) throw Error("Adyen CashAppPay component must be created before mounting.");
  null == (e = c.Z.cashAppPayComponent) || e.mount("#".concat(s.F))
}

function m() {
  var e;
  null == (e = c.Z.cashAppPayComponent) || e.unmount()
}

function g() {
  let e = c.Z.cashAppPayComponent;
  if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
  e.submit()
}