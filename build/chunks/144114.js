/** Chunk was on web.js **/
/** chunk id: 144114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => u,
  Z: () => d
});
var Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk573261 = require("./573261.js"),
  Chunk815660 = require("./815660.js"),
  Chunk981631 = require("./981631.js"),
  u = function(e) {
    return e.USER_ACTION_REQUIRED = "user_action_required", e.USER_SETTINGS_UPDATE = "user_settings_update", e.GUILD_PHONE_REQUIRED = "guild_phone_required", e.MFA_PHONE_UPDATE = "mfa_phone_update", e.CONTACT_SYNC = "contact_sync", e
  }({});
let d = {
  setCountryCode(e) {
    a.Z.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => i.tn.del({
    url: c.ANM.PHONE,
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
    return null != n && "" !== n && (t["X-Fingerprint"] = n), i.tn.post({
      url: c.ANM.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      },
      rejectWithError: false
    })
  },
  beginAddPhone: (e, t) => i.tn.post({
    url: c.ANM.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  addPhone: (e, t, n) => i.tn.post({
    url: c.ANM.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  addPhoneWithoutPassword: e => i.tn.post({
    url: c.ANM.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: false
  }),
  beginReverifyPhone: (e, t) => i.tn.post({
    url: c.ANM.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  reverifyPhone: (e, t, n) => i.tn.post({
    url: c.ANM.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  validatePhoneForSupport: e => i.tn.post({
    url: c.ANM.VERIFY_PHONE_FOR_TICKET,
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
      d = o.default.getFingerprint();
    null != d && "" !== d && (u["X-Fingerprint"] = d), i && (u.authorization = "");
    let f = await s.Z.post({
      url: c.ANM.VERIFY_PHONE,
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
    return n && a.Z.dispatch({
      type: "MODAL_POP",
      key: l.M
    }), f.body
  }
}