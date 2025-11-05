/** Chunk was on 27978 **/
/** chunk id: 481230, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R$: () => _,
  ZP: () => f
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk771308 = require("./771308.js"),
  Chunk353250 = require("./353250.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk959776 = require("./959776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js");

function f(e) {
  var t, n, {
    invite: r = null,
    giftCodeSKUId: i = null
  } = e;
  return _((t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        s = Object.keys(e);
      for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["invite", "giftCodeSKUId"])), n = n = {
    invite: r,
    giftCodeSKUId: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function _(e) {
  let {
    email: t,
    phoneToken: n,
    username: r,
    globalName: f,
    consent: _,
    password: x,
    guildTemplateCode: E,
    birthday: v,
    invite: j = null,
    giftCodeSKUId: b = null,
    promoEmailConsent: I = null,
    usedUsernameSuggestion: y = null
  } = e;
  if (l.Z.dispatch({
      type: "REGISTER"
    }), null != v) {
    (0, g.Z)(v, m.jXE.REGISTER), d.default.track(m.rMx.AGE_GATE_ACTION, {
      source: p.L0.REGISTER,
      action: p.Al.AGE_GATE_SUBMITTED
    });
    let e = i()().diff(v, "years");
    e < 13 || d.default.track(m.rMx.USER_AGE_SUBMITTED, {
      age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+"
    })
  }
  return h.Z.post({
    url: m.ANM.REGISTER,
    body: {
      fingerprint: u.default.getFingerprint(),
      email: t,
      username: r,
      global_name: f,
      password: x,
      invite: j,
      consent: _,
      phone_token: n,
      date_of_birth: null == v ? true : v.format("YYYY-MM-DD"),
      gift_code_sku_id: b,
      guild_template_code: E,
      promotional_email_opt_in: null == I ? true : I.checked
    },
    trackedActionData: {
      event: s.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: j,
        used_username_suggestion: y,
        promotional_email_opt_in: null == I ? true : I.checked,
        promotional_email_pre_checked: null == I ? true : I.preChecked,
        was_unique_username: true
      }
    },
    rejectWithError: false
  }).then(e => {
    l.Z.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), d.default.track(m.rMx.AGE_GATE_ACTION, {
      source: p.L0.REGISTER,
      action: p.Al.AGE_GATE_SUCCESS
    })
  }, e => {
    if (e instanceof c.CaptchaCancelError) throw e;
    let t = new a.Z(e);
    throw null != t.getFieldErrors("date_of_birth") && o.wE(p.L0.REGISTER), d.default.track(m.rMx.REGISTER_SUBMIT_ERRORED, {
      is_unique_username_registration: true,
      email_error_reason: t.getFirstFieldErrorMessage("email"),
      phone_error_reason: t.getFirstFieldErrorMessage("phone_token"),
      password_error_reason: t.getFirstFieldErrorMessage("password"),
      username_error_reason: t.getFirstFieldErrorMessage("username"),
      global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
      date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth"),
      promotional_email_opt_in_error_reason: t.getFirstFieldErrorMessage("promotional_email_opt_in"),
      fingerprint_error_reason: t.getFirstFieldErrorMessage("fingerprint"),
      invite_error_reason: t.getFirstFieldErrorMessage("invite"),
      gift_code_sku_id_error_reason: t.getFirstFieldErrorMessage("gift_code_sku_id"),
      guild_template_code_error_reason: t.getFirstFieldErrorMessage("guild_template_code"),
      consent_error_reason: t.getFirstFieldErrorMessage("consent"),
      generic_error_reason: t.getAnyErrorMessage()
    }), t
  })
}