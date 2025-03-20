/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p,
  r: () => u
}), n(47120), n(266796), n(653041);
var r = n(192379),
  i = n(392711),
  s = n(881052),
  a = n(36459),
  l = n(388032);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function A(e, t) {
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

function c(e) {
  var t = function(e, t) {
    if ("object" !== d(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== d(r)) return r;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === d(t) ? t : String(t)
}

function d(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let u = "_errors",
  g = "GENERIC_REGEX_ERROR";
async function f(e, t) {
  if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) {
    t([]);
    return
  }
  try {
    await (0, a.qY)(e), t([])
  } catch (i) {
    var n;
    let e = new s.Hx(i).errors;
    if ("object" != typeof e || (null == e ? void 0 : null === (n = e.trigger_metadata) || void 0 === n ? void 0 : n.regex_patterns) == null) return;
    let r = function(e) {
      var t;
      let n = null == e ? void 0 : null === (t = e.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns;
      return null == n ? [] : function(e) {
        let {
          [u]: t = []
        } = e, n = Object.entries(function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, [u].map(c))).map(e => {
          var t;
          let [n, r] = e, i = r[u], {
            code: s,
            message: a
          } = null !== (t = null == i ? void 0 : i[0]) && void 0 !== t ? t : {
            code: g,
            message: l.NW.string(l.t.hDPEu7)
          };
          return {
            pattern: n,
            message: a,
            code: s,
            description: null == r ? void 0 : r.description,
            erroringCharacterLength: null == r ? void 0 : r.erroring_character_length,
            erroringCharacterOffset: null == r ? void 0 : r.erroring_character_offset,
            regexErrorCode: null == r ? void 0 : r.regex_error_code
          }
        });
        if (t.length > 0) {
          var r, i, s, a;
          n.push({
            pattern: u,
            message: null !== (s = null === (r = t[0]) || void 0 === r ? void 0 : r.message) && void 0 !== s ? s : l.NW.string(l.t.hDPEu7),
            code: null !== (a = null === (i = t[0]) || void 0 === i ? void 0 : i.code) && void 0 !== a ? a : g
          })
        }
        return n
      }(n)
    }(e);
    r.length > 0 && t(r)
  }
}
let m = (0, i.throttle)(f, 1e3, {
  leading: !1
});

function p(e, t) {
  var n, s;
  let [a, l] = r.useState([]), [c, d] = r.useState(null), [u, g] = r.useState(null !== (s = null == e ? void 0 : null === (n = e.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) && void 0 !== s ? s : []), p = r.useCallback(t => {
    !(t.length < 3) && m(A(o({}, e), {
      triggerMetadata: A(o({}, e.triggerMetadata), {
        regexPatterns: [t]
      })
    }), e => {
      var t;
      return d(null !== (t = e[0]) && void 0 !== t ? t : null)
    })
  }, [e]);
  return {
    patterns: u,
    errors: a,
    valueError: c,
    validatePatternsChanged: r.useCallback((n, r) => {
      !(0, i.isEqual)(n, r) && (m.cancel(), f(A(o({}, e), {
        triggerMetadata: A(o({}, e.triggerMetadata), {
          regexPatterns: n
        })
      }), e => {
        l(e), 0 === e.length && d(null)
      }), g(n), null == t || t(n))
    }, [e, t]),
    validateEditingValueChanged: p
  }
}