/** Chunk was on 82411 **/
/** chunk id: 144114, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  L: () => u,
  Z: () => p
});
var r, Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk573261 = require("./573261.js"),
  Chunk815660 = require("./815660.js"),
  Chunk981631 = require("./981631.js"),
  u = ((r = {}).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", r);
let p = {
  setCountryCode(e) {
    a.Z.dispatch({
      type: "PHONE_SET_COUNTRY_CODE",
      countryCode: e
    })
  },
  removePhone: (e, t) => i.tn.del({
    url: d.ANM.PHONE,
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
    return null != n && "" !== n && (t["X-Fingerprint"] = n), i.tn.post({
      url: d.ANM.RESEND_PHONE,
      headers: t,
      body: {
        phone: e
      },
      rejectWithError: false
    })
  },
  beginAddPhone: (e, t) => i.tn.post({
    url: d.ANM.PHONE,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  addPhone: (e, t, n) => i.tn.post({
    url: d.ANM.PHONE,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  addPhoneWithoutPassword: e => i.tn.post({
    url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
    body: {
      code: e
    },
    rejectWithError: false
  }),
  beginReverifyPhone: (e, t) => i.tn.post({
    url: d.ANM.PHONE_REVERIFY,
    body: {
      phone: e,
      change_phone_reason: t
    },
    rejectWithError: false
  }),
  reverifyPhone: (e, t, n) => i.tn.post({
    url: d.ANM.PHONE_REVERIFY,
    body: {
      phone_token: e,
      password: t,
      change_phone_reason: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  validatePhoneForSupport: e => i.tn.post({
    url: d.ANM.VERIFY_PHONE_FOR_TICKET,
    body: {
      token: e
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  async verifyPhone(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3],
      i = {},
      u = s.default.getFingerprint();
    null != u && "" !== u && (i["X-Fingerprint"] = u), r && (i.authorization = "");
    let p = await l.Z.post({
      url: d.ANM.VERIFY_PHONE,
      headers: i,
      body: {
        phone: e,
        code: t
      },
      oldFormErrors: true,
      trackedActionData: {
        event: o.NetworkActionNames.USER_VERIFY_PHONE
      },
      rejectWithError: false
    });
    return n && a.Z.dispatch({
      type: "MODAL_POP",
      key: c.M
    }), p.body
  }
}