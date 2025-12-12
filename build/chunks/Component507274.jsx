/** Chunk was on web.js **/
/** chunk id: 507274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => p,
  V: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk793903 = require("./793903.js");

function s(e, t, n) {
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
      s(e, t, n[t])
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
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = Chunk473749.createContext({
    inDialog: true
  }),
  _ = Chunk473749.forwardRef(function(e, t) {
    let {
      children: n,
      impressionType: s,
      impression: c,
      disableTrack: f,
      returnRef: _
    } = e, m = d(e, ["children", "impressionType", "impression", "disableTrack", "returnRef"]), h = i.useRef(null), g = i.useRef(null), [E, b] = i.useState(false), y = E ? g : h;
    (0, o.Tbt)(y, {
      returnRef: _
    }), i.useContext(a.Z)({
      type: s,
      name: null == c ? true : c.impressionName,
      properties: null == c ? true : c.impressionProperties
    }, {
      disableTrack: f
    }), i.useImperativeHandle(t, () => h.current);
    let O = i.useCallback(e => {
      E !== e && b(e)
    }, [E]);
    return (0, r.jsx)(p.Provider, {
      value: {
        inDialog: true,
        setFocusLockDisabled: O
      },
      children: (0, r.jsx)("div", u(l({}, m), {
        ref: h,
        role: "dialog",
        tabIndex: false,
        "aria-modal": true,
        children: (0, r.jsx)(o.y5t, {
          forceLevel: 1,
          children: (0, r.jsx)(o.JcV, {
            containerRef: h,
            children: n
          })
        })
      }))
    })
  })