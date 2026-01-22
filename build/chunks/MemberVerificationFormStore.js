/** Chunk was on 39579 **/
/** chunk id: 60175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  U: () => d
}), require("./228524.js");
var r, Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk513461 = require("./513461.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {
    version: "",
    description: "",
    formFields: []
  },
  u = {};
class f extends(r = Chunk311907.Ay.Store) {
  get(e) {
    if (null != e) return u[e]
  }
  getRulesPrompt(e) {
    var t;
    return l().find(null == (t = u[e]) ? true : t.formFields, a.i7)
  }
}
o(f, "displayName", "MemberVerificationFormStore");
let p = new f(Chunk73153.h, {
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: t
    } = e, {
      member_verification_form: n
    } = t, {
      guild: r
    } = t;
    if (null != r && null != n) {
      var i;
      return u[r.id] = {
        version: n.version,
        description: null != (i = n.description) ? i : "",
        formFields: n.form_fields,
        guild: r
      }, true
    }
    returnfalse
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
            o(e, t, n[t])
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
    delete u[null == t ? true : t.id]
  }
})