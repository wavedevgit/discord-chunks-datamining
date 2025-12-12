/** Chunk was on web.js **/
/** chunk id: 873115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dz: () => h,
  Nj: () => y,
  RS: () => O,
  by: () => E,
  eI: () => _,
  f6: () => g,
  i0: () => v,
  ib: () => m,
  og: () => S
}), require("./415506.js"), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk618541 = require("./618541.js"),
  Chunk122289 = require("./122289.js"),
  Chunk751767 = require("./751767.js"),
  Chunk358085 = require("./358085.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981631 = require("./981631.js");
let d = "https://www.paypal.com",
  f = "https://sandbox.paypal.com";

function p(e) {
  let t = u.Ai1.BRAINTREE.KEY.startsWith("production_") ? d : f;
  return "".concat(t, "/agreements/approve?nolegacy=1&ba_token=").concat(e)
}

function _() {
  (0, Chunk751767.S)().then(e => {
    e.client.create({
      authorization: u.Ai1.BRAINTREE.KEY
    }).then(e => {
      i.Z.dispatch({
        type: "BRAINTREE_CREATE_CLIENT_SUCCESS",
        client: e
      }), h(), m()
    }).catch(() => i.Z.dispatch({
      type: "BRAINTREE_CREATE_CLIENT_FAIL"
    }))
  })
}

function m() {
  let e = Chunk618541.Z.getClient();
  if (null == module) throw Error("Braintree client must be initialized before creating Venmo client.");
  (0, Chunk751767.S)().then(t => {
    t.venmo.create({
      client: e,
      allowDesktop: true,
      paymentMethodUsage: "multi_use"
    }).then(e => {
      i.Z.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS",
        venmoClient: e
      })
    }).catch(() => {
      i.Z.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL"
      })
    })
  })
}

function h() {
  let e = Chunk618541.Z.getClient();
  if (null == module) throw Error("braintree client must be initialized before calling this");
  (0, Chunk751767.S)().then(t => {
    t.paypal.create({
      client: e
    }).then(e => {
      if (null == e._navigateFrameToAuth) throw Error("braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?");
      e._navigateFrameToAuth = function(e) {
        let t = this._formatPaymentResourceData(e);
        return r.tn.post({
          url: u.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
          oldFormErrors: true,
          body: {
            return_url: t.returnUrl,
            cancel_url: t.cancelUrl
          },
          rejectWithError: false
        }).then(e => {
          let {
            body: {
              token: t
            }
          } = e;
          this._frameService.redirect(p(t))
        }).catch(e => (this._frameService.close(), this._authorizationInProgress = false, Promise.reject(Error(e.body && e.body.message))))
      }, i.Z.dispatch({
        type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS",
        paypalClient: e
      })
    }).catch(() => i.Z.dispatch({
      type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL"
    }))
  })
}

function g() {
  let e = Chunk618541.Z.getPayPalClient();
  if (null == module) throw Error("braintree paypal client must be initialized before calling this");
  Chunk570140.Z.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  });
  let t = Promise.resolve("");
  (0, Chunk358085.isDesktop)() && (t = (0, Chunk355467.EH)(Chunk981631.HeQ.PAYPAL)), exports.then(() => module.tokenize({
    flow: "vault"
  })).then(e => {
    let {
      email: t,
      firstName: n,
      lastName: r,
      billingAddress: a
    } = e.details;
    i.Z.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
      nonce: e.nonce,
      email: t,
      billingAddress: {
        name: "".concat(n, " ").concat(r),
        line1: a.line1,
        line2: a.line2,
        city: a.city,
        state: a.state,
        country: a.countryCode,
        postalCode: a.postalCode
      }
    })
  }).catch(e => {
    let {
      message: t,
      code: n,
      details: r
    } = e;
    n === u.U66.PAYPAL_POPUP_CLOSED || null == n ? i.Z.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED"
    }) : (i.Z.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL",
      message: t,
      code: n
    }), o.q2(Error("Braintree Paypal Error: ".concat(t, " ").concat(n, " ").concat(r))))
  })
}

function E() {
  let e = Chunk618541.Z.getVenmoClient();
  if (null == module) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
  Chunk570140.Z.dispatch({
    type: "BRAINTREE_TOKENIZE_VENMO_START"
  }), module.tokenize().then(e => {
    let {
      username: t
    } = e.details;
    i.Z.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS",
      nonce: e.nonce,
      username: t
    })
  }).catch(e => {
    let {
      message: t,
      code: n,
      details: r
    } = e;
    [u.U66.VENMO_APP_CANCELED, u.U66.VENMO_DESKTOP_CANCELED, u.U66.VENMO_CANCELED].includes(n) ? i.Z.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED"
    }) : (i.Z.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL",
      message: t,
      code: n
    }), o.q2(Error("Braintree Venmo Error: ".concat(t, " ").concat(n, " ").concat(r))))
  })
}

function b(e, t) {
  if (null == e) return Promise.resolve();
  i.Z.dispatch(t);
  try {
    return Promise.resolve(e.teardown())
  } catch (e) {
    return Promise.resolve()
  }
}

function y() {
  return b(Chunk618541.Z.getPayPalClient(), {
    type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT"
  })
}

function O() {
  return b(Chunk618541.Z.getVenmoClient(), {
    type: "BRAINTREE_TEARDOWN_VENMO_CLIENT"
  })
}

function v() {
  let e = Chunk618541.Z.getLastURL();
  null == module ? g() : (Chunk570140.Z.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  }), window.open(module))
}

function S() {
  E()
}