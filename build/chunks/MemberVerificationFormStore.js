/** Chunk was on 44686 **/
/** chunk id: 944163, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  t: () => d
}), require("./953529.js");
var n, Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk246364 = require("./246364.js");

function o(e, i, t) {
  return i in e ? Object.defineProperty(e, i, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[i] = t, e
}
let d = {
    version: "",
    description: "",
    formFields: []
  },
  c = {};
class E extends(n = Chunk442837.ZP.Store) {
  get(e) {
    if (null != e) return c[e]
  }
  getRulesPrompt(e) {
    var i;
    return r().find(null == (i = c[e]) ? true : i.formFields, a.J)
  }
}
o(E, "displayName", "MemberVerificationFormStore");
let f = new E(Chunk570140.Z, {
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: i
    } = e, {
      member_verification_form: t
    } = i, {
      guild: n
    } = i;
    if (null != n && null != t) {
      var l;
      return c[n.id] = {
        version: t.version,
        description: null != (l = t.description) ? l : "",
        formFields: t.form_fields,
        guild: n
      }, true
    }
    returnfalse
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: i,
      guildId: t
    } = e;
    if (null == i) c[t] = d;
    else {
      var n;
      let e = null != (n = c[t]) ? n : d;
      c[t] = function(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.forEach(function(i) {
            o(e, i, t[i])
          })
        }
        return e
      }({}, e, i)
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
    var i;
    let {
      guildId: t
    } = e;
    c[t] = null != (i = c[t]) ? i : d
  },
  GUILD_DELETE: function(e) {
    let {
      guild: i
    } = e;
    delete c[null == i ? true : i.id]
  }
})