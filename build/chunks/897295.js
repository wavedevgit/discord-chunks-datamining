/** Chunk was on 47841 **/
/** chunk id: 897295, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m,
  B: () => u
}), require("./896048.js"), require("./228524.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk198982 = require("./198982.js"),
  Chunk137207 = require("./137207.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
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
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let u = "_errors",
  f = "GENERIC_REGEX_ERROR";
async function g(e, t) {
  if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) return void t([]);
  try {
    await (0, s.s6)(e), t([])
  } catch (c) {
    var n, r;
    let e, i = new l.LG(c).errors;
    if ("object" != typeof i || (null == i || null == (n = i.trigger_metadata) ? true : n.regex_patterns) == null) return;
    let s = null == (e = null == i || null == (r = i.trigger_metadata) ? true : r.regex_patterns) ? [] : function(e) {
      var t, n, r, i, l;
      let {
        [u]: s = []
      } = e, c = Object.entries(function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, [(t = function(e, t) {
        if ("object" !== d(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (true !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== d(r)) return r;
          throw TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
      }(u, "string"), "symbol" === d(t) ? t : String(t))])).map(e => {
        var t;
        let [n, r] = e, i = r[u], {
          code: l,
          message: s
        } = null != (t = null == i ? true : i[0]) ? t : {
          code: f,
          message: a.intl.string(a.t.hDPEu1)
        };
        return {
          pattern: n,
          message: s,
          code: l,
          description: null == r ? true : r.description,
          erroringCharacterLength: null == r ? true : r.erroring_character_length,
          erroringCharacterOffset: null == r ? true : r.erroring_character_offset,
          regexErrorCode: null == r ? true : r.regex_error_code
        }
      });
      return s.length > 0 && c.push({
        pattern: u,
        message: null != (n = null == (i = s[0]) ? true : i.message) ? n : a.intl.string(a.t.hDPEu1),
        code: null != (r = null == (l = s[0]) ? true : l.code) ? r : f
      }), c
    }(e);
    s.length > 0 && t(s)
  }
}
let b = (0, Chunk735438.throttle)(g, 1e3, {
  leading: false
});

function m(e, t) {
  var n, l;
  let [s, a] = r.useState([]), [d, u] = r.useState(null), [f, m] = r.useState(null != (n = null == e || null == (l = e.triggerMetadata) ? true : l.regexPatterns) ? n : []), p = r.useCallback(t => {
    t.length < 3 || b(o(c({}, e), {
      triggerMetadata: o(c({}, e.triggerMetadata), {
        regexPatterns: [t]
      })
    }), e => {
      var t;
      return u(null != (t = e[0]) ? t : null)
    })
  }, [e]);
  return {
    patterns: f,
    errors: s,
    valueError: d,
    validatePatternsChanged: r.useCallback((n, r) => {
      (0, i.isEqual)(n, r) || (b.cancel(), g(o(c({}, e), {
        triggerMetadata: o(c({}, e.triggerMetadata), {
          regexPatterns: n
        })
      }), e => {
        a(e), 0 === e.length && u(null)
      }), m(n), null == t || t(n))
    }, [e, t]),
    validateEditingValueChanged: p
  }
}