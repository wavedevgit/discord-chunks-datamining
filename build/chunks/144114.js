/** Chunk was on 88953 **/
n.d(t, {
  L: () => u,
  Z: () => m
});
var r, l = n(990547),
  o = n(544891),
  a = n(570140),
  i = n(314897),
  s = n(573261),
  c = n(815660),
  d = n(981631),
  u = ((r = {}).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", r);
let m = {
  setCountryCode(e) {
    a.Z.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => o.tn.del({
    url: d.ANM.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  resendCode(e) {
    let t = {},
      n = i.default.getFingerprint();
    return null != n && "" !== n && (t["X-Fingerprint"] = n), o.tn.post({
      url: d.ANM.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      },
      rejectWithError: !1
    })
  },
  beginAddPhone: (e, t) => o.tn.post({
    url: d.ANM.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: !1
  }),
  addPhone: (e, t, n) => o.tn.post({
    url: d.ANM.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  addPhoneWithoutPassword: e => o.tn.post({
    url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: !1
  }),
  beginReverifyPhone: (e, t) => o.tn.post({
    url: d.ANM.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: !1
  }),
  reverifyPhone: (e, t, n) => o.tn.post({
    url: d.ANM.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  validatePhoneForSupport: e => o.tn.post({
    url: d.ANM.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: !0,
    rejectWithError: !1
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      o = {},
      u = i.default.getFingerprint();
    null != u && "" !== u && (o["X-Fingerprint"] = u), r && (o.authorization = "");
    let m = await s.Z.post({
      url: d.ANM.VERIFY_PHONE,
      headers: o,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: l.NetworkActionNames.USER_VERIFY_PHONE
      },
      rejectWithError: !1
    });
    return n && a.Z.dispatch({
      type: "MODAL_POP",
      key: c.M
    }), m.body
  }
}