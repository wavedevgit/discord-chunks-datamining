/** Chunk was on 88474 **/
/** chunk id: 557722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  d: () => d
});
var r, Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk499785 = require("./499785.js"),
  Chunk53516 = require("./53516.js"),
  Chunk652215 = require("./652215.js"),
  d = ((r = {}).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", r);
let f = {
  setCountryCode(e) {
    a.h.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => l.Bo.del({
    url: u.Rsh.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  resendCode(e) {
    let t = {},
      n = o.default.getFingerprint();
    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.Bo.post({
      url: u.Rsh.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      },
      rejectWithError: false
    })
  },
  beginAddPhone: (e, t) => l.Bo.post({
    url: u.Rsh.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  addPhone: (e, t, n) => l.Bo.post({
    url: u.Rsh.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  addPhoneWithoutPassword: e => l.Bo.post({
    url: u.Rsh.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: false
  }),
  beginReverifyPhone: (e, t) => l.Bo.post({
    url: u.Rsh.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  reverifyPhone: (e, t, n) => l.Bo.post({
    url: u.Rsh.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  validatePhoneForSupport: e => l.Bo.post({
    url: u.Rsh.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      l = {},
      d = o.default.getFingerprint();
    null != d && "" !== d && (l["X-Fingerprint"] = d), r && (l.authorization = "");
    let f = await s.A.post({
      url: u.Rsh.VERIFY_PHONE,
      headers: l,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: true,
      trackedActionData: {
        event: i.NetworkActionNames.USER_VERIFY_PHONE
      },
      rejectWithError: false
    });
    return n && a.h.dispatch({
      type: "MODAL_POP",
      key: c.V
    }), f.body
  }
}