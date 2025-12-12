/** Chunk was on web.js **/
/** chunk id: 165737, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk473749 = require("./473749.js");

function i(e) {
  var t = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
  }
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

function o() {}
var a = {
    d: {
      f: o,
      r: function() {
        throw Error(i(522))
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  },
  s = Symbol.for("react.portal");

function l(e, t, n) {
  var r = 3 < arguments.length && true !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: s,
    key: null == r ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
var c = Chunk473749.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

function u(e, t) {
  return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : true
}
exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, exports.createPortal = function(e, t) {
  var n = 2 < arguments.length && true !== arguments[2] ? arguments[2] : null;
  if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(i(299));
  return l(e, t, null, n)
}, exports.flushSync = function(e) {
  var t = c.T,
    n = a.p;
  try {
    if (c.T = null, a.p = 2, e) return e()
  } finally {
    c.T = t, a.p = n, a.d.f()
  }
}, exports.preconnect = function(e, t) {
  "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : true : null, a.d.C(e, t))
}, exports.prefetchDNS = function(e) {
  "string" == typeof e && a.d.D(e)
}, exports.preinit = function(e, t) {
  if ("string" == typeof e && t && "string" == typeof t.as) {
    var n = t.as,
      r = u(n, t.crossOrigin),
      i = "string" == typeof t.integrity ? t.integrity : true,
      o = "string" == typeof t.fetchPriority ? t.fetchPriority : true;
    "style" === n ? a.d.S(e, "string" == typeof t.precedence ? t.precedence : true, {
      crossOrigin: r,
      integrity: i,
      fetchPriority: o
    }) : "script" === n && a.d.X(e, {
      crossOrigin: r,
      integrity: i,
      fetchPriority: o,
      nonce: "string" == typeof t.nonce ? t.nonce : true
    })
  }
}, exports.preinitModule = function(e, t) {
  if ("string" == typeof e)
    if ("object" == typeof t && null !== t) {
      if (null == t.as || "script" === t.as) {
        var n = u(t.as, t.crossOrigin);
        a.d.M(e, {
          crossOrigin: n,
          integrity: "string" == typeof t.integrity ? t.integrity : true,
          nonce: "string" == typeof t.nonce ? t.nonce : true
        })
      }
    } else null == t && a.d.M(e)
}, exports.preload = function(e, t) {
  if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
    var n = t.as,
      r = u(n, t.crossOrigin);
    a.d.L(e, n, {
      crossOrigin: r,
      integrity: "string" == typeof t.integrity ? t.integrity : true,
      nonce: "string" == typeof t.nonce ? t.nonce : true,
      type: "string" == typeof t.type ? t.type : true,
      fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : true,
      referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : true,
      imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : true,
      imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : true,
      media: "string" == typeof t.media ? t.media : true
    })
  }
}, exports.preloadModule = function(e, t) {
  if ("string" == typeof e)
    if (t) {
      var n = u(t.as, t.crossOrigin);
      a.d.m(e, {
        as: "string" == typeof t.as && "script" !== t.as ? t.as : true,
        crossOrigin: n,
        integrity: "string" == typeof t.integrity ? t.integrity : true
      })
    } else a.d.m(e)
}, exports.requestFormReset = function(e) {
  a.d.r(e)
}, exports.unstable_batchedUpdates = function(e, t) {
  return e(t)
}, exports.useFormState = function(e, t, n) {
  return c.H.useFormState(e, t, n)
}, exports.useFormStatus = function() {
  return c.H.useHostTransitionStatus()
}, exports.version = "19.1.0"