/** Chunk was on web.js **/
/** chunk id: 581057, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = l(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function c(e, t) {
  if ("object" !== d(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== d(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function u(e) {
  var t = c(e, "string");
  return "symbol" === d(t) ? t : String(t)
}

function d(e) {
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
require.d(exports, {
  Ay: () => h,
  DE: () => _,
  TW: () => p
});
let f = (0, require("./353640.js").v)(() => ({
    imgCache: {},
    toolsCache: {}
  })),
  p = () => {
    let e = f;
    return {
      getImgCache: t => {
        if (null != t) return e.getState().imgCache[t]
      },
      setImgCache: (t, n, r) => {
        e.setState(e => ({
          imgCache: o(i({}, e.imgCache), {
            [t]: {
              animatedUrl: n,
              staticUrl: r
            }
          })
        }))
      }
    }
  },
  _ = () => {
    let e = f;
    return {
      toolsCache: e.getState().toolsCache,
      setToolsCache: (t, n, r) => {
        e.setState(e => ({
          toolsCache: o(i({}, e.toolsCache), {
            [t]: {
              url: n,
              palette: r
            }
          })
        }))
      },
      removeToolsCache: t => {
        e.setState(e => {
          let {
            toolsCache: n
          } = e, {
            [t]: r
          } = n, i = s(n, [u(t)]);
          return {
            imgCache: e.imgCache,
            toolsCache: i
          }
        })
      }
    }
  },
  h = f