/** Chunk was on 86142 **/
/** chunk id: 906564, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  pG: () => _
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk110259 = require("./110259.js"),
  Chunk73153 = require("./73153.js"),
  Chunk181658 = require("./181658.js"),
  Chunk955437 = require("./955437.js"),
  Chunk577015 = require("./577015.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk499785 = require("./499785.js"),
  Chunk569717 = require("./569717.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js");

function f(e) {
  var t, n;
  let {
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
    var n, r, i, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.getOwnPropertyNames(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    return s
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
    password: A,
    guildTemplateCode: x,
    birthday: E,
    invite: v = null,
    giftCodeSKUId: j = null,
    promoEmailConsent: y = null,
    usedUsernameSuggestion: b = null
  } = e;
  if (l.h.dispatch({
      type: "REGISTER"
    }), null != E) {
    let e;
    (0, p.A)(E, g.JJy.REGISTER), d.default.track(g.HAw.AGE_GATE_ACTION, {
      source: m.w_.REGISTER,
      action: m.AM.AGE_GATE_SUBMITTED
    }), (e = i()().diff(E, "years")) < 13 || d.default.track(g.HAw.USER_AGE_SUBMITTED, {
      age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+"
    })
  }
  return h.A.post({
    url: g.Rsh.REGISTER,
    body: {
      fingerprint: u.default.getFingerprint(),
      email: t,
      username: r,
      global_name: f,
      password: A,
      invite: v,
      consent: _,
      phone_token: n,
      date_of_birth: null == E ? true : E.format("YYYY-MM-DD"),
      gift_code_sku_id: j,
      guild_template_code: x,
      promotional_email_opt_in: null == y ? true : y.checked
    },
    trackedActionData: {
      event: s.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: v,
        used_username_suggestion: b,
        promotional_email_opt_in: null == y ? true : y.checked,
        promotional_email_pre_checked: null == y ? true : y.preChecked,
        was_unique_username: true
      }
    },
    rejectWithError: false
  }).then(e => {
    l.h.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), d.default.track(g.HAw.AGE_GATE_ACTION, {
      source: m.w_.REGISTER,
      action: m.AM.AGE_GATE_SUCCESS
    })
  }, e => {
    if (e instanceof c.CaptchaCancelError) throw e;
    let t = new a.A(e);
    throw null != t.getFieldErrors("date_of_birth") && o.Xv(m.w_.REGISTER), d.default.track(g.HAw.REGISTER_SUBMIT_ERRORED, {
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