/** Chunk was on web.js **/
/** chunk id: 98207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk670492 = require("./670492.js"),
  Chunk652215 = require("./652215.js");
let o = {
  enable(e) {
    let {
      code: t,
      secret: n
    } = e;
    return r.Bo.post({
      url: s.Rsh.MFA_TOTP_ENABLE,
      body: {
        code: t,
        secret: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => i.h.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    r.Bo.post({
      url: s.Rsh.MFA_TOTP_DISABLE,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return i.h.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: () => (i.h.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), r.Bo.post({
    url: s.Rsh.MFA_SMS_ENABLE,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.h.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw i.h.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  disableSMS: e => (i.h.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), r.Bo.post({
    url: s.Rsh.MFA_SMS_DISABLE,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.h.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw i.h.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  sendMFABackupCodesVerificationKeyEmail: e => r.Bo.post({
    url: s.Rsh.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => i.h.dispatch({
    type: "MFA_SEND_VERIFICATION_KEY",
    nonces: {
      viewNonce: e.body.nonce,
      regenerateNonce: e.body.regenerate_nonce
    }
  }), e => {
    throw e
  }),
  confirmViewBackupCodes(e, t) {
    let {
      viewNonce: n,
      regenerateNonce: o
    } = a.A.getNonces(), l = t ? o : n;
    return r.Bo.post({
      url: s.Rsh.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: l,
        regenerate: t
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => i.h.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    i.h.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}