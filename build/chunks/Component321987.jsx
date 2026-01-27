/** Chunk was on web.js **/
/** chunk id: 321987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => b,
  f: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk726249 = require("./726249.js"),
  Chunk540999 = require("./540999.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk105199 = require("./105199.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    children: t,
    removeChildWrapper: n,
    wrapperClassName: i
  } = e;
  (0, c.HU)({
    location: f.intl.string(f.t["3S2494"])
  });
  let o = (0, s.bG)([u.A], () => u.A.isDeveloper) ? "92px" : true;
  return (0, r.jsx)(l.NPJ, {
    theme: d.NJ8.DARK,
    children: e => (0, r.jsx)("div", {
      className: a()(e, p.Y, i),
      style: {
        marginBottom: o
      },
      children: true === n ? t : (0, r.jsx)("div", {
        className: p.Q,
        children: t
      })
    })
  })
}

function O(e) {
  var t, n;
  let {
    hideHeader: i
  } = e, a = E(e, ["hideHeader"]);
  return (0, r.jsxs)(o.dWK, g(h({}, a), {
    onClose: () => {
      var e;
      return Promise.resolve(null == (e = a.onClose) ? true : e.call(a))
    },
    children: [i ? null : (0, r.jsx)(o.rQ0, {
      title: null != (t = a.title) ? t : "",
      subtitle: a.subtitle
    }), (0, r.jsx)(o.cwr, {
      controls: a.input,
      children: a.children
    }), (0, r.jsx)(o.jlY, {
      children: a.preview
    }), (0, r.jsx)(o.H7u, {
      leading: a.actionBarInput,
      actions: null != (n = a.actions) ? n : [],
      actionsFullWidth: null == a.actionBarInput
    })]
  }))
}