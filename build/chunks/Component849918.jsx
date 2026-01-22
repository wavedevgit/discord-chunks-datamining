/** Chunk was on web.js **/
/** chunk id: 849918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk915089 = require("./915089.js"),
  Chunk71532 = require("./71532.js"),
  Chunk496794 = require("./496794.jsx"),
  Chunk832208 = require("./832208.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784550 = require("./784550.js");

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
let p = [{
    fields: [{
      expirationDate: {
        name: "expirationDate",
        id: (0, Chunk915089.Ld)(),
        title: () => c.intl.string(c.t["CeBa/4"]),
        autoComplete: "cc-exp",
        placeholder: () => c.intl.string(c.t.xeEWQ6),
        pattern: "\\d*",
        getClassNameForLayout: () => u.ep,
        renderInput: e => (0, r.jsx)(o.A, f({}, e))
      }
    }.expirationDate]
  }],
  _ = function(e) {
    let {
      onCardInfoChange: t,
      className: n,
      expirationDate: a,
      error: o
    } = e, [u, d] = i.useState(false), [f, _] = i.useState(null), [h, m] = i.useState(a);
    i.useEffect(() => {
      t({
        expirationDate: h
      }, null === f)
    }, [h, t, f]);
    let g = e => {
      u || "" === e || d(true), u && "" === e || !(0, s.So)(e) ? _(c.intl.string(c.t["9/zZdl"])) : _(null), m(e)
    };
    return (0, r.jsx)(l.A, {
      className: n,
      form: p,
      values: {
        expirationDate: h
      },
      errors: null != f ? {
        expirationDate: f
      } : {},
      formError: o,
      onFieldChange: g
    })
  }