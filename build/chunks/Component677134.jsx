/** Chunk was on web.js **/
/** chunk id: 677134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  contextMenuCallbackNative: () => u,
  contextMenuCallbackWeb: () => d,
  u: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk442433 = require("./442433.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c() {
  let e;
  if (null != window.getSelection) {
    var t;
    e = null == (t = window.getSelection()) ? true : t.toString()
  } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
  return null != e ? e : ""
}

function u(e) {
  let t = c(),
    a = e.target;
  if ((null == a ? true : a.tagName) === "TEXTAREA" || (null == a ? true : a.tagName) === "INPUT") {
    if ((null == a ? true : a.type) !== "checkbox") return (0, i.L3)(e, async () => {
      let {
        default: e
      } = await n.e("42312").then(n.bind(n, 216603));
      return n => (0, r.jsx)(e, l(o({}, n), {
        text: t
      }))
    }, {
      enableSpellCheck: true
    })
  } else {
    if ("none" === window.getComputedStyle(a).getPropertyValue("-webkit-user-select")) return void e.preventDefault();
    let s, c, u, d = e.target;
    for (; null != d;) "src" in d && null != d.src && (c = d.src), "href" in d && null != d.href && (s = d.href, u = d.textContent), d = null == d ? true : d.parentNode;
    if (null != c) return (0, i.L3)(e, async () => {
      let {
        default: e
      } = await n.e("47260").then(n.bind(n, 177079));
      return t => (0, r.jsx)(e, l(o({}, t), {
        src: null != c ? c : ""
      }))
    });
    if (null != s) return (0, i.L3)(e, async () => {
      let {
        default: e
      } = await n.e("5905").then(n.bind(n, 945896));
      return t => (0, r.jsx)(e, l(o({}, t), {
        href: s,
        textContent: u
      }))
    });
    if (null != t && "" !== t) return (0, i.L3)(e, async () => {
      let {
        default: e
      } = await n.e("84264").then(n.bind(n, 898811));
      return n => (0, r.jsx)(e, l(o({}, n), {
        text: t
      }))
    })
  }
  return e.preventDefault(), null
}

function d(e) {
  let t = false,
    n = e.target;
  if ((null == n ? true : n.tagName) === "INPUT" || (null == n ? true : n.tagName) === "TEXTAREA") t = true;
  else if ((null == n ? true : n.closest) != null && (null == n ? true : n.closest("[contenteditable=true]")) != null) t = true;
  else if (null != c() && "" !== c()) t = true;
  else {
    let n, r, i = e.target;
    for (; null != i;) "src" in i && null != i.src && (r = i.src), "href" in i && null != i.href && (n = i.href), i = null == i ? true : i.parentNode;
    (null != n || null != r) && (t = true)
  }
  t || e.preventDefault()
}