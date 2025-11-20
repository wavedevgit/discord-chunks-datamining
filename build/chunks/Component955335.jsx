/** Chunk was on 77803 **/
/** chunk id: 955335, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  r: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk703824 = require("./703824.js");

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
  color: Chunk481060.TVs.colors.INTERACTIVE_NORMAL
};

function p(e) {
  let {
    subscriptions: n,
    color: t = "text-default"
  } = e, p = n.some(e => (0, i.yE)(e.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
  return (0, r.jsx)(l.Heading, {
    variant: "heading-lg/semibold",
    color: t,
    className: u.heading,
    children: p ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.QTo, c(a({}, d), {
        color: "currentColor"
      })), o.intl.string(o.t.XIhSoj)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.tBG, c(a({}, d), {
        color: "currentColor"
      })), o.intl.string(o.t.dxfZph)]
    })
  })
}