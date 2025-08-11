/** Chunk was on web.js **/
/** chunk id: 787025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => v,
  j: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk252618 = require("./252618.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484618 = require("./484618.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
      className: o()(e, h.oauth2PageWrapper, i),
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
    o = y(e, ["hideHeader"]);
  return (0, r.jsxs)(a.I, b(g({}, o), {
    onClose: () => {
      var e;
      return Promise.resolve(null == (e = o.onClose) ? true : e.call(o))
    },
    children: [i ? null : (0, r.jsx)(u.x, {
      title: null != (t = o.title) ? t : "",
      subtitle: o.subtitle
    }), (0, r.jsx)(l.f, {
      controls: o.input,
      children: o.children
    }), (0, r.jsx)(c.m, {
      children: o.preview
    }), (0, r.jsx)(s.G, {
      leading: o.actionBarInput,
      actions: null != (n = o.actions) ? n : [],
      actionsFullWidth: null == o.actionBarInput
    })]
  }))
}