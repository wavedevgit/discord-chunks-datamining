/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120);
var r, i = n(392711),
  s = n.n(i),
  a = n(906280),
  l = n.n(a),
  o = n(442837),
  A = n(570140),
  c = n(944163),
  d = n(77498),
  u = n(116175),
  g = n(308083);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  return new Set(Array.from(e).filter(e => null != d.Z.getDetectableGame(e)))
}
let h = () => ({
    gameApplicationIds: new Set,
    playstyle: g.zv.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [g.U6, g.U6, g.U6],
    tag: "",
    verificationForm: m({}, c.t),
    badgeKind: u.ZD.SWORD,
    badgePrimaryColor: u.sg["0"].primary,
    badgeSecondaryColor: u.sg["0"].secondary,
    banner: g.qC.NIGHT_SKY,
    brandPrimaryColor: g.ym["0"].primary,
    brandSecondaryColor: g.ym["0"].secondary
  }),
  C = h(),
  b = l()(C),
  v = !1,
  x = !1,
  N = {};
class j extends(r = o.ZP.Store) {
  getState() {
    return {
      initialSettings: C,
      settings: b,
      dirty: v,
      errors: N,
      submitting: x
    }
  }
}
f(j, "displayName", "ClanSettingsStore");
let E = new j(A.Z, {
  CLAN_SETTINGS_FETCH_START: function() {
    x = !1, C = h(), b = l()(C), v = !1, N = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    C = m({}, h(), t), (b = l()(C)).gameApplicationIds = p(b.gameApplicationIds), v = !1
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e, {
      gameApplicationIds: n
    } = t;
    for (let e in null != n && (t.gameApplicationIds = p(n)), b = m({}, b, l()(t)), t) delete N[e], N = m({}, N);
    v = !s().isEqual(s().omit(b, "verificationForm"), s().omit(C, "verificationForm"))
  },
  CLAN_SETTINGS_SUBMIT: function() {
    x = !0, N = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    x = !1, C = l()(b), v = !1, N = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    x = !1, N = {
      gameApplicationIds: t.getFirstFieldErrorMessage("game_application_ids"),
      playstyle: t.getFirstFieldErrorMessage("play_style"),
      description: t.getFirstFieldErrorMessage("description"),
      wildcardDescriptors: t.getFirstFieldErrorMessage("wildcard_descriptors"),
      interests: t.getFirstFieldErrorMessage("search_terms"),
      tag: t.getFirstFieldErrorMessage("tag"),
      verificationForm: t.getFirstFieldErrorMessage(["verification_form", "form_fields"])
    }
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    var t, n, r;
    let {
      form: i,
      isLocalUpdate: a
    } = e;
    if (null == b.verificationForm) return !1;
    v = (t = m({}, b), n = n = {
      verificationForm: m({}, b.verificationForm, i)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), b = t, !!a && !s().isEqual(b.verificationForm.formFields, null === (r = C.verificationForm) || void 0 === r ? void 0 : r.formFields))
  }
})