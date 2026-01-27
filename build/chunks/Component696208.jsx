/** Chunk was on web.js **/
/** chunk id: 696208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => g,
  e: () => E
}), require("./30146.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk821609 = require("./821609.jsx"),
  Chunk825484 = require("./825484.jsx"),
  Chunk150934 = require("./150934.jsx"),
  Chunk460890 = require("./460890.jsx"),
  Chunk22789 = require("./22789.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    leading: t,
    actions: n = [],
    actionsFullWidth: i = false,
    leadingLayout: l = "default"
  } = e;
  if (null == t && n.length < 1) return null;
  let c = ["primary", "critical-primary", "expressive"],
    d = n.findLastIndex(e => null != e.variant && c.includes(e.variant));
  return (0, r.jsxs)("footer", {
    className: a()(u.actionBar, u.section, {
      [u.actionBarLayoutChatInput]: "chat-input" === l
    }),
    children: [null != t && (0, r.jsx)("div", {
      className: u.actionBarLeading,
      children: t
    }), (0, r.jsx)("div", {
      className: a()(u.actionBarTrailing, {
        [u.actionBarTrailingFullWidth]: i
      }),
      children: (0, r.jsx)(s.e, {
        fullWidth: i,
        children: null == n ? true : n.map((e, t) => {
          var n;
          return (0, r.jsx)(o.$, f({
            autoFocus: null != (n = e.autoFocus) ? n : d === t
          }, e), t)
        })
      })
    })]
  })
}

function E(e) {
  let {
    label: t
  } = e, n = h(e, ["label"]), {
    i18n: i
  } = (0, c.G9)();
  return (0, r.jsx)("div", {
    className: u.actionBarCheckbox,
    children: (0, r.jsx)(l.S, _(f({}, n), {
      label: null != t ? t : i.MODAL_DONT_SHOW_AGAIN,
      labelType: "secondary"
    }))
  })
}