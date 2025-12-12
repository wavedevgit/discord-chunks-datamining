/** Chunk was on web.js **/
/** chunk id: 816814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk325067 = require("./325067.js"),
  Chunk981631 = require("./981631.js");
let s = {
  enable(e) {
    let {
      code: t,
      secret: n
    } = e;
    return r.tn.post({
      url: a.ANM.MFA_TOTP_ENABLE,
      body: {
        code: t,
        secret: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => i.Z.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    Chunk544891.tn.post({
      url: Chunk981631.ANM.MFA_TOTP_DISABLE,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return i.Z.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: () => (Chunk570140.Z.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), Chunk544891.tn.post({
    url: Chunk981631.ANM.MFA_SMS_ENABLE,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.Z.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw i.Z.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  disableSMS: e => (i.Z.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), r.tn.post({
    url: a.ANM.MFA_SMS_DISABLE,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.Z.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw i.Z.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  sendMFABackupCodesVerificationKeyEmail: e => r.tn.post({
    url: a.ANM.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => i.Z.dispatch({
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
      regenerateNonce: s
    } = o.Z.getNonces(), l = t ? s : n;
    return r.tn.post({
      url: a.ANM.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: l,
        regenerate: t
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => i.Z.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    Chunk570140.Z.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}