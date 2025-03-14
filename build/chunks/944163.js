/** Chunk was on 46408 **/
n.d(t, {
  Z: () => m,
  t: () => d
}), n(266796);
var i, r = n(392711),
  l = n.n(r),
  a = n(442837),
  o = n(570140),
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
class f extends(i = a.ZP.Store) {
  get(e) {
    if (null != e) return u[e]
  }
  getRulesPrompt(e) {
    var t;
    return l().find(null === (t = u[e]) || void 0 === t ? void 0 : t.formFields, s.J)
  }
}
c(f, "displayName", "MemberVerificationFormStore");
let m = new f(o.Z, {
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
      return u[i.id] = {
        version: n.version,
        description: null !== (r = n.description) && void 0 !== r ? r : "",
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
    if (null == t) u[n] = d;
    else {
      var i;
      let e = null !== (i = u[n]) && void 0 !== i ? i : d;
      u[n] = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
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
    u[n] = null !== (t = u[n]) && void 0 !== t ? t : d
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete u[null == t ? void 0 : t.id]
  }
})