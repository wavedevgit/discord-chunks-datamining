/** Chunk was on 53967 **/
n.d(t, {
  Z: () => f,
  t: () => c
}), n(953529);
var i, r = n(392711),
  l = n.n(r),
  o = n(442837),
  s = n(570140),
  a = n(246364);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
    version: "",
    description: "",
    formFields: []
  },
  d = {};
class E extends(i = o.ZP.Store) {
  get(e) {
    if (null != e) return d[e]
  }
  getRulesPrompt(e) {
    var t;
    return l().find(null == (t = d[e]) ? void 0 : t.formFields, a.J)
  }
}
u(E, "displayName", "MemberVerificationFormStore");
let f = new E(s.Z, {
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: t
    } = e, {
      member_verification_form: n
    } = t, {
      guild: i
    } = t;
    if (null != i && null != n) {
      var r;
      return d[i.id] = {
        version: n.version,
        description: null != (r = n.description) ? r : "",
        formFields: n.form_fields,
        guild: i
      }, !0
    }
    return !1
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t,
      guildId: n
    } = e;
    if (null == t) d[n] = c;
    else {
      var i;
      let e = null != (i = d[n]) ? i : c;
      d[n] = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            u(e, t, n[t])
          })
        }
        return e
      }({}, e, t)
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    d[n] = null != (t = d[n]) ? t : c
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete d[null == t ? void 0 : t.id]
  }
})