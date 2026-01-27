/** Chunk was on web.js **/
/** chunk id: 572047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk457417 = require("./457417.js"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx");

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
      } = await Promise.all([n.e("96758"), n.e("15646")]).then(n.bind(n, 277978));
      return t => (0, r.jsx)(e, f({}, t))
    }, {
      modalKey: l.dJ
    })
  },
  _ = () => (0, r.jsx)(a.m, {
    text: u.intl.string(u.t.RDE0Sc),
    children: (0, r.jsx)(o.K0, {
      "aria-label": u.intl.string(c.default.zgFs8C),
      icon: s.liv,
      variant: "icon-only",
      onClick: () => {
        p()
      }
    })
  })