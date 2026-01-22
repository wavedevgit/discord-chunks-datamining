/** Chunk was on web.js **/
/** chunk id: 557722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  d: () => u
});
var Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk499785 = require("./499785.js"),
  Chunk53516 = require("./53516.js"),
  Chunk652215 = require("./652215.js"),
  u = function(e) {
    return e.USER_ACTION_REQUIRED = "user_action_required", e.USER_SETTINGS_UPDATE = "user_settings_update", e.GUILD_PHONE_REQUIRED = "guild_phone_required", e.MFA_PHONE_UPDATE = "mfa_phone_update", e.CONTACT_SYNC = "contact_sync", e
  }({});
let d = {
  setCountryCode(e) {
    a.h.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => i.Bo.del({
    url: c.Rsh.PHONE,
    body: {
      password: e,
      change_phone_reason: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  resendCode(e) {
    let t = {},
      n = s.default.getFingerprint();
    return null != n && "" !== n && (t["X-Fingerprint"] = n), i.Bo.post({
      url: c.Rsh.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      },
      rejectWithError: false
    })
  },
  beginAddPhone: (e, t) => i.Bo.post({
    url: c.Rsh.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  addPhone: (e, t, n) => i.Bo.post({
    url: c.Rsh.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  addPhoneWithoutPassword: e => i.Bo.post({
    url: c.Rsh.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: false
  }),
  beginReverifyPhone: (e, t) => i.Bo.post({
    url: c.Rsh.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  reverifyPhone: (e, t, n) => i.Bo.post({
    url: c.Rsh.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  validatePhoneForSupport: e => i.Bo.post({
    url: c.Rsh.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      i = arguments.length > 3 && true !== arguments[3] && arguments[3],
      u = {},
      d = s.default.getFingerprint();
    null != d && "" !== d && (u["X-Fingerprint"] = d), i && (u.authorization = "");
    let f = await o.A.post({
      url: c.Rsh.VERIFY_PHONE,
      headers: u,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.USER_VERIFY_PHONE
      },
      rejectWithError: false
    });
    return n && a.h.dispatch({
      type: "MODAL_POP",
      key: l.V
    }), f.body
  }
}