/** Chunk was on web.js **/
/** chunk id: 145575, original params: e,t (module,exports,re quire) **/
"use strict";
var n = "function" == typeof Symbol && Symbol.for,
  r = n ? Symbol.for("react.element") : 60103,
  i = n ? Symbol.for("react.portal") : 60106,
  a = n ? Symbol.for("react.fragment") : 60107,
  o = n ? Symbol.for("react.strict_mode") : 60108,
  s = n ? Symbol.for("react.profiler") : 60114,
  l = n ? Symbol.for("react.provider") : 60109,
  c = n ? Symbol.for("react.context") : 60110,
  u = n ? Symbol.for("react.async_mode") : 60111,
  d = n ? Symbol.for("react.concurrent_mode") : 60111,
  f = n ? Symbol.for("react.forward_ref") : 60112,
  p = n ? Symbol.for("react.suspense") : 60113,
  _ = n ? Symbol.for("react.suspense_list") : 60120,
  h = n ? Symbol.for("react.memo") : 60115,
  m = n ? Symbol.for("react.lazy") : 60116,
  g = n ? Symbol.for("react.block") : 60121,
  E = n ? Symbol.for("react.fundamental") : 60117,
  y = n ? Symbol.for("react.responder") : 60118,
  b = n ? Symbol.for("react.scope") : 60119;

function O(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case r:
        switch (e = e.type) {
          case u:
          case d:
          case a:
          case s:
          case o:
          case p:
            return e;
          default:
            switch (e = e && e.$$typeof) {
              case c:
              case f:
              case m:
              case h:
              case l:
                return e;
              default:
                return t
            }
        }
      case i:
        return t
    }
  }
}

function v(e) {
  return O(e) === d
}
exports.AsyncMode = u, exports.ConcurrentMode = d, exports.ContextConsumer = c, exports.ContextProvider = l, exports.Element = r, exports.ForwardRef = f, exports.Fragment = a, exports.Lazy = m, exports.Memo = h, exports.Portal = i, exports.Profiler = s, exports.StrictMode = o, exports.Suspense = p, exports.isAsyncMode = function(e) {
  return v(e) || O(e) === u
}, exports.isConcurrentMode = v, exports.isContextConsumer = function(e) {
  return O(e) === c
}, exports.isContextProvider = function(e) {
  return O(e) === l
}, exports.isElement = function(e) {
  return "object" == typeof e && null !== e && e.$$typeof === r
}, exports.isForwardRef = function(e) {
  return O(e) === f
}, exports.isFragment = function(e) {
  return O(e) === a
}, exports.isLazy = function(e) {
  return O(e) === m
}, exports.isMemo = function(e) {
  return O(e) === h
}, exports.isPortal = function(e) {
  return O(e) === i
}, exports.isProfiler = function(e) {
  return O(e) === s
}, exports.isStrictMode = function(e) {
  return O(e) === o
}, exports.isSuspense = function(e) {
  return O(e) === p
}, exports.isValidElementType = function(e) {
  return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === o || e === p || e === _ || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === E || e.$$typeof === y || e.$$typeof === b || e.$$typeof === g)
}, exports.typeOf = O