/** Chunk was on 9536 **/
/** chunk id: 858457, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b,
  r: () => g
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk881052 = require("./881052.js"),
  Chunk36459 = require("./36459.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
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

function c(e, t) {
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
  var t = function(e, t) {
    if ("object" !== u(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (true !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== u(r)) return r;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === u(t) ? t : String(t)
}

function u(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let g = "_errors",
  m = "GENERIC_REGEX_ERROR";
async function f(e, t) {
  if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) return void t([]);
  try {
    await (0, a.qY)(e), t([])
  } catch (i) {
    var n;
    let e = new l.Hx(i).errors;
    if ("object" != typeof e || (null == e || null == (n = e.trigger_metadata) ? true : n.regex_patterns) == null) return;
    let r = function(e) {
      var t;
      let n = null == e || null == (t = e.trigger_metadata) ? true : t.regex_patterns;
      return null == n ? [] : function(e) {
        let {
          [g]: t = []
        } = e, n = Object.entries(function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, [g].map(d))).map(e => {
          var t;
          let [n, r] = e, i = r[g], {
            code: l,
            message: a
          } = null != (t = null == i ? true : i[0]) ? t : {
            code: m,
            message: s.intl.string(s.t.hDPEu1)
          };
          return {
            pattern: n,
            message: a,
            code: l,
            description: null == r ? true : r.description,
            erroringCharacterLength: null == r ? true : r.erroring_character_length,
            erroringCharacterOffset: null == r ? true : r.erroring_character_offset,
            regexErrorCode: null == r ? true : r.regex_error_code
          }
        });
        if (t.length > 0) {
          var r, i, l, a;
          n.push({
            pattern: g,
            message: null != (l = null == (r = t[0]) ? true : r.message) ? l : s.intl.string(s.t.hDPEu1),
            code: null != (a = null == (i = t[0]) ? true : i.code) ? a : m
          })
        }
        return n
      }(n)
    }(e);
    r.length > 0 && t(r)
  }
}
let p = (0, Chunk392711.throttle)(f, 1e3, {
  leading: false
});

function b(e, t) {
  var n, l;
  let [a, s] = r.useState([]), [d, u] = r.useState(null), [g, m] = r.useState(null != (l = null == e || null == (n = e.triggerMetadata) ? true : n.regexPatterns) ? l : []), b = r.useCallback(t => {
    t.length < 3 || p(c(o({}, e), {
      triggerMetadata: c(o({}, e.triggerMetadata), {
        regexPatterns: [t]
      })
    }), e => {
      var t;
      return u(null != (t = e[0]) ? t : null)
    })
  }, [e]);
  return {
    patterns: g,
    errors: a,
    valueError: d,
    validatePatternsChanged: r.useCallback((n, r) => {
      (0, i.isEqual)(n, r) || (p.cancel(), f(c(o({}, e), {
        triggerMetadata: c(o({}, e.triggerMetadata), {
          regexPatterns: n
        })
      }), e => {
        s(e), 0 === e.length && u(null)
      }), m(n), null == t || t(n))
    }, [e, t]),
    validateEditingValueChanged: b
  }
}