/** Chunk was on web.js **/
/** chunk id: 113325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => m,
  l: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk312138 = require("./312138.js"),
  Chunk315710 = require("./315710.js"),
  Chunk426333 = require("./426333.js"),
  Chunk707554 = require("./707554.jsx"),
  Chunk460890 = require("./460890.jsx");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = Chunk64700.createContext({
  firstFocusableItemProps: true
});

function g(e) {
  let {
    children: t,
    ref: n
  } = e, i = _(e, ["children", "ref"]);
  return (0, r.jsx)(m.Provider, {
    value: {
      firstFocusableItemProps: true
    },
    children: (0, r.jsx)("div", p(d({}, i), {
      ref: n,
      "data-dialog": "modal",
      role: "dialog",
      "aria-modal": true,
      children: (0, r.jsx)(l.F, {
        forceLevel: 1,
        children: (0, r.jsx)(o.xp, {
          containerRef: n,
          children: t
        })
      })
    }))
  })
}

function E(e) {
  let {
    children: t
  } = e, n = _(e, ["children"]);
  return (0, r.jsx)(a.sk, {
    children: e => (0, r.jsx)(m.Provider, {
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
  let {
    ref: t,
    returnRef: n,
    modal: a = true,
    setDialogRef: o,
    trackingProps: l
  } = e, u = _(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]), f = i.useRef(null);
  i.useImperativeHandle(t, () => f.current), i.useEffect(() => (null == o || o(f.current), () => {
    null == o || o(null)
  }), []);
  let {
    trackImpression: h
  } = (0, c.G9)();
  i.useEffect(() => {
    if (null != h && null != l) {
      var e, t;
      h({
        type: l.impressionType,
        name: null == (e = l.impression) ? true : e.impressionName,
        properties: null == (t = l.impression) ? true : t.impressionProperties
      }, {
        disableTrack: l.disableTrack
      })
    }
  }, [h, l]), (0, s.t)(f, {
    returnRef: n,
    disable: !a
  });
  let m = a ? g : E;
  return (0, r.jsx)(m, p(d({}, u), {
    ref: f
  }))
}