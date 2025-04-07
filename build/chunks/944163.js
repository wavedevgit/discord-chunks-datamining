/** Chunk was on 88953 **/
n.d(t, {
  Z: () => h,
  t: () => d
}), n(953529);
var r, l = n(392711),
  o = n.n(l),
  a = n(442837),
  i = n(570140),
  s = n(246364);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = {
    version: "",
    description: "",
    formFields: []
  },
  u = {};
class m extends(r = a.ZP.Store) {
  get(e) {
    if (null != e) return u[e]
  }
  getRulesPrompt(e) {
    var t;
    return o().find(null == (t = u[e]) ? void 0 : t.formFields, s.J)
  }
}
c(m, "displayName", "MemberVerificationFormStore");
let h = new m(i.Z, {
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: t
    } = e, {
      member_verification_form: n
    } = t, {
      guild: r
    } = t;
    if (null != r && null != n) {
      var l;
      return u[r.id] = {
        version: n.version,
        description: null != (l = n.description) ? l : "",
        formFields: n.form_fields,
        guild: r
      }, !0
    }
    return !1
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t,
      guildId: n
    } = e;
    if (null == t) u[n] = d;
    else {
      var r;
      let e = null != (r = u[n]) ? r : d;
      u[n] = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            c(e, t, n[t])
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
    u[n] = null != (t = u[n]) ? t : d
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete u[null == t ? void 0 : t.id]
  }
})