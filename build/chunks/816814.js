/** Chunk was on 59787 **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(544891),
  o = n(570140),
  i = n(325067),
  a = n(981631);
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
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(e => o.Z.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    r.tn.post({
      url: a.ANM.MFA_TOTP_DISABLE,
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return o.Z.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: () => (o.Z.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), r.tn.post({
    url: a.ANM.MFA_SMS_ENABLE,
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => (o.Z.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw o.Z.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  disableSMS: e => (o.Z.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), r.tn.post({
    url: a.ANM.MFA_SMS_DISABLE,
    body: {
      password: e
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => (o.Z.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw o.Z.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })),
  sendMFABackupCodesVerificationKeyEmail: e => r.tn.post({
    url: a.ANM.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }).then(e => o.Z.dispatch({
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
    } = i.Z.getNonces();
    return r.tn.post({
      url: a.ANM.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? s : n,
        regenerate: t
      },
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(t => o.Z.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    o.Z.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}