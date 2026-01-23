/** Chunk was on web.js **/
/** chunk id: 305866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => p,
  l: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk989395 = require("./989395.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let p = Chunk64700.createContext({
    inDialog: true
  }),
  _ = Chunk64700.forwardRef(function(e, t) {
    let {
      children: n,
      impressionType: o,
      impression: c,
      disableTrack: f,
      returnRef: _
    } = e, h = d(e, ["children", "impressionType", "impression", "disableTrack", "returnRef"]), m = i.useRef(null), g = i.useRef(null), [E, y] = i.useState(false), b = E ? g : m;
    (0, a.tjt)(b, {
      returnRef: _
    }), i.useContext(s.A)({
      type: o,
      name: null == c ? true : c.impressionName,
      properties: null == c ? true : c.impressionProperties
    }, {
      disableTrack: f
    }), i.useImperativeHandle(t, () => m.current);
    let O = i.useCallback(e => {
      E !== e && y(e)
    }, [E]);
    return (0, r.jsx)(p.Provider, {
      value: {
        inDialog: true,
        setFocusLockDisabled: O
      },
      children: (0, r.jsx)("div", u(l({}, h), {
        ref: m,
        role: "dialog",
        tabIndex: false,
        "aria-modal": true,
        children: (0, r.jsx)(a.Fmo, {
          forceLevel: 1,
          children: (0, r.jsx)(a.xpW, {
            containerRef: m,
            children: n
          })
        })
      }))
    })
  })