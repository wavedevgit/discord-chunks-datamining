/** Chunk was on web.js **/
/** chunk id: 719216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk763472 = require("./763472.js"),
  Chunk49012 = require("./49012.js"),
  Chunk591759 = require("./591759.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function f(e) {
  var {
    activity: t,
    user: n,
    variant: l = "secondary",
    onAction: d
  } = e, f = u(e, ["activity", "user", "variant", "onAction"]);
  if ((null == t ? true : t.buttons) == null || t.buttons.length < 1) return null;
  async function p(e, t, n) {
    try {
      let r = await (0, o.sd)(e, t);
      if (r.button_urls.length <= n) return;
      let i = r.button_urls[n];
      if ("string" != typeof i) return;
      let l = s.Z.safeParseWithQuery(i);
      if (null == l || null == l.protocol || null == l.hostname) return;
      (0, a.q)({
        href: s.Z.format(l),
        trusted: false
      })
    } catch (e) {}
  }
  return (0, r.jsx)(r.Fragment, {
    children: t.buttons.map((e, o) => (0, r.jsx)(i.Button, c({
      text: e,
      variant: l,
      size: "sm",
      fullWidth: true,
      onClick: () => {
        null == d || d(), p(t, n.id, o)
      }
    }, f), "customButton-".concat(o)))
  })
}