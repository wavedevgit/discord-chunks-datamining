/** Chunk was on 78811 **/
/** chunk id: 98207, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk670492 = require("./670492.js"),
  Chunk652215 = require("./652215.js");
let a = {
  enable(e) {
    let {
      code: t,
      secret: r
    } = e;
    return n.Bo.post({
      url: i.Rsh.MFA_TOTP_ENABLE,
      body: {
        code: t,
        secret: r
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => o.h.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    n.Bo.post({
      url: i.Rsh.MFA_TOTP_DISABLE,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return o.h.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: () => (o.h.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), n.Bo.post({
    url: i.Rsh.MFA_SMS_ENABLE,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (o.h.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw o.h.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  disableSMS: e => (o.h.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), n.Bo.post({
    url: i.Rsh.MFA_SMS_DISABLE,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (o.h.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw o.h.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  sendMFABackupCodesVerificationKeyEmail: e => n.Bo.post({
    url: i.Rsh.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => o.h.dispatch({
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
      viewNonce: r,
      regenerateNonce: a
    } = s.A.getNonces();
    return n.Bo.post({
      url: i.Rsh.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? a : r,
        regenerate: t
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => o.h.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    o.h.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}