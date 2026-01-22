/** Chunk was on 83247 **/
/** chunk id: 608391, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => i
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk285899 = require("./285899.jsx"),
  Chunk665171 = require("./665171.js"),
  Chunk225180 = require("./225180.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk669979 = require("./669979.js");

function i(e) {
  let {
    guildId: t,
    gameInstance: a
  } = e, i = function(e, t) {
    if (null == e) return {};
    var a, r, n, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, a = Reflect.ownKeys(e); n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var a, r, n = {},
          c = Object.getOwnPropertyNames(e);
        for (r = 0; r < c.length; r++) a = c[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
    return c
  }(e, ["guildId", "gameInstance"]), [s, u] = n.useState(false), [p, y] = n.useState(true), g = (0, l.A)(a.gameId, "cover");
  return (0, r.jsx)(c.O, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = a[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    size: "sm",
    title: a.name,
    body: (0, r.jsx)("div", {
      className: d.Z,
      children: (0, r.jsx)("img", {
        alt: "",
        src: null != g ? g : "",
        className: d.S
      })
    }),
    warningText: f.intl.string(b.default.ukbS3E),
    acknowledgementText: f.intl.string(b.default.xjRtF9),
    isLoading: s,
    error: p,
    onDeactivate: () => {
      y(true), u(true), (0, o.e_)(t, a.planId, a.entitlementId).then(() => {
        i.onClose()
      }).catch(e => {
        var t;
        y(null != (t = e.body.message) ? t : e.message)
      }).finally(() => {
        u(false)
      })
    }
  }, i))
}