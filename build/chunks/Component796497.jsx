/** Chunk was on web.js **/
/** chunk id: 796497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f() {
  let e = c.intl.string(l.default["8SLtqb"]),
    t = () => {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("43887"), n.e("84268")]).then(n.bind(n, 320742));
        return t => (0, r.jsx)(e, d({}, t))
      }), a.default.track(o.HAw.FAMILY_CENTER_ACTION, {
        action: s.qb.ShowQRCodeModal
      })
    };
  return (0, r.jsx)(i.Button, {
    icon: i.yVk,
    variant: "primary",
    text: e,
    onClick: t
  })
}