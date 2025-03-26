/** Chunk was on 97574 **/
r.d(t, {
  Z: () => d,
  t: () => c
}), r(266796);
var n, l = r(392711),
  i = r.n(l),
  a = r(442837),
  o = r(570140),
  s = r(246364);

function h(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let c = {
    version: "",
    description: "",
    formFields: []
  },
  v = {};
class u extends(n = a.ZP.Store) {
  get(e) {
    if (null != e) return v[e]
  }
  getRulesPrompt(e) {
    var t;
    return i().find(null === (t = v[e]) || void 0 === t ? void 0 : t.formFields, s.J)
  }
}
h(u, "displayName", "MemberVerificationFormStore");
let d = new u(o.Z, {
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: t
    } = e, {
      member_verification_form: r
    } = t, {
      guild: n
    } = t;
    if (null != n && null != r) {
      var l;
      return v[n.id] = {
        version: r.version,
        description: null !== (l = r.description) && void 0 !== l ? l : "",
        formFields: r.form_fields,
        guild: n
      }, !0
    }
    return !1
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t,
      guildId: r
    } = e;
    if (null == t) v[r] = c;
    else {
      var n;
      let e = null !== (n = v[r]) && void 0 !== n ? n : c;
      v[r] = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            h(e, t, r[t])
          })
        }
        return e
      }({}, e, t)
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
    var t;
    let {
      guildId: r
    } = e;
    v[r] = null !== (t = v[r]) && void 0 !== t ? t : c
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete v[null == t ? void 0 : t.id]
  }
})