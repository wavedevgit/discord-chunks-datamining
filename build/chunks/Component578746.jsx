/** Chunk was on 86142 **/
/** chunk id: 578746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js");

function l(e) {
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

function a(e) {
  let {
    value: t,
    onChange: n,
    note: i,
    title: l,
    disabled: a
  } = e;
  return (0, r.jsx)(s.dOG, {
    checked: t,
    onChange: n,
    disabled: a,
    label: l,
    description: i
  })
}

function o(e) {
  let {
    tooltipText: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.getOwnPropertyNames(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    return s
  }(e, ["tooltipText"]);
  return (0, r.jsx)(i.m_, {
    text: t,
    asContainer: true,
    align: "right",
    caretConfig: {
      position: "bottom",
      align: "end"
    },
    children: (0, r.jsx)(a, l({}, n))
  })
}

function c(e) {
  return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(o, l({}, e)) : (0, r.jsx)(a, l({}, e))
}