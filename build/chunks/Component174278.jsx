/** Chunk was on web.js **/
/** chunk id: 174278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479661 = require("./479661.js"),
  Chunk135102 = require("./135102.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx");

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

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = () => {
    (0, Chunk952265.ZD)(async () => {
      let {
        CustomThemesShareModalWrapper: e
      } = await Promise.all([require.e("47051"), require.e("26196")]).then(require.bind(require, 433359));
      return t => (0, r.jsx)(e, f({}, t))
    }, {
      modalKey: Chunk135102.tj
    })
  },
  m = () => (0, Chunk479661.e)("client_themes_editor") ? (0, Chunk951288.jsx)(Chunk481060.ua7, {
    text: Chunk388032.intl.string(Chunk388032.t.RDE0SU),
    children: e => (0, r.jsx)(a.hU, p(f({}, e), {
      "aria-label": u.intl.string(c.default.zgFs8P),
      icon: o.aAc,
      variant: "icon-only",
      onClick: () => {
        h()
      }
    }))
  }) : null