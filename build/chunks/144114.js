/** Chunk was on 99840 **/
t.d(n, {
  L: () => u,
  Z: () => m
});
var r, o = t(990547),
  i = t(544891),
  a = t(570140),
  s = t(314897),
  l = t(573261),
  c = t(815660),
  d = t(981631),
  u = ((r = {}).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", r);
let m = {
  setCountryCode(e) {
    a.Z.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, n) => i.tn.del({
    url: d.ANM.PHONE,
    body: {
      password: e,
      change_phone_reason: n
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  resendCode(e) {
    let n = {},
      t = s.default.getFingerprint();
    return null != t && "" !== t && (n["X-Fingerprint"] = t), i.tn.post({
      url: d.ANM.RESEND_PHONE,
      headers: n,
      body: {
        phone: e
      },
      rejectWithError: !1
    })
  },
  beginAddPhone: (e, n) => i.tn.post({
    url: d.ANM.PHONE,
    body: {
      phone: e,
      change_phone_reason: n
    },
    rejectWithError: !1
  }),
  addPhone: (e, n, t) => i.tn.post({
    url: d.ANM.PHONE,
    body: {
      phone_token: e,
      password: n,
      change_phone_reason: t
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  addPhoneWithoutPassword: e => i.tn.post({
    url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: !1
  }),
  beginReverifyPhone: (e, n) => i.tn.post({
    url: d.ANM.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: n
    },
    rejectWithError: !1
  }),
  reverifyPhone: (e, n, t) => i.tn.post({
    url: d.ANM.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: n,
      change_phone_reason: t
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  validatePhoneForSupport: e => i.tn.post({
    url: d.ANM.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  async verifyPhone(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = {},
      u = s.default.getFingerprint();
    null != u && "" !== u && (i["X-Fingerprint"] = u), r && (i.authorization = "");
    let m = await l.Z.post({
      url: d.ANM.VERIFY_PHONE,
      headers: i,
      body: {
        phone: e,
        code: n
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: o.NetworkActionNames.USER_VERIFY_PHONE
      },
      rejectWithError: !1
    });
    return t && a.Z.dispatch({
      type: "MODAL_POP",
      key: c.M
    }), m.body
  }
}