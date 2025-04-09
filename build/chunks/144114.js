/** Chunk was on 99916 **/
r.d(t, {
  L: () => d,
  Z: () => f
});
var n, i = r(990547),
  o = r(544891),
  s = r(570140),
  l = r(314897),
  c = r(573261),
  a = r(815660),
  u = r(981631),
  d = ((n = {}).USER_ACTION_REQUIRED = "user_action_required", n.USER_SETTINGS_UPDATE = "user_settings_update", n.GUILD_PHONE_REQUIRED = "guild_phone_required", n.MFA_PHONE_UPDATE = "mfa_phone_update", n.CONTACT_SYNC = "contact_sync", n);
let f = {
  setCountryCode(e) {
    s.Z.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => o.tn.del({
    url: u.ANM.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  resendCode(e) {
    let t = {},
      r = l.default.getFingerprint();
    return null != r && "" !== r && (t["X-Fingerprint"] = r), o.tn.post({
      url: u.ANM.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      },
      rejectWithError: !1
    })
  },
  beginAddPhone: (e, t) => o.tn.post({
    url: u.ANM.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: !1
  }),
  addPhone: (e, t, r) => o.tn.post({
    url: u.ANM.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: r
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  addPhoneWithoutPassword: e => o.tn.post({
    url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: !1
  }),
  beginReverifyPhone: (e, t) => o.tn.post({
    url: u.ANM.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: !1
  }),
  reverifyPhone: (e, t, r) => o.tn.post({
    url: u.ANM.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: r
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  validatePhoneForSupport: e => o.tn.post({
    url: u.ANM.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  async verifyPhone(e, t) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      o = {},
      d = l.default.getFingerprint();
    null != d && "" !== d && (o["X-Fingerprint"] = d), n && (o.authorization = "");
    let f = await c.Z.post({
      url: u.ANM.VERIFY_PHONE,
      headers: o,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: i.NetworkActionNames.USER_VERIFY_PHONE
      },
      rejectWithError: !1
    });
    return r && s.Z.dispatch({
      type: "MODAL_POP",
      key: a.M
    }), f.body
  }
}