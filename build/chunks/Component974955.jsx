/** Chunk was on web.js **/
/** chunk id: 974955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => h,
  V: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk178503 = require("./178503.js"),
  Chunk246116 = require("./246116.js"),
  Chunk155127 = require("./155127.js"),
  Chunk200269 = require("./200269.jsx"),
  Chunk402453 = require("./402453.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = Chunk473749.createContext({
  firstFocusableItemProps: true
});

function g(e) {
  var {
    children: t,
    ref: n
  } = e, i = _(e, ["children", "ref"]);
  return (0, r.jsx)(h.Provider, {
    value: {
      firstFocusableItemProps: true
    },
    children: (0, r.jsx)("div", p(d({}, i), {
      ref: n,
      "data-dialog": "modal",
      role: "dialog",
      "aria-modal": true,
      children: (0, r.jsx)(l.y, {
        forceLevel: 1,
        children: (0, r.jsx)(s.Jc, {
          containerRef: n,
          children: t
        })
      })
    }))
  })
}

function E(e) {
  var {
    children: t
  } = e, n = _(e, ["children"]);
  return (0, r.jsx)(o.Wd, {
    children: e => (0, r.jsx)(h.Provider, {
      value: {
        firstFocusableItemProps: e
      },
      children: (0, r.jsx)("div", p(d({}, n), {
        "data-dialog": "non-modal",
        role: "dialog",
        children: t
      }))
    })
  })
}

function b(e) {
  var {
    ref: t,
    returnRef: n,
    modal: o = true,
    setDialogRef: s,
    trackingProps: l
  } = e, u = _(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]);
  let f = i.useRef(null);
  i.useImperativeHandle(t, () => f.current), i.useEffect(() => (null == s || s(f.current), () => {
    null == s || s(null)
  }), []);
  let {
    trackImpression: m
  } = (0, c.ZF)();
  i.useEffect(() => {
    if (null != m && null != l) {
      var e, t;
      m({
        type: l.impressionType,
        name: null == (e = l.impression) ? true : e.impressionName,
        properties: null == (t = l.impression) ? true : t.impressionProperties
      }, {
        disableTrack: l.disableTrack
      })
    }
  }, [m, l]), (0, a.T)(f, {
    returnRef: n,
    disable: !o
  });
  let h = o ? g : E;
  return (0, r.jsx)(h, p(d({}, u), {
    ref: f
  }))
}