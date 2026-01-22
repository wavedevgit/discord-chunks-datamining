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
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function c(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
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
  } = e, p = n.some(e => (0, l.Lt)(e.skuFlags, s.d68.APPLICATION_GUILD_SUBSCRIPTION));
  return (0, r.jsx)(i.Heading, {
    variant: "heading-lg/semibold",
    color: t,
    className: u.R,
    children: p ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.RR9, c(a({}, d), {
        color: "currentColor"
      })), o.intl.string(o.t.XIhSoj)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.nys, c(a({}, d), {
        color: "currentColor"
      })), o.intl.string(o.t.dxfZph)]
    })
  })
}