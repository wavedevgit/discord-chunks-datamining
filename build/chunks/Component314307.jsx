/** Chunk was on 1113 **/
/** chunk id: 314307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => p,
  WK: () => u,
  cr: () => d,
  j1: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk375901 = require("./375901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk423059 = require("./423059.js");

function u(e) {
  let {
    locked: t = false,
    channelType: n
  } = e, l = n === o.rbe.GUILD_VOICE || n === o.rbe.GUILD_STAGE_VOICE ? s.oyn : t ? s.I$d : s.N$i;
  return (0, r.jsx)("div", {
    className: i()(c.qk, c.tP),
    children: (0, r.jsx)(l, {
      color: s.LU0.colors.WHITE,
      size: "custom",
      width: 42,
      height: 42
    })
  })
}

function d(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Heading, {
    "aria-hidden": "true",
    className: i()(n, c.wx),
    variant: "heading-xxl/extrabold",
    children: t
  })
}

function h(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-md/normal",
    color: "none",
    className: i()(c.h_, n),
    children: t
  })
}
let p = function(e) {
  var t, n;
  let {
    className: l,
    channelId: s,
    children: o
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["className", "channelId", "children"]);
  return (0, r.jsx)("div", (t = function(e) {
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
  }({
    className: i()(l, c.kL),
    id: (0, a.j)(s, s)
  }, u), n = n = {
    children: o
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}