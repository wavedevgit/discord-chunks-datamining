/** Chunk was on web.js **/
/** chunk id: 174278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk135102 = require("./135102.js"),
  Chunk831989 = require("./831989.js"),
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
let p = () => {
    (0, i.openModalLazy)(async () => {
      let {
        CustomThemesShareModalWrapper: e
      } = await Promise.all([n.e("36653"), n.e("58973")]).then(n.bind(n, 433359));
      return t => (0, r.jsx)(e, f({}, t))
    }, {
      modalKey: l.tj
    })
  },
  _ = () => (0, r.jsx)(a.u, {
    text: u.intl.string(u.t.RDE0Sc),
    children: (0, r.jsx)(o.hU, {
      "aria-label": u.intl.string(c.default.zgFs8C),
      icon: s.aAc,
      variant: "icon-only",
      onClick: () => {
        p()
      }
    })
  })