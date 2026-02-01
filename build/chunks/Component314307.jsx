/** Chunk was on 61344 **/
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
  } = e, r = n === o.rbe.GUILD_VOICE || n === o.rbe.GUILD_STAGE_VOICE ? a.oyn : t ? a.I$d : a.N$i;
  return (0, l.jsx)("div", {
    className: i()(c.qk, c.tP),
    children: (0, l.jsx)(r, {
      color: a.LU0.colors.WHITE,
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
  return (0, l.jsx)(a.Heading, {
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
  return (0, l.jsx)(a.Text, {
    variant: "text-md/normal",
    color: "none",
    className: i()(c.h_, n),
    children: t
  })
}
let p = function(e) {
  var t, n;
  let {
    className: r,
    channelId: a,
    children: o
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["className", "channelId", "children"]);
  return (0, l.jsx)("div", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({
    className: i()(r, c.kL),
    id: (0, s.j)(a, a)
  }, u), n = n = {
    children: o
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}