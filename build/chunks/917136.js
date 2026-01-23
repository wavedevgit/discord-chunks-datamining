/** Chunk was on web.js **/
/** chunk id: 917136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AF: () => E,
  JQ: () => _,
  Mn: () => y,
  Ud: () => f,
  XW: () => b,
  YS: () => p,
  c6: () => m,
  fR: () => h,
  startRegisterWebAuthnCredential: () => g
});
var Chunk239947 = require("./239947.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function f() {
  return (await i.Bo.post({
    url: o.Rsh.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
    headers: {
      authorization: ""
    },
    rejectWithError: false
  })).body
}
async function p() {
  let {
    challenge: e,
    ticket: t
  } = (await i.Bo.post({
    url: o.Rsh.WEBAUTHN_PASSWORDLESS_CHALLENGE,
    rejectWithError: false
  })).body;
  return {
    challenge: e,
    ticket: t
  }
}

function _() {
  i.Bo.get({
    url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS,
    rejectWithError: true
  }).then(e => {
    if (null != e.body) {
      let t = e.body.map(e => {
        let t = null == e.last_used ? null : new Date(e.last_used);
        return d(c({}, e), {
          last_used: t
        })
      });
      a.h.dispatch({
        type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
        credentials: t
      })
    }
  })
}

function h(e) {
  i.Bo.del({
    url: o.Rsh.MFA_WEBAUTHN_CREDENTIAL(e.id),
    rejectWithError: true
  }).then(() => {
    a.h.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function m(e, t) {
  let n = await i.Bo.patch({
    url: o.Rsh.MFA_WEBAUTHN_CREDENTIAL(e),
    body: {
      name: t
    },
    rejectWithError: false
  });
  if (null != n.body) {
    let e = n.body,
      t = null == e.last_used ? null : new Date(e.last_used),
      r = d(c({}, e), {
        last_used: t
      });
    a.h.dispatch({
      type: "AUTHENTICATOR_UPDATE",
      credential: r
    })
  }
}
async function g() {
  let {
    body: {
      ticket: e,
      challenge: t
    }
  } = await i.Bo.post({
    url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS,
    body: {},
    rejectWithError: false
  });
  return {
    ticket: e,
    challenge: t
  }
}
async function E(e, t, n) {
  let i = await s.A.post({
    url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: n
    },
    trackedActionData: {
      event: r.D.WEBAUTHN_REGISTER
    },
    rejectWithError: false
  });
  a.h.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: i.body
  }), a.h.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: i.body.backup_codes
  })
}

function y() {
  a.h.dispatch({
    type: "WEBAUTHN_TRIGGER_REGISTER"
  })
}

function b() {
  a.h.dispatch({
    type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER"
  })
}