/** Chunk was on 73726 **/
/** chunk id: 967128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Kq: () => u,
  Ot: () => d,
  ZP: () => f,
  jz: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk534091 = require("./534091.js"),
  Chunk981631 = require("./981631.js"),
  Chunk594445 = require("./594445.js");

function u(e) {
  let {
    locked: t = false,
    channelType: n
  } = e, i = n === s.d4z.GUILD_VOICE || n === s.d4z.GUILD_STAGE_VOICE ? a.kBi : t ? a.W4G : a.VL1;
  return (0, r.jsx)("div", {
    className: l()(c.emptyChannelIcon, c.emptyChannelIconComponent),
    children: (0, r.jsx)(i, {
      color: a.TVs.colors.WHITE,
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
  return (0, r.jsx)(a.Heading, {
    "aria-hidden": "true",
    className: l()(n, c.header),
    variant: "heading-xxl/extrabold",
    children: t
  })
}

function p(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)(a.Text, {
    variant: "text-md/normal",
    color: "none",
    className: l()(c.description, n),
    children: t
  })
}
let f = function(e) {
  var t, n, {
      className: i,
      channelId: a,
      children: s
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
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
    className: l()(i, c.container),
    id: (0, o.p)(a, a)
  }, u), n = n = {
    children: s
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