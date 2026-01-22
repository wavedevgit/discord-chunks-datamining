/** Chunk was on web.js **/
/** chunk id: 682449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UU: () => p,
  uy: () => g
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk887555 = require("./887555.js"),
  Chunk501280 = require("./501280.jsx"),
  Chunk739508 = require("./739508.js"),
  Chunk490581 = require("./490581.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function f() {
  return await r.Bo.get({
    url: u.Rsh.BILLING_ADYEN_PAYMENT_METHODS,
    oldFormErrors: true,
    rejectWithError: false
  })
}
async function p() {
  try {
    let {
      enabledPaymentTypes: e
    } = s.Ay.getCurrentConfig({
      location: "40c266_2"
    }, {
      autoTrackExposure: false
    });
    if (!e.includes(u.hes.CASH_APP)) return;
    let t = await f(),
      {
        default: r
      } = await Promise.all([n.e("94678"), n.e("35511")]).then(n.bind(n, 847722)),
      a = await r({
        environment: u.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
        clientKey: u.Gg3.ADYEN.KEY,
        analytics: {
          enabled: false
        },
        paymentMethodsResponse: t.body
      });
    i.h.dispatch({
      type: "ADYEN_CREATE_CLIENT_SUCCESS",
      client: a
    }), _(a)
  } catch (e) {
    (0, l.pM)(e), i.h.dispatch({
      type: "ADYEN_CREATE_CLIENT_FAIL"
    })
  }
}

function _(e) {
  if (null != c.A.cashAppPayComponent) {
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
      if (n) i.h.dispatch({
        type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS",
        data: t
      });
      else throw (0, a.i0)("Cash App Pay setup attempt is not valid.")
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
        }(0, a.i0)(e.message, n, t)
      }
    }
  }).mount("#".concat(o.h));
  i.h.dispatch({
    type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
    component: t
  })
}

function h() {
  var e;
  if (null == c.A.cashAppPayComponent) throw Error("Adyen CashAppPay component must be created before mounting.");
  null == (e = c.A.cashAppPayComponent) || e.mount("#".concat(o.h))
}

function m() {
  var e;
  null == (e = c.A.cashAppPayComponent) || e.unmount()
}

function g() {
  let e = c.A.cashAppPayComponent;
  if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
  e.submit()
}