/** Chunk was on 69422 **/
"use strict";
r.d(t, {
  Z: () => s
});
var n = r(544891),
  o = r(570140),
  i = r(325067),
  a = r(981631);
let s = {
  enable(e) {
    let {
      code: t,
      secret: r
    } = e;
    return n.tn.post({
      url: a.ANM.MFA_TOTP_ENABLE,
      body: {
        code: t,
        secret: r
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
    n.tn.post({
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
  }), n.tn.post({
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
  }), n.tn.post({
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
  sendMFABackupCodesVerificationKeyEmail: e => n.tn.post({
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
      viewNonce: r,
      regenerateNonce: s
    } = i.Z.getNonces();
    return n.tn.post({
      url: a.ANM.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? s : r,
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