/** Chunk was on web.js **/
/** chunk id: 493405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => v,
  DD: () => h,
  LR: () => m,
  Rz: () => g,
  UU: () => _,
  _b: () => O,
  fB: () => E,
  gm: () => b,
  jR: () => A
}), require("./65821.js"), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk70142 = require("./70142.js"),
  Chunk739508 = require("./739508.js"),
  Chunk184015 = require("./184015.js"),
  Chunk723702 = require("./723702.js"),
  Chunk384904 = require("./384904.js"),
  Chunk652215 = require("./652215.js");
let d = "https://www.paypal.com",
  f = "https://sandbox.paypal.com";

function p(e) {
  let t = u.Gg3.BRAINTREE.KEY.startsWith("production_") ? d : f;
  return "".concat(t, "/agreements/approve?nolegacy=1&ba_token=").concat(e)
}

function _() {
  (0, o.j)().then(e => {
    e.client.create({
      authorization: u.Gg3.BRAINTREE.KEY
    }).then(e => {
      i.h.dispatch({
        type: "BRAINTREE_CREATE_CLIENT_SUCCESS",
        client: e
      }), m(), h()
    }).catch(() => i.h.dispatch({
      type: "BRAINTREE_CREATE_CLIENT_FAIL"
    }))
  })
}

function h() {
  let e = a.A.getClient();
  if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
  (0, o.j)().then(t => {
    t.venmo.create({
      client: e,
      allowDesktop: true,
      paymentMethodUsage: "multi_use"
    }).then(e => {
      i.h.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS",
        venmoClient: e
      })
    }).catch(() => {
      i.h.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL"
      })
    })
  })
}

function m() {
  let e = a.A.getClient();
  if (null == e) throw Error("braintree client must be initialized before calling this");
  (0, o.j)().then(t => {
    t.paypal.create({
      client: e
    }).then(e => {
      if (null == e._navigateFrameToAuth) throw Error("braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?");
      e._navigateFrameToAuth = function(e) {
        let t = this._formatPaymentResourceData(e);
        return r.Bo.post({
          url: u.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
      }, i.h.dispatch({
        type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS",
        paypalClient: e
      })
    }).catch(() => i.h.dispatch({
      type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL"
    }))
  })
}

function g() {
  let e = a.A.getPayPalClient();
  if (null == e) throw Error("braintree paypal client must be initialized before calling this");
  i.h.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  });
  let t = Promise.resolve("");
  (0, l.isDesktop)() && (t = (0, c.jf)(u.hes.PAYPAL)), t.then(() => e.tokenize({
    flow: "vault"
  })).then(e => {
    let {
      email: t,
      firstName: n,
      lastName: r,
      billingAddress: a
    } = e.details;
    i.h.dispatch({
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
    n === u.Q7O.PAYPAL_POPUP_CLOSED || null == n ? i.h.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED"
    }) : (i.h.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL",
      message: t,
      code: n
    }), s.pM(Error("Braintree Paypal Error: ".concat(t, " ").concat(n, " ").concat(r))))
  })
}

function E() {
  let e = a.A.getVenmoClient();
  if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
  i.h.dispatch({
    type: "BRAINTREE_TOKENIZE_VENMO_START"
  }), e.tokenize().then(e => {
    let {
      username: t
    } = e.details;
    i.h.dispatch({
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
    [u.Q7O.VENMO_APP_CANCELED, u.Q7O.VENMO_DESKTOP_CANCELED, u.Q7O.VENMO_CANCELED].includes(n) ? i.h.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED"
    }) : (i.h.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL",
      message: t,
      code: n
    }), s.pM(Error("Braintree Venmo Error: ".concat(t, " ").concat(n, " ").concat(r))))
  })
}

function y(e, t) {
  if (null == e) return Promise.resolve();
  i.h.dispatch(t);
  try {
    return Promise.resolve(e.teardown())
  } catch (e) {
    return Promise.resolve()
  }
}

function b() {
  return y(a.A.getPayPalClient(), {
    type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT"
  })
}

function O() {
  return y(a.A.getVenmoClient(), {
    type: "BRAINTREE_TEARDOWN_VENMO_CLIENT"
  })
}

function v() {
  let e = a.A.getLastURL();
  null == e ? g() : (i.h.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  }), window.open(e))
}

function A() {
  E()
}