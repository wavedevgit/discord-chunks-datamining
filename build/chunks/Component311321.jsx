/** Chunk was on 33563 **/
/** chunk id: 311321, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk638329 = require("./638329.js");

function a(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function c(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let d = {
  size: "md",
  color: Chunk397927.LU0.colors.INTERACTIVE_TEXT_DEFAULT
};

function p(e) {
  let {
    subscriptions: n,
    color: t = "text-default"
  } = e, p = n.some(e => (0, r.Lt)(e.skuFlags, s.d68.APPLICATION_GUILD_SUBSCRIPTION));
  return (0, l.jsx)(i.Heading, {
    variant: "heading-lg/semibold",
    color: t,
    className: o.R,
    children: p ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.RR9, c(a({}, d), {
        color: "currentColor"
      })), u.intl.string(u.t.XIhSoj)]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.nys, c(a({}, d), {
        color: "currentColor"
      })), u.intl.string(u.t.dxfZph)]
    })
  })
}