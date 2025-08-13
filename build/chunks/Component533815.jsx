/** Chunk was on 29458 **/
/** chunk id: 533815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk15392 = require("./15392.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    game: t,
    widgetType: l,
    userId: f,
    iconSize: p = "refresh_sm",
    className: m
  } = e, g = e => {
    if (e.shiftKey) return void(0, a.$b)(l, t.applicationId);
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("68774").then(n.bind(n, 701820));
      return n => (0, r.jsx)(e, u(d({}, n), {
        userId: f,
        widgetType: l,
        game: t
      }))
    })
  };
  return (0, r.jsx)(o.ua7, {
    text: c.intl.string(c.t.HUvyDQ),
    children: e => (0, r.jsx)(o.P3F, u(d({}, e), {
      onClick: g,
      "aria-label": c.intl.string(c.t.HUvyDQ),
      role: "button",
      tabIndex: 0,
      className: i()(m, s.clickable),
      children: (0, r.jsx)(o.XHJ, {
        size: p,
        color: o.TVs.colors.STATUS_DANGER
      })
    }))
  })
}