/** Chunk was on 27978 **/
n.d(t, {
  R$: () => m,
  ZP: () => _
});
var r = n(913527),
  i = n.n(r),
  o = n(990547),
  a = n(570140),
  l = n(479531),
  s = n(771308),
  c = n(314897),
  u = n(626135),
  d = n(573261),
  h = n(959776),
  p = n(981631),
  g = n(723359);

function _(e) {
  var t, n, {
    invite: r = null,
    giftCodeSKUId: i = null
  } = e;
  return m((t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({}, function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
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

function m(e) {
  let {
    email: t,
    phoneToken: n,
    username: r,
    globalName: _,
    consent: m,
    password: f,
    guildTemplateCode: b,
    birthday: x,
    invite: N = null,
    giftCodeSKUId: v = null,
    promoEmailConsent: I = null,
    usedUsernameSuggestion: E = null
  } = e;
  return a.Z.dispatch({
    type: "REGISTER"
  }), null != x && ((0, h.Z)(x, p.jXE.REGISTER), u.default.track(p.rMx.AGE_GATE_ACTION, {
    source: g.L0.REGISTER,
    action: g.Al.AGE_GATE_SUBMITTED
  }), function(e) {
    let t;
    let n = i()().diff(e, "years");
    n < 13 || (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", u.default.track(p.rMx.USER_AGE_SUBMITTED, {
      age_bucket: t
    }))
  }(x)), d.Z.post({
    url: p.ANM.REGISTER,
    body: {
      fingerprint: c.default.getFingerprint(),
      email: t,
      username: r,
      global_name: _,
      password: f,
      invite: N,
      consent: m,
      phone_token: n,
      date_of_birth: null == x ? void 0 : x.format("YYYY-MM-DD"),
      gift_code_sku_id: v,
      guild_template_code: b,
      promotional_email_opt_in: null == I ? void 0 : I.checked
    },
    trackedActionData: {
      event: o.NetworkActionNames.USER_REGISTER,
      properties: {
        invite_code: N,
        used_username_suggestion: E,
        promotional_email_opt_in: null == I ? void 0 : I.checked,
        promotional_email_pre_checked: null == I ? void 0 : I.preChecked,
        was_unique_username: !0
      }
    },
    rejectWithError: !1
  }).then(e => {
    a.Z.dispatch({
      type: "REGISTER_SUCCESS",
      token: e.body.token
    }), u.default.track(p.rMx.AGE_GATE_ACTION, {
      source: g.L0.REGISTER,
      action: g.Al.AGE_GATE_SUCCESS
    })
  }, e => {
    let t = new l.Z(e);
    throw null != t.getFieldErrors("date_of_birth") && s.wE(g.L0.REGISTER), u.default.track(p.rMx.REGISTER_SUBMIT_ERRORED, {
      is_unique_username_registration: !0,
      email_error_reason: t.getFirstFieldErrorMessage("email"),
      phone_error_reason: t.getFirstFieldErrorMessage("phone"),
      password_error_reason: t.getFirstFieldErrorMessage("password"),
      username_error_reason: t.getFirstFieldErrorMessage("username"),
      global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
      date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
    }), t
  })
}