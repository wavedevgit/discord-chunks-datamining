/** Chunk was on web.js **/
/** chunk id: 174278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479661 = require("./479661.js"),
  Chunk135102 = require("./135102.js"),
  Chunk422129 = require("./422129.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let p = () => {
    (0, Chunk952265.ZD)(async () => {
      let {
        CustomThemesShareModalWrapper: e
      } = await Promise.all([require.e("36653"), require.e("26196")]).then(require.bind(require, 433359));
      return t => (0, r.jsx)(e, _({}, t))
    }, {
      modalKey: Chunk135102.tj
    })
  },
  h = () => (0, Chunk479661.e)("client_themes_editor") ? (0, Chunk54381.jsx)(Chunk28664.u, {
    text: Chunk388032.intl.string(Chunk388032.t.RDE0Sc),
    children: (0, Chunk54381.jsx)(Chunk159691.hU, {
      "aria-label": Chunk388032.intl.string(Chunk422129.default.zgFs8C),
      icon: Chunk481060.aAc,
      variant: "icon-only",
      onClick: () => {
        p()
      }
    })
  }) : null