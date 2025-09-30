/** Chunk was on web.js **/
/** chunk id: 787025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => v,
  j: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk252618 = require("./252618.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk697257 = require("./697257.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    children: t,
    removeChildWrapper: n,
    wrapperClassName: i
  } = e;
  return (0, f.Tt)({
    location: p.intl.string(p.t["3S249/"])
  }), (0, r.jsx)(d.f6W, {
    theme: _.BRd.DARK,
    children: e => (0, r.jsx)("div", {
      className: a()(e, h.oauth2PageWrapper, i),
      children: true === n ? t : (0, r.jsx)("div", {
        className: h.oauth2PageContent,
        children: t
      })
    })
  })
}

function I(e) {
  var t, n, {
      hideHeader: i
    } = e,
    a = y(e, ["hideHeader"]);
  return (0, r.jsxs)(o.IX, b(g({}, a), {
    onClose: () => {
      var e;
      return Promise.resolve(null == (e = a.onClose) ? true : e.call(a))
    },
    children: [i ? null : (0, r.jsx)(u.x, {
      title: null != (t = a.title) ? t : "",
      subtitle: a.subtitle
    }), (0, r.jsx)(l.f, {
      controls: a.input,
      children: a.children
    }), (0, r.jsx)(c.m, {
      children: a.preview
    }), (0, r.jsx)(s.G, {
      leading: a.actionBarInput,
      actions: null != (n = a.actions) ? n : [],
      actionsFullWidth: null == a.actionBarInput
    })]
  }))
}