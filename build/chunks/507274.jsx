/** Chunk was on web.js **/
/** chunk id: 507274, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => h,
  V: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk597442 = require("./597442.js"),
  Chunk84735 = require("./84735.js"),
  Chunk481060 = require("./481060.js"),
  Chunk793903 = require("./793903.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = Chunk73800.createContext({
    inDialog: true
  }),
  m = Chunk73800.forwardRef(function(e, t) {
    let {
      children: n,
      impressionType: c,
      impression: d,
      disableTrack: p,
      returnRef: m
    } = e, g = _(e, ["children", "impressionType", "impression", "disableTrack", "returnRef"]), E = i.useRef(null), b = i.useRef(null), [y, O] = i.useState(false), v = y ? b : E;
    (0, o.T)(v, {
      returnRef: m
    }), i.useContext(l.Z)({
      type: c,
      name: null == d ? true : d.impressionName,
      properties: null == d ? true : d.impressionProperties
    }, {
      disableTrack: p
    }), i.useImperativeHandle(t, () => E.current);
    let I = i.useCallback(e => {
      y !== e && O(e)
    }, [y]);
    return <h.Provider value={{
        inDialog: true,
        setFocusLockDisabled: I
      }}><div{...f(u({}, g), {
        ref: E,
        role: "dialog",
        tabIndex: false,
        "aria-modal": true,
        children: (0, r.jsx)(s.y5t, {
          forceLevel: 1,
          children: (0, r.jsx)(a.J, {
            containerRef: E,
            children: n
          })
        })
      })} /></h.Provider>
  })