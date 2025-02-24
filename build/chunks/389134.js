/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  Z: () => y
}), n(47120);
var r, i = n(392711),
  s = n.n(i),
  a = n(906280),
  l = n.n(a),
  o = n(442837),
  c = n(570140),
  d = n(944163),
  u = n(77498),
  m = n(116175),
  p = n(308083);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  return new Set(Array.from(e).filter(e => null != u.Z.getDetectableGame(e)))
}
let b = () => ({
    gameApplicationIds: new Set,
    playstyle: p.zv.NONE,
    interests: new Set,
    description: "",
    wildcardDescriptors: [p.U6, p.U6, p.U6],
    tag: "",
    verificationForm: h({}, d.t),
    badgeKind: m.ZD.SWORD,
    badgePrimaryColor: m.sg["0"].primary,
    badgeSecondaryColor: m.sg["0"].secondary,
    banner: p.qC.NIGHT_SKY,
    brandPrimaryColor: p.ym["0"].primary,
    brandSecondaryColor: p.ym["0"].secondary
  }),
  x = b(),
  j = l()(x),
  N = !1,
  v = !1,
  _ = {};
class O extends(r = o.ZP.Store) {
  getState() {
    return {
      initialSettings: x,
      settings: j,
      dirty: N,
      errors: _,
      submitting: v
    }
  }
}
g(O, "displayName", "ClanSettingsStore");
let y = new O(c.Z, {
  CLAN_SETTINGS_FETCH_START: function() {
    v = !1, x = b(), j = l()(x), N = !1, _ = {}
  },
  CLAN_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    x = h({}, b(), t), (j = l()(x)).gameApplicationIds = f(j.gameApplicationIds), N = !1
  },
  CLAN_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e, {
      gameApplicationIds: n
    } = t;
    for (let e in null != n && (t.gameApplicationIds = f(n)), j = h({}, j, l()(t)), t) delete _[e], _ = h({}, _);
    N = !s().isEqual(s().omit(j, "verificationForm"), s().omit(x, "verificationForm"))
  },
  CLAN_SETTINGS_SUBMIT: function() {
    v = !0, _ = {}
  },
  CLAN_SETTINGS_SUBMIT_SUCCESS: function() {
    v = !1, x = l()(j), N = !1, _ = {}
  },
  CLAN_SETTINGS_SUBMIT_ERROR: function(e) {
    let {
      error: t
    } = e;
    v = !1, _ = {
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
    if (null == j.verificationForm) return !1;
    N = (t = h({}, j), n = n = {
      verificationForm: h({}, j.verificationForm, i)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), j = t, !!a && !s().isEqual(j.verificationForm.formFields, null === (r = x.verificationForm) || void 0 === r ? void 0 : r.formFields))
  }
})